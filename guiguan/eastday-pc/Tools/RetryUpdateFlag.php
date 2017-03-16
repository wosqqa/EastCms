<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/3/29
 * Time: 20:29
 */
use \Io\Redis;
use \Io\Log;
require __DIR__ . "/../Common/common.php";

$redis = Redis::getInstance();
while(1){
	$rowkey = $redis->lPop("eastdaypc:update:flag");
	if (!$rowkey) {
		sleep(1);
		continue;
	}
	list($timestamp,$short_rowkey,$times,$otimestemp) = explode("-",$rowkey);
	$now = time();
	if($now - $timestamp <= 3*60){
		//$redis->lPush("eastdaypc:update:flag", $rowkey);
        alog("rowkey:$short_rowkey sleep".($now - $timestamp));
		sleep($now - $timestamp);
		//continue;
	}
	$update_result = update_flag("",$short_rowkey);
	if(!$update_result){
		alog("rowkey:$short_rowkey update flag failed");
		if($times > 20 ) {
			error_log ($short_rowkey."\n" , 3 , __APP_LOG_DIR."update_flag_faild_".date('Y-m-d').".log");
			continue;
		}
		$times ++;
		$otimestemp = $otimestemp?$otimestemp:$timestamp;
		$redis->rPush("eastdaypc:update:flag", $now."-".$short_rowkey."-".$times."-".$otimestemp);
	}else{
		alog("retry update flag success, rowkey:".$short_rowkey);
	}
}
function alog ($info){
	\Io\YaLog::Log($info,__FILE__,__APP_LOG_DIR);
}
