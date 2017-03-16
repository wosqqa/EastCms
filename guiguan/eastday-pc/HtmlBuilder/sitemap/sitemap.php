<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/30
 * Time: 15:57
 */

require __DIR__ . "/../../Common/common.php";
use Model\Eastday\EastdaypcNews;
use Io\HtmlBuilder;
use Lib\Core;
use Io\Log;
use \Model\Eastday\Sitemap;
$limit_num = 30000;

$h = HtmlBuilder::get_instance();
$count = EastdaypcNews::get_instance()->getCountByYmd();
$pagecount = intval(ceil($count / $limit_num));
$sitemaps = [];
for($i=0; $i<$pagecount; $i++){
	$arr = [];
	$ret = EastdaypcNews::get_instance()->getNewsByYmd(date('Ymd'), $limit_num * $i, $limit_num);
	if (!$ret || !is_array($ret)) {
		Log::error("sitemap | build sitemap failed");
		break;
	}
	foreach ( $ret as $k=>$v ){
		$item['url'] = 'http://mini.eastday.com/a/'.$v['url'];
		$item['news_time'] = $v['news_time'];
		$arr[] = $item;
	}
	$h->assign('news', $arr);
	$xmlname = ($i == 0) ? 'sitemap-'.date('Y-m-d') . '.xml' : 'sitemap-'. date('Y-m-d') . '-' . $i .'.xml';
	$sitemaps[] = 'http://mini.eastday.com/'.$xmlname;
	$h->build_html(__TEMPLATE_DIR.'sitemap.php', __WWW_ROOT.$xmlname);
	$uploadret = _upload(__WWW_ROOT.$xmlname, '');
	if($uploadret){
		Sitemap::get_instance()->add([$xmlname,date('Y-m-d')]);
	}
}

//生成sitemap索引xml
$sitemaps_arr = Sitemap::get_instance()->getAll();
if(!$sitemaps_arr){
	Log::error("sitemap | get sitemaps from mysql  failed");
	exit();
}
$sitemaps = [];
foreach ($sitemaps_arr as $k=>$v){
	$sitemaps[] = $v['sitemap_name'];
}
$h->assign('sitemaps', $sitemaps);
$h->build_html(__TEMPLATE_DIR.'sitemap_index.php', __WWW_ROOT.'sitemap_index.xml');
_upload(__WWW_ROOT.'sitemap_index.xml', '');



