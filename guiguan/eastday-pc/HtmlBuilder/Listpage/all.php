<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/26
 * Time: 14:52
 */
require __DIR__ . "/../../Common/common.php";
use Model\Eastday\EastdaypcNews;
use Io\HtmlBuilder;
use Lib\Core;
use Io\Log;


$channel = count($_SERVER['argv']) > 1 ? $_SERVER['argv'][1] : '';
$dateParam = count($_SERVER['argv']) > 2 ? $_SERVER['argv'][2] : '';

$dateStr = $dateParam == '' ? date('Ymd',time()) : $dateParam;
$hasDate = $dateParam == '' ? '' : $dateParam;

$num_per_page = 100;
$total_num = EastdaypcNews::get_instance()->getCountByYmd($dateStr);
if(!$total_num){
	exit();
}
$total_page = ($total_num % $num_per_page == 0) ? intval(($total_num / $num_per_page)) : intval(($total_num / $num_per_page) + 1);
for($i=0;$i<$total_page;$i++){
    $result = EastdaypcNews::get_instance()->getNewsByYmd($dateStr, $i * $num_per_page, $num_per_page);
	if(!$result || !is_array($result)){
		Log::error("fail to get news");
		exit();
	}
	$htmlBuilder = HtmlBuilder::get_instance();
	$map = Core::config('type_map');
	$htmlBuilder->assign('data',$result);
	$htmlBuilder->assign('total_rows',$total_num);
	$htmlBuilder->assign('now_page',$i+1);
	$htmlBuilder->assign('type','all');
	$htmlBuilder->assign('minDate', "20160601");
	$htmlBuilder->assign('list_rows',$num_per_page);
	$htmlBuilder->assign('channel',"all");
	$htmlBuilder->assign('hasDate',$hasDate);

	$out_put_dir = Core::config('listpage_path');
	if($dateParam == ''){
		$out_put_path = $i == 0 ? $out_put_dir.'all.html' : $out_put_dir.'all-'.($i+1).'.html';
	}else{
		$out_put_path = $i == 0 ? $out_put_dir.'all-'.$dateParam.'.html' : $out_put_dir.'all-'.$dateParam.'-'.($i+1).'.html';
	}
	$build_result = $htmlBuilder->build_html(__TEMPLATE_DIR.'listpage.php', $out_put_path);
	//上传cdn
	$prefix = Core::config('cdn_prefix')['listpage'];
	_upload($out_put_path, $prefix);
}