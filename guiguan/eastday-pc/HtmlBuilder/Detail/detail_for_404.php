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


$redis = Redis::getInstance();
while(1) {
	$rowkey = $redis->lPop("eastdaypc:uk:rp:rowkey");
	$rowkey = trim($rowkey);
	if($rowkey){
		echo "pop rowkey: {$rowkey} \n";
		Log::info("get rowkey from redis, eastdaypc:uk:rp:rowkey:".$rowkey);
		list($uk,$key,$dt) = explode("|",$rowkey);
		$detail_builder = new Detailbuilder($key, $uk, $dt);
		$detail_builder->setPushToBaidu(false);
		$detail_builder->setSaveNews(false);
		$detail_builder->setUpdateFlag(false);
		$build_result = $detail_builder->run();
	}else{
		break;
	}
}
