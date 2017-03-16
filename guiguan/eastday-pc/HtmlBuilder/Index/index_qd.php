<?php
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;
use Model\EastdayAdmin\HomeData;

$qd = count($_SERVER['argv']) > 1 ? $_SERVER['argv'][1] : '';
$alltop50 = getAllTop50();
$redis = \Io\Redis::getInstance();
$htmlBuilder = HtmlBuilder::get_instance();
$htmlBuilder->assign('qd',$qd);
$out_put_path = \Lib\Core::config(sprintf('index_%s_path',$qd));
$toutiaoArr = getToutiaoJson($alltop50);
$htmlBuilder->assign('toutiaoData',$toutiaoArr);
$htmlBuilder->assign('bodyColor',Core::config('bodyColor')[$qd]);
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

//热搜词
$hotWordsArr = getHotWords();
$htmlBuilder->assign('hotWordsArray', $hotWordsArr);

//轮播图下方快讯
$kuaixunArr = array_slice($alltop50, 0, 5);
$htmlBuilder->assign('kuaixunArr', $kuaixunArr);

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
$ret = $htmlBuilder->build_html(__TEMPLATE_DIR.'index_qd.php',$out_put_path);
$end_time = time();
$use = $end_time-$begin_time;
Log::info("[Index] complete build static html $out_put_path, ret: $ret, use: $use");

//上传cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);

function getToutiaoJson($alltop50){
	//获取头条和大家都在看
	Log::info("[Index] start get toutiaoJson");
	$start_time = time();
	$top27Array = HomeData::get_instance()->get_news();
	if(!$top27Array || count($top27Array) <27){
		Log::error('get top27array failed, exit');
		exit();
	}
	//头条部分
	$top24Array = array_slice($top27Array,0,24);
	$top24Result = [];
	foreach($top24Array as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = $item['url'];
		$top24Result[] = $data;
	}
	//获取大家都在看
	$hotArray = array_slice($top27Array,-3);
	$hotResult = [];
	foreach($hotArray as $item){
		$data = [];
		$data['topic'] = $item['topic'];
		$data['url'] = $item['url'];
		$data['img'] = $item['img21'];
		$hotResult[] = $data;
	}
	$hotResult = array_slice($hotResult,0,2);
	Log::info("get top27array: success");

	// 获取暖新闻
	$nxw = array_slice($alltop50, 5, 7);
	/*$redis = \Io\Redis::getInstance();
	$a = $redis->get('index:nxw');
	if(!$a){
		Log::error('get nxw from redis failed, exit');
		exit();
	}
	$nxwArray = json_decode($a,true);
	$nxw = [];
	foreach ($nxwArray as $val){
		$nxw[] = $val;
	}*/


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
		$data['img'] = $val['img'];
		$data['url'] = $val['uk'];
		$lunHuanArray[]  = $data;
	}
	$json_out_put = ['top'=>$top24Result,'lunhuan'=>$lunHuanArray,'nxw'=>$nxw,'hot'=>$hotResult];
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

function getHotWords(){
	$url = Core::config('hotword');
	$params = ['type'=>'now'];
	$ret = getJsonResponse($url,$params);
	if (!$ret) {
		Log::error('fail to get how word data');
		exit();
	}
	if (!$ret['ret'] || count($ret['ret']) < 10) {
		Log::error('the data array is empty or less than 12,exit');
		exit();
	}
	$data = array_slice($ret['ret'] ,0 ,6);
	return $data;
}

function getAllTop50(){
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
	$data = $ret['data'];
	$arr = [];
	foreach((array)$data as $val ){
		$temp['topic'] = $val['topic'];
		$temp['url'] =Core::config('cdn_path').$val['uniquekey'].".html";
		$temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,42,'utf8')."......";
		$arr[] = $temp;
	}
	return $arr;
}