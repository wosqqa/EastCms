<?php
/**
 * 重新拉取某天的数据到正式rowkey队列重新拉取
 */
require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Model\Eastday\Rowkey;
$redis = Redis::getInstance();

$ymd = $_SERVER['argv'][1] ?$_SERVER['argv'][1] : date("ymd");
$type = $_SERVER['argv'][2] ?$_SERVER['argv'][2] : '';

$i = 0;
while(1) {
    if($type){
        $channel_map = \Lib\Core::config('channel_map');
        $type_num = $channel_map[$type];
        $ret = Rowkey::get_instance()->getDataByYmdAndType($ymd,$type_num,$i * 100,100);
    }else{
        $ret = Rowkey::get_instance()->getDataByYmd($ymd,$i * 100,100);
    }
    $i++;
    if (!$ret || !is_array($ret)) break;
    foreach ($ret as $row){
        $ret = $redis->rPush("eastdaypc:detail:rowkeyfromdb",$row['rowkey']);
        \Io\YaLog::Log("push rowkey:".$row['rowkey']." to db ret:".$ret,__FILE__,__APP_LOG_DIR);
    }
}