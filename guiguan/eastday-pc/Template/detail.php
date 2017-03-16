<!doctype html>
<html lang="zh-cmn-Hans-CN">
<head>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta http-equiv="Cache-Control" content="no-siteapp" />
	<META name="filetype" content="1">
	<META name="publishedtype" content="1">
	<META name="pagetype" content="2">
	<META name="catalogs" content="toutiao_PC">
	<meta name="applicable-device" content="pc">
	<link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
	<link rel="canonical" href="<?= $this_url ?>" />
	<title><?php echo $topic ?>_<?= \Lib\Core::config('type_map')[$channel][0] ?>频道_东方头条</title>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>device.js"></script>
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css?20161123" />
	<link rel="stylesheet" href="<?php echo __DETAIL_SOURCE ?>detail.css" />
	<link rel="stylesheet" href="<?php echo __DETAIL_SOURCE ?>comment.css" />
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
	<script type="text/javascript">
		var img_domain = '<?=$img_domain?>';
		var newstype =  '<?=$channel ?>';
		var uk_for_tbtj =  '<?=$uk_for_tbtj ?>';
		var global_share_title='<?= addslashes($topic) ?>';
		var global_share_url='<?= $share_url ?>';
		var global_rowkey = '<?=$rowkey?>';
		var global_share_img='';
	</script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>global.js?jb"></script>
	<script src="//dup.baidustatic.com/js/ds.js"></script>
	<script type="text/javascript" src="//afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script>
	<!--[if lt IE 9]>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>json2.js"></script>
	<![endif]-->
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.md5.js"></script>
	<script type="text/javascript" src="<?php echo __DETAIL_SOURCE ?>detail.js"></script>
	<?php $img_domain = \Lib\Core::config('img_domain'); ?>
	<script type="text/javascript">
		if(coo_name == null){
			filename = "<?php echo __WWW_JS ?>resources/new_detail_v2/default.js";
		}else {
			if (coo_name.indexOf("=") != -1) {
				var tmp = coo_name.replace("=", '_');
			} else if (coo_name.indexOf(".") != -1) {
				var tmp = coo_name.replace(/\./g, '_');
			} else{
				var tmp = coo_name;
			}
			var timestamp = new Date().getTime();
			filename = "<?php echo __WWW_JS ?>resources/new_detail_v2/" + tmp + ".js?_"+timestamp;
		}
	</script>
	<script type="text/javascript">
		document.write("<script language=javascript   src="+filename+"><\/script>");
	</script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_detail_v2/detail_gg.js?taobao3"></script>

</head>
<body>
<div class="header_cnt_detail clear-fix">
	<div class="header_cnt_l_detail clear-fix">
		<ul class="nav_detail clearfix">
			<li class='first'><a href="/" pdata="detail|nav|0|0" target="_blank">头条</a></li>
			<li><a href="/mainland.html" pdata="detail|nav|1|0" target="_blank">国内</a></li>
			<li><a href="/world.html" pdata="detail|nav|2|0" target="_blank">国际</a></li>
			<li><a class="pr" href="http://miniimg.eastday.com/" pdata="nav|mini_detail|0|0" target="_blank" >图片<img class="hot" src="<?php echo __WWW_IMG ?>hot_2.gif" alt="" width="21" height="13"></a></li>
			<li><a href="/society.html" pdata="detail|nav|3|0" target="_blank">社会</a></li>
			<li><a href="/ent.html" pdata="detail|nav|4|0" target="_blank">娱乐</a></li>
			<li><a href="http://video.eastday.com/" pdata="nav|mini_detail|1|0" target="_blank">视频</a></li>
			<li><a href="/fashion.html" pdata="detail|nav|6|0" target="_blank">时尚</a></li>
            <li><a href="/mil.html" pdata="detail|nav|7|0" target="_blank">军事</a></li>
			<li><a href="/tech.html" pdata="detail|nav|8|0" target="_blank">科技</a></li>
			<li><a href="/auto.html" pdata="detail|nav|9|0" target="_blank">汽车</a></li>
			<li><a href="/sports.html" pdata="detail|nav|10|0" target="_blank">体育</a></li>
			<li><a href="/finance.html" pdata="detail|nav|11|0" target="_blank">财经</a></li>
			<!--<li><a href="/health.html" pdata="detail|nav|12|0" target="_blank">健康</a></li>-->
			<li><a href="/history.html" pdata="detail|nav|13|0" target="_blank">人文</a></li>
			<li id="J_more" class="more-wrap pr">
				<a class="more">更多&nbsp;<img class="png24" src="/assets/images/chev_b.png" alt="" width="10" height="7"></a>
				<div class="J-more-link more-link none1">
					<a href="/games.html" pdata="detail|nav|15|0" target="_blank">游戏</a>
					<a href="/astro.html" pdata="detail|nav|16|0" target="_blank">星座</a>
					<a href="/home.html" pdata="detail|nav|17|0" target="_blank">家居</a>
					<a href="http://tianqi.eastday.com/?qid=nav" target="_blank">天气</a>
					<a href="/health.html" pdata="detail|nav|12|0" target="_blank">健康</a>
					<a href="/listpage/mainland.html" pdata="detail|nav|14|0" target="_blank">滚动</a>
				</div>
			</li>
		</ul>
		<div class="icon_cnt_dtl clear-fix">
			<a class='weixin_ew' href="javascript:;">微信<span></span></a>
			<a class='phone_ew' href="javascript:;">手机版<span></span></a>
		</div>
	</div>
	<div class="header_cnt_2_detail">
		<div class="ggTopsildercnt0" style='display:block'>
			<!-- 顶部广告容器一非360 -->
			<!-- 广告位：嵩恒_头条_新闻页面_顶部通栏 -->
			<script type="text/javascript">top_1();</script>
		</div>
		<div class="ggTopsildercnt1 clearfix">
			<!-- 顶部广告容器一360 -->
			<div class="ggTopsildercnt1L">
				<!-- 嵩恒_头条_PC_新闻页面_360导航_顶部通栏左  300*110 -->
				<script type="text/javascript">top_left();</script>
			</div>
			<div class="ggTopsildercnt1R">
				<!-- 嵩恒_头条_PC_新闻页面_360导航_顶部通栏右  300*110 -->
				<div class="top_right_1"><script type="text/javascript">top_right1();</script></div>
				<div class="top_right_2"><script type="text/javascript">top_right2();</script></div>
				<div class="top_right_3"><script type="text/javascript">top_right3();</script></div>
			</div>
		</div>
	</div>
</div>
<div class="gg_cnt gg_cnt_detail">
	<div class="gg_cnt_contain">
		<div class="gg_cnt_left">
			<div class="detail_position">
				<?php if (\Lib\Core::config('type_map')[$channel][1]) {?>
				<a href='/' pdata="detail|wz|0|0" class='detail_logo'>
					<?php }else{?>
					<a href="javacript:;" class='detail_logo'>
						<?php } ?>
						<span><?= \Lib\Core::config('type_map')[$channel][0] ?></span>
					</a>
					<a href="/" pdata="detail|wz|1|0">东方头条</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;
					<?php if ((\Lib\Core::config('type_map')[$channel][1]) && (\Lib\Core::config('type_map')[$channel][1]) != 'mil') {?>
					<a href="/<?= \Lib\Core::config('type_map')[$channel][1].".html" ?>" pdata="detail|wz|2|0">
						<?php }elseif((\Lib\Core::config('type_map')[$channel][1]) == 'mil'){?>
						<a href="http://mil.eastday.com" pdata="detail|wz|2|0">
							<?php }else{ ?>
							<a href="javascript:;">
								<?php } ?>
								<?= \Lib\Core::config('type_map')[$channel][0] ?>频道</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;正文
			</div>

			<!-- 天气插件 -->
			<div class="pluge-content">
				<iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" src="http://tianqi.eastday.com/plugin/widget.html?sc=3&z=3&t=1&v=0&d=3&bd=0&k=&f=808080&q=1&e=1&a=1&c=54511&w=180&h=36&align=center&qid=dfttdetail"></iframe>
			</div>
		</div>
		<div class="gg_cnt_right">
			<div class="detail_ifram_cnt">
				<iframe frameborder="0" scrolling="no" src="/frames/search_word.html" width="300" height="30"></iframe>
			</div>
		</div>
	</div>
</div>
<div class='section'>
	<div class="detail_cnt clear-fix">
		<div class='article'>
			<div class="detail_left  clear-fix">
				<div class="detail_left_cnt">
					<div class="J-title_detail title_detail">
						<!-- 用户报错入口 -->
						<div class="user_error_op"><i></i><span id="j_user_op">我要报错</span></div>
						<h1><span><?php echo $topic ?></span></h1>
						<div class='share_cnt_p'>
							<i><?php echo $time ?></i>
							<i><?php echo $from ?></i>
						</div>
						<div class="J-bdsharebuttonbox-wrap bdshare-special clearfix">
							<div class="J-bdsharebuttonbox bdsharebuttonbox clearfix">
								<a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;"></a>
								<a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;"></a>
								<a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;"></a>
							</div>
							<?php if (!$human_news) { ?>
								<a class="discuss-wrap clearfix" href="#pinglun">
									<span class="conment-bg fl"></span>
									<span class="discuss_a fl"><i id="conment_tole_in">0</i>评论</span>
								</a>
							<?php } ?>
							<div class="pop_comment_n pop_3"><i></i>亲，暂时无法评论！</div>
						</div>
					</div>
					<?php if(!$leadermode){ ?>
						<div class="gg_detail_cnt clearfix">
							<!-- 广告位：测试_嵩恒_头条_新闻页面_标题下方 -->
							<script type="text/javascript">left_1();</script>
						</div>
					<?php } ?>
					<div class="J-contain_detail_cnt contain_detail_cnt">
						<?php echo $content ?>
						<div id="for_qqchat_room"><script>join_qqroom();</script></div>
					</div>
				</div>
			</div>
		</div>
		<div class='aside'>
			<div class="detail_right_cnt clear-fix">
				<div class="gg_channel_r_b gg_channel_r_b_t gg_right1">
					<!-- 广告位：测试_嵩恒_头条_新闻页面_右1 -->
					<script type="text/javascript">right_1();</script>
				</div>

				<div class="xfcnt_lft clear-fix">
					<div class="main_r_title">
						<h4><span><em></em>今日热点</span></h4>
					</div>
					<div class="main_item_cnt">
						<ul id='hot_daily' class="main_item_news">
							<?php foreach((array)$jrrd as $key=>$item ) {?>
								<li>
									<a title="<?=$item['topic']?>" href="<?=$item['url']?>?xx=1" pdata="detail|hotdaily|<?=$key?>|0" target="_blank" class="news_pic">
										<img class="animation scrollLoading" src="<?= str_replace("http://","//",$item['img']) ?>" alt="<?= $item['topic'] ?>"
											 width="145" height="105">
									</a>
									<a href="<?=$item['url']?>?xx=1" pdata="detail|hotdaily|0|0" target="_blank" class="title_news" title="<?=$item['topic']?>"><?=$item['topic']?></a>
								</li>
							<?php } ?>
						</ul>
					</div>
					<div class="gg_channel_r_b gg_detail_baidu clear-fix gg_right2">
						<!-- 广告位：测试_嵩恒_头条_新闻页面_右2 -->
						<script type="text/javascript">right_2();</script>
					</div>
					<div id="right_2_xia" class="gg_channel_r_b gg_right3602">
						<!-- 广告位：360导航 右二下 -->
						<script type="text/javascript">right_2_xia();</script>
					</div>
					<div class="main_r_title">
						<h4><span><em></em>特别推荐</span></h4>
					</div>
					<div class="main_item_cnt" id="unartificial">
						<ul id='special_more_item' class="special-list">
							<?php foreach((array)$tbtj as $key=>$item ) {?>
								<li class="special-item">
									<a class="clearfix <?php if($key==0)echo "active";?>" href="<?=$item['url']?>?xx=1" pdata="detail|tbtj|<?=$key?>|0" title="<?=$item['topic']?>" target="_blank">
										<span class="index i<?=$key?>"></span>

										<p class="fl img"><img class="scrollLoading" data-url="<?= str_replace("http://","//",$item['img']) ?>" src="/assets/images/recommend-icon.gif" width="100" height="75"
															   alt="<?= $item['topic'] ?>"></p>
										<p class="txt"><?=$item['topic']?></p>
									</a>
								</li>
							<?php } ?>
						</ul>
					</div>
					<div class="main_item_cnt" id="artificial" style="display:none">
						<ul id='special_more_item_360' class="special-list">
							<?php foreach((array)$tbtj_360 as $key=>$item ) {?>
								<li class="special-item">
									<a class="clearfix <?php if($key==0)echo "active";?>" href="<?=$item['url']?>?xx=1" pdata="detail|tbtj|<?=$key?>|0" title="<?=$item['topic']?>" target="_blank">
										<span class="index i<?=$key?>"></span>

										<p class="fl img"><img class="scrollLoading" data-url="<?= str_replace("http://","//",$item['img43']) ?>" src="/assets/images/recommend-icon.gif" width="100" height="75"
															   alt="<?= $item['topic'] ?>"></p>
										<p class="txt"><?=$item['topic']?></p>
									</a>
								</li>
							<?php } ?>
						</ul>
					</div>
					<script type="text/javascript">coo_name_show();</script>
					<div class="gg_channel_r_b gg_right3">
						<!-- 广告位：嵩恒_头条_新闻页面_右3 -->
						<script type="text/javascript">right_3();</script>
					</div>
					<div class="main_item_cnt qiwenyishi">
						<!-- 奇闻轶事广告内容容器 -->
						<script type="text/javascript">right_4_new();</script>
					</div>
					<div class="gg_channel_r_b gg_right4">
						<!-- 广告位：嵩恒_头条_新闻页面_右4 -->
						<script type="text/javascript">right_5();</script>
					</div>

					<div class="main_r_title">
						<h4><span><em></em>小编精选</span></h4>
					</div>
					<div id='editselect' class="main_item_cnt" style='height:auto;padding-left:33px;'>
						<ul class="sl-list">
							<?php foreach ((array)$xbjx as $key => $item) { ?>
								<?php if ($key == 0) {
									$liclass = "sl-item first pr";
									$iclass = "dot";
									$aclass = "title-main";
								} else {
									$liclass = "sl-item  pr";
									$iclass = "dot-sm";
									$aclass = "title-sub";
								} ?>
								<li class="<?= $liclass ?>"><i class="<?= $iclass ?>"></i>
									<a class="<?= $aclass ?>"
									   href="<?= $item['url'] ?>?xx=1" pdata="detail|xbjx|<?= $key ?>|0"
									   target="_blank" title="<?= $item['topic'] ?>"><?= $item['topic'] ?></a>
								</li>
							<?php } ?>

						</ul>
					</div>
					<div class="gg_channel_r_b gg_right6">
						<!-- 广告位：嵩恒_头条_新闻页面_右6 -->
						<script type="text/javascript">right_6();</script>
					</div>

					<div class="main_r_title">
						<h4><span><em></em>热点排行</span></h4>
					</div>
					<div class="main_item_cnt" style='height:auto;'>
						<ul id='sift_item_cnt' class="sift_item">
							<?php foreach((array)$rdph as $key=>$item ) {?>
								<li>
									<a href="<?=$item['url']?>?xx=1" pdata="detail|rdph|<?=$key?>|0" target="_blank" title="<?=$item['topic']?>">
										<span><img class="scrollLoading" data-url="<?= str_replace("http://","//",$item['img']) ?>" src="/assets/images/recommend-icon.gif" alt="<?= $item['topic'] ?>"></span>
										<p><?=$item['topic']?></p>
									</a>
								</li>
							<?php } ?>
						</ul>
					</div>
					<div class="gg_channel_r_b gg_right7">
						<!-- 广告位：嵩恒_头条_新闻页面_右7 -->
						<script type="text/javascript">right_7();</script>
					</div>
					<div class="gg_channel_r_b gg_right8">
						<!-- 广告位：嵩恒-头条-新闻页面-右8 -->
						<!-- 搜狗无阻iframe -->
						<script type="text/javascript">right_8();</script>
					</div>
					<div class="gg_channel_r_b gg_right9">
						<!-- 广告位：嵩恒-头条-新闻页面-右9 -->
						<script type="text/javascript">right_9();</script>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom_over_cnt">
			<div class="gg_item_bomttom_cnt">
				<!-- 广告位：嵩恒_头条_新闻页面_正文下方 -->
				<!-- <iframe frameborder="0" scrolling="no" src="/frames/sy/left_2.html" width="620" height="110"></iframe> -->
				<script type="text/javascript">left_2();</script>
			</div>
			<!-- <div class="dark-line"></div> -->
			<div class="pagination">
				<?php
				require_once('page.php');
				$params = array(
						'total_rows' => $total_pages, #(必须)
						'method' => 'html', #(必须)
						'parameter' => $uk . '-?.html',  #(必须)
						'now_page' => $now_page,  #(必须)
						'list_rows' => 1 #(可选) 默认为15
					// 'total_pagea'=>'1'
				);
				$page = new page($params);
				echo $page->show(2, $uk);

				?>
			</div>
			<script type="text/javascript">more_see(uk_for_tbtj);</script>
			<div class="gg_item_bomttom_cnt" id="gg_item_bomttom_cnt-bk">
				<!-- 广告位：嵩恒_头条_新闻页面_分页下方 -->
				<!-- <iframe frameborder="0" scrolling="no" src="/frames/sy/left_2.html" width="620" height="110"></iframe> -->
				<script type="text/javascript">left_2_bk();</script>
			</div>
			<div class="ggPic_item_bomttom_cnt">
				<!-- 广告位：测试_嵩恒_头条_新闻页面_下一篇下方 -->
				<script type="text/javascript">left_3_1();</script>
				<script type="text/javascript">left_3_2();</script>
			</div>
			<div class="guess_like  clear-fix">
				<div class="guess_title rel-recmmend"><span>相关推荐<i></i></span></div>
				<div class="guess_contain">
					<!-- 相关推荐广告 -->
					<!--<script type="text/javascript">left_4();</script>-->
					<ul class="recomend_content">

						<?php foreach ($xgtj as $k => $item) { ?>
							<li>
								<span></span>
								<a href="<?=$item['url']?>" pdata="detail|xgtj|<?=$k?>|0" title="<?=$item['topic']?>" target="_blank"><?=$item['topic']?></a>
							</li>
						<?php } ?>
					</ul>

				</div>
			</div>
			<div class="guess_like  clear-fix">
				<div class="guess_title news-focus"><span>新闻聚焦<i></i></span></div>
				<div class="guess_contain">
					<!-- 广告位：测试_嵩恒_头条_新闻页面_新闻聚焦 -->
					<div class="news_focus" id="news_focus_normal">
						<ul class="focus_img">
							<?php foreach ($xwjj as $k => $v) { ?>
								<li><a href="<?= $v['url'] ?>" pdata="detail|xwjj|<?= $k ?>|0"
									   target="_blank" title='<?= $v['topic'] ?>'><img
												class="scrollLoading" data-url="<?= str_replace("http://","//",$v['img']) ?>" src="/assets/images/recommend-icon.gif"/><span><?= $v['topic'] ?></span></a></li>
							<?php } ?>
						</ul>
					</div>
					<div class="news_focus" id="news_focus" style="display: none">
						<ul class="focus_img">
							<?php foreach ($xwjj_360 as $k => $v) { ?>
								<li><a href="<?= $v['url'] ?>" pdata="detail|xwjj|<?= $k ?>|0"
									   target="_blank" title='<?= $v['topic'] ?>'><img
												class="scrollLoading" data-url="<?= str_replace("http://","//",$v['img']) ?>" src="/assets/images/recommend-icon.gif" /><span><?= $v['topic'] ?></span></a></li>
							<?php } ?>
						</ul>
					</div>
					<script type="text/javascript">left_6();</script>
					<script type="text/javascript">coo_name_focus();</script>
				</div>
			</div>
			<div class="guess_like  clear-fix">
				<div class="guess_title guess-yl"><span>猜你喜欢<i></i></span></div>
				<div class="guess_contain">
					<!-- 广告位：测试_嵩恒_头条_新闻页面_猜你喜欢 -->
					<script type="text/javascript">left_7_1();</script>
					<script type="text/javascript">left_7_2();</script>
				</div>
			</div>

			<div class="guess_like  clear-fix">
				<div id='rmtj_title' class="guess_title hot-recommend"><span>热门推荐<i></i></span></div>
				<div id='hot_recommend_cnt' class="hot_recommend_cnt clear-fix">
					<?php $gg_idx_first = mt_rand(1, 4) ?>
					<!-- 当前栏目下推荐 -->
					<ul class="tjnewsrcontent">

						<?php foreach ((array)$rmtjArr as $key => $item) { ?>
							<li class="recommend_news">
								<div class="pic"><a
											href="<?= $item['url'] ?>?xx=1" pdata="detail|hottj_tuijian|<?= $key ?>|0"
											target="_blank" title="<?= $item['topic'] ?>"><img class="scrollLoading" data-url="<?= str_replace("http://","//",$item['img']) ?>" src="/assets/images/recommend-icon.gif"
																							   alt="<?= $item['topic'] ?>"></a>
								</div>
								<div class="text">
									<h3>
										<a href="<?= $item['url'] ?>?xx=1" pdata="detail|hottj_tuijian|<?= $key ?>|0"
										   target="_blank" title="<?= $item['topic'] ?>"><?= $item['topic'] ?></a></h3>

									<p class="content_so"><?= $item['desc'] ?></p>

									<p class="source">
										<span>&nbsp;来源：<?= $item['from'] ?></span>
									</p>
								</div>
							</li>
							<?php if ($key == $gg_idx_first) { ?>
								<!-- 热门推荐列表随机广告1 -->
								<!-- 360接口广告1 -->
								<li class="recommend_news" id="recommend_ad_hot1">
									<script type="text/javascript">ad_gg360_1();</script>
								</li>
							<?php } ?>
							<?php if ($key == $gg_idx_first + 3) { ?>
								<!-- 热门推荐列表随机广告2 -->
								<!-- <li class="ad_mar_k">
									<script type="text/javascript">hottj2();</script>
								</li> -->
								<!-- 360接口广告2 -->
								<li class="recommend_news" id="recommend_ad_hot2">
									<script type="text/javascript">ad_gg360_2();</script>
								</li>
							<?php } ?>
						<?php } ?>

					</ul>
				</div>
			</div>

			<div class="guess_like  clear-fix gg_bottom_cyup360">
				<!-- 广告位：嵩恒_头条_新闻页面_热门推荐下方 -->
				<script type="text/javascript">left_8_1();</script>
				<script type="text/javascript">left_8_2();</script>
			</div>
			<div class="guess_like gg_cyup360 clear-fix">
				<!-- 广告位：嵩恒_头条_新闻页面_评论上方360广告 -->
				<script type="text/javascript">left_9();</script>
			</div>
			<div class="guess_like clear-fix ggNavtj360">
				<!-- 360广告 热门推荐 -->
			</div>
			<div id="discuss_box"></div>
			<script type="text/javascript" src="<?php echo __DETAIL_SOURCE ?>comment.js"></script>
			<script type="text/javascript" src="<?php echo __DETAIL_SOURCE ?>transfortime.js"></script>
		</div>
	</div>
</div>

<div class="goto_top">
	<a class="show_go_index" href="/?ycdh" target="_blank"></a>
	<a id='gotop_btn' class='show_go_0' href="javascript:;"></a>
	<!--	<a class='show_go_1' href="javascript:;"></a>-->
	<!--    <div class="erwei_cnt"></div>-->
</div>

<div class='footerDetail'>
	<p>注：凡本网注明来源非东方头条的作品，均转载自其它媒体，并不代表本网赞同其观点和对其真实性负责。</p>
	<p>东方头条致力于资讯传播，希望建立合作关系。若有任何不当请联系我们，将会在24小时内删除。邮箱：<a href="mailto:banquantt@em.eastday.com">banquantt@em.eastday.com</a></p>
	<p><a target="_blank" href="/about.html">联系我们</a>｜eastday.com All Right Reserve 版权所有</p>
</div>

<script type="text/javascript" src="<?php echo __WWW_JS ?>scrollLoading.js"></script>
<script>
	$(".scrollLoading").scrollLoading();
	//鼠标放上去之后替换照片
	$('.special-item').hover(function(){
		var srcimg = $(this).find('.scrollLoading').attr('data-url');
		$(this).find('.scrollLoading').attr('src', srcimg);
	});
</script>

<script src="<?php echo __WWW_JS ?>globle_bottom.js"></script>
<script type="text/javascript">
	// 分享的标题
	var J_bdshare_topic = '<?= addslashes($topic)?>';
</script>
<!-- 额外广告 -->
<!--嵩恒_新闻内页_搜索推荐-->
<script type="text/javascript">sou_suo_tui_jian();</script>
<!-- 右下悬浮 -->
<script type="text/javascript">you_xia_xuan_fu();</script>
<!-- 左右折叠 -->
<script type="text/javascript">zuo_you_zhe_die();</script>
<!-- 对联 -->
<script type="text/javascript">ce_lan_xuan_fu();</script>
<?php if(!$leadermode){ ?>
	<!-- 图加 -->
	<script type="text/javascript">tujia();</script>
<?php }?>

<!-- app二维码 -->
<script type="text/javascript">app_erweima();</script>

<!-- 手机充值 -->
<script type="text/javascript">shouji_chongzhi();</script>
<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'});
		}
	});
</script>
<!--[if lte IE 6]>
<script>
	<script src="<?php echo __WWW_JS ?>DDPngMin.js"></script>
<script>DD_belatedPNG.fix('.png24');</script>
</script>
<![endif]-->
<!--[if lte IE 7]>
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
<div style="display:none;">
	<script type="text/javascript">

		cnzz_code();

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
</body>
</html>