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
	<link href="/assets/images/favicon.ico" type="image/x-icon" rel="icon" />
	<link rel="canonical" href="http://mini.eastday.com/sports.html" />
	<title>2016年里约奥运会_东方头条网</title>
	<meta name="keywords" content="奥运,奥运会,里约奥运,2016奥运" />
	<meta name="description" content="东方头条网将为您带来新鲜、及时的奥运报道，带你感受2016年里约奥运的独特魅力。" /><link rel="stylesheet" href="/assets/css/reset.css" />
	<link rel="stylesheet" href="/assets/css/common.css" />
	<link rel="stylesheet" href="/assets/css/page_sports_op.css" />
	<script type="text/javascript" src="/assets/js/device_index.js"></script>
	<script src="http://dup.baidustatic.com/js/ds.js"></script>
	<!-- html5shiv.js支持H5的插件&Respond.js支持媒体查询的插件 -->
	<!--[if lt IE 9]>
	<script src="/assets/js/html5shiv.js"></script>
	<script src="/assets/js/respond.min.js"></script>
	<![endif]-->
	<script type="text/javascript">var img_domain = "http://ddtest.w.wcsapi.biz.matocloud.com/"; var newstype = "tiyu_index";</script>
	<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
	<script type="text/javascript" src="/assets/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="/assets/js/resources/minicookie.js"></script>
	<script src="/assets/js/global.js"></script>
	<!-- 搜索框提示词 -->
	<script type="text/javascript" src="/assets/js/search_word.js"></script>
</head>
<body>
<!-- 头条 start -->
<div class="first-view">
	<div class="container first-view-container clearfix">
		<?php $toutiaoArr = $data['lunbo']?>
		<div class="hot_news_h2 clearfix">
			<span>头条</span><h1><a href="<?= $toutiaoArr[0]['url'] ?><?=$qid;?>" target="_blank"><?= $toutiaoArr[0]['title'] ?></a></h1>
		</div>

		<!-- 热点要闻 + 个性推荐 start -->
		<div class="hot-personality fl">
			<div class="hot-personality-content pr clearfix">
				<!-- 热点要闻 start -->
				<div id="J_hot_news" class="hot-news clearfix">
					<ul class="hnb-list">
						<?php
							unset($toutiaoArr);
							$toutiaoArr[0] = ['11'];
							foreach($data['toutiao'] as $v){
								$toutiaoArr[]=$v;
							}
						?>
						<?php for($i=1;$i<=6;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?><?=$qid;?>" target="_blank" title="<?= $toutiaoArr[$i]['title'] ?>"><span><?= $toutiaoArr[$i]['title'] ?></span><i class=""></i></a></li>
						<?php } ?>
					</ul>
					<ul class="hnb-list">
						<?php for($i=7;$i<=12;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?><?=$qid;?>" target="_blank" title="<?= $toutiaoArr[$i]['title'] ?>"><span><?= $toutiaoArr[$i]['title'] ?></span><i class=""></i></a></li>
						<?php } ?>
					</ul>
					<ul class="hnb-list">
						<?php for($i=13;$i<=18;$i++) { ?>
							<?php if($i%6==1) {?>
								<li class="hnb-item  first pr"><i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="hnb-item  pr"><i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$toutiaoArr[$i]['url'] ?><?=$qid;?>" target="_blank" title="<?= $toutiaoArr[$i]['title'] ?>"><span><?= $toutiaoArr[$i]['title'] ?></span><i class=""></i></a></li>
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
								<?php
								if($key == 0){
									continue;
								}
							?>
							<a class="img_a <?php if($key == 1){?> >inline<?php }else { ?>none<?php } ?>" target="_blank" data-title="<?=$val['title']?>" href="<?= $val['url'] ?><?=$qid;?>">
								<img src="<?=$val['pic']?>" alt="<?=$val['title']?>">
							</a>
						<?php }?>
						<div class="banner_bar"></div>
						<div class="banner_txt">
							<a target="_blank" href="<?= $lunhuanData[1]['url'] ?><?=$qid;?>"><?=$lunhuanData[1]['title']?></a>
						</div>
						<div class="banner_act"><div><span class="now"></span></div> <div><span></span></div><div><span></span></div><div><span></span></div></div><div class="btn_l"></div><div class="btn_r"></div>
					</div>
				</div>
			</div>  <!-- /轮播 end -->
			<div class="carouse_pic">
				<ul class="carouse_pic_ul clearfix">
					<?php for($i=19;$i<=21;$i++) { ?>
						<li><a href="<?= $toutiaoArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?= $toutiaoArr[$i]['title']?>"><img src="<?= $toutiaoArr[$i]['pic']?>" alt="<?= $toutiaoArr[$i]['title']?>" width="180" height="135"><span><?= $toutiaoArr[$i]['title']?></span></a></li>
					<?php }?>
				</ul>
			</div>
		</div>  <!-- /热搜新闻词 + 阅读排行 end -->
	</div>
</div>

<!-- 中国备战 start -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span class="sports_b"></span><h2>中国备战</h2>
		</div>
	</div>
	<div id="container_sports_b clearfix">
		<div class="container_content clearfix mt10">
			<div class="container_content_left">
				<div class="section-left">
					<ul class="sl-list">
						<?php $nbaArr = $data['zgbz'];?>
						<?php for ($i=0;$i<10;$i++) {?>
							<?php if($i==0){ ?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$nbaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$nbaArr[$i]['title']?>"><?=$nbaArr[$i]['title']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$nbaArr[10]['url']?><?=$qid;?>" target="_blank" title="<?=$nbaArr[10]['title']?>"><img src="<?=$nbaArr[10]['pic']?>" alt="<?=$nbaArr[10]['title']?>" width="260" height="180"><span><?=$nbaArr[10]['title']?></span></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$nbaArr[11]['url']?><?=$qid;?>" target="_blank" title="<?=$nbaArr[11]['title']?>"><span><img src="<?=$nbaArr[11]['pic']?>" alt="<?=$nbaArr[11]['title']?>" width="120" height="90"></span><i><?=$nbaArr[11]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$nbaArr[12]['url']?><?=$qid;?>" target="_blank" title="<?=$nbaArr[12]['title']?>"><span><img src="<?=$nbaArr[12]['pic']?>" alt="<?=$nbaArr[12]['title']?>" width="120" height="90"></span><i><?=$nbaArr[12]['title']?></i></a>
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
							href="<?=$nbaArr[$i]['url']?>" pdata="tiyu_index|nba|<?=$i?>|0" target="_blank" title="<?=$nbaArr[$i]['title']?>"><?=$nbaArr[$i]['title']?></a></li>
						<?php } ?>

					</ul>
					<ul class="sl-list mt23">
						<?php for ($i=18;$i<22;$i++) {?>
							<?php if($i==18){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$nbaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$nbaArr[$i]['title']?>"><?=$nbaArr[$i]['title']?></a></li>
						<?php } ?>

					</ul>
				</div>
			</div>
		</div>
		<div class="container_content clearfix mt20">
			<div class="container_content_left">
				<div class="section-left">
					<ul class="sl-list">
						<?php $cbaArr = array_slice($data['zgbz'],22);?>
						<?php for ($i=0;$i<10;$i++) {?>
							<?php if($i==0){ ?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$cbaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[$i]['title']?>"><?=$cbaArr[$i]['title']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$cbaArr[10]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[10]['title']?>"><img src="<?=$cbaArr[10]['pic']?>" alt="<?=$cbaArr[10]['title']?>" width="260" height="180"><span><?=$cbaArr[10]['title']?></span></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[11]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[11]['title']?>"><span><img src="<?=$cbaArr[11]['pic']?>" alt="<?=$cbaArr[11]['title']?>" width="120" height="90"></span><i><?=$cbaArr[11]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[12]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[12]['title']?>"><span><img src="<?=$cbaArr[12]['pic']?>" alt="<?=$cbaArr[12]['title']?>" width="120" height="90"></span><i><?=$cbaArr[12]['title']?></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container_content_right clearfix" style="width: 320px;">
				<div class="container_content_smallimg clearfix mt20">
					<ul class="small_content_mub clearfix">
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[13]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[13]['title']?>"><span><img src="<?=$cbaArr[13]['pic']?>" alt="<?=$cbaArr[13]['title']?>" width="140" height="105"></span><i><?=$cbaArr[13]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$cbaArr[14]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[14]['title']?>"><span><img src="<?=$cbaArr[14]['pic']?>" alt="<?=$cbaArr[14]['title']?>" width="140" height="105"></span><i><?=$cbaArr[14]['title']?></i></a>
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
						href="<?=$cbaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$cbaArr[$i]['title']?>"><?=$cbaArr[$i]['title']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- 诸强动态  -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span class="sports_t"></span><h2>诸强动态</h2>
		</div>
	</div>
	<div id="container_sports_t clearfix">
		<div class="container_content clearfix mt30">
			<div class="container_content_left">
				<div class="section-left">
					<ul class="sl-list">
						<?php $dejiaArr = array_slice($data['zqdt'],0,5) ;?>
						<?php $yijiaArr = array_slice($data['zqdt'],5,10) ;?>
						<?php $xijiaArr = array_slice($data['zqdt'],15,5) ;?>
						<?php $yingchaoArr = array_slice($data['zqdt'],20,4) ;?>

						<?php for ($i=0;$i<5;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$dejiaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$dejiaArr[$i]['title']?>"><?=$dejiaArr[$i]['title']?></a></li>
						<?php } ?>

						<?php for ($i=0;$i<5;$i++) {?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$yijiaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$yijiaArr[$i]['title']?>"><?=$yijiaArr[$i]['title']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$yijiaArr[5]['url']?><?=$qid;?>" target="_blank" title="<?=$yijiaArr[5]['title']?>"><img src="<?=$yijiaArr[5]['pic']?>" alt="<?=$yijiaArr[5]['title']?>" width="260" height="180"><span><?=$yijiaArr[5]['title']?></span></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$yijiaArr[6]['url']?><?=$qid;?>" target="_blank" title="<?=$yijiaArr[6]['title']?>"><span><img src="<?=$yijiaArr[6]['pic']?>" alt="<?=$yijiaArr[6]['title']?>" width="120" height="90"></span><i><?=$yijiaArr[6]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$yijiaArr[7]['url']?><?=$qid;?>" target="_blank" title="<?=$yijiaArr[7]['title']?>"><span><img src="<?=$yijiaArr[7]['pic']?>" alt="<?=$yijiaArr[7]['title']?>" width="120" height="90"></span><i><?=$yijiaArr[7]['title']?></i></a>
						</li>
					</ul>
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
							href="<?=$xijiaArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$xijiaArr[$i]['title']?>"><?=$xijiaArr[$i]['title']?></a></li>
						<?php } ?>
					</ul>
					<ul class="sl-list mt23">
						<?php for ($i=0;$i<4;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$yingchaoArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$yingchaoArr[$i]['title']?>"><?=$yingchaoArr[$i]['title']?></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
		<div class="container_content clearfix mt10">
			<div class="container_content_left">
				<div class="section-left">
					<ul class="sl-list">
						<?php $zhongchaoArr = array_slice($data['zqdt'],24)?>
						<?php for ($i=0;$i<11;$i++) {?>
							<?php if($i==0){?>
								<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
							<?php }else{?>
								<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
							<?php }?>
							href="<?=$zhongchaoArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[$i]['title']?>"><?=$zhongchaoArr[$i]['title']?></a></li>
						<?php } ?>
								</ul>
				</div>
			</div>
			<div class="container_content_middle">
				<div class="container_content_bigimg">
					<a class="bigimg_c" href="<?=$zhongchaoArr[11]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[11]['title']?>"><img src="<?=$zhongchaoArr[11]['pic']?>" alt="<?=$zhongchaoArr[11]['title']?>" width="260" height="180"><span><?=$zhongchaoArr[11]['title']?></span></a>
				</div>
				<div class="container_content_smallimg">
					<ul class="small_content clearfix">
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[12]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[12]['title']?>"><span><img src="<?=$zhongchaoArr[12]['pic']?>" alt="<?=$zhongchaoArr[12]['title']?>" width="120" height="90"></span><i><?=$zhongchaoArr[12]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[13]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[13]['title']?>"><span><img src="<?=$zhongchaoArr[13]['pic']?>" alt="<?=$zhongchaoArr[13]['title']?>" width="120" height="90"></span><i><?=$zhongchaoArr[13]['title']?></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container_content_right clearfix" style="width: 320px;">
				<div class="container_content_smallimg clearfix mt20">
					<ul class="small_content_mub clearfix">
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[14]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[14]['title']?>"><span><img src="<?=$zhongchaoArr[14]['pic']?>" alt="<?=$zhongchaoArr[14]['title']?>" width="140" height="105"></span><i><?=$zhongchaoArr[14]['title']?></i></a>
						</li>
						<li>
							<a class="bigimg_c" href="<?=$zhongchaoArr[15]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[15]['title']?>"><span><img src="<?=$zhongchaoArr[15]['pic']?>" alt="<?=$zhongchaoArr[15]['title']?>" width="140" height="105"></span><i><?=$zhongchaoArr[15]['title']?></i></a>
						</li>
					</ul>
				</div>
				<ul class="sl-list mt183">
					<?php for ($i=14;$i<19;$i++) {?>
						<?php if($i==0){?>
							<li class="sl-item first pr"> <i class="dot"></i><a class="title-main"
						<?php }else{?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub"
						<?php }?>
						href="<?=$zhongchaoArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$zhongchaoArr[$i]['title']?>"><?=$zhongchaoArr[$i]['title']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- 综合体育 end -->

<!-- 巴西动态 start -->
<div class="container social mt20">
	<div class="container_top">
		<div class="container_top_left fl">
			<span  class="sports_com"></span><h2>巴西动态</h2>
		</div>
	</div>
	<div id="container_sports_compre" class="clearfix">
		<div class="clearfix ">
			<div class="mt20  clearfix">
				<?php $wangqiuArr = array_slice($data['bxdt'],0,6);?>
				<?php $yumaoqiuArr = array_slice($data['bxdt'],6,6);?>
				<?php $gaoerfuqiuArr = array_slice($data['bxdt'],12,6);?>
				<?php $paiqiuArr = array_slice($data['bxdt'],18,6);?>

				<div class="compre_content margin_left_0">
					<a class="compre_content_img" href="<?=$wangqiuArr[0]['url']?><?=$qid;?>" target="_blank" title="<?=$wangqiuArr[0]['title']?>"><img src="<?=$wangqiuArr[0]['pic']?>" alt="" width="320" height="240"/><span><?=$wangqiuArr[0]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$wangqiuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$wangqiuArr[$i]['title']?>"><?=$wangqiuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$yumaoqiuArr[0]['url']?><?=$qid;?>" target="_blank" title="<?=$yumaoqiuArr[0]['title']?>"><img src="<?=$yumaoqiuArr[0]['pic']?>" alt="" width="320" height="240"/><span><?=$yumaoqiuArr[0]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$yumaoqiuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$yumaoqiuArr[$i]['title']?>"><?=$yumaoqiuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$gaoerfuqiuArr[0]['url']?><?=$qid;?>" target="_blank" title="<?=$gaoerfuqiuArr[0]['title']?>"><img src="<?=$gaoerfuqiuArr[0]['pic']?>" alt="" width="320" height="240"/><span><?=$gaoerfuqiuArr[0]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$gaoerfuqiuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$gaoerfuqiuArr[$i]['title']?>"><?=$gaoerfuqiuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
			</div>
			<div class="mt20  clearfix">
				<div class="compre_content margin_left_0">
					<a class="compre_content_img" href="<?=$paiqiuArr[0]['url']?><?=$qid;?>" target="_blank" title="<?=$paiqiuArr[0]['title']?>"><img src="<?=$paiqiuArr[0]['pic']?>" alt="" width="320" height="240"/><span><?=$paiqiuArr[0]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$paiqiuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$paiqiuArr[$i]['title']?>"><?=$paiqiuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<?php $tiyuArr = array_slice($data['bxdt'],24);?>
					<a class="compre_content_img" href="<?=$tiyuArr[0]['url']?><?=$qid;?>" target="_blank" title="<?=$tiyuArr[0]['title']?>"><img src="<?=$tiyuArr[0]['pic']?>" alt="" width="320" height="240"/><span><?=$tiyuArr[0]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=1;$i<=5;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$tiyuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$tiyuArr[$i]['title']?>"><?=$tiyuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
				<div class="compre_content">
					<a class="compre_content_img" href="<?=$tiyuArr[6]['url']?><?=$qid;?>" target="_blank" title="<?=$tiyuArr[6]['title']?>"><img src="<?=$tiyuArr[6]['pic']?>" alt="" width="320" height="240"/><span><?=$tiyuArr[6]['title']?></span></a>
					<ul class="sl-list">
						<?php for($i=7;$i<=11;$i++){ ?>
							<li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$tiyuArr[$i]['url']?><?=$qid;?>" target="_blank" title="<?=$tiyuArr[$i]['title']?>"><?=$tiyuArr[$i]['title']?></a></li>
						<?php }?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="/assets/js/page_sports_v1.js"></script>

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
<script src="/assets/js/DDPngMin.js"></script>
<script>
	DD_belatedPNG.fix('.png24');
	$('#gotop_btn').find('.erwei_cnt').append("<img src='/assets/images/2codes.png'>");
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
	$('#gotop_btn').find('.erwei_cnt').append("<img src='/assets/images/2codes.png'>");
	$('a.show_go_1').on('mouseenter', function(){
		$(this).siblings('.erwei_cnt').css({'display':'block','filter':'alpha(opacity=100)'});
	});
	$('a.show_go_1').on('mouseleave', function(){
		$(this).siblings('.erwei_cnt').css({'display':'none','filter':'alpha(opacity=0)'});
	});
</script>
<![endif]-->
<!-- 搜狗统计-->
<script>
	var ptype = "topic";
	var pcode = "oly_newsi";
	spb_vars= {"ptype":ptype, "pcode":pcode};
</script>
<script type="text/javascript" src="http://d.123.sogoucdn.com/u/pb/pb.692148.js?V=1"></script>
<iframe src="http://123.sogou.com/olympic/calc.html?h=3112" style="display:none" frameborder="0" scrolling="no"></iframe>
</body>
</html>
