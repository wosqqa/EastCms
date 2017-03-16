<?php
/**
 * 生成体育频道页
 * useage:
 *  php  channel.php  [pindao]
 */
require __DIR__ . "/../../Common/common.php";
use Io\Log;
use Io\HtmlBuilder;
use Lib\Core;
use Io\Redis;
$channel_list_url = \Lib\Core::config('channel_list_url');
$channel_list_next_url = \Lib\Core::config('channel_list_next_url');

//默认获取体验到top20
$rankArray = get24RankArray();
$hotNewsArray = getHotNewsArray();

//add by JH
$htmlBuilder = HtmlBuilder::get_instance();
$htmlBuilder->assign("no_pic",1);
$htmlBuilder->assign("type",'');
$htmlBuilder->assign("zhongwen_type",'sex');
$htmlBuilder->assign("english_type",'sex');
$htmlBuilder->assign("channel",'sex');
$htmlBuilder->assign("channel_list_url",$channel_list_url);
$htmlBuilder->assign("channel_list_next_url",$channel_list_next_url);
$htmlBuilder->assign("rankArray",$rankArray);
$htmlBuilder->assign("hotNewsArray",$hotNewsArray);
$channel = 'sex';
Log::info("start build ".$channel);
$time = time();
$ret  = $htmlBuilder->build_html(__TEMPLATE_DIR.'sexchannel.php',__WWW_ROOT.'sex.html');
Log::info("build ".$channel." complete ret :".$ret." use :".(time() - $time));

//上传到cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload(__WWW_ROOT.'sex.html', $prefix);

function get24RankArray(){
	$key = "eastdaypc:detail:recommend:xinwen";
	$redis = Redis::getInstance();
	$rankJson = $redis->get($key);
	return array_slice((json_decode($rankJson,true)),0,10);
}

function getHotNewsArray(){
	$redis = Redis::getInstance();
	$top50Json = $redis->get("eastdaypc:detail:top50");
	return array_slice(json_decode($top50Json,true),0,4);
}