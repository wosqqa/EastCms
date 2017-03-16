<?php
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;

$htmlBuilder = HtmlBuilder::get_instance();
$out_put_path = \Lib\Core::config('topic_path');
if(!file_exists(__WWW_ROOT.'topic')){
	mkdir(__WWW_ROOT.'topic',0777,true);
}

$url = Core::config('personal');
$params = ['ispc'=>0];
$ret = getJsonResponse($url,$params);
if (!$ret) {
	Log::error('fail to get personal data');
	exit();
}
if (!$ret['data'] || count($ret['data']) < 10) {
	Log::error('the data array is empty or less than 12,exit');
	exit();
}
//截取100个
$data = array_slice($ret['data'] ,0 ,100);
$arr = [];
foreach((array)$data as $val ){
	$temp['topic'] = $val['topic'];
	$temp['url'] =Core::config('cdn_path').$val['uniquekey'].".html";
	$temp['img'] = $val['lmini'][0]['imgsrc'];
	$temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,21,'utf8');
	$arr[] = $temp;
}
$htmlBuilder->assign('hot_arr',array_slice($arr,0,70));
$htmlBuilder->assign('tArr',array_slice($arr,70,30));
$htmlBuilder->build_html(__TEMPLATE_DIR.'/topic.php',$out_put_path);

//上传cdn
$prefix = Core::config('cdn_prefix')['topic'];
_upload($out_put_path, $prefix);