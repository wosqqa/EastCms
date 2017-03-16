<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/18
 * Time: 16:15
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Util\WcsFileUploader;

if(!file_exists(__WWW_ROOT.'json/search')){
    mkdir(__WWW_ROOT.'json/search',0777,true);
}
$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50JsonObject = getJsonResponse($top50Url,$params);
if (!$top50JsonObject) {
    Log::error('fail to get top50 data');
    exit();
}
if (!$top50JsonObject['data']) {
    Log::error('the data array is empty,exit');
    exit();
}
$top50Array = $top50JsonObject['data'];
$arr = array_slice($top50Array,10,4);
$result = [];
foreach($arr as $item){
    $data = new stdClass();
    $data->topic = $item['topic'];
    $data->url = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html';
    $data->img = $item['lmini'][0]['imgsrc'];
    $result[] = $data;
}
$json_out_put = ['data'=>$result];
$out_put_path = Core::config('search_json')['hot_daily_json'];
$ret = file_put_contents($out_put_path,json_encode($json_out_put));
//上传cdn
WcsFileUploader::upload('search',Core::config('cdn_prefix')['search_json'].basename($out_put_path),$out_put_path,'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('xkbpc', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('jxnews', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
\Util\UcloudFileUploader::uploadcdn($out_put_path, 'json/search/' . basename($out_put_path), "xinwen");