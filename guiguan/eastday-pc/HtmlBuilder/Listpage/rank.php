<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/11/25
 * Time: 9:54
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;


if(!file_exists(__WWW_ROOT.'json/listpage')){
	mkdir(__WWW_ROOT.'json/listpage',0777,true);
}
//新闻排行
$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50JsonObject = getJsonResponse($top50Url,$params);
if (!$top50JsonObject) {
	Log::error('fail to get top50 data');
	exit();
}
if(!$top50JsonObject['data']){
	Log::info('the data array is empty, exit');
	exit();
}
$top50Array = $top50JsonObject['data'];
getJsonDataInDetail($top50Array,16,10,'listpage_json','rank_json');

