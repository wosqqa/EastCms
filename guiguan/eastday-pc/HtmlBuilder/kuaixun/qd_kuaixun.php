<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/1/18
 * Time: 14:01
 */
ini_set('display_errors', 'On');
error_reporting (E_ALL & ~E_NOTICE);
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\Redis;
use Model\Eastday\PushHistory;
use Model\Eastday\Kuaixun;

if(!file_exists(__WWW_ROOT.'json/kuaixun')){
	mkdir(__WWW_ROOT.'json/kuaixun',0777,true);
}

$redis = Redis::getInstance();
$data = $redis->get('eastdaypc:qdkuaixun:times');
$times = (!$data) ? 1 : $data; //频率默认为1
if($times ==  25) exit(); //暂停 更新

$now = time();
$hour = date('h',$now);

//防止定时脚本执行多次
$justic_hour = $redis->get('eastdaypc:qdkuaixun:hours');
if(empty($justic_hour) ){
	$redis->set('eastdaypc:qdkuaixun:hours',$hour);
	$justic_hour = $hour;
}
if (($hour % $times == 0) && ($hour != $justic_hour) ) {

	//重置时间 为当前时间
	$redis->set('eastdaypc:qdkuaixun:hours',$hour);

	$ret = get_top50();
	if (!$ret) {
		Log::error('fail to get top50 data');
		exit();
	}
	if (!$ret['data']) {
		Log::error('the data array is empty ,exit');
		exit();
	}
	$retDate = $ret['data'];
	$uk = '';
	$qd_kuaixun = [];
	$i = 0;
	$push_history = PushHistory::get_instance();
	$kuaixun  = Kuaixun::get_instance();

	//将快讯存入历史记录
	$kuaixun_result = $kuaixun->select();
	if($kuaixun_result){
		foreach($kuaixun_result as $v){
			$push_history->insert_qd($v['uk'],$v['url']);
		}
	}


	foreach ($retDate as $item) {

		$uktemp = $item['uniquekey'];
		if (!check_has_pushed($uktemp) && $i < 10) {
			$uk = $uktemp;
			Log::info('find the uniquekey:' . $uk);
			$qd_kuaixun[$i]['topic'] = $item['topic'];
			$qd_kuaixun[$i]['url'] = 'http://mini.eastday.com/a/' . $uk . '.html';
			$qd_kuaixun[$i]['start_time'] = date('Y-m-d H:m', $now);
			$qd_kuaixun[$i]['end_time'] = date('Y-m-d H:m', $now + $times * 60 * 60);
			$qd_kuaixun[$i]['uk'] = $uk;
			$qd_kuaixun[$i]['times'] = $times;
			$i++;
		}
	}
	if (!$qd_kuaixun) {
		Log::error('no data can be pushed in top50');
		exit();
	}
	push($qd_kuaixun);

}


function get_top50(){
	//alltop50接口
	$alltop50url = Core::config('personal');
	$params = ['ispc'=>0];
	$ret = getJsonResponse($alltop50url,$params);
	if (!$ret) {
		Log::error('fail to get personal data,exit');
		return null;
	}
	if (!$ret['data']) {
		Log::error('the data array is empty,exit');
		return null;
	}
	return $ret;
}

function check_has_pushed($uk){
	//是否已经推送过
	Log::info('check if the news has pushed');
	$push_history = PushHistory::get_instance();
	if($push_history->getDataByUk($uk)){

		return true;
	}

	return false;
}

function push($qd_kuaixun){
	//生成json
	$out_put_path = Core::config('qd_kuaixun_json');
	file_put_contents($out_put_path, json_encode(['root'=>$qd_kuaixun]));
	chmod($out_put_path,0777);

	//上传cdn
	$prefix = Core::config('cdn_prefix')['kuaixun_json'];
	$upload_result = _upload($out_put_path, $prefix);
//	$upload_result = true;

	//上传成功
	if($upload_result){
		global  $kuaixun;
		//清空表快讯表
		$kuaixun->delete();

		//插入10 条记录 到快讯表
		for($i=0,$cnt = count($qd_kuaixun);$i<$cnt;$i++){
			Log::info('begin save kuaixun');
			$kuaixun->insert_kx($qd_kuaixun[$i]['uk'],$qd_kuaixun[$i]['url'],$qd_kuaixun[$i]['topic']);
		}
	}
}
