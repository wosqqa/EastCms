<?php
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;

if(!file_exists(__WWW_ROOT.'listpage')){
	mkdir(__WWW_ROOT.'listpage',0777,true);
}

$channel = count($_SERVER['argv']) > 1 ? $_SERVER['argv'][1] : '';
$dateParam = count($_SERVER['argv']) > 2 ? $_SERVER['argv'][2] : '';
//第一次请求
$num_per_page = 100;  //每页条数
$dateStr = $dateParam == '' ? date('Ymd',time()) : $dateParam;
$hasDate = $dateParam == '' ? '' : $dateParam;
$listpage_url = Core::config("listpage_url");
$number_map = Core::config("channel_map");
$listpage_params = ['rowkey'=>0,'typeid'=>$number_map[$channel],'maxNumber'=>$num_per_page,'dateStr'=>$dateStr];
Log::info('request list page with params'.json_encode($listpage_params));
$ret = getJsonResponse($listpage_url,$listpage_params);
if(!$ret){
	Log::error('[Listpage]request list page failed, params:'.json_encode($listpage_params));
	exit();
}
if($ret['code'] != '200'){
	Log::error('[Listpage]request list page failed, errcode：'.$ret['code'].', params:'.json_encode($listpage_params));
	exit();
}
Log::info('[Listpage]request list page success, total_num:'.$ret['total_number']);
$total_num = $ret['total_number'];
$total_page = ($total_num % $num_per_page == 0) ? intval(($total_num / $num_per_page)) : intval(($total_num / $num_per_page) + 1);
$start_row_key = 0;
for($i=0;$i<$total_page;$i++){
	$arr = build_listpage($channel,$dateParam,$start_row_key,$total_num,$num_per_page,$i,$hasDate);
	$start_row_key = $arr['last_rowkey'];
}

function build_listpage($channel, $dateParam, $rowkey,$total_num,$num_per_page,$i,$hasDate){
	$dateStr = $dateParam == '' ? date('Ymd',time()) : $dateParam;
	$listpage_url = Core::config("listpage_url");
	$map = Core::config('type_map');
	$number_map = Core::config("channel_map");
	$listpage_params = ['rowkey'=>$rowkey,'typeid'=>$number_map[$channel],'maxNumber'=>$num_per_page,'dateStr'=>$dateStr];
	$ret = getJsonResponse($listpage_url,$listpage_params);
	Log::info('request list page with params'.json_encode($listpage_params));
	if($ret['code'] != '200'){
		Log::error('[Listpage]request list page failed, errcode：'.$ret['code']);
		exit();
	}
	$data = $ret['data'];
	$last_rowkey = $data[count($data)-1]['rowkey'];
	Log::info('[Listpage]request list page success, total_num:'.$ret['total_number']);

	$htmlBuilder = HtmlBuilder::get_instance();
	$out_put_dir = Core::config('listpage_path');
	if($dateParam == ''){
		$out_put_path = $i == 0 ? $out_put_dir.$map[$channel][1].'.html' : $out_put_dir.$map[$channel][1].'-'.($i+1).'.html';
	}else{
		$out_put_path = $i == 0 ? $out_put_dir.$map[$channel][1].'-'.$dateParam.'.html' : $out_put_dir.$map[$channel][1].'-'.$dateParam.'-'.($i+1).'.html';
	}

	$htmlBuilder->assign('data',$data);
	$htmlBuilder->assign('total_rows',$total_num);
	$htmlBuilder->assign('now_page',$i+1);
	$htmlBuilder->assign('type',$map[$channel][1]);
	$htmlBuilder->assign('zhongwen_type',$map[$channel][0]);
	$htmlBuilder->assign('minDate',$map[$channel][2]);
	$htmlBuilder->assign('list_rows',$num_per_page);
	$htmlBuilder->assign('channel',$channel);
	$htmlBuilder->assign('hasDate',$hasDate);
	Log::info('[Listpage] start build '.$out_put_path.', params :{total_rows:'.$total_num.' now_page:'.($i+1).' list_rows:'.$num_per_page.' type:'.$map[$channel][1].'}');
	$build_result = $htmlBuilder->build_html(__TEMPLATE_DIR.'listpage.php',$out_put_path);
	Log::info('[Listpage] complete build '.$out_put_path.' result: '.$build_result);

	//上传cdn
	$prefix = Core::config('cdn_prefix')['listpage'];
	_upload($out_put_path, $prefix);
	return ["result"=>$build_result, "last_rowkey"=>$last_rowkey];
}