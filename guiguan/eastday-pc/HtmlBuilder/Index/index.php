<?php
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;
use Model\EastdayAdmin\HomeData;

$redis = \Io\Redis::getInstance();
$htmlBuilder = HtmlBuilder::get_instance();
$out_put_path = \Lib\Core::config('index_path');
$toutiaoArr = getToutiaoJson();
$htmlBuilder->assign('toutiaoData',$toutiaoArr);

$index_top_array = [];
for($i = 1;$i<5 ;$i++){
	$temp =  $redis->lRange('index:hot:h'.$i,0,4);
    $temp_arr = [];
    foreach((array)$temp as $key => $val){
       if ($val)$temp[$key] = json_decode($val,true);
    }
    $index_top_array[] =$temp;
}
//var_dump($index_top_array);

$hot_array_t = [];
foreach($index_top_array as $key => $val){
    $hot_array_t[$key]['t'] = array_shift($val);
    $hot_array_t[$key]['s'] = $val;
}
$htmlBuilder->assign('indexTopArray',$hot_array_t);

//友情链接
$response  = getJsonResponse(Core::config('friend_url'),['id'=>11],'POST');
if (!$response){
    Log::error('[Index]cannot get friend_url,exit');
}
$htmlBuilder->assign('f_urls',$response);

//各个频道
$typeUrl = Core::config('type');
$type = Core::config('type_map');
$keys = array_keys($type);
$black_list = Core::config('not_display_in_index');
foreach ($keys as $key) {
	if(in_array($key,$black_list)){
		continue;
	}
	$typeData = getJsonDataByChannel($typeUrl, $key);
	if(!$typeData){
		Log::error('[Index]cannot get array of '.$key.',exit');
		exit();
	}
	$htmlBuilder->assign($key . 'Arr', $typeData);
}

//国内和社会rank7
$guonei_rank = json_decode($redis->get('eastdaypc:detail:recommend:guonei'), true);
$htmlBuilder->assign('guonei_rank',$guonei_rank);

$shehui_rank = json_decode($redis->get('eastdaypc:detail:recommend:shehui'), true);
$htmlBuilder->assign('shehui_rank',$shehui_rank);

//图片
$tupianArr = getIndexTupianJson();
if(!$tupianArr){
	Log::error('tupian array is empty, exit');
	exit();
}
$htmlBuilder->assign('tupianArr',$tupianArr);
Log::info("[Detail] start build static html ".$out_put_path);
$begin_time = time();
$ret = $htmlBuilder->build_html(__TEMPLATE_DIR.'index.php',$out_put_path);
$end_time = time();
$use = $end_time-$begin_time;
Log::info("[Index] complete build static html $out_put_path, ret: $ret, use: $use");

//上传cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);
if (__SDK_ENV == 'online'){
	\Util\UcloudFileUploader::uploadcdn($out_put_path, $prefix . "index.html");
}

function getToutiaoJson(){
	//获取头条和大家都在看
	Log::info("[Index] start get toutiaoJson");
	$start_time = time();
	$top35Array = HomeData::get_instance()->get_news();
	if(!$top35Array || count($top35Array) <33){
		Log::error('get top27array failed, exit');
		exit();
	}
	//头条部分
	$top24Array = array_slice($top35Array,0,24);
	$top24Result = [];
	foreach($top24Array as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = $item['url'];
		$top24Result[] = $data;
	}

	//获取轮播图下方两张图片新闻
	$picArray = array_slice($top35Array,24,2);
	$picResult = [];
	foreach($picArray as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = $item['url'];
		$data['img'] = str_replace("http://","//",$item['img21']);
		$picResult[] = $data;
	}
	//获取大家都在看
	$hotArray = array_slice($top35Array,-9);
	$hotResult = [];
	foreach($hotArray as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = $item['url'];
		$data['img'] = str_replace("http://","//",$item['img43']);
		$hotResult[] = $data;
	}

	Log::info("get top35array: success");

	//获取轮换图
	$redis  = \Io\Redis::getInstance();
	$lunHuanArray = [];
	for($i=1;$i<7;$i++){
		$key = 'pctoutiao:lunhuan:p'.$i;
		$val = $redis->get($key);
		if(!$val){
			Log::error('get lunhuan pics from redis failed, exit');
			exit();
		}
		$val = json_decode($val, true);
		$data = [];
		$data['topic'] = $val['topic'];
		$data['img'] = str_replace("http://","//",$val['img']);
		$data['url'] = $val['uk'];
		$lunHuanArray[]  = $data;
	}
	$json_out_put = ['top'=>$top24Result,'lunhuan'=>$lunHuanArray, 'hot'=>$hotResult, 'picNews'=>$picResult];
	$end_time = time();
	$use = $end_time-$start_time;
	Log::info("[Index] complete get 'toutiaoJson', use: $use");
	return $json_out_put;
}


function getIndexTupianJson(){
	Log::info("[Index] start to get 'tupian.json'");
	$start_time = time();
	$redis = \Io\Redis::getInstance();
	$tupianArr = [];
	for($i=0;$i<6;$i++){
		$tupian = $redis->get('index:tupian:p'.$i);
		if(!$tupian){
			Log::info('get index tupian json from redis failed, exit');
			return false;
		}
		$temp = json_decode($tupian,true);
		$tupianArr[]  = $temp;
	}
	return $tupianArr;
}