<?php
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;
use Model\EastdayAdmin\ImgNews;

$htmlBuilder = HtmlBuilder::get_instance();
$out_put_path = \Lib\Core::config('topic_path2');
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
if (!$ret['data'] || count($ret['data']) < 20) {
    Log::error('the data array is empty or less than 20,exit');
    exit();
}
//获取带微看点的top50里面的20条
$data = array_slice($ret['data'] ,0 ,20);
$arr = [];
foreach((array)$data as $val ){
    $temp['topic'] = $val['topic'];
    $temp['url'] = 'http://mini.eastday.com'.Core::config('cdn_path').$val['uniquekey'].".html";
    $temp['img'] = $val['lmini'][0]['imgsrc'];
    $temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,21,'utf8');
	$temp['is_imgnews'] = 0;
    $arr[] = $temp;
}
//获取（含缩略图的）图片新闻10条
$imgnews = ImgNews::get_instance();
$result = $imgnews->getList();
foreach ($result as $val){
	$temp['topic'] = $val['topic'];
	$temp['url'] = 'http://miniimg.eastday.com/detail/'.$val['uniquekey'].".html";
	$temp['img'] =  $val['img43_url'];
	$temp['desc'] = $val['topic'];
	$temp['is_imgnews'] = 1;
	$arr[] = $temp;
}
shuffle($arr);

$htmlBuilder->assign("data",$arr);
$htmlBuilder->build_html(__TEMPLATE_DIR.'/topic2.php',$out_put_path);

//上传cdn
$prefix = Core::config('cdn_prefix')['topic'];
_upload($out_put_path, $prefix);