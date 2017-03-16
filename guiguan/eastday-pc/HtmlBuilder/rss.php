<?php
require __DIR__ . "/../Common/common.php";
use Io\HtmlBuilder;
use Io\Log;
use Lib\Core;

if(!file_exists(__WWW_ROOT.'a/')){
    mkdir(__WWW_ROOT.'a/',0777,true);
}
$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50Json = getJsonResponse($top50Url,$params);
if (!$top50Json) {
    Log::error('fail to get top50 data');
    exit();
}
if (!$top50Json['data']) {
    Log::error('the data array is empty,exit');
    exit();
}
$dataTemp = array_slice($top50Json['data'],0,50);
$data = [];
foreach($dataTemp as $item){
    $d = [];
    $d['topic'] = $item['topic'];
    $d['url'] = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html';
    $d['img'] = $item['lmini'][0]['imgsrc'];
    $d['time'] = date("Y-m-d H:i:s",$item['cts'] / 1000);
    // 正文有内容影响rss 暂时不显示
    $d['zw'] = '';//str_replace("&nbsp;","",$item['zw']);
    $data[] = $d;
}
$htmlBuilder = HtmlBuilder::get_instance();
$htmlBuilder->assign('data',$data);
$out_put_path  = __WWW_ROOT."rss.xml";
$ret  = $htmlBuilder->build_html(__TEMPLATE_DIR.'rss.php',$out_put_path);
_upload($out_put_path, Core::config('cdn_prefix')['channel']);