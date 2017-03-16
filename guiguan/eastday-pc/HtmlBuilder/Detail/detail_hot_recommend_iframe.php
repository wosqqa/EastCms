<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/19
 * Time: 11:23
 */

require __DIR__.'/public_build_detail_func.php';
use Lib\Core;
use \Io\HtmlBuilder;
use Io\Redis;
use Io\Log;

$redis = Redis::getInstance();
$channel_map = Core::config('channel_map');
foreach ($channel_map as $k=>$v){
	$recommend_json = $redis->get('eastdaypc:detail:recommend:'.$k);
	$recommend_arr = json_decode($recommend_json,true);
	if(!$recommend_arr){
		Log::error("recommend_iframe | data of type '". $k ."' is null ");
		continue;
	}
	$recommend_arr = array_slice($recommend_arr,0,10);
	$html_builder = HtmlBuilder::get_instance();
	$html_builder->assign("recommend_arr",$recommend_arr);
	$out_put_path = sprintf(__WWW_ROOT.'frames/hot_recommend_iframe_%s.html',$k) ;
	$html_builder->build_html(__TEMPLATE_DIR.'hot_recommend.php',$out_put_path);
	$ret = _upload($out_put_path,Core::config("cdn_prefix")['frames']);
	if(!$ret){
		Log::error(sprintf("recommend_iframe | upload to cdn failed, filename : %s", "hot_recommend_iframe_{$k}.html"));
	}
}