<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/28
 * Time: 17:52
 */
require __DIR__ . "/../../Common/common.php";
use Model\Eastday\Rowkey;

$param = count($_SERVER['argv']) > 1 ? $_SERVER['argv'][1] : '';
if(!$param){
	exit();
}else{
	$end = $param;
	$begin = $end - 30*60;
}

$date = date('ym',$end);
$sql = "select rowkey,ymd,ctime,status from eastday_pc.rowkey_{$date} where ctime > {$begin} and ctime <= {$end}";
$ret = Rowkey::get_instance()->query_with_prepare($sql);
foreach($ret as $value){
	$data = $value;
	Rowkey::get_instance()->insert($data,null,['status'=>1]);
}

$redis = \Io\Redis::getInstance();
$ret = Rowkey::get_instance()->query_with_prepare("select * from eastday_pc_test.rowkey_{$date} where ctime > {$begin} and ctime <= {$end}");
foreach ($ret as $row){
	$ret = $redis->rPush("eastdaypc:detail:rowkey",$row['rowkey']);
	error_log ("[".date("H:i:s")."]push rowkey:".$row['rowkey']." to db ret:".$ret."\n" , 3 , __APP_LOG_DIR.rtrim(basename(__FILE__),".php")."_".date('Y-m-d').".log");
}