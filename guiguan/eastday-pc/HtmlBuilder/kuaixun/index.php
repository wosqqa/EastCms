<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/1/6
 * Time: 13:36
 */


require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Io\HtmlBuilder;
use Io\Redis;

if(!file_exists(__WWW_ROOT.'json/kuaixun')){
	mkdir(__WWW_ROOT.'json/kuaixun',0777,true);
}

$redis = Redis::getInstance();
$data = $redis->get('eastdaypc:kuaixun');
$conf = Core::config('kuaixun_json');
$out_put_path = sprintf($conf,date('ymd'));
file_put_contents($out_put_path, $data);

//上传cdn
$prefix = Core::config('cdn_prefix')['kuaixun_json'];
_upload($out_put_path, $prefix);