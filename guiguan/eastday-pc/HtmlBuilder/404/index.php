<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/25
 * Time: 11:35
 */

require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;

$b = HtmlBuilder::get_instance();
$out_put_path = __WWW_ROOT.'404.html';
$b->build_html(__TEMPLATE_DIR.'404.php',$out_put_path);

//上传到cdn
$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);