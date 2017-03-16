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
$map = Core::config('tiyu_map');
$type_map = Core::config('tiyu_type_map');
$channel = $_SERVER['argv'][1];
$out_put_paths = \Lib\Core::config('channel_path');
$channel_list_url = \Lib\Core::config('channel_list_url');
$channel_list_next_url = \Lib\Core::config('channel_list_next_url');

//隐藏轮播
$no_pic = 1;

//默认获取体验到top20
$rankArray = get24RankArray();
$hotNewsArray = getHotNewsArray();

//add by JH
$htmlBuilder = HtmlBuilder::get_instance();
$htmlBuilder->assign("no_pic",$no_pic);
$htmlBuilder->assign("type",$map[$channel]);
$htmlBuilder->assign("zhongwen_type",$type_map[$channel][0]);
$htmlBuilder->assign("english_type",$type_map[$channel][1]);
$htmlBuilder->assign("channel",$channel);
$htmlBuilder->assign("channel_list_url",$channel_list_url);
$htmlBuilder->assign("channel_list_next_url",$channel_list_next_url);
$htmlBuilder->assign("rankArray",$rankArray);
$htmlBuilder->assign("hotNewsArray",$hotNewsArray);

Log::info("start build ".$channel);
$time = time();
$out_put_path = $out_put_paths[$channel];
$ret  = $htmlBuilder->build_html(__TEMPLATE_DIR.'sportschannel.php',$out_put_path);
Log::info("build ".$channel." complete ret :".$ret." use :".(time() - $time));

//上传到cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);

function get24RankArray(){
	$key = "eastdaypc:detail:recommend:tiyu";
	$redis = Redis::getInstance();
	$rankJson = $redis->get($key);
	return array_slice((json_decode($rankJson,true)),0,10);
}

function getHotNewsArray(){
	$redis = Redis::getInstance();
	$top50Json = $redis->get("eastdaypc:detail:top50");
	return array_slice(json_decode($top50Json,true),0,4);
}