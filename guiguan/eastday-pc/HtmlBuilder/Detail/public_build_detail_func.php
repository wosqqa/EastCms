<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2016/3/30
 * Time: 10:05
 */

require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Lib\Core;

function is_leadermode($topic){
	$leaders = Core::config('leaders');
	$topic_temp = str_replace($leaders,'',$topic);
	return strlen($topic) != strlen($topic_temp);
}


function devide($contents, $devide_start){
	$real_contents = mb_substr($contents,$devide_start);
	$p_end_pos = mb_get_all_pos("</p>",$real_contents);
	$img_pos = mb_get_all_pos("$#imgidx=",$real_contents);
	$total_words_pos = mb_strlen($real_contents);
	$pos_to_devide = $total_words_pos;
	//先判断三张图片一共到了多少个字
	$pos_of_3img = $total_words_pos;
	if(count($img_pos) >= 3){
		$pos_of_3img = $img_pos[2]+19;
	}
	if($pos_of_3img <= 800){
		//如果三张图片小于800则取三张图片的结尾
		$pos_to_devide_temp = $pos_of_3img;
		$pos_to_devide = (($total_words_pos - $pos_to_devide_temp) >= 400 || ( count((array)$img_pos) > 0 && $img_pos[count($img_pos)-1] >= $pos_to_devide_temp) )  ? $pos_to_devide_temp : $total_words_pos;
	}else {
		//如果三张图片大于800则取出800个字的位置
		$devide_pos_of_800 = $total_words_pos;
		foreach($p_end_pos as $k=>$v){
			if($p_end_pos[$k] <= 800 && $p_end_pos[$k+1] >= 800){
				$devide_pos_of_800 = ($p_end_pos[$k] - 800) <  ($p_end_pos[$k+1] - 800) ? $p_end_pos[$k]  : $p_end_pos[$k+1];
				$devide_pos_of_800 = $devide_pos_of_800 + 4;
				break;
			}
		}
		$pos_to_devide = (($total_words_pos - $devide_pos_of_800) > 400 ||( count((array)$img_pos) > 0 &&  $img_pos[count($img_pos)-1] >= $devide_pos_of_800) ) ? $devide_pos_of_800 : $total_words_pos;
	}
	return $pos_to_devide + $devide_start;

}

function mb_get_all_pos($str_to_find,$source_str){
	$j = 0;
	$mb_count = mb_strlen($source_str);
	$mb_str_count = mb_strlen($str_to_find);
	$pos = [];
	while($j < $mb_count){
		$j = mb_stripos($source_str,$str_to_find,$j);
		if($j === false) break;
		$pos[] =$j;
		$j = $j + $mb_str_count;

	}
	return $pos;
}

function getTop50(){
	$key = "eastdaypc:detail:top50";
	$redis = Redis::getInstance();
	$top50 = $redis->get($key);
	return (array)(json_decode($top50,true));
}

function getXbjx(){
	$key = "eastdaypc:detail:xbjx";
	$redis = Redis::getInstance();
	$xbjx = $redis->get($key);
	return (array)(json_decode($xbjx,true));
}

function getRmtjArr($type){
	$redis = Redis::getInstance();
	$recommend_json = $redis->get('eastdaypc:detail:recommend:'.$type);
	$recommend_arr = json_decode($recommend_json,true);
	$recommend_arr = array_slice($recommend_arr,0,10);
	return $recommend_arr;
}

//获取新闻聚焦
function getXwjj(){
	$key = "eastdaypc:detail:xwjj";
	$redis = Redis::getInstance();
	$xbjx = $redis->get($key);
	return (array)(json_decode($xbjx,true));
}


//获取360渠道新闻聚焦（人工编辑）
function getXwjjFor360(){
	$key = "eastdaypc:detail:xwjj_360";
	$redis = Redis::getInstance();
	$xbjx = $redis->get($key);
	return (array)(json_decode($xbjx,true));
}


function getTbtjFor360(){
	$key = "eastdaypc:detail:tbtj";
	$redis = Redis::getInstance();
	$xbjx = $redis->get($key);
	return (array)(json_decode($xbjx,true));
}

/**
 * @param $url
 * @return mixed
 *  主动推送给百度，让其收录
 */
function push_to_baidu($url){
	$urls = array(
		$url
	);
	$api = 'http://data.zz.baidu.com/urls?site=mini.eastday.com&token=b5IjP4hx6ruIgGJ4';
	$ch = curl_init();
	$options =  array(
		CURLOPT_URL => $api,
		CURLOPT_POST => true,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_CONNECTTIMEOUT =>10,
		CURLOPT_POSTFIELDS => implode("\n", $urls),
		CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
	);
	curl_setopt_array($ch, $options);
	$result = curl_exec($ch);
	return $result;
}