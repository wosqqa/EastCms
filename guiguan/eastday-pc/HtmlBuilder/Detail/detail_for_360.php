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

if(!file_exists(__WWW_ROOT.'360/')){
	mkdir(__WWW_ROOT . '360/', 0777, true);
}
$redis = Redis::getInstance();
while(1) {
	$rowkey = $redis->lPop("eastdaypc:360:detail:rowkey");
	$rowkey = trim($rowkey);
	if($rowkey){
		echo "pop rowkey: {$rowkey} \n";
		Log::info("get rowkey from redis, eastdaypc:360:detail:rowkey:".$rowkey);
		$detail_builder = new Detailbuilder($rowkey);
		$detail_builder->setOutputPath(__WWW_ROOT . '360/');
		$detail_builder->setPushToBaidu(false);
		$detail_builder->setSaveNews(false);
		$detail_builder->setUpdateFlag(false);
		$detail_builder->setDevideToPages(false);
		$detail_builder->setCheckStrlenBelowImg(true);
		$detail_builder->setCdnPrefix('360/');
		$detail_builder->setUpdateRebuildStatus(true)
;		$build_result = $detail_builder->run();
	}else{
		sleep(10);
	}
}
