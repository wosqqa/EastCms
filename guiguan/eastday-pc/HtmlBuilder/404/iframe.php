<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/25
 * Time: 10:39
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;

$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50JsonObject = getJsonResponse($top50Url,$params);
if (!$top50JsonObject) {
	Log::error('[404page]fail to get top50 data');
	exit();
}
if(!$top50JsonObject['data']){
	Log::info('[404page]the data array is empty, exit');
	exit();
}
if(count($top50JsonObject['data']) < 20){
	Log::error('[404page]the data array is less than 20, exit');
	exit();
}
$top50Array = $top50JsonObject['data'];

$b = HtmlBuilder::get_instance();
$out_put_path = __WWW_ROOT.'frames/404_iframe.html';
$b->assign('top50Array',$top50Array);
$b->build_html(__TEMPLATE_DIR.'404_iframe.php',$out_put_path);
//上传到cdn
$prefix = Core::config('cdn_prefix')['frames'];
_upload($out_put_path, $prefix);