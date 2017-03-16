<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/11/23
 * Time: 15:41
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

//获取所有新闻
$out_news = HomeData::get_instance()->get_news();
$out_news_uniques = array_column($out_news,'uniquekey');

//开启事务
HomeData::get_instance()->getPdo()->beginTransaction();
//删除过期时间新闻
HomeData::get_instance()->delete_out_time(time());
//获取新闻数量
$new_count = HomeData::get_instance()->get_count_news();

if($new_count>35){
    HomeData::get_instance()->getPdo()->rollBack();
    Log::error('只能存放33条新闻');
}else{
    $uniqueKeys = HomeData::get_instance()->get_unique_keys();
    $uniqueKeysfire = FilterUniquekeys::get_instance()->get_unique_keys();
    $filters = array_merge($uniqueKeys,$uniqueKeysfire);
    $temp_arr = [];

    foreach($top50Data as $k=>$v){
        //如果在黑名单中，删除
        if(in_array($v['uniquekey'],$filters) ){
            unset($top50Data[$k]);
        }
    }
    //重新开始构建索引
    $top50Data = array_values($top50Data);

    foreach($top50Data as $k=>$v){
            //如果不在黑名单
            if(!in_array($v['uniquekey'],$filters) ){
                if($keys = array_keys($out_news_uniques,$v['uniquekey'])){
                    $need_key = $keys[0];
                    $v['topic'] =$out_news[$need_key]['topic'];
                    $v['llunb'][0]['imgsrc'] =$out_news[$need_key]['img21'];
                    $v['lmini'][0]['imgsrc'] =$out_news[$need_key]['img43'];
                    $v['uniquekey'] =$out_news[$need_key]['uniquekey'];
                    $v['topic_max'] =$out_news[$need_key]['topic_max'];
                    $v['url'] =$out_news[$need_key]['url'];
                }
                HomeData::get_instance()->insert_news($v,$k+1);
                if ($k > 33 ) break;
            }

    }
    HomeData::get_instance()->getPdo()->commit();
}

