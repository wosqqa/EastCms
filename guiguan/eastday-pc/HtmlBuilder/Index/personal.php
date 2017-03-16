<?php
//首页
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use \Io\Redis;

if(!file_exists(__WWW_ROOT.'json/index')){
    mkdir(__WWW_ROOT.'json/index',0777,true);
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
//截取前12个
$data = array_slice($ret['data'] ,0 ,10);
$arr = [];
foreach((array)$data as $val ){
    $temp['topic'] = $val['topic'];
    $temp['url'] =Core::config('cdn_path').$val['uniquekey'].".html";
    $temp['img'] = str_replace("http://","//",$val['lmini'][0]['imgsrc']);
    $temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,21,'utf8');
    $arr[] = $temp;
}

$redis = Redis::getInstance();
$redis->set("eastdaypc:index:personal",json_encode($arr));

$out_put_path = Core::config('index_json')['personal_json'];
$ret = file_put_contents($out_put_path,json_encode($arr));
_upload($out_put_path, Core::config('cdn_prefix')['index_json']);