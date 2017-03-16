<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/11/23
 * Time: 15:41
 */


/**
 *  每天 6点  12点 18点运行
 */
error_reporting(E_ALL & ~E_NOTICE);
require __DIR__ . "/../../Common/common.php";
use \Lib\Core;
use Io\Log;
use Model\EastdayAdmin\HomeData;
use Model\EastdayAdmin\FilterUniquekeys;
$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$returnData = getJsonResponse($top50Url,$params);
//或得到top50数据 数组形式
$top50Data = $returnData['data'];
if(count($top50Data) < 35){
    Log::error("new_hot_top27 | top50 less than 35, exit");
    exit;
}
$top35Arr = array_slice($top50Data,0,35);

$topics = [];
$urls = [];
$img21s = [];
$img43s = [];
$data = [];
$domain = __SDK_ENV == 'test' ? "http://testmini.eastday.com":"http://mini.eastday.com";
foreach ($top35Arr as $k=>$v){
    $data[] = [
        "topic" => str_replace("\"", "'",$v["topic"]),
        "url" => $domain."/a/".$v["uniquekey"].".html",
        "img21" => $v['llunb'][0]['imgsrc'],
        "img43" => $v['lmini'][0]['imgsrc'],
        "idx" => $k+1,
        "uniquekey"=>$v["uniquekey"]
    ];
}
$redis = \Io\Redis::getInstance();
$redis->set("eastdaypc:index:top35",json_encode($data));
Log::info("new_hot_top27 | update successfully! time = ". time());
Log::info("new_hot_top27 | data: ".json_encode($data));

