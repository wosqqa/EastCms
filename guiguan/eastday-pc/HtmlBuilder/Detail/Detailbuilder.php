<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/9
 * Time: 11:03
 */

use Io\Redis;
use Io\Log;
use Lib\Core;
use Io\HtmlBuilder;

require_once 'public_build_detail_func.php';

class Detailbuilder
{

	private $detail_url;
	private $rowkey;
	private $uk;
    private $dt;
	private $top50;
	private $output_path;                   //生成路径
	private $update_flag;                   //是否需要更新flag
	private $push_to_baidu;                 //是否需要主动推送到百度
	private $save_news;                     //是否需要存储到eastday_pc_news表
	private $devide_to_pages;               //是否需要分页
	private $cdn_prefix;                    //上传到cdn的哪个目录
	private $check_strlen_below_img;        //检查图片下方第一行内容长度，如果少于35字则删除
	private $update_rebuild_status;         //如果是人工添加的百度新闻和360新闻，修改是否重新生成的状态

	function __construct($rowkey, $uk=null, $dt=null)
	{
		$this->rowkey = $rowkey;
		$this->uk = $uk;
		$this->dt = $dt;
		$this->top50 = getTop50();
		$this->detail_url = Core::config('detail');
		$this->output_path = Core::config('detail_path');
		$this->update_flag = true;
		$this->push_to_baidu = true;
		$this->save_news = true;
		$this->devide_to_pages = true;
		$this->cdn_prefix = Core::config('cdn_prefix')['detail'];
		$this->check_strlen_below_img = false;
		$this->update_rebuild_status = false;
	}

	/**
	 * @param mixed $detail_url
	 */
	public function setDetailUrl($detail_url)
	{
		$this->detail_url = $detail_url;
	}

	/**
	 * @param mixed $output_path
	 */
	public function setOutputPath($output_path)
	{
		$this->output_path = $output_path;
	}

	/**
	 * @param mixed $update_flag
	 */
	public function setUpdateFlag($update_flag)
	{
		$this->update_flag = $update_flag;
	}

	/**
	 * @param mixed $push_to_baidu
	 */
	public function setPushToBaidu($push_to_baidu)
	{
		$this->push_to_baidu = $push_to_baidu;
	}

	/**
	 * @param mixed $save_news
	 */
	public function setSaveNews($save_news)
	{
		$this->save_news = $save_news;
	}

	/**
	 * @param boolean $devide_to_pages
	 */
	public function setDevideToPages($devide_to_pages)
	{
		$this->devide_to_pages = $devide_to_pages;
	}

	/**
	 * @param mixed $cdn_prefix
	 */
	public function setCdnPrefix($cdn_prefix)
	{
		$this->cdn_prefix = $cdn_prefix;
	}

	/**
	 * @param mixed $check_strlen_below_img
	 */
	public function setCheckStrlenBelowImg($check_strlen_below_img)
	{
		$this->check_strlen_below_img = $check_strlen_below_img;
	}

	/**
	 * @param boolean $update_rebuild_status
	 */
	public function setUpdateRebuildStatus($update_rebuild_status)
	{
		$this->update_rebuild_status = $update_rebuild_status;
	}


	function run()
	{
		list($type, $short_rowkey) = explode("_", $this->rowkey);
		if (!trim($short_rowkey)) return false;
		$channel_map = Core::config('channel_map');
		$channel = array_search($type, $channel_map);
		if (!$channel) {
			//没有分类的新闻默认分类为新闻
			$channel = 'xinwen';
		}
		$detail_params = ['rowkey' => $short_rowkey];
		$detailArrayResponse = getJsonResponse($this->detail_url, $detail_params);
		if (!$detailArrayResponse || $detailArrayResponse['code'] != 200) {
			//201是接口获取no data
			if ($detailArrayResponse['code'] == 201) {
				Log::error('[Detail]build fail, ret:' . json_encode($detailArrayResponse));
				return false;
			}
			Log::error('[Detail]build fail, ret:' . json_encode($detailArrayResponse));
			return 404;
		}

		$detailArray = $detailArrayResponse['data'][0];
		$topic = $detailArray['topic'];
		$from = $detailArray['source'];
		$java_timestamp = $detailArray['crawlerts'];
		$uk = $this->uk ? $this->uk : date('ymdHis', substr($java_timestamp, 0, 10)) . substr($java_timestamp, -3);
		$time = $this->dt ? $this->dt : date('Y-m-d H:i',substr($java_timestamp,0,10));

		$contents = $detailArray['content'];
		//过滤视频
		$contents = preg_replace('/\$#videoidx=(\d{4})#\$/', '', $contents);
		$contents = preg_replace('/\$#audioidx=(\d{4})#\$/', '', $contents);

		//过滤无用图片
		$matches = [];
		preg_match_all('/\$#imgidx=(\d{4})#\$/', $contents, $matches);
		$imgs = $detailArray['imgs'];
		$imgs_temp = [];
		$imgs_w_and_h = [];
		foreach ($imgs as $v) {
			$imgs_temp[$v['idx']] = $v['src'];
			$imgs_w_and_h[$v['idx']] = [$v['imgwidth'], $v['imgheight']];
		}
		$replace_arr = [];
		foreach ($matches[0] as $key => $val) {
			$idx = intval($matches[1][$key]);
			$replace_arr[] = $imgs_temp[$idx] ? $matches[0][$key] : "";
		}
		$contents = str_replace($matches[0], $replace_arr, $contents);

		//替换p标签
		$contents = str_replace("!@#!@!@#!@", "!@#!@", $contents);
		$contents = str_replace('　　', '', $contents);
		$contents = str_replace(' ', '', $contents);
		$contents = str_replace('&nbsp;', ' ', $contents);
		$content_array = explode("!@#!@", $contents);
		$newArr = [];
		foreach ((array)$content_array as &$val) {
			$val = trim($val, " \t\n\r\0\x0B\xC2\xA0");
			$newArr[] = $val;
		}
		$contents = implode('</p><p>', $newArr);
		$contents = '<p>' . $contents . '</p>';
		$contents = str_replace('<p></p>', '', $contents);
		if($this->check_strlen_below_img){
			$contents = $this->check_strlen_below_img($contents);
		}

		$content_pages = [];
		$j = 0;
		if ($from != '新闻早餐' && $this->devide_to_pages) {
			$devide_start = 0;
			$devide_pos_arr = [];
			while ($devide_start <= mb_strlen($contents)) {
				$devide_pos_arr[] = $devide_pos = devide($contents, $devide_start);
				$devide_start = $devide_pos + 1;
			}
			array_unshift($devide_pos_arr, 0);

			foreach ($devide_pos_arr as $k => $v) {
				if ($k < count($devide_pos_arr) - 1) {
					$start = $v;
					$len = $devide_pos_arr[$k + 1] - $start;
					$content_pages[] = mb_substr($contents, $start, $len);
				}
			}
		} else {
			$content_pages[] = $contents;
		}


		//获取各个栏目数据
		$sectionData = $this->getData($channel);

		for ($i = 0; $i < count($content_pages); $i++) {
			$b = HtmlBuilder::get_instance();
			$content = $content_pages[$i];
			$matches = [];
			preg_match_all('/\$#imgidx=(\d{4})#\$/', $content, $matches);
			$replace_arr = [];
			foreach ($matches[0] as $key => $val) {
				$idx = intval($matches[1][$key]);
				if($imgs_w_and_h[$idx][0] <= 670){
					$width = $imgs_w_and_h[$idx][0];
					$height = $imgs_w_and_h[$idx][1];
				}else{
					$width = 670;
					$height = 670 * ( $imgs_w_and_h[$idx][1] / $imgs_w_and_h[$idx][0] );
				}
				$replace_arr[] = $imgs_temp[$idx] ? "<div class='widt_ad'><img class='scrollLoading' width='" . $width . "' height = '" . $height . "' src='" . str_replace("http://","//",$imgs_temp[$idx]) . "'></div>" : "";
			}
			$content = str_replace($matches[0], $replace_arr, $content);
			$b->assignArray($sectionData);
			$b->assign("content", $content);
			$b->assign("topic", $topic);
			$b->assign("from", $from);
			$b->assign("time", $time);
			$b->assign("total_pages", count($content_pages));
			$b->assign("now_page", $i + 1);
			$b->assign("uk", $uk);
			$b->assign("share_url", "http://mini.eastday.com/a/" . $uk . ".html");
			if (strpos($uk, 'n') > 0) {
				//if(count($content_pages) > 1 || strpos($uk,'n') > 0){
				$b->assign("uk_for_tbtj", '');
			} else {
				$b->assign("uk_for_tbtj", $uk);
			}
			$b->assign("channel", $channel);

			$b->assign("leadermode", is_leadermode($topic));
			$b->assign('rowkey', $short_rowkey);
			if ($i == 0) {
				$detail_page_name = $uk . ".html";
			} else {
				$detail_page_name = $uk . "-" . ($i + 1) . ".html";
			}
			$b->assign("this_url", "http://mini.eastday.com/a/" . $detail_page_name);

			$out_put_path = $this->output_path . $detail_page_name;

			$start_time = time();
			Log::info("[Detail] start build static html " . $detail_page_name);
			$ret = $b->build_html(__TEMPLATE_DIR . 'detail.php', $out_put_path);
			//$ret = $b->build_html(__TEMPLATE_DIR.'detail_v1.php',__WWW_ROOT.'detail_v1.html');
			$end_time = time();
			$use = $end_time - $start_time;
			if ($ret) {
				Log::info("[Detail] complete build static html $detail_page_name, ret: $ret, use: $use");
			} else {
				Log::error("[Detail] complete build static html $detail_page_name, ret: $ret, use: $use");
			}

			//上传cdn
			$prefix = $this->cdn_prefix;
			if (_upload($out_put_path, $prefix, true, $this->rowkey)) {
				if($this->push_to_baidu){
					$this->push_to_baidu($uk);
				}
				$j++;
			}
			if($j == count($content_pages)){
				if($this->save_news){
					//插入redis
					$news = [];
					$news['rowkey'] = $this->rowkey;
					$news['type'] = $type;
					$news['pagecount'] = $j;
					$news['topic'] = $topic;
					$news['url'] = $uk . ".html";
					$news['ymd'] = date("Ymd");
					$news['news_time'] = $time;
					$news['save_time'] = time();
					Redis::getInstance()->lPush("bak:eastdaypc:news", json_encode($news));
				}
			}
		}


		//修改news360中状态
		if($this->update_rebuild_status){
			$ret = \Model\EastdayAdmin\News360::get_instance()->update(['status'=>1,'utime'=>time()], ['rowkey'=>$this->rowkey]);
			if(!$ret){
				Log::error("[Detail] rebuid:".\Model\EastdayAdmin\News360::get_instance()->getLastSql());
				return  false;
			}
		}

		//页面上传成功之后再更新flag
		if (__SDK_ENV == "test") return true;
		if($this->update_flag){
			return $this->update_flag($content_pages, $j, $short_rowkey);
		}

		if($j != count($content_pages)){
			return false;
		}else{
			return true;
		}
	}


	function push_to_baidu($uk){
		if(__SDK_ENV == 'online'){
			$url = "http://mini.eastday.com/a/" . $uk . ".html";
			$push_result = push_to_baidu($url);
			$push_result = json_decode($push_result, true);
			if($push_result['success'] != 1){
				Log::error("push to baidu failed, url:" . $url);
			}
		}
	}


	function update_flag($content_pages, $j, $short_rowkey){
		if ($j == count($content_pages)) {
			global $redis;
			$ok = $redis->sAdd('global:' . $short_rowkey, "eastdaypc");
			Log::info("sAdd global " . $short_rowkey . " |" . $ok);
			$ok = $redis->sAdd('pre:eastdaypc:update:flag', $short_rowkey);
			Log::info("pre:eastdaypc:update:flag" . $short_rowkey . " |" . $ok);

			return true;
		} else {
			return 404;
		}
	}

	function getData($channel){

		$top50 = $this->top50;
		//小编精选
		$data['xbjx'] = array_slice($top50, 26, 5);
		//热点排行
		$data['rdph'] = array_slice($top50, 31, 4);
		//今日热点
		$data['jrrd'] = array_slice($top50, 22, 4);
		//特别推荐
		$data['tbtj'] = array_slice($top50, 12, 10);
		//新闻聚焦
		$data['xwjj'] = getXwjj();
		//相关推荐
		$data['xgtj'] = array_slice($top50, 0, 12);

		//360渠道新闻聚焦
		$data['xwjj_360'] = getXwjjFor360();
		$data['tbtj_360'] = getTbtjFor360();
		//热门推荐
		$data['rmtjArr'] = getRmtjArr($channel);
		return $data;

	}


	function check_strlen_below_img($contents){
		$arr = []; //用来存放所有要替换掉的段落
		$p_pos_arr = mb_get_all_pos('<p>',$contents);
		$img_pos_arr = mb_get_all_pos('$#imgidx=00',$contents);
		foreach ($img_pos_arr as $k=>$v){
			$p_pos_below_img = $v + 19;  //图片下方p标签起始位置
			$i = array_search($p_pos_below_img, $p_pos_arr);   //该位置对应下标
			$next_p_pos_below_img = $p_pos_arr[$i+1];
			$strlen = $next_p_pos_below_img - $p_pos_below_img - 7;
			if($strlen < 35){
				$arr[] = mb_substr($contents,$p_pos_below_img, $strlen+7, 'utf-8');
			}
		}
		return str_replace($arr, '', $contents);
	}


}

