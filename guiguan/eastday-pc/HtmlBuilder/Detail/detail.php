<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/11/23
 * Time: 15:41
 */


require_once __DIR__ . '/Detailbuilder.php';
use Io\Redis;
use Io\HtmlBuilder;
use Io\Log;
use Lib\Core;

if(!file_exists(__WWW_ROOT.'a/')){
    mkdir(__WWW_ROOT . 'a/', 0777, true);
}

$redis = Io\Redis::getInstance();
while(1) {
    $rowkey = $redis->lPop("eastdaypc:detail:rowkey");
    $rowkey = trim($rowkey);
    if ($rowkey) {
        echo "pop rowkey: {$rowkey} \n";
        Log::info("get rowkey from redis, eastday_detail_rowkey:" . $rowkey);
        $detailBuilder = new Detailbuilder($rowkey);
        $build_result = $detailBuilder->run();
        // 注意这里要用 ===
        if ($build_result === 404) {
            Log::info("404 repush rowkey:" . $rowkey);
            $redis->rPush("eastdaypc:detail:rowkey", $rowkey);
            continue;
        }
        //对账日志
        list($type, $num) = explode("_", $rowkey);
        $java_timestamp = 9223372036854775807 - $num;
        $u = date('ymdHis', substr($java_timestamp, 0, 10)) . substr($java_timestamp, -3);
        file_put_contents(__APP_LOG_DIR . "detail_" . date('Ymd') . ".log", $u . ".html\n", FILE_APPEND | LOCK_EX);

        $redis->rPush("bak:eastdaypc:detail:rowkey", $rowkey);

    } else {
        //echo "sleep 3s\n";
        sleep(3);
    }
}
