<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/6/6
 * Time: 11:30
 * 生成频道页 体育栏目 首页
 */

require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Io\Log;
use Lib\Core;

$data =[];

//头条部分
$redis = Redis::getInstance();
$toutiao_json = $redis->get("eastdaypc:tiyu:toutiao:release");
$data['toutiao'] = json_decode($toutiao_json,true);

//轮播图
Log::info("start to get tiyu lunbo array");
$lunHuanArray = [];
for ($i = 1; $i < 7; $i++) {
    $key = "tiyu:lunhuan:p" . $i;
    $val = $redis->get($key);
    if (!$val) {
        Log::error('get tiyu-lunhuan pics from redis failed, exit');
        continue;
    }
    $val = json_decode($val);
    $item = [];
    $item['topic'] = $val->topic;
    $item['img'] = $val->img;
    $item['url'] = $val->uk;
    $lunHuanArray[] = $item;
}
Log::info("complete to get lunbo array, return:".json_encode($lunHuanArray));
$data['lunbo'] = $lunHuanArray;

$sports_channel = Lib\Core::config("tiyu_map");
$typeUrl =  Lib\Core::config('type');
foreach($sports_channel as $key => $val){
    $data[$key] = getSportsJsonDataByChannel($typeUrl,$key);
    if($data[$key] == false){
        Log::error("tiyu_index | " . $key ." type data is not enough ,exit.");
        exit();
    }
}
$html_builder = \Io\HtmlBuilder::get_instance();
$html_builder->assign("data",$data);
$out_put_paths = \Lib\Core::config('channel_path');
$out_put_path = $out_put_paths["sports"];
$html_builder->build_html(__TEMPLATE_DIR.'channel_tiyu.php',$out_put_path);

$prefix = Core::config('cdn_prefix')['channel'];
_upload($out_put_path, $prefix);


