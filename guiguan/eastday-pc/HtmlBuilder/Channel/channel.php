<?php
/**
 * 生成频道页
 * useage:
 *  php  channel.php  [pindao]
 */
require __DIR__ . "/../../Common/common.php";
use Io\Log;
use Io\HtmlBuilder;
use Lib\Core;
use Io\Redis;
use Util\WcsFileUploader;

$map = Core::config('channel_map');
$type_map = Core::config('type_map');
$channel = $_SERVER['argv'][1];
$out_put_paths = \Lib\Core::config('channel_path');
$channel_list_url = \Lib\Core::config('channel_list_url');
$channel_list_next_url = \Lib\Core::config('channel_list_next_url');

//隐藏轮播
$no_display = Core::config('pic_nodisplay');
$no_pic = 0;
if(in_array($channel, $no_display)){$no_pic = 1;}

//静态化
$rankArray = get24RankArray($channel);
$lunboArray = getLunboArray($channel);
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
$htmlBuilder->assign("lunboArray",$lunboArray);
$htmlBuilder->assign("hotNewsArray",$hotNewsArray);

Log::info("start build ".$channel);
$time = time();
$out_put_path = $out_put_paths[$channel];
$ret  = $htmlBuilder->build_html(__TEMPLATE_DIR.'channel.php',$out_put_path);
Log::info("build ".$channel." complete ret :".$ret." use :".(time() - $time));

//上传到cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);
if($channel == 'yule' || $channel == 'shehui' || $channel == 'junshi') {
	WcsFileUploader::upload("mini",$channel."/index.html",$out_put_path,"bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)");
}


function get24RankArray($type){
	$key = "eastdaypc:detail:recommend:".$type;
	$redis = Redis::getInstance();
	$rankJson = $redis->get($key);
	return array_slice((json_decode($rankJson,true)),0,10);
}

function getLunboArray($channel){
	$redis = Io\Redis::getInstance();
	Log::info("start to get " . $channel . " lunbo array");
	$lunHuanArray = [];
	for ($i = 1; $i < 5; $i++) {
		$key = $channel . ":lunhuan:p" . $i;
		$val = $redis->get($key);
		if (!$val) {
			Log::error('get lunhuan pics from redis failed, exit');
			continue;
		}
		$val = json_decode($val);
		$data = [];
		$data['topic'] = $val->topic;
		$data['img'] = $val->img;
		$data['url'] = $val->uk;
		$lunHuanArray[] = $data;
	}
	Log::info("complete to get lunbo array, return:".json_encode($lunHuanArray));
	return $lunHuanArray;
}

function getHotNewsArray(){
	$redis = Redis::getInstance();
	$top50Json = $redis->get("eastdaypc:detail:top50");
	return array_slice(json_decode($top50Json,true),0,4);
}


