<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/7/20
 * Time: 11:32
 */

use Io\Redis;
use Io\Log;
use Io\HtmlBuilder;
use Lib\Core;
//新闻早餐 iframe
require __DIR__ . "/../../Common/common.php";

$redis = Redis::getInstance();
$result = $redis->get("eastdaypc:detail:top50");
$arr = json_decode($result,true);
$arr = array_slice($arr,0,10);

$h = HtmlBuilder::get_instance();
$h->assign("top10Arr",$arr);
$out_put_path = __WWW_ROOT.'frames/morning_iframe.html' ;
$h->build_html(__TEMPLATE_DIR.'morning_iframe.php',$out_put_path);

$prefix = Core::config("cdn_prefix")['frames'];
_upload($out_put_path, $prefix);
