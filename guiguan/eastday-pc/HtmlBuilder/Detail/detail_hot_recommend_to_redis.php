<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/1/27
 * Time: 10:05
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\Redis;

$channel = count($_SERVER['argv']) > 1 ? $_SERVER['argv'][1] : '';
getHotRecommendJson($channel);
//热门推荐
function getHotRecommendJson($type=''){
	Log::info("[Detail] start to set hot_recommend to redis, type = " . $type);
	$channel_map = Core::config('channel_map');
	if ($type) {
		//当有传入type时，只生成对应频道的热门推荐
		$typenum = $channel_map[$type];
		parseRetArr($type,$typenum);
	} else {
		foreach ($channel_map as $k => $v) {
			//当没有传入时 生成所有频道的热门推荐
			parseRetArr($k,$v);
		}
	}
	Log::info("[Detail] complete set hot_recommend to redis");
}

function parseRetArr($type,$typenum){
	Log::info('request top 20 url, get hot_recommend for '.$type);
	$url = Core::config('top20');
	if (in_array($type,Core::config('not_link_channel'))){
		$url = Core::config('top50');
	}
	$params = ['ispc' => 0, 'type' => $typenum];
	$retArr = getJsonResponse($url, $params);
	if(!$retArr){
		Log::error(sprintf('get hot_recommend for %s failed',$type));
		return;
	}
	if(!$retArr['data']){
		Log::error('data is empty');
		return;
	}
	if(count($retArr['data']) < 20){
		Log::error('data less than 20');
		return;
	}
	$conf  = \Lib\Core::config('detail_json');
	$hot_recommend = [];
	$retArrData = $retArr['data'];
	$retArrData = array_slice($retArrData,0,20);
	foreach($retArrData as $item){
		if(mb_strlen($item['topic']) > 27){
			$data['topic'] = mb_substr($item['topic'], 0, 27) . '...';
		}else{
			$data['topic'] = $item['topic'];
		}
		$data['url'] = Core::config('cdn_path').$item['uniquekey'].'.html';
		$data['img'] = $item['lmini'][0]['imgsrc'];
		$data['time'] = date('Y-m-d H:i',substr($item['cts'],0,10));
		$data['from'] = $item['source'];
		$zw = str_replace("　　","",$item['zw']);
		$zw = str_replace("&nbsp;","",$zw);
		if(!$zw){
			$zw = $data['topic']. '...';
		}else{
			$zw = formatZw($zw);
		}
		$data['desc'] = $zw;
		$hot_recommend[] = $data;
	}

	Log::info("get hot_recommend success, start to set to redis");
	$redis = Redis::getInstance();
	$hot_recommend_json = json_encode($hot_recommend);
	if($hot_recommend_json){
		$result = $redis->set('eastdaypc:detail:recommend:'.$type,json_encode($hot_recommend));
		if(!$result){
			Log::error("set to redis failed, type: ". $type);
		}else{
			Log::info("set to redis success, type: ". $type);
		}
	}else{
		Log::error(sprintf("set to redis failed, hot recommend json of %s is %s", $type, $hot_recommend_json));
	}


}


function formatZw($zw){
	$zw = mb_substr($zw,0,70);
	$pos = mb_strrpos($zw, "。");
	if($pos > 39){
		return mb_substr($zw, 0 , $pos+1);
	}else{
		$comma_pos = mb_strrpos($zw, "，");
		if($comma_pos > 39){
			return mb_substr($zw, 0 , $comma_pos)."...";
		}else{
			return mb_substr($zw, 0 , 60) . "...";
		}
	}
}