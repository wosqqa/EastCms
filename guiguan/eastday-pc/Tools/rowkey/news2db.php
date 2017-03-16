<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/26
 * Time: 14:40
 */
require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Model\Eastday\EastdaypcNews;

while(1){
	$redis = Redis::getInstance();
	$newsJson = $redis->rPop("bak:eastdaypc:news");
    if ($newsJson) {
        $news = json_decode($newsJson, true);
        if (!$news) {
            continue;
        }
        $ret = EastdaypcNews::get_instance()->add(array_values($news));
        if (!$ret) {
            \Io\Log::error("add news failed, news:" . $newsJson);
        }
    } else {
        break;
	}
}