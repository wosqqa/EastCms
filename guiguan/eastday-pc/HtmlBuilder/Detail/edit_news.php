<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/22
 * Time: 14:18
 */
require __DIR__.'/public_build_detail_func.php';
use Io\HtmlBuilder;
use Io\Log;
use Lib\Core;
use Model\EastdayAdmin\News;
use Model\EastdayAdmin\NewsContent;
use Io\Redis;
while(1) {
	$news_id = trim(Redis::getInstance()->lPop("eastdaypc:editnews:add"));
	if($news_id){
		Log::info("eastdaypc:news:add pop key:".$news_id);
		$ret = News::get_instance()->info($news_id);
		if (!$ret) {
			Log::error('cannot find news with the given news_id:' . $news_id);
			continue;
		}
		$news = $ret[0];
		$news_content = NewsContent::get_instance();
		$contentRet = $news_content->info($news_id);
		if (!$contentRet) {
			Log::error('cannot find news content with the given news_id:' . $news_id);
			continue;
		}
		$top50 = getTop50();
		//小编精选
		$xbjx = array_slice($top50, 26, 5);
		//热点排行
		$rdph = array_slice($top50, 31, 4);
		//今日热点
		$jrrd = array_slice($top50, 22, 4);
		//特别推荐
		$tbtj = array_slice($top50, 12, 10);
		//新闻聚焦
		$xwjj = getXwjj();
		//相关推荐
		$xgtj = array_slice($top50, 0, 12);

		/****************
		 * 这里的channel来自mysql!!!
		 ****************/
		//热门推荐
		$rmtjArr = getRmtjArr($news['type']);
		//360渠道新闻聚焦
		$xwjj_360 = getXwjjFor360();
		$tbtj_360 = getTbtjFor360();
		//分页
		$content_pages = [];
		foreach ($contentRet as $item) {
			$content_pages[] = rtrim($item['text']);
		}
		$j = 0;
		$uk = '';
		for ($i = 0; $i < count($content_pages); $i++) {
			$b = HtmlBuilder::get_instance();
			$content = $content_pages[$i];
			$b->assign("rmtjArr", $rmtjArr);
			$b->assign("content", $content);
			$b->assign("topic", $news['title']);
			$b->assign("from", $news['sources']);
			$b->assign("time", $news['show_date']);
			$b->assign("total_pages", count($content_pages));
			$b->assign("now_page", $i + 1);
			$b->assign("channel", $news['type']);
			$b->assign('xbjx', $xbjx);
			$b->assign('tbtj', $tbtj);
			$b->assign('jrrd', $jrrd);
			$b->assign('rdph', $rdph);
			$b->assign('xwjj', $xwjj);
			$b->assign('xgtj', $xgtj);
			$b->assign('xwjj_360', $xwjj_360);
			$b->assign('tbtj_360', $tbtj_360);
			$b->assign("leadermode", is_leadermode($news['title']));
			$detail_page_name = str_replace('http://mini.eastday.com/a/', '', $news['url']);
			$b->assign("share_url", $news['url']);
			if (__SDK_ENV == 'test') {
				$detail_page_name = str_replace('http://testmini.eastday.com/a/', '', $news['url']);
			}
			$uk = str_replace('.html', '', basename($detail_page_name));
			if (strpos($uk, 'n') > 0) {
				//if(count($content_pages) > 1 || strpos($uk,'n') > 0){
				$b->assign("uk_for_tbtj", '');
			} else {
				$b->assign("uk_for_tbtj", $uk);
			}
			if ($i == 0) {
				$detail_page_name = $uk . ".html";
			} else {
				$detail_page_name = $uk . "-" . ($i + 1) . ".html";
			}
			$b->assign('human_news', true);
			$b->assign("uk", $uk);
			$out_put_path = Core::config('detail_path') . $detail_page_name;
			$start_time = time();
			Log::info("[Detail] start build static html " . $detail_page_name);
			$ret = $b->build_html(__TEMPLATE_DIR . 'detail.php', $out_put_path);
			$end_time = time();
			$use = $end_time - $start_time;
			if ($ret) {
				Log::info("[Detail] complete build static html $detail_page_name, ret: $ret, use: $use");
			} else {
				Log::error("[Detail] complete build static html $detail_page_name, ret: $ret, use: $use");
			}
			//上传到cdn
			$prefix = Core::config('cdn_prefix')['detail'];
			if (_upload($out_put_path, $prefix))$j++;
		}
		//页面上传成功之后再更新flag
		if ($j == count($content_pages)) {
			Log::info('upload edit news successfully');
		} else {
			Log::error('upload edit news failed');
		}
	} else {
		sleep(3);
	}
}