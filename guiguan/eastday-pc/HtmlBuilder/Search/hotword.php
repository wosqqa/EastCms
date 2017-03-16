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
$url = Core::config('hotword');
$params = ['type'=>'now'];
$ret = getJsonResponse($url,$params);
if (!$ret) {
    Log::error('fail to get how word data');
    exit();
}
if (!$ret['ret'] || count($ret['ret']) < 10) {
    Log::error('the data array is empty or less than 12,exit');
    exit();
}
//截取前10个
$data = array_slice($ret['ret'] ,0 ,10);
$data = ['data'=>$data];
$out_put_path = Core::config('search_json')['hotword_json'];
$ret = file_put_contents($out_put_path,json_encode($data));
_upload($out_put_path, Core::config('cdn_prefix')['search_json']);
WcsFileUploader::upload('search',Core::config('cdn_prefix')['search_json'].basename($out_put_path),$out_put_path,'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('xkbpc', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('jxnews', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
\Util\UcloudFileUploader::uploadcdn($out_put_path, 'json/search/' . basename($out_put_path), "xinwen");