<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/4/7
 * Time: 13:54
 */

require __DIR__ . "/../Common/common.php";
use Io\HtmlBuilder;
use Io\Log;
use Lib\Core;


$type_arr = [
	'0011' => '国际',
	'0010' => '国内',
	'0002' => '娱乐',
	'0003' => '社会',
	'0006' => '体育',
	'0008' => '科技',
	'0005' => '军事',
	'0004' => '财经',
	'0013' => '教育',
	'0012' => '汽车',
	'0015' => '女性'
];


$allData = array();

//获取top20
$url = Core::config('top20');
foreach($type_arr as $k => $v) {
	$params = ['ispc' => 0, 'type' => $k];
	$retArr = getJsonResponse($url, $params);
	if(!$retArr){
		Log::error(sprintf('get top20 for %s failed',$v));
		return;
	}
	$retArrData = $retArr['data'];
	$allData = array_merge((array)$retArrData,$allData);
}

if(count($allData) > 500){
	$allData = array_slice($allData,0,500);
}

$data = [];
$i = 0;
foreach($allData as $item){
	$d = [];
	if(mb_strlen($item['topic']) < 14 || mb_strlen($item['topic']) > 24){
		continue;
	}
	$d['id'] = $item['uniquekey'];
	$d['topic'] = $item['topic'];
	$d['url'] = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html?sgny';
	$d['img'] = $item['lmini'][0]['imgsrc'];
	$d['time'] = date("Y-m-d H:i:s",$item['cts'] / 1000);
	$d['zw'] = str_replace("&nbsp;","",$item['zw']);
	$d['source'] = $item['source'];
	if($i % 2 == 0){
		$d['type'] = 0;
	}else{
		$d['type'] = 1;
	}
	$rowkey = $item['rowkey'];
	list($type_num,$short_rowkey) = explode('_',$rowkey);
	if(array_key_exists($type_num, $type_arr)){
		$d['category'] = $type_arr[$type_num];
		$data[] = $d;
	}
	$i++;
}
$htmlBuilder = HtmlBuilder::get_instance();
$htmlBuilder->assign('data',$data);
$out_put_path  = __WWW_ROOT."newslist.xml";
$ret  = $htmlBuilder->build_html(__TEMPLATE_DIR.'top_50_xml.php',$out_put_path);
_upload($out_put_path, 'api/');