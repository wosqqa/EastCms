<!doctype html>
<html lang="zh-cmn-Hans-CN">
<head>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta name="filetype" content="1">
	<meta name="publishedtype" content="1">
	<meta name="pagetype" content="2">
	<meta name="catalogs" content="toutiao_PC">
	<meta name="applicable-device" content="pc">
	<link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
	<link rel="canonical" href="http://mini.eastday.com/sports.html" />
	<title><?=\Lib\Core::config('seo')["tiyu"]['title']?></title>
	<meta name="keywords" content="<?=\Lib\Core::config('seo')["tiyu"]['_meta_keywords']?>" />
	<meta name="description" content="<?=\Lib\Core::config('seo')["tiyu"]['_meta_description']?>" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>common.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>page_sports_v1.css" />
	<script type="text/javascript" src="<?php echo __WWW_JS ?>device_index.js"></script>
	<script src="//dup.baidustatic.com/js/ds.js"></script>
	<!-- html5shiv.js支持H5的插件&Respond.js支持媒体查询的插件 -->
	<!--[if lt IE 9]>
	<script src="<?php echo __WWW_JS ?>html5shiv.js"></script>
	<script src="<?php echo __WWW_JS ?>respond.min.js"></script>
	<![endif]-->
	<script type="text/javascript">var img_domain = "http://ddtest.w.wcsapi.biz.matocloud.com/"; var newstype = "tiyu_index";</script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
	<script src="<?php echo __WWW_JS ?>global.js"></script>
	<!-- 搜索框提示词 -->
	<script type="text/javascript" src="<?php echo __WWW_JS_V1 ?>search_word.js"></script>
</head>
<body>
<!-- 顶部导航 start -->
<div class="header_cnt_detail clear-fix">
	<div class="header_cnt_l_detail clear-fix">
		<ul class="nav_detail clearfix">

			<li class='first'><a href="/" pdata="tiyu_index|nav|0|0" target="_blank">头条</a></li>
			<li><a href="/mainland.html" pdata="tiyu_index|nav|1|0" target="_blank">国内</a></li>
			<li><a href="/world.html" pdata="tiyu_index|nav|2|0" target="_blank">国际</a></li>
			<li><a class="pr" href="http://miniimg.eastday.com/"  pdata="nav|mini_channel_tiyu|0|0"  target="_blank" >图片<img class="hot" src="<?php echo __WWW_IMG ?>hot_2.gif" alt="" width="21" height="13"></a></li>
			<li><a href="/society.html" pdata="tiyu_index|nav|3|0" target="_blank">社会</a></li>
			<li><a href="/ent.html" pdata="tiyu_index|nav|4|0" target="_blank">娱乐</a></li>
			<li><a href="http://video.eastday.com/" pdata="nav|mini_channel_tiyu|1|0" target="_blank">视频</a></li>
			<li><a href="/fashion.html" pdata="tiyu_index|nav|6|0" target="_blank">时尚</a></li>
			<li><a href="http://mil.eastday.com" pdata="tiyu_index|nav|7|0" target="_blank">军事</a></li>
			<li><a href="/tech.html" pdata="tiyu_index|nav|8|0" target="_blank">科技</a></li>
			<li><a href="/auto.html" pdata="tiyu_index|nav|9|0" target="_blank">汽车</a></li>
			<li><a href="/sports.html" pdata="tiyu_index|nav|10|0" target="_blank">体育</a></li>
			<li><a href="/finance.html" pdata="tiyu_index|nav|11|0" target="_blank">财经</a></li>
			<!--<li><a href="/health.html" pdata="tiyu_index|nav|12|0" target="_blank">健康</a></li>-->
			<li><a href="/history.html" pdata="tiyu_index|nav|13|0" target="_blank">人文</a></li>

			<li id="J_more" class="more-wrap pr">
				<a class="more">更多&nbsp;<img class="png24" src="<?php echo __WWW_IMG ?>chev_b.png" alt="" width="10" height="7"></a>
				<div class="J-more-link more-link none">
					<a href="/games.html" pdata="tiyu_index|nav|15|0" target="_blank">游戏</a>
					<a href="/astro.html" pdata="tiyu_index|nav|16|0" target="_blank">星座</a>
					<a href="/home.html" pdata="tiyu_index|nav|17|0" target="_blank">家居</a>
					<a href="http://tianqi.eastday.com/?qid=nav" target="_blank">天气</a>
			      <a href="/health.html" pdata="tiyu_index|nav|12|0" target="_blank">健康</a>
					<a href="/listpage/mainland.html" pdata="tiyu_index|nav|14|0" target="_blank">滚动</a>
				</div>
			</li>
		</ul>
		<div class="icon_cnt_dtl clear-fix">
			<a class='weixin_ew' href="javascript:;">微信<span></span></a>
			<a class='phone_ew' href="javascript:;">手机版<span></span></a>
		</div>
	</div>
	<!-- 顶部导航 start -->

	<!-- 头部 start -->
	<div class="header">
		<div class="header_cnt_n">
			<div class="header_cnt_l"><a href="/" target="_blank"><img src="<?php echo __WWW_IMG ?>logo_sports.png" width="206" height="42" alt="东方头条网" title='东方头条网'></a>
			</div>
			<div class="header_cnt_2">
				<!-- 广告位：新版新闻首页 顶部右侧640*60-百度 -->
				<!--<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/index/index_640_60_gg.js"></script>-->
				<div class="header_cnt_s">
					<form action="http://s.eastday.com/" target='_blank'>
						<input type="text" value="" placeholder='请输入' name="kw"  class="search_head" id='search_head' />
						<a id='search_btn' href="http://s.eastday.com/" target='_blank'></a>
						<script type="text/javascript">
							(function(){
								var $input = $('#search_head');
								var $btn_a = $('#search_btn');
								$input.val(JS_SEARCH_WORD);
								$btn_a.attr('href','http://s.eastday.com/?kw='+encodeURI(JS_SEARCH_WORD));
								$input.focus(function(){
									if($.trim($(this).val()) == JS_SEARCH_WORD){
										$(this).val('');
									}
								});
								$input.blur(function(){
									if($.trim($(this).val()) == ''){
										$(this).val(JS_SEARCH_WORD);
									}
									$btn_a.attr('href','http://s.eastday.com/?kw='+encodeURI($input.val()));
								});
							})();
						</script>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- /头部 end -->
</div>

<!-- 导航 start -->
<div class="nav_content">
	<div class="bg_top"></div>
	<ul class="nav_ul_box">
		<li class="nav_ul_box_ch"><a href="#" target="_blank" class="active">首页</a></li>
		<li class="nav_ul_box_ch border_line"><ul><li><a href="/nba.html" pdata="tiyu_index|sub_nav|0|0" target="_blank">NBA</a></li><li><a href="/cba.html" pdata="tiyu_index|sub_nav|1|0" target="_blank">CBA</a></li></ul></li>
		<li class="nav_ul_box_ch border_line"><ul><li><a href="/premierleague.html" pdata="tiyu_index|sub_nav|5|0" target="_blank">英超</a></li><li><a href="/laliga.html" pdata="tiyu_index|sub_nav|4|0" target="_blank">西甲</a></li><li><a href="/seriea.html" pdata="tiyu_index|sub_nav|3|0" target="_blank">意甲</a></li><li><a href="/bundesliga.html" pdata="tiyu_index|sub_nav|2|0" target="_blank">德甲</a></li><li><a href="/csl.html" pdata="tiyu_index|sub_nav|6|0" target="_blank">中超</a></li></ul></li>
		<li class="nav_ul_box_ch border_line"><a href="/tennis.html" pdata="tiyu_index|sub_nav|7|0" target="_blank" class="box_border">网球</a></li>
		<li class="nav_ul_box_ch border_line"><a href="/badmin.html" pdata="tiyu_index|sub_nav|8|0" target="_blank" class="box_border">羽毛球</a></li>
		<li class="nav_ul_box_ch border_line"><a href="/golf.html" pdata="tiyu_index|sub_nav|9|0" target="_blank" class="box_border">高尔夫</a></li>
		<li class="nav_ul_box_ch border_line"><a href="/volley.html" pdata="tiyu_index|sub_nav|10|0" target="_blank" class="box_border">排球</a></li>
		<li class="nav_ul_box_ch border_line"><a href="/tiyu.html" pdata="tiyu_index|sub_nav|11|0" target="_blank" class="box_border">综合</a></li>
		<li class="nav_ul_box_ch border_line"><a href="/chess.html" pdata="tiyu_index|sub_nav|12|0" target="_blank" class="box_border">棋牌</a></li>
		<li class="nav_ul_box_ch border_line border_right_none"><a href="http://video.eastday.com/vtiyu.html" pdata="tiyu_index|sub_nav|13|0" target="_blank" class="box_border">视频</a></li>
	</ul>
</div>
<!-- /导航 end -->
<script type="text/javascript">
	$("li[class='nav_ul_box_ch border_line border_right_none']").find("a").click(function(){
		if(coo_name != null && coo_name != ''){
			window.open($(this).attr("href") + "?" + coo_name);
		}
	});

</script>

<!-- 第一屏 start -->
<div class="first-view">
	<div class="container first-view-container clearfix">
		<?php $toutiaoArr = $data['toutiao']; ?>
		<div class="hot_news_h2 clearfix">
			<a href="<?= $toutiaoArr[0]['url'] ?>" target="_blank"><span>头条</span></a><h1><a href="<?= $toutiaoArr[0]['url'] ?>" pdata="tiyu_index|toutiao|0|0" target="_blank"><?= $toutiaoArr[0]['topic'] ?></a></h1>
		</div>

		<!-- 热点要闻 + 个性推荐 start -->
		<div class="hot-personality fl">
			<div class="hot-personality-content pr clearfix">
				<!-- 热点要闻 start -->
				<div id="J_hot_news" class="hot-news clearfix">
					<ul class="hnb-list">
						<?php for($i=1;$i<=6;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?>" pdata="tiyu_index|toutiao|<?=$i?>|0" target="_blank" title="<?= $toutiaoArr[$i]['topic'] ?>"><span><?= $toutiaoArr[$i]['topic'] ?></span><i class=""></i></a></li>
						<?php } ?>
					</ul>
					<ul class="hnb-list">
						<?php for($i=7;$i<=12;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?>" pdata="tiyu_index|toutiao|<?=$i?>|0" target="_blank" title="<?= $toutiaoArr[$i]['topic'] ?>"><span><?= $toutiaoArr[$i]['topic'] ?></span><i class=""></i></a></li>
						<?php } ?>
					</ul>
					<ul class="hnb-list">
						<?php for($i=13;$i<=18;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?>" pdata="tiyu_index|toutiao|<?=$i?>|0" target="_blank" title="<?= $toutiaoArr[$i]['topic'] ?>"><span><?= $toutiaoArr[$i]['topic'] ?></span><i class=""></i></a></li>
						<?php } ?>
					</ul>

				</div>  <!-- /热点要闻 end -->
				<!-- 个性推荐 start -->
				<div id="J_personality_recommend" class="personality-recommend none">
					<div class="J-pr-content-wrap pr-content-wrap">
						<ul id="J_pr_list" class="pr-list"></ul>
					</div>
					<!--<p class="pr-more"><a href="javascript:;">更多个性推荐新闻</a></p>-->
				</div>  <!-- /个性推荐 end -->
			</div>
		</div>  <!-- /热点要闻 + 个性推荐 end -->
		<div class="carousel-wrap fr">
			<!-- 轮播 start -->
			<div class="carousel">
				<div class="right_slider_cnt">
					<div id="banner_silider" class="banner">
						<?php $lunhuanData = $data['lunbo']?>
						<?php foreach((array)$lunhuanData as $key => $val) {?>
							<a class="img_a <?php if($key == 0){?> >inline<?php }else { ?>none<?php } ?>" target="_blank" data-title="<?=$val['topic']?>" href="<?= $val['url'] ?>" pdata="tiyu_index|lb|<?= $key ?>|0">
								<img src="<?=str_replace("http://","//",$val['img'])?>" alt="<?=$val['topic']?>">
							</a>
						<?php }?>
						<div class="banner_bar"></div>
						<div class="banner_txt">
							<a target="_blank" href="<?= $lunhuanData[0]['url'] ?>" pdata="tiyu_index|lb|0|0"><?=$lunhuanData[0]['topic']?></a>
						</div>
						<div class="banner_act"><div><span class="now"></span></div> <div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div></div><div class="btn_l"></div><div class="btn_r"></div>
					</div>
				</div>
			</div>  <!-- /轮播 end -->
			<div class="carouse_pic">
				<ul class="carouse_pic_ul clearfix">
					<?php for($i=19;$i<=21;$i++) { ?>
						<li><a href="<?= $toutiaoArr[$i]['url']?>" pdata="tiyu_index|toutiao|<?=$i?>|0" target="_blank" title="<?= $toutiaoArr[$i]['topic']?>"><img src="<?= str_replace("http://","//",$toutiaoArr[$i]['img43'])?>" alt="<?= $toutiaoArr[$i]['topic']?>" width="180" height="135"><span><?= $toutiaoArr[$i]['topic']?></span></a></li>
					<?php }?>
				</ul>
			</div>
			<script type="text/javascript">
				$("ul[class='carouse_pic_ul clearfix']").find("li").find("a").click(function(){
					if(coo_name != null && coo_name != ''){
						window.open($(this).attr("href") + "?" + coo_name);
					}
				});

			</script>
		</div>  <!-- /热搜新闻词 + 阅读排行 end -->
	</div>
</div>
<!-- 第一屏 end -->

<!-- 篮球 start -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span class="sports_b"></span><h2>篮球</h2>
		</div>
		<ul id="container_top_b" class="container_top_right fr"><li class="border_left_none"><a href="/nba.html" pdata="tiyu_index|right_label_nba|0|0" target="_blank">NBA</a></li><li class="border_right_none"><a href="/cba.html" pdata="tiyu_index|right_label_cba|0|0" target="_blank">CBA</a></li></ul>
	</div>
	<div id="container_sports_b clearfix">
		<div class="container_content clearfix mt30">
			<div class="container_content_left">
				<div class="c_title">NBA</div>
				<div class="section-left">
					<ul class="sl-list">
						<?php $nbaArr = $data['nba'];?>
						<?php for ($i=0;$i<10;$i++) {?>
							<?php if($i==0){ ?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$nbaArr[$i]['url']?>" pdata="tiyu_index|nba|<?=$i?>|0" target="_blank" title="<?=$nbaArr[$i]['topic']?>"><?=$nbaArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$nbaArr[10]['url']?>" pdata="tiyu_index|nba|10|0" target="_blank" title="<?=$nbaArr[10]['topic']?>"><span><img src="<?=str_replace("http://","//",$nbaArr[10]['imglunbname']['name'])?>" alt="<?=$nbaArr[10]['topic']?>" width="260" height="130"></span><i><?=$nbaArr[10]['topic']?></i></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$nbaArr[11]['url']?>" pdata="tiyu_index|nba|11|0" target="_blank" title="<?=$nbaArr[11]['topic']?>"><span><img src="<?=str_replace("http://","//",$nbaArr[11]['imglunbname']['name'])?>" alt="<?=$nbaArr[11]['topic']?>" width="120" height="90"></span><i><?=$nbaArr[11]['topic']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$nbaArr[12]['url']?>" pdata="tiyu_index|nba|12|0" target="_blank" title="<?=$nbaArr[12]['topic']?>"><span><img src="<?=str_replace("http://","//",$nbaArr[12]['imglunbname']['name'])?>" alt="<?=$nbaArr[12]['topic']?>" width="120" height="90"></span><i><?=$nbaArr[12]['topic']?></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container_content_right">
				<div class="section-left">
					<ul class="sl-list">
						<?php for ($i=13;$i<18;$i++) {?>
							<?php if($i==13){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$nbaArr[$i]['url']?>" pdata="tiyu_index|nba|<?=$i?>|0" target="_blank" title="<?=$nbaArr[$i]['topic']?>"><?=$nbaArr[$i]['topic']?></a></li>
						<?php } ?>

					</ul>
					<ul class="sl-list mt23">
						<?php for ($i=18;$i<22;$i++) {?>
							<?php if($i==18){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$nbaArr[$i]['url']?>" pdata="tiyu_index|nba|<?=$i?>|0" target="_blank" title="<?=$nbaArr[$i]['topic']?>"><?=$nbaArr[$i]['topic']?></a></li>
						<?php } ?>

					</ul>
				</div>
			</div>
		</div>
		<div class="container_content clearfix mt20">
			<div class="container_content_left">
				<div class="c_title">CBA</div>
				<div class="section-left">
					<ul class="sl-list">
						<?php $cbaArr = $data['cba'];?>
						<?php for ($i=0;$i<10;$i++) {?>
							<?php if($i==0){ ?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$cbaArr[$i]['url']?>" pdata="tiyu_index|cba|<?=$i?>|0" target="_blank" title="<?=$cbaArr[$i]['topic']?>"><?=$cbaArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$cbaArr[10]['url']?>" pdata="tiyu_index|cba|10|0" target="_blank" title="<?=$cbaArr[10]['topic']?>"><span><img src="<?=str_replace("http://","//",$cbaArr[10]['imglunbname']['name'])?>" alt="<?=$cbaArr[10]['topic']?>" width="260" height="130"></span><i><?=$cbaArr[10]['topic']?></i></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[11]['url']?>" pdata="tiyu_index|cba|11|0" target="_blank" title="<?=$cbaArr[11]['topic']?>"><span><img src="<?=str_replace("http://","//",$cbaArr[11]['imglunbname']['name'])?>" alt="<?=$cbaArr[11]['topic']?>" width="120" height="90"></span><i><?=$cbaArr[11]['topic']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[12]['url']?>" pdata="tiyu_index|cba|12|0" target="_blank" title="<?=$cbaArr[12]['topic']?>"><span><img src="<?=str_replace("http://","//",$cbaArr[12]['imglunbname']['name'])?>?>" width="120" height="90"></span><i><?=$cbaArr[12]['topic']?></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container_content_right clearfix" style="width: 320px;">
				<div class="container_content_smallimg clearfix mt20">
					<ul class="small_content_mub clearfix">
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[13]['url']?>" pdata="tiyu_index|cba|13|0" target="_blank" title="<?=$cbaArr[13]['topic']?>"><span><img src="<?=str_replace("http://","//",$cbaArr[13]['imglunbname']['name'])?>?>" alt="<?=$cbaArr[13]['topic']?>" width="140" height="105"></span><i><?=$cbaArr[13]['topic']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[14]['url']?>" pdata="tiyu_index|cba|14|0" target="_blank" title="<?=$cbaArr[14]['topic']?>"><span><img src="<?=str_replace("http://","//",$cbaArr[14]['imglunbname']['name'])?>?>" alt="<?=$cbaArr[14]['topic']?>" width="140" height="105"></span><i><?=$cbaArr[14]['topic']?></i></a>
						</li>
					</ul>
				</div>
				<ul class="sl-list mt183">

					<?php for ($i=15;$i<19;$i++) {?>
						<?php if($i==15){?>
							<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
						<?php }else{?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
						<?php }?>
						href="<?=$cbaArr[$i]['url']?>" pdata="tiyu_index|cba|<?=$i?>|0" target="_blank" title="<?=$cbaArr[$i]['topic']?>"><?=$cbaArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- /篮球 end -->
<!-- 广告位：嵩恒_头条_PC_二级页面体育_默认渠道_横幅广告1 -->
<div class="ad_box_1">
	<script>
		(function() {
			var s = "_" + Math.random().toString(36).slice(2);
			document.write('<div id="' + s + '"></div>');
			var sb_id = '';
			if(coo_name == 'qid=sgkz'){
				sb_id = '2580369';
			}else if (coo_name == 'qid=114latiyu'){
				sb_id = '2707255';
			}else if (coo_name == 'qid=114laty'){
				sb_id = '2707266';
			}else if (coo_name == 'qid=dubatiyu'){
				sb_id = '2751054';
			}else if (coo_name == 'qid=f1browser'){
				sb_id = '2800772';
			}else if (coo_name == 'qid=2345shouye'){
				sb_id = '2801151';
			}else if (coo_name == 'qid=2345kzty'){
				sb_id = '2801392';
			}else if (coo_name == 'qid=1234wu'){
				sb_id = '2796257';
			}else if (coo_name == 'qid=360tiyu'){
				sb_id = '2835224';
			}else if (coo_name == 'qid=dubasport'){
				sb_id = '2967273';
			}else if (coo_name == 'qid=jintiantoutiao') {
				sb_id = '3133165';
			}else{
				sb_id = '2570060';
			}
			(window.slotbydup=window.slotbydup || []).push({
				id: sb_id,
				container: s,
				size: '1024,135',
				display: 'inlay-fix'
			});
		})();
	</script>
</div>
<!-- 足球 start -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span class="sports_t"></span><h2>足球</h2>
		</div>
		<ul id="container_top_t" class="container_top_right fr">
			<li class="border_right_none"><a href="/premierleague.html" pdata="tiyu_index|right_label_yingchao|0|0" target="_blank">英超</a></li>
			<li><a href="/laliga.html" pdata="tiyu_index|right_label_xijia|0|0" target="_blank">西甲</a></li>
			<li><a href="/seriea.html" pdata="tiyu_index|right_label_yijia|0|0" target="_blank">意甲</a></li>
			<li class="active border_left_none"><a href="/bundesliga.html" pdata="tiyu_index|right_label_dejia|0|0" target="_blank">德甲</a></li>
			<li class="border_right_none"><a href="/csl.html" pdata="tiyu_index|right_label_zhongchao|0|0" target="_blank">中超</a></li>
		</ul>
	</div>
	<div id="container_sports_t clearfix">
		<div class="container_content clearfix mt30">
			<div class="container_content_left">
				<div class="c_title">国际足球</div>
				<div class="section-left">
					<ul class="sl-list">
						<?php $dejiaArr = $data['bundesliga'];?>
						<?php $yijiaArr = $data['seriea'];?>
						<?php $xijiaArr = $data['laliga'];?>
						<?php $yingchaoArr = $data['premierleague'];?>

						<?php for ($i=0;$i<5;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$dejiaArr[$i]['url']?>" pdata="tiyu_index|dejia|<?=$i?>|0" target="_blank" title="<?=$dejiaArr[$i]['topic']?>"><?=$dejiaArr[$i]['topic']?></a></li>
						<?php } ?>

						<?php for ($i=0;$i<5;$i++) {?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$yijiaArr[$i]['url']?>" pdata="tiyu_index|yijia|<?=$i?>|0" target="_blank" title="<?=$yijiaArr[$i]['topic']?>"><?=$yijiaArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$yijiaArr[5]['url']?>" pdata="tiyu_index|yijia|5|0" target="_blank" title="<?=$yijiaArr[5]['topic']?>"><span><img src="<?=str_replace("http://","//",$yijiaArr[5]['imglunbname']['name'])?>" alt="<?=$yijiaArr[5]['topic']?>" width="260" height="130"></span><i><?=$yijiaArr[5]['topic']?></i></a>
				</div>
				<div class="ad_box_dow">
					<!-- 广告位：嵩恒_头条_PC_二级页面体育_默认渠道_足球下方 -->
					<script>
						(function() {
							var s = "_" + Math.random().toString(36).slice(2);
							document.write('<div id="' + s + '"></div>');
							var sb_id = '';
							if(coo_name == 'qid=sgkz'){
								sb_id = '2580377';
							}else if (coo_name == 'qid=114latiyu'){
								sb_id = '2707264';
							}else if (coo_name == 'qid=114laty'){
								sb_id = '2707272';
							}else if (coo_name == 'qid=dubatiyu'){
								sb_id = '2751042';
							}else if (coo_name == 'qid=f1browser'){
								sb_id = '2800774';
							}else if (coo_name == 'qid=2345shouye'){
								sb_id = '2801155';
							}else if (coo_name == 'qid=2345kzty'){
								sb_id = '2801384';
							}else if (coo_name == 'qid=1234wu'){
								sb_id = '2796261';
							}else if (coo_name == 'qid=360tiyu'){
								sb_id = '2835228';
							}else if (coo_name == 'qid=dubasport'){
								sb_id = '2967268';
							}else{
								sb_id = '2570072';
							}
							(window.slotbydup=window.slotbydup || []).push({
								id: sb_id,
								container: s,
								size: '295,135',
								display: 'inlay-fix'
							});
						})();
					</script>
				</div>
			</div>
			<div class="container_content_right">
				<div class="section-left">
					<ul class="sl-list">
						<?php for ($i=0;$i<5;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$xijiaArr[$i]['url']?>" pdata="tiyu_index|xijia|<?=$i?>|0" target="_blank" title="<?=$xijiaArr[$i]['topic']?>"><?=$xijiaArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
					<ul class="sl-list mt23">
						<?php for ($i=0;$i<4;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$yingchaoArr[$i]['url']?>" pdata="tiyu_index|yingchao|<?=$i?>|0" target="_blank" title="<?=$yingchaoArr[$i]['topic']?>"><?=$yingchaoArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
		<div class="container_content clearfix mt20">
			<div class="container_content_left">
				<div class="c_title">国内足球</div>
				<div class="section-left">
					<ul class="sl-list">
						<?php $zhongchaoArr = $data['csl'];?>

						<?php for ($i=0;$i<11;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$zhongchaoArr[$i]['url']?>" pdata="tiyu_index|zhongchao|<?=$i?>|0" target="_blank" title="<?=$zhongchaoArr[$i]['topic']?>"><?=$zhongchaoArr[$i]['topic']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$zhongchaoArr[11]['url']?>" pdata="tiyu_index|zhongchao|11|0" target="_blank" title="<?=$zhongchaoArr[11]['topic']?>"><span><img src="<?=str_replace("http://","//",$zhongchaoArr[11]['imglunbname']['name'])?>" alt="<?=$zhongchaoArr[11]['topic']?>" width="260" height="130"></span><i><?=$zhongchaoArr[11]['topic']?></i></a>
				</div>
				<div class="container_content_bigimg mt30">
					<a class="bigimg_c" href="<?=$zhongchaoArr[12]['url']?>" pdata="tiyu_index|zhongchao|12|0" target="_blank" title="<?=$zhongchaoArr[12]['topic']?>"><span><img src="<?=str_replace("http://","//",$zhongchaoArr[12]['imglunbname']['name'])?>" alt="<?=$zhongchaoArr[12]['topic']?>" width="260" height="130"></span><i><?=$zhongchaoArr[12]['topic']?></i></a>
				</div>
			</div>
			<div class="container_content_right clearfix">
				<div class="container_content_smallimg clearfix mt20">
					<ul class="small_content_mub clearfix">
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[13]['url']?>" pdata="tiyu_index|zhongchao|13|0" target="_blank" title="<?=$zhongchaoArr[13]['topic']?>"><span><img src="<?=str_replace("http://","//",$zhongchaoArr[13]['imglunbname']['name'])?>" alt="<?=$zhongchaoArr[13]['topic']?>" width="140" height="105"></span><i><?=$zhongchaoArr[13]['topic']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[14]['url']?>" pdata="tiyu_index|zhongchao|14|0" target="_blank" title="<?=$zhongchaoArr[14]['topic']?>"><span><img src="<?=str_replace("http://","//",$zhongchaoArr[14]['imglunbname']['name'])?>" alt="<?=$zhongchaoArr[14]['topic']?>" width="140" height="105"></span><i><?=$zhongchaoArr[14]['topic']?></i></a>
						</li>
					</ul>
				</div>
				<ul class="sl-list mt183">
					<?php for ($i=15;$i<20;$i++) {?>
						<?php if($i==0){?>
							<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
						<?php }else{?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
						<?php }?>
						href="<?=$zhongchaoArr[$i]['url']?>" pdata="tiyu_index|zhongchao|<?=$i?>|0" target="_blank" title="<?=$zhongchaoArr[$i]['topic']?>"><?=$zhongchaoArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- /足球 end -->

<!-- 广告位：嵩恒_头条_PC_二级页面体育_默认渠道_横幅广告2 -->
<div class="ad_box_2">
	<script>
		(function() {
			var s = "_" + Math.random().toString(36).slice(2);
			document.write('<div id="' + s + '"></div>');
			var sb_id = '';
			if(coo_name == 'qid=sgkz'){
				sb_id = '2580371';
			}else if (coo_name == 'qid=114latiyu'){
				sb_id = '2707257';
			}else if (coo_name == 'qid=114laty'){
				sb_id = '2707268';
			}else if (coo_name == 'qid=dubatiyu'){
				sb_id = '2751059';
			}else if (coo_name == 'qid=f1browser'){
				sb_id = '2800769';
			}else if (coo_name == 'qid=2345shouye'){
				sb_id = '2801147';
			}else if (coo_name == 'qid=2345kzty'){
				sb_id = '2801401';
			}else if (coo_name == 'qid=1234wu'){
				sb_id = '2796259';
			}else if (coo_name == 'qid=360tiyu'){
				sb_id = '2835220';
			}else if (coo_name == 'qid=dubasport'){
				sb_id = '2967282';
			}else if (coo_name == 'qid=jintiantoutiao') {
				sb_id = '3133167';
			}else{
				sb_id = '2570064';
			}
			(window.slotbydup=window.slotbydup || []).push({
				id: sb_id,
				container: s,
				size: '1024,135',
				display: 'inlay-fix'
			});
		})();
	</script>
</div>

<!-- 综合体育 start -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span  class="sports_com"></span><h2>综合体育</h2>
		</div>
		<ul id="container_top_compre" class="container_top_right fr">
			<li class="active border_left_none"><a href="/tennis.html" pdata="tiyu_index|right_label_wangqiu|0|0" target="_blank">网球</a></li>
			<li ><a href="/badmin.html" pdata="tiyu_index|right_label_yumaoqiu|0|0" target="_blank">羽毛球</a></li>
			<li><a href="/golf.html" pdata="tiyu_index|right_label_gaoerfu|0|0" target="_blank">高尔夫</a></li>
			<li><a href="/volley.html" pdata="tiyu_index|right_label_paiqiu|0|0" target="_blank">排球</a></li>
			<li class="border_right_none"><a href="/chess.html" pdata="tiyu_index|right_label_qipai|0|0" target="_blank">棋牌</a></li>
		</ul>
	</div>
	<div id="container_sports_compre" class="clearfix">
		<div class="clearfix ">
			<div class="mt20  clearfix">
				<?php $wangqiuArr = $data['tennis'];?>
				<?php $yumaoqiuArr = $data['badmin'];?>
				<?php $gaoerfuqiuArr = $data['golf'];?>
				<?php $paiqiuArr = $data['volley'];?>
				<?php $qipaiArr = $data['chess'];?>
				<?php $tiyuArr = $data['tiyu']; ?>

				<div class="compre_content margin_left_0">
					<a class="compre_content_img" href="<?=$wangqiuArr[0]['url']?>" pdata="tiyu_index|wangqiu|0|0" target="_blank" title="<?=$wangqiuArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$wangqiuArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$wangqiuArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$wangqiuArr[$i]['url']?>" pdata="tiyu_index|wangqiu|<?=$i?>|0" target="_blank" title="<?=$wangqiuArr[$i]['topic']?>"><?=$wangqiuArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$yumaoqiuArr[0]['url']?>" pdata="tiyu_index|yumaoqiu|0|0" target="_blank" title="<?=$yumaoqiuArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$yumaoqiuArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$yumaoqiuArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$yumaoqiuArr[$i]['url']?>" pdata="tiyu_index|yumaoqiu|<?=$i?>|0" target="_blank" title="<?=$yumaoqiuArr[$i]['topic']?>"><?=$yumaoqiuArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$gaoerfuqiuArr[0]['url']?>" pdata="tiyu_index|gaoerfuqiu|0|0" target="_blank" title="<?=$gaoerfuqiuArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$gaoerfuqiuArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$gaoerfuqiuArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$gaoerfuqiuArr[$i]['url']?>" pdata="tiyu_index|gaoerfu|<?=$i?>|0" target="_blank" title="<?=$gaoerfuqiuArr[$i]['topic']?>"><?=$gaoerfuqiuArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
			</div>
			<div class="mt20  clearfix">
				<div class="compre_content margin_left_0">
					<a class="compre_content_img" href="<?=$paiqiuArr[0]['url']?>" pdata="tiyu_index|paiqiu|0|0" target="_blank" title="<?=$paiqiuArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$paiqiuArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$paiqiuArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$paiqiuArr[$i]['url']?>" pdata="tiyu_index|paiqiu|<?=$i?>|0" target="_blank" title="<?=$paiqiuArr[$i]['topic']?>"><?=$paiqiuArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">

					<a class="compre_content_img" href="<?=$qipaiArr[0]['url']?>" pdata="tiyu_index|qipai|0|0" target="_blank" title="<?=$qipaiArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$qipaiArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$qipaiArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$qipaiArr[$i]['url']?>" pdata="tiyu_index|qipai|<?=$i?>|0" target="_blank" title="<?=$qipaiArr[$i]['topic']?>"><?=$qipaiArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$tiyuArr[0]['url']?>" pdata="tiyu_index|zonghe|0|0" target="_blank" title="<?=$tiyuArr[0]['topic']?>"><img src="<?=str_replace("http://","//",$tiyuArr[0]['imgmininame']['name'])?>" alt="" width="320" height="240"/><span><?=$tiyuArr[0]['topic']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$tiyuArr[$i]['url']?>" pdata="tiyu_index|zonghe|<?=$i?>|0" target="_blank" title="<?=$tiyuArr[$i]['topic']?>"><?=$tiyuArr[$i]['topic']?></a></li>
						<?php }?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 综合体育 end -->

<!-- 广告位：嵩恒_头条_PC_二级页面体育_默认渠道_横幅广告3 -->
<div class="ad_box_3">
	<script>
		(function() {
			var s = "_" + Math.random().toString(36).slice(2);
			document.write('<div id="' + s + '"></div>');
			var sb_id = '';
			if(coo_name == 'qid=sgkz'){
				sb_id = '2580373';
			}else if (coo_name == 'qid=114latiyu'){
				sb_id = '2707259';
			}else if (coo_name == 'qid=114laty'){
				sb_id = '2707270';
			}else if (coo_name == 'qid=dubatiyu'){
				sb_id = '2751064';
			}else if (coo_name == 'qid=f1browser'){
				sb_id = '2800766';
			}else if (coo_name == 'qid=2345shouye'){
				sb_id = '2801140';
			}else if (coo_name == 'qid=2345kzty'){
				sb_id = '2801408';
			}else if (coo_name == 'qid=1234wu'){
				sb_id = '2796255';
			}else if (coo_name == 'qid=360tiyu'){
				sb_id = '2835213';
			}else if (coo_name == 'qid=dubasport'){
				sb_id = '2967291';
			}else if (coo_name == 'qid=jintiantoutiao') {
				sb_id = '3133169';
			}else{
				sb_id = '2570067';
			}
			(window.slotbydup=window.slotbydup || []).push({
				id: sb_id,
				container: s,
				size: '1002,100',
				display: 'inlay-fix'
			});
		})();
	</script>
</div>
<!-- 右侧固定导航菜单 start -->
<div class="goto_top">
	<a class="show_go_index" href="/?ycdh" target="_blank"></a>
	<a id='gotop_btn' class='show_go_0' href="javascript:;"></a>
	<a class='show_go_1' href="javascript:;"></a>
	<div class="erwei_cnt"></div>
</div>  <!-- /右侧固定导航菜单 end -->

<!-- 右侧二维码-->
<!--<div class="right_cod" style="">
	<img src="/assets/images/news_code.png">
</div>-->

<!-- 底部 start -->
<div class="footer mt60">
	<div id='footer' class="footer_cnt">
		<p><a href="http://news.eastday.com/images/ditu/zzzs.htm" target="_blank">增值电信业务经营许可证（ICP）：沪B2-20050088号</a>　互联网新闻信息服务许可证:3112006001　广告经营许可证:3100003000089</p>
		<p><a href="http://imedia.eastday.com/license/index.htm" target="_blank">信息网络传播视听节目许可证：0907180</a>　互联网出版许可证:新出网证（沪）字003号　<a href="http://i1.eastday.com/images/ad/CZC_3532.jpg" target="_blank">广播电视节目制作经营许可证:(沪)字第406号</a></p>
		<p class="grey12">ISO9001质量管理体系认证:00307Q10176R1S　BS17799信息安全管理体系认证:00307I10001R0S</p>
		<p><a title="" target="_blank" href="/about.html">联系我们</a>　|　eastday.com All Right Reserve 版权所有</p>
	</div>
</div>  <!-- /底部 end -->

<script src="<?php echo __WWW_JS ?>page_sports_v1.js"></script>

<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
		}
	});
</script>
<script>
	(function(){
		if(coo_name=='qid=2345shouye'||coo_name=='2345'||coo_name=='sgny'||coo_name=='qid=jsdbnews'||coo_name=='qid=jsdbmini'||coo_name=='qid=2345xiaohua'){
			$('.right_cod').remove();
		}
	})();
</script>

<div style="display:none;">
<script type="text/javascript">
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?4d80833aca027199e068790d09c36e21";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cspan id='cnzz_stat_icon_1255477947'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1255477947' type='text/javascript'%3E%3C/script%3E"));
</script>
</div>

<!--[if IE 6]>
<script src="<?php echo __WWW_JS ?>DDPngMin.js"></script>
<script>
	DD_belatedPNG.fix('.png24');
	$('#gotop_btn').find('.erwei_cnt').append("<img src='<?php echo __WWW_IMG ?>2codes.png'>");
	$('a.show_go_1').on('mouseenter', function(){
		$(this).siblings('.erwei_cnt').css({'display':'block','filter':'alpha(opacity=100)'});
	});
	$('a.show_go_1').on('mouseleave', function(){
		$(this).siblings('.erwei_cnt').css({'display':'none','filter':'alpha(opacity=0)'});
	});
</script>
<![endif]-->
<!--[if IE 7]>
<script>
	$('#gotop_btn').find('.erwei_cnt').append("<img src='<?php echo __WWW_IMG ?>2codes.png'>");
	$('a.show_go_1').on('mouseenter', function(){
		$(this).siblings('.erwei_cnt').css({'display':'block','filter':'alpha(opacity=100)'});
	});
	$('a.show_go_1').on('mouseleave', function(){
		$(this).siblings('.erwei_cnt').css({'display':'none','filter':'alpha(opacity=0)'});
	});
</script>
<![endif]-->
</body>
</html>
