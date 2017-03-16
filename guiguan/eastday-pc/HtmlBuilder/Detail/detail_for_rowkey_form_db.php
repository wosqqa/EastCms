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
	$rowkey = $redis->lPop("eastdaypc:detail:rowkeyfromdb");
	$rowkey = trim($rowkey);
    if ($rowkey) {
		echo "pop rowkey: {$rowkey} \n";
        Log::info("get rowkey from redis, eastdaypc:detail:rowkeyfromdb:" . $rowkey);
	    $detail_builder = new Detailbuilder($rowkey);
	    $detail_builder->setOutputPath(__WWW_ROOT . 'sa/');
	    $detail_builder->setPushToBaidu(false);
	    $detail_builder->setSaveNews(false);
	    $detail_builder->setUpdateFlag(false);
	    $build_result = $detail_builder->run();
    } else {
        break;
	}
}
