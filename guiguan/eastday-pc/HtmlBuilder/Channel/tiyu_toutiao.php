<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/6/3
 * Time: 14:53
 */

require __DIR__ . "/../../Common/common.php";
use  Lib\Core;
use Io\Log;
use Io\Redis;

$data = [];

//获取top20
$url = Core::config('top20');
$params = ['ispc' => 0, 'type' => '0006'];
$retArr = getJsonResponse($url, $params);
$domain = __SDK_ENV == 'test' ? "http://testmini.eastday.com":"http://mini.eastday.com";
if(!$retArr){
	Log::error('tiyu_toutiao | get top20 for tiyu failed, get type data instead');
}else{
	$retArrData = $retArr['data'];
	foreach ($retArrData as $k=>$v){
		$data[] = [
			"topic" => $v["topic"],
			"url" => $domain."/a/".$v["uniquekey"].".html",
			"img21" => $v['llunb'][0]['imgsrc'],
			"img43" => $v['lmini'][0]['imgsrc'],
			"idx" => $k+1,
			"uniquekey"=>$v["uniquekey"]
		];
	}
}

$uniquekeys = array_column($data,'uniquekey');

if(count($data) < 22){
	//获取type接口内容
	$type_url = Core::config('type');
	$params = ['ispc' => 0, 'typeid' => '0006', 'limitnum'=>50];
	$retArr = getJsonResponse($type_url, $params);
	if(!$retArr){
		Log::error('tiyu_toutiao | get type data failed');
	}elseif(!$retArr['data']){
		Log::error('tiyu_toutiao | type data is empty');
	}else{
		$type_data = $retArr['data'];
		foreach ($type_data as $k=>$v){
			$data_count = count($data);
			if(!in_array($v['uniquekey'], $uniquekeys)){
				$data[] = [
					"topic" => $v["topic"],
					"url" => $domain."/a/".$v["uniquekey"].".html",
					"img21" => $v['llunb'][0]['imgsrc'],
					"img43" => $v['lmini'][0]['imgsrc'],
					"idx" => $data_count+$k+1,
					"uniquekey"=>$v["uniquekey"]
				];
			}
			if($data_count >= 22) break;
		}
	}
}

if(count($data) < 22){
	Log::error('tiyu_toutiao | data is not enough , exit');
}else{
	Redis::getInstance()->set('eastdaypc:tiyu:toutiao',json_encode(array_slice($data, 0, 22)));
}




