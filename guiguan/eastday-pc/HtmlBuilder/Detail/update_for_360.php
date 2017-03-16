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
	$rowkey = $redis->lPop("eastdaypc:360:uk:rp:rowkey");
	$rowkey = trim($rowkey);
	if($rowkey){
		echo "pop rowkey: {$rowkey} \n";
		Log::info("get rowkey from redis, eastdaypc:360:uk:rp:rowkey:".$rowkey);
		list($uk,$key,$dt) = explode("|",$rowkey);
		$ret = \Model\EastdayAdmin\News360::get_instance()->findByUk($uk);
		if(!$ret){
			Log::info("the news of this uk is not in 360, uk:".$uk);
			continue;
		}
		/*if(!$key){
			//用404页面覆盖
			upload_to_cdn('/data/www/eastday/404.html', '360/'.$uk.'.html');
		}else{
			//重新生成
			$detail_builder = new Detailbuilder($key, $uk, $dt);
			$detail_builder->setOutputPath(__WWW_ROOT . '360/');
			$detail_builder->setPushToBaidu(false);
			$detail_builder->setSaveNews(false);
			$detail_builder->setUpdateFlag(false);
			$detail_builder->setDevideToPages(false);
			$detail_builder->setCheckStrlenBelowImg(true);
			$detail_builder->setCdnPrefix('360/');
			$detail_builder->setUpdateRebuildStatus(true);
			$build_result = $detail_builder->run();
		}*/
		$max_long = 9223372036854775807;
		$dateStr = substr($uk,0,12);
		$cts = strtotime('20'.$dateStr).substr($uk,-3);
		$uk_to_rowkey = ($max_long-$cts);
		list($type,$short_rowkey) = explode("_", $key);
		if($key && ( $uk_to_rowkey == $short_rowkey )){
			$detail_builder = new Detailbuilder($key, $uk, $dt);
			$detail_builder->setOutputPath(__WWW_ROOT . '360/');
			$detail_builder->setPushToBaidu(false);
			$detail_builder->setSaveNews(false);
			$detail_builder->setUpdateFlag(false);
			$detail_builder->setDevideToPages(false);
			$detail_builder->setCheckStrlenBelowImg(true);
			$detail_builder->setCdnPrefix('360/');
			$detail_builder->setUpdateRebuildStatus(true);
			$build_result = $detail_builder->run();
		}

	}else{
		break;
	}
}
