<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/11/25
 * Time: 9:56
 */
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Util\WcsFileUploader;

if(!file_exists(__WWW_ROOT.'json/search')){
	mkdir(__WWW_ROOT.'json/search',0777,true);
}
$url = Core::config('personal');
$params = ['ispc'=>0];
$ret = getJsonResponse($url,$params);
if (!$ret) {
	Log::error('fail to get personal data');
	exit();
}
if (!$ret['data'] || count($ret['data']) < 11) {
	Log::error('the data array is empty or less than 12,exit');
	exit();
}
//截取前6个
$data = array_slice($ret['data'] ,0 ,6);
$arr = [];
foreach((array)$data as $val ){
	$temp['topic'] = $val['topic'];
	$temp['url'] =Core::config('cdn_path').$val['uniquekey'].".html";
	$temp['img'] = $val['lmini'][0]['imgsrc'];
	$temp['desc'] = mb_substr(str_replace('　　','',$val['zw']),0,21,'utf8');
	$temp['source'] = $val['source'];
    $temp['time'] = date('Y-m-d H:i',intval($val['cts']/1000));
	$arr[] = $temp;
}
$data = ['data'=>$arr];
$out_put_path = Core::config('search_json')['tuijian_json'];
$ret = file_put_contents($out_put_path,json_encode($data));
WcsFileUploader::upload('search',Core::config('cdn_prefix')['search_json'].basename($out_put_path),$out_put_path,'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('xkbpc', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
WcsFileUploader::upload('jxnews', Core::config('cdn_prefix')['search_json'] . basename($out_put_path), $out_put_path, 'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)');
\Util\UcloudFileUploader::uploadcdn($out_put_path, 'json/search/' . basename($out_put_path), "xinwen");