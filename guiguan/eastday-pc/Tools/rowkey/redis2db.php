<?php

/**
 * rowkey 备份队列入库
 */
require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Model\Eastday\Rowkey;
$redis = Redis::getInstance();
while(1) {
    $rowkey = $redis->lPop("bak:eastdaypc:detail:rowkey");
    error_log ("[".date("H:i:s")."]rowkey:".$rowkey."\n" , 3 , __APP_LOG_DIR.rtrim(basename(__FILE__),".php")."-".date('Y-m-d').".log");
    if ($rowkey){
        $data = [
            'rowkey'=>$rowkey,
            'ymd'=>date("ymd"),
            'ctime'=>time(),
        ];
        $ret = Rowkey::get_instance()->insert($data,null,['status'=>2]);
        error_log ("[".date("H:i:s")."]ret:".$ret."\n" , 3 , __APP_LOG_DIR.rtrim(basename(__FILE__),".php")."-".date('Y-m-d').".log");
    }else{
        break;
    }
}