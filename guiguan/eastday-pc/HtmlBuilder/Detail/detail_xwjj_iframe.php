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
$json = $redis->get('eastdaypc:detail:recommend:yule');
$arr = json_decode($json,true);
if(!$arr){
	Log::error("detail_xwjj_iframe | data of top50 is null ");
	exit();
}
$xwjj_arr = array_slice($arr,16,4);
$html_builder = HtmlBuilder::get_instance();
$html_builder->assign("xwjj_arr",$xwjj_arr);
$out_put_path = __WWW_ROOT.'frames/detail_xwjj_iframe.html' ;
$html_builder->build_html(__TEMPLATE_DIR.'detail_xwjj_iframe.php',$out_put_path);
$ret = _upload($out_put_path,Core::config("cdn_prefix")['frames']);
if(!$ret){
	Log::error("detail_xwjj_iframe | upload to cdn failed");
}