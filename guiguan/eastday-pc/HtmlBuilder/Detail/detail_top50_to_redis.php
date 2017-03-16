<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/1/27
 * Time: 9:58
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\Redis;

if(!file_exists(__WWW_ROOT.'json/detail')){
	mkdir(__WWW_ROOT.'json/detail',0777,true);
}
$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50JsonObject = getJsonResponse($top50Url,$params);
if (!$top50JsonObject) {
	Log::error('fail to get top50 data');
	exit();
}
if (!$top50JsonObject['data']) {
	Log::error('the data array is empty,exit');
	exit();
}

if(count($top50JsonObject['data']) < 50){
	Log::error('the data array is less than 50,exit');
	exit();
}

$top50Array = [];
$top50Uks = [];
if($top50JsonObject['data']){
	foreach($top50JsonObject['data'] as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html';
		$data['img'] = $item['lmini'][0]['imgsrc'];
		$top50Array[] = $data;
		$top50Uks[] = $item['uniquekey'];
	}
}
Log::info("get top50 success, start to set to redis");
$redis = Redis::getInstance();
$result = $redis->set('eastdaypc:detail:top50',json_encode($top50Array));
if(!$result){
	Log::error("set to redis failed");
}else{
	Log::info("set to redis success");
}

//获取小编精选 alltop50
/*$url = Core::config('personal');
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
$data = $ret['data'];
$i = 0;
$arr = [];
foreach((array)$data as $val ){
	if(in_array($val['uniquekey'],$top50Uks)){
		Log::info("the uk is repeated, pass");
		continue;
	}
	$temp['topic'] = $val['topic'];
	$temp['url'] =Core::config('cdn_path').$val['uniquekey'].".html";
	$temp['img'] = $val['lmini'][0]['imgsrc'];
	$temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,21,'utf8');
	$arr[] = $temp;
	$i++;
	if($i == 5) break;
}
$redis = Redis::getInstance();
Log::info("get xbjx success, start to set to redis");
$result = $redis->set("eastdaypc:detail:xbjx",json_encode($arr));
if(!$result){
	Log::error("set to redis failed");
}else{
	Log::info("set to redis success");
}*/