<?php
/** 将各个站rowkey的更新情况汇总到 update flag 队列
 */
use \Io\Redis;

require __DIR__ . "/../Common/common.php";
$redis = Redis::getInstance();
$rowkeys = $redis->sMembers("pre:eastdaypc:update:flag");
foreach ($rowkeys as $rowkey) {
    if (trim($rowkey)) {
        $rowkey = trim($rowkey);
        if ($redis->sCard('global:' . $rowkey) >= 3) {
            //推到update flag 队列
            $ok = $redis->rPush("eastdaypc:update:flag", time() . "-" . $rowkey);
            alog("rpush eastdaypc:update:flag" . $rowkey . " |" . $ok);
            if ($ok) {
                // 删除各个站的情况信息
                $ret = $redis->del('global:' . $rowkey);
                alog("del global:" . $rowkey . " |" . $ok);
                //删除队列信息
                $ret = $redis->sRem("pre:eastdaypc:update:flag", $rowkey);
                alog("del global:" . $rowkey . " |" . $ok);
            }
        }
    }
}
function alog($info)
{
    \Io\YaLog::Log($info, __FILE__, __APP_LOG_DIR);
}
