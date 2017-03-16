<?php
/**
 * 重新拉取某天的数据到正式rowkey队列重新拉取
 */
require __DIR__ . "/../../Common/common.php";
use Io\Redis;
$redis = Redis::getInstance();
$file_name = "rowkey.dat";
foreach(getLines($file_name) as $key=>$val){
    if(trim($val)){
        $ret = $redis->rPush("eastdaypc:update:flag",time()."-".trim($val));
        var_dump(trim($val),$ret);
    }
}
function getLines($file) {
    $f = fopen($file, 'r');
    try {
        while ($line = fgets($f)) {
            yield $line;
        }
    } finally {
        fclose($f);
    }
}