<!doctype html>
<html lang="zh-cmn-Hans-CN">
<head>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<META name="filetype" content="1">
	<META name="publishedtype" content="1">
	<META name="pagetype" content="2">
	<META name="catalogs" content="toutiao_PC">
	<meta name="applicable-device" content="pc">
	<link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
	<title>头条新闻_东方头条</title>
	<meta name="keywords" content="东方头条,头条新闻,头条,今日新闻头条,头条网,头条新闻,今日头条新闻" />
	<meta name="description" content="东方头条网 东方网 旗下《东方头条》是一款会自动学习的资讯软件,它会分析你的兴趣爱好,为你推荐喜欢的内容,并且越用越懂你.就要你好看,东方头条新闻网!" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
	<link rel="stylesheet" href="<?php echo __WWW_QD_ASSET ?>common.css" />
	<link rel="stylesheet" href="<?php echo __WWW_QD_ASSET ?>page_index.css" />
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
	<!-- html5shiv.js支持H5的插件&Respond.js支持媒体查询的插件 -->
	<!--[if lt IE 9]>
	<script src="<?php echo __WWW_JS ?>html5shiv.js"></script>
	<script src="<?php echo __WWW_JS ?>respond.min.js"></script>
	<![endif]-->
	<?php
	$img_domain = \Lib\Core::config('img_domain');
	echo '<script type="text/javascript">var img_domain = "'.$img_domain.'"; var newstype = "toutiao";</script>';
	?>
</head>
<body style="background-color: <?= $bodyColor?>;">

<!-- 第一屏 start -->
<div class="first-view">
	<div class="container first-view-container clearfix">
		<!-- 热点要闻 + 个性推荐 start -->
		<div class="hot-personality fl">
			<div id="J_hot_personality_nav" class="hot-personality-nav pr clearfix">
				<a class="J-nav nav-hot fl active" href="javascript:;" data-target="hn">热点要闻</a>
				<!--<a class="J-nav nav-personality fl" href="javascript:;" data-target="pr">个性推荐</a>-->
				<!--<a class="more" href="javascript:;">更多<i>+</i></a>-->
				<span class="J-bt-line bt-line"></span>
			</div>
			<div class="hot-personality-content pr">
				<!-- 热点要闻 start -->
				<div id="J_hot_news" class="hot-news">
					<div class="hot-news-top">
						<ul class="hnt-list">
							<?php foreach((array)$indexTopArray as $val){?>
								<li class="hnt-item pr">
									<i class="dot"></i>
									<a class="title-lg" href="<?=$val['t']['url']?>" pdata="index|hotnews|<?=intval($j++)?>|0" target="_blank"><?=$val['t']['topic']?></a>
									<p class="title-sm-wrap clearfix">
										<?php foreach((array)$val['s'] as $v){?>
											<a  class="title-sm fl" href="<?=$v['url']?>" pdata="index|hotnews|<?=  $j ++?>|0" target="_blank"><?=$v['topic']?></a>
										<?php } ?>
									</p>
								</li>
							<?php }?>
						</ul>
					</div>
					<div class="hot-news-bottom">
						<?php $topData = array_chunk((array)$toutiaoData['top'],6);$j = 0;?>
						<?php foreach($topData as $key => $val) {?>
							<ul class="hnb-list">
								<?php foreach((array)$topData[$key] as $k=> $v ) {?>
									<li class="hnb-item <?php if ($k == 0) {?>first<?php } ?> pr"><i class="<?php if($k == 0){ ?>dot<?php }else{ ?>dot-sm<?php }?>"></i><a class="<?php if ($k == 0) echo "title-main";else echo "title-sub";?>" href="<?= $v['url'] ?>" pdata="index|top|<?=intval($j++)?>|0" target="_blank"><?=$v['topic']?></a></li>
								<?php } ?>
							</ul>
						<?php }?>
					</div>
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
						<?php $lunhuanData = $toutiaoData['lunhuan']?>
						<?php foreach((array)$lunhuanData as $key => $val) {?>
							<a class="img_a <?php if($key == 0){?> >inline<?php }else { ?>none<?php } ?>" target="_blank" data-title="<?=$val['topic']?>" href="<?= $val['url'] ?>" pdata="index|lb|<?= $key ?>|0">
								<img src="<?=$val['img']?>" alt="<?=$val['topic']?>">
							</a>
						<?php }?>
						<div class="banner_bar"></div>
						<div class="banner_txt">
							<a target="_blank" href="<?= $lunhuanData[0]['url'] ?>" pdata="index|lb|0|0"><?=$lunhuanData[0]['topic']?></a>
						</div>
						<div class="banner_act"><div><span class="now"></span></div> <div><span></span></div> <div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div></div><div class="btn_l"></div><div class="btn_r"></div>
					</div>
				</div>
			</div>  <!-- /轮播 end -->

			<!-- 推广1 start -->
			<div class="gg-index-1 mt10">
				<div class="kx_cnt">
					<span class="tips_l">快讯</span>
					<div id='cont_item_kx' class="cont_item_kx">
						<?php foreach($kuaixunArr as $item) { ?>
							<a href="<?=$item['url']?>" pdata="index_<?=$qd?>|kuaixun|0|0" target="_blank"><?=$item['topic']?></a>
						<?php } ?>
					</div>					
				</div>
			</div>
			<!-- 推广1 end -->
			<!-- 大家在看 + 暖新闻 start -->
			<div class="clearfix mt20">
				<div class="everybody-see fl">
					<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
					<?php $hotData = $toutiaoData['hot']?>
					<?php  $image_domain = \Lib\Core::config('img_domain');?>
					<?php foreach($hotData as $key => $val) {?>
						<a class="img-txt pr <?php if($key !=0){?>mt20<?php }?>" href="<?=$val['url']?>" pdata="index|cat|<?=$key?>|0" target="_blank">
							<span class="img"><img class="animation" src="<?= $val['img']?>" alt="<?=$val['topic']?>" width="240" height="120"/></span>
							<span class="txt"><?=$val['topic']?></span>
						</a>
					<?php }?>
				</div>
				<div class="warm-news fr">
					<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
					<ul class="wn-list">
						<?php $nxwData = $toutiaoData['nxw']?>
						<!--<li class="wn-item first pr">
							<i class="dot"></i>
							<a class="title-main"  href="<?/*= $nxwData[6]['url'] */?>" pdata="index|nuan|6|0" target="_blank">
								<p class="topic"><?/*=$nxwData[6]['topic']*/?></p>
								<p class="desc"><?/*=$nxwData[6]['desc']*/?></p>
							</a>
						</li>

						<?php /*for($i=5;$i>=0;$i--) {*/?>
							<?php /*if ($i == 5) {*/?>
								<li class="wn-item first pr">
									<i class="dot"></i>
									<a class="title-main"  href="<?/*= $nxwData[$i]['url'] */?>" pdata="index|nuan|<?/*= $i */?>|0" target="_blank">
										<p class="topic"><?/*=$nxwData[$i]['topic']*/?></p>
										<p class="desc"><?/*=$nxwData[$i]['desc']*/?></p>
									</a>
								</li>
							<?php /*}else{ */?>
								<li class="wn-item pr"><i class="dot-sm"></i><a class="title-sub"  href="<?/*= $nxwData[$i]['url'] */?>" pdata="index|nuan|<?/*= $i */?>|0" target="_blank"><?/*=$nxwData[$i]['topic']*/?></a></li>
							<?php /*}*/?>
						--><?php /*}*/?>

						<?php for($i=0;$i<7;$i++) {?>
							<?php if ($i == 0 || $i == 1) {?>
								<li class="wn-item first pr">
									<i class="dot"></i>
									<a class="title-main"  href="<?= $nxwData[$i]['url'] ?>" pdata="index|nuan|<?= $i ?>|0" target="_blank">
										<p class="topic"><?=$nxwData[$i]['topic']?></p>
										<p class="desc"><?=$nxwData[$i]['desc']?></p>
									</a>
								</li>
							<?php }else{ ?>
								<li class="wn-item pr"><i class="dot-sm"></i><a class="title-sub"  href="<?= $nxwData[$i]['url'] ?>" pdata="index|nuan|<?= $i ?>|0" target="_blank"><?=$nxwData[$i]['topic']?></a></li>
							<?php }?>
						<?php }?>

					</ul>

				</div>
			</div>  <!-- /大家在看 + 暖新闻 end -->

			<!-- 热搜新闻词 + 阅读排行 start -->
			<div class="clearfix mt30">
				<div class="hot-search fl">
					<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
					<!-- 推广3 start -->
					<div class="gg-index-3 mt20">
						<ul class="hotWordCnt">
							<li><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[0]?>" target="_blank"><?=$hotWordsArray[0]?></a></li>
							<li class='half'><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[1]?>" target="_blank"><?=$hotWordsArray[1]?></a></li>
							<li class='half leftPdding bg-color'><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[2]?>" target="_blank"><?=$hotWordsArray[2]?></a></li>
							<li class='bg-color'><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[3]?>" target="_blank"><?=$hotWordsArray[3]?></a></li>
							<li class='half bg-color'><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[4]?>" target="_blank"><?=$hotWordsArray[4]?></a></li>
							<li class='half leftPdding'><a href="http://s.eastday.com/?kw=<?=$hotWordsArray[5]?>" target="_blank"><?=$hotWordsArray[5]?></a></li>
						</ul>
					</div>
					<!-- 推广3 end -->
				</div>
				<div class="read-rate pr fr">
					<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
					<ul id="J_read_rate_tab" class="tab-list clearfix">
						<li class="tab-item fr"><a class="yesterday" href="javascript:;" data-target="yesterday">社会</a></li>
						<li class="tab-item fr"><a class="today active" href="javascript:;" data-target="today">国内</a></li>
					</ul>
					<div class="tab-ty-wrap">
						<div id="J_tab_today" class="tab-today">
							<ul class="rate-list">
								<?php foreach ($guonei_rank  as $k => $v) { ?>
									<li><i class="png24 i<?=$k?>"></i><a href="<?=$v['url']?>" pdata="index|guoneirank|<?=$k?>|0" target="_blank"><?=$v['topic']?></a></li>
								<?php } ?>
							</ul>
						</div>
						<div id="J_tab_yesterday" class="tab-yesterday none">
							<ul class="rate-list">
								<?php foreach ($shehui_rank  as $k => $v) { ?>
									<li><i class="png24 i<?=$k?>"></i><a href="<?=$v['url']?>" pdata="index|shehuirank|<?=$k?>|0" target="_blank"><?=$v['topic']?></a></li>
								<?php } ?>
							</ul>
						</div>
					</div>

				</div>
			</div>  <!-- /热搜新闻词 + 阅读排行 end -->

		</div>

	</div>
</div>
<!-- 第一屏 end -->

<!-- 国内 start -->
<div class="container inland mt40">
	<div class="section-title png24 inland-hd">
		<h3><a target='_blank' href="mainland.html">国内<em>MAINLAND</em></a></h3>
		<a class="more" href="mainland.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content inland-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $guoneiArr[$i]['url']?>' pdata="index|guonei|<?=$i?>|0"  target='_blank'><?= $guoneiArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>国内图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $guoneiArr[12]['url']?>" pdata="index|guonei|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $guoneiArr[12]['imglunbname']['name']?>" alt="<?= $guoneiArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $guoneiArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $guoneiArr[13]['url']?>' pdata="index|guonei|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $guoneiArr[13]['imgmininame']['name']?>" alt="<?= $guoneiArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guoneiArr[13]['topic']?></span></a>
					<a class="img3 fr" href='<?= $guoneiArr[14]['url']?>' pdata="index|guonei|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $guoneiArr[14]['imgmininame']['name']?>" alt="<?= $guoneiArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guoneiArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<div class="right-img clearfix">
					<a class="img1 fl" href='<?= $guoneiArr[15]['url']?>' pdata="index|guonei|15|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $guoneiArr[15]['imgmininame']['name']?>" alt="<?= $guoneiArr[15]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $guoneiArr[15]['topic']?></span>
					</a>
					<a class="img2 fr"  href='<?= $guoneiArr[16]['url']?>' pdata="index|guonei|16|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $guoneiArr[16]['imgmininame']['name']?>" alt="<?= $guoneiArr[16]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $guoneiArr[16]['topic']?></span>
					</a>
				</div>
				<ul class="sl-list">
					<?php  for($i=17;$i<22;$i++){?>
						<li class="sl-item <?php if ($i == 17 ) echo "first"?> pr"><i class="<?php if($i == 17){ ?>dot<?php }else{?>dot-sm <?php }?>"></i><a class="<?php if ($i == 17) echo "title-main";else echo "title-sub";?>" href='<?= $guoneiArr[$i]['url']?>' pdata="index|guonei|<?=$i?>|0" target='_blank'><?= $guoneiArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>

</div>  <!-- /国内 end -->

<!-- 国际 start -->
<div class="container internatioinal mt40">
	<div class="section-title png24 internatioinal-hd pr">
		<h3><a target='_blank' href="/world.html">国际<em>WORLD</em></a></h3>
		<a class="more"  href="/world.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content internatioinal-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $guojiArr[$i]['url']?>' pdata="index|guoji|<?=$i?>|0"  target='_blank'><?= $guojiArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>国际图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $guojiArr[12]['url']?>" pdata="index|guoji|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $guojiArr[12]['imglunbname']['name']?>" alt="<?= $guojiArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $guojiArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $guojiArr[13]['url']?>' pdata="index|guoji|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $guojiArr[13]['imgmininame']['name']?>" alt="<?= $guojiArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guojiArr[13]['topic']?></span></a>
					<a class="img3 fr" href='<?= $guojiArr[14]['url']?>' pdata="index|guoji|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $guojiArr[14]['imgmininame']['name']?>" alt="<?= $guojiArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guojiArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<ul class="order-list">
					<?php  for($i=15;$i<21;$i++){?>
						<li <?php if($i == 20 ) echo 'class="last"'; ?>><i class="png24 i<?=intval($jj++)?>"></i><a href="<?= $guojiArr[$i]['url']?>" pdata="index|guoji|<?=$i?>|0" target="_blank"><?= $guojiArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- /国际 end -->

<!-- 社会 start -->
<div class="container social mt40">
	<div class="section-title png24 social-hd pr">
		<h3><a href="/society.html" target='_blank'>社会<em>SOCIETY</em></a></h3>
		<a class="more" href="/society.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content social-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=17;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6,12])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6,12])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6,12])) echo "title-main";else echo "title-sub";?>"  href='<?= $shehuiArr[$i]['url']?>' pdata="index|shehui|<?=$i?>|0"  target='_blank'><?= $shehuiArr[$i]['topic']?></a></li>
				<?php if($i == 5 ||  $i == 11){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>社会图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $shehuiArr[18]['url']?>" pdata="index|shehui|18|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $shehuiArr[18]['imglunbname']['name']?>" alt="<?= $shehuiArr[18]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $shehuiArr[18]['topic']?></span>
					</a>
					<a class="img1 block" href="<?= $shehuiArr[33]['url']?>" pdata="index|shehui|33|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $shehuiArr[33]['imglunbname']['name']?>" alt="<?= $shehuiArr[33]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $shehuiArr[33]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $shehuiArr[19]['url']?>' pdata="index|shehui|19|0" target="_blank"><span class="img"><img class="animation" src="<?= $shehuiArr[19]['imgmininame']['name']?>" alt="<?= $shehuiArr[19]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shehuiArr[19]['topic']?></span></a>
					<a class="img3 fr" href='<?= $shehuiArr[20]['url']?>' pdata="index|shehui|20|0" target="_blank"><span class="img"><img class="animation" src="<?= $shehuiArr[20]['imgmininame']['name']?>" alt="<?= $shehuiArr[20]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shehuiArr[20]['topic']?></span></a>
				</div>

			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<div class="right-img clearfix">
					<a class="img1 fl" href='<?= $shehuiArr[21]['url']?>' pdata="index|shehui|21|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $shehuiArr[21]['imgmininame']['name']?>" alt="<?= $shehuiArr[21]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $shehuiArr[21]['topic']?></span>
					</a>
					<a class="img2 fr"  href='<?= $shehuiArr[22]['url']?>' pdata="index|shehui|22|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $shehuiArr[22]['imgmininame']['name']?>" alt="<?= $shehuiArr[22]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $shehuiArr[22]['topic']?></span>
					</a>
				</div>
				<ul class="sl-list mt25">
					<?php  for($i=23;$i<33;$i++){?>
					<li class="sl-item <?php if ($i == 23 || $i ==28 ) echo "first"?> pr"><i class="<?php if($i == 23 || $i == 28){ ?>dot<?php }else{?>dot-sm <?php }?>"></i><a class="<?php if (in_array($i,[23,28])) echo "title-main";else echo "title-sub";?>" href='<?= $shehuiArr[$i]['url']?>' pdata="index|shehui|<?=$i?>|0" target='_blank'><?= $shehuiArr[$i]['topic']?></a></li>
					<?php if ($i== 27) {?>
				</ul>
				<ul class="sl-list mt25">
					<?php }?>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- /社会 end -->

<!-- 娱乐 start -->
<div class="container entertainment mt40">
	<div class="section-title png24 entertainment-hd pr">
		<h3><a href="/ent.html" target="_blank">娱乐<em>ENTERTAINMENT</em></a></h3>
		<a class="more" href="/ent.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content entertainment-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $yuleArr[$i]['url']?>' pdata="index|yule|<?=$i?>|0"  target='_blank'><?= $yuleArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>娱乐图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $yuleArr[12]['url']?>" pdata="index|yule|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $yuleArr[12]['imglunbname']['name']?>" alt="<?= $yuleArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $yuleArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $yuleArr[13]['url']?>' pdata="index|yule|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $yuleArr[13]['imgmininame']['name']?>" alt="<?= $yuleArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $yuleArr[13]['topic']?></span></a>
					<a class="img3 fr" href='<?= $yuleArr[14]['url']?>' pdata="index|yule|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $yuleArr[14]['imgmininame']['name']?>" alt="<?= $yuleArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $yuleArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<ul class="order-list">
					<?php  for($i=15;$i<21;$i++){?>
						<li <?php if($i == 20 ) echo 'class="last"'; ?>><i class="png24 i<?=intval($jc++)?>"></i><a href="<?= $yuleArr[$i]['url']?>" pdata="index|yule|<?=$i?>|0" target="_blank"><?= $yuleArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>

</div>  <!-- /娱乐 end -->
<!-- 军事 start -->
<div class="container military mt40">
	<div class="section-title png24 military-hd pr">
		<h3><a href="http://mil.eastday.com" target="_blank">军事<em>MILITARY</em></a></h3>
		<a class="more" href="http://mil.eastday.com" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content military-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $junshiArr[$i]['url']?>' pdata="index|junshi|<?=$i?>|0"  target='_blank'><?= $junshiArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>军事图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $junshiArr[12]['url']?>" pdata="index|junshi|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $junshiArr[12]['imglunbname']['name']?>" alt="<?= $junshiArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $junshiArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $junshiArr[13]['url']?>' pdata="index|junshi|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $junshiArr[13]['imgmininame']['name']?>" alt="<?= $junshiArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $junshiArr[13]['topic']?></span></a>
					<a class="img3 fr" href='<?= $junshiArr[14]['url']?>' pdata="index|junshi|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $junshiArr[14]['imgmininame']['name']?>" alt="<?= $junshiArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $junshiArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<div class="right-img clearfix">
					<a class="img1 fl" href='<?= $junshiArr[15]['url']?>' pdata="index|junshi|15|0"  target="_blank">
						<span class="img"><img class="animation" src="<?= $junshiArr[15]['imgmininame']['name']?>" alt="<?= $junshiArr[15]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $junshiArr[15]['topic']?></span>
					</a>
					<a class="img2 fr"  href='<?= $junshiArr[16]['url']?>' pdata="index|junshi|16|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $junshiArr[16]['imgmininame']['name']?>" alt="<?= $junshiArr[16]['topic']?>" width="145" height="105"></span>
						<span class="txt"><?= $junshiArr[16]['topic']?></span>
					</a>
				</div>
				<ul class="sl-list">
					<?php  for($i=17;$i<22;$i++){?>
						<li class="sl-item <?php if ($i == 17 ) echo "first"?> pr"><i class="<?php if($i == 17){ ?>dot<?php }else{?>dot-sm <?php }?>"></i><a class="<?php if ($i ==17) echo "title-main";else echo "title-sub";?>" href='<?= $junshiArr[$i]['url']?>' pdata="index|junshi|<?=$i?>|0" target='_blank'><?= $junshiArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- /军事 end -->

<!-- 科技 start -->
<div class="container technology mt40">
	<div class="section-title png24 technology-hd pr">
		<h3><a href="/tech.html" target="_blank">科技<em>TECHNOLOGY</em></a></h3>
		<a class="more" href="/tech.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content technology-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=17;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6,12])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6,12])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6,12])) echo "title-main";else echo "title-sub";?>"  href='<?= $kejiArr[$i]['url']?>' pdata="index|keji|<?=$i?>|0"  target='_blank'><?= $kejiArr[$i]['topic']?></a></li>
				<?php if($i == 11 || $i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>科技图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $kejiArr[18]['url']?>" pdata="index|keji|18|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $kejiArr[18]['imglunbname']['name'] ?>" alt="<?= $kejiArr[18]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $kejiArr[18]['topic']?></span>
					</a>
					<a class="img1 block" href="<?= $kejiArr[24]['url']?>" pdata="index|keji|24|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $kejiArr[24]['imglunbname']['name']?>" alt="<?= $kejiArr[24]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $kejiArr[24]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $kejiArr[25]['url'] ?>' pdata="index|keji|25|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $kejiArr[25]['imgmininame']['name'] ?>" alt="<?= $kejiArr[25]['topic'] ?>" width="112" height="84">
						</span><span class="txt"><?= $kejiArr[25]['topic'] ?></span>
					</a>
					<a class="img3 fr" href='<?= $kejiArr[26]['url'] ?>' pdata="index|keji|26|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $kejiArr[26]['imgmininame']['name'] ?>" alt="<?= $kejiArr[26]['topic'] ?>" width="112" height="84">
						</span><span class="txt"><?= $kejiArr[26]['topic'] ?></span>
					</a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<ul class="img-txt-list">
					<?php for($i=19;$i<=23;$i++){?>
						<li class="img-txt-item clearfix">
							<a class="img fl" href="<?= $kejiArr[$i]['url']?>" pdata="index|keji|<?=$i?>|0" target="_blank">
								<img class="animation" src="<?=$kejiArr[$i]['imgmininame']['name'] ?>" alt="<?= $kejiArr[$i]['topic']?>" width="112" height="84">
							</a>
							<div class="txt">
								<p class="topic"><a href="<?= $kejiArr[$i]['url']?>" pdata="index|keji|<?=$i?>|0" target="_blank"><?= $kejiArr[$i]['topic']?></a></p>
								<p class="from mt5">来源：<?= $kejiArr[$i]['source']?></p>
								<p class="time">20<?= $kejiArr[$i]['year']?>年<?= $kejiArr[$i]['month']?>月<?= $kejiArr[$i]['day']?>日 <?= $kejiArr[$i]['hour']?>:<?= $kejiArr[$i]['minute']?></p>
							</div>
						</li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- /科技 end -->

<!-- 时尚 start -->
<div class="container fashion mt40">
	<div class="section-title png24 fashion-hd pr">
		<h3><a href="/fashion.html" target="_blank">时尚<em>FASHION</em></a></h3>
		<a class="more" href="/fashion.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content fashion-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $shishangArr[$i]['url']?>' pdata="index|shishang|<?=$i?>|0"  target='_blank'><?= $shishangArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>时尚图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $shishangArr[12]['url']?>" pdata="index|shishang|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $shishangArr[12]['imglunbname']['name']?>" alt="<?= $shishangArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $shishangArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href="<?= $shishangArr[13]['url']?>" pdata="index|shishang|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $shishangArr[13]['imgmininame']['name']?>" alt="<?= $shishangArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shishangArr[13]['topic']?></span></a>
					<a class="img3 fr" href="<?= $shishangArr[14]['url']?>" pdata="index|shishang|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $shishangArr[14]['imgmininame']['name']?>" alt="<?= $shishangArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shishangArr[14]['topic']?></span></a>

				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<a class="srr-img" href="<?= $shishangArr[15]['url']?>" pdata="index|shishang|15|0" target="_blank"><img class="animation" src="<?= $shishangArr[15]['imglunbname']['name']?>" alt="" width="316" height="142"></a>
				<ul class="sl-list">
					<?php  for($i=16;$i<=20;$i++){?>
						<li class="sl-item <?php if($i==16) echo "first"?> pr">
							<i class="<?php if($i==16) echo "dot";else echo "dot-sm"?>"></i>
							<a class="<?php if($i==16) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $$shishangArr[$i]['url']?>" pdata="index|shishang|<?=$i?>|0" target="_blank"><?=$shishangArr[$i]['topic']?>
							</a>
						</li>
					<?php }?>
				</ul>
			</div>
		</div>
	</div>

</div>  <!-- /时尚 end -->

<!-- 汽车 start -->
<div class="container car mt40">
	<div class="section-title png24 car-hd pr">
		<h3><a href="/auto.html" pdata="index|AUTO|0|0" target="_blank">汽车<em>AUTO</em></a></h3>
		<a class="more" href="/auto.html" pdata="index|AUTO|1|0" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content car-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $qicheArr[$i]['url']?>' pdata="index|qiche|<?=$i?>|0"  target='_blank' title="<?= $qicheArr[$i]['topic']?>"><?= $qicheArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>汽车图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $qicheArr[12]['url']?>" pdata="index|qiche|12|0" target="_blank" title="<?= $qicheArr[12]['topic']?>">
						<span class="img"><img class="animation" src="<?= $qicheArr[12]['imglunbname']['name']?>" alt="<?= $qicheArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $qicheArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href="<?= $qicheArr[13]['url']?>" pdata="index|qiche|13|0" target="_blank" title="<?= $qicheArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $qicheArr[13]['imgmininame']['name']?>" alt="<?= $qicheArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $qicheArr[13]['topic']?></span></a>
					<a class="img3 fr" href="<?= $qicheArr[14]['url']?>" pdata="index|qiche|14|0" target="_blank" title="<?= $qicheArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $qicheArr[14]['imgmininame']['name']?>" alt="<?= $qicheArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $qicheArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<ul class="order-list">
					<?php for($i=15;$i<=20;$i++) {?>
						<li <?php if($i==20) echo 'class="last"' ?>><i class="png24 i<?= $i-15 ?>"></i><a href="<?= $qicheArr[$i]['url']?>" pdata="index|qiche|<?=$i ?>|0" target="_blank" title="<?= $qicheArr[$i]['topic']?>"><?= $qicheArr[$i]['topic']?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- 汽车 end -->

<!-- 财经 start -->
<div class="container finance mt40">
	<div class="section-title png24 finance-hd pr">
		<h3><a href="/finance.html" target="_blank">财经<em>FINANCE</em></a></h3>
		<a class="more" href="/finance.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content finance-bd">
		<div class="section-left">
			<ul class="sl-list">
				<?php  for($i=0;$i<=11;$i++){?>
				<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $caijingArr[$i]['url']?>' pdata="index|caijing|<?=$i?>|0"  target='_blank'><?= $caijingArr[$i]['topic']?></a></li>
				<?php if($i == 5){ ?>
			</ul>
			<ul class="sl-list">
				<?php } ?>
				<?php } ?>
			</ul>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>财经图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $caijingArr[12]['url']?>" pdata="index|caijing|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $caijingArr[12]['imglunbname']['name']?>" alt="<?= $caijingArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $caijingArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href='<?= $caijingArr[22]['url'] ?>' pdata="index|caijing|22|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $caijingArr[22]['imgmininame']['name'] ?>" alt="<?= $caijingArr[22]['topic'] ?>" width="112" height="84">
						</span><span class="txt"><?= $caijingArr[22]['topic'] ?></span>
					</a>
					<a class="img3 fr" href='<?= $caijingArr[23]['url'] ?>' pdata="index|caijing|23|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $caijingArr[23]['imgmininame']['name'] ?>" alt="<?= $caijingArr[23]['topic'] ?>" width="112" height="84">
						</span><span class="txt"><?= $caijingArr[23]['topic'] ?></span>
					</a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<div class="right-img clearfix">
					<?php  for($i=15;$i<=16;$i++){?>
						<a class="img1 <?php if($i==15) echo "fl";else echo "fr";?>" href="<?= $caijingArr[$i]['url']?>" pdata="index|caijing|<?=$i?>|0" target="_blank">
							<span class="img"><img class="animation" src="<?= $caijingArr[$i]['imgmininame']['name']?>" alt="<?= $caijingArr[$i]['topic']?>" width="145" height="105"></span>
							<span class="txt"><?= $caijingArr[$i]['topic']?></span>
						</a>
					<?php } ?>
				</div>
				<ul class="sl-list">
					<?php  for($i=17;$i<=21;$i++){?>
						<li class="sl-item <?php if($i==17) echo "first"?> pr">
							<i class="<?php if($i==17) echo "dot";else echo "dot-sm"?>"></i>
							<a class="<?php if($i==17) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $caijingArr[$i]['url']?>" pdata="index|caijing|<?=$i?>|0" target="_blank"><?=$caijingArr[$i]['topic']?>
							</a>
						</li>
					<?php }?>
				</ul>
			</div>
		</div>
	</div>
</div>  <!-- /财经 end -->

<!-- 体育 start -->
<div class="container sports mt40">
	<div class="section-title png24 sports-hd pr">
		<h3><a href="/sports.html" target="_blank">体育<em>SPORTS</em></a></h3>
		<a class="more" href="/sports.html" target="_blank">更多<i>+</i></a>
	</div>
	<div class="section-content sports-bd">
		<div class="section-left">
			<div class="section-left">
				<ul class="sl-list">
					<?php  for($i=0;$i<=11;$i++){?>
					<li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $tiyuArr[$i]['url']?>' pdata="index|tiyu|<?=$i?>|0"  target='_blank'><?= $tiyuArr[$i]['topic']?></a></li>
					<?php if($i == 5){ ?>
				</ul>
				<ul class="sl-list">
					<?php } ?>
					<?php } ?>
				</ul>
			</div>
		</div>
		<div class="section-right clearfix">
			<div class="sr-l fl">
				<h4 class="title pr"><i class="png24"></i><span>体育图片</span></h4>
				<div class="mid-img clearfix">
					<a class="img1 block" href="<?= $tiyuArr[12]['url']?>" pdata="index|tiyu|12|0" target="_blank">
						<span class="img"><img class="animation" src="<?= $tiyuArr[12]['imglunbname']['name']?>" alt="<?= $tiyuArr[12]['topic']?>" width="240" height="120"></span>
						<span class="txt"><?= $tiyuArr[12]['topic']?></span>
					</a>
					<a class="img2 fl" href="<?= $tiyuArr[13]['url']?>" pdata="index|tiyu|13|0" target="_blank"><span class="img"><img class="animation" src="<?= $tiyuArr[13]['imgmininame']['name']?>" alt="<?= $tiyuArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $tiyuArr[13]['topic']?></span></a>
					<a class="img3 fr" href="<?= $tiyuArr[14]['url']?>" pdata="index|tiyu|14|0" target="_blank"><span class="img"><img class="animation" src="<?= $tiyuArr[14]['imgmininame']['name']?>" alt="<?= $tiyuArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $tiyuArr[14]['topic']?></span></a>
				</div>
			</div>
			<div class="sr-r fr">
				<h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
				<ul class="sl-list">
					<?php  for($i=15;$i<=19;$i++){?>
						<li class="sl-item <?php if($i==15) echo "first"?> pr">
							<i class="<?php if($i==15) echo "dot";else echo "dot-sm"?>"></i>
							<a class="<?php if($i==15) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $tiyuArr[$i]['url']?>" pdata="index|tiyu|<?=$i?>|0" target="_blank"><?=$tiyuArr[$i]['topic']?>
							</a>
						</li>
					<?php }?>
				</ul>
				<ul class="sl-list">
					<?php  for($i=20;$i<=24;$i++){?>
						<li class="sl-item <?php if($i==20) echo "first"?> pr">
							<i class="<?php if($i==20) echo "dot";else echo "dot-sm"?>"></i>
							<a class="<?php if($i==20) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $tiyuArr[$i]['url']?>" pdata="index|tiyu|<?=$i?>|0" target="_blank"><?=$tiyuArr[$i]['topic']?>
							</a>
						</li>
					<?php }?>
				</ul>
			</div>

		</div>
	</div>
</div>  <!-- /体育 end -->

<!-- 图片 start -->
<div class="container picture mt40">
	<div class="section-title png24 picture-hd pr">
		<h3><a href="http://miniimg.eastday.com/" target='_blank' >图片<em>IMAGE</em></a></h3>
		<!--    <a class="more" href="javascript:;">更多<i>+</i></a>-->
	</div>
	<div class="picture-bd clearfix">
		<div class="pic-l fl">
			<a href="<?= $tupianArr[0]['url'] ?>" pdata="index|tupian|0|0" target="_blank">
				<img class="animation" src="<?= $tupianArr[0]['img'] ?>" alt="<?= $tupianArr[0]['topic'] ?>" width="390" height="292">
				<span class="txt"><?= $tupianArr[0]['topic'] ?></span>
				<span class="bg"></span>
				<span class="ctg"></span>
			</a>
		</div>
		<div class="pic-r fr">
			<a href="<?= $tupianArr[1]['url'] ?>" pdata="index|tupian|1|0" target="_blank">
				<img class="animation" src="<?= $tupianArr[1]['img'] ?>" alt="<?= $tupianArr[1]['topic'] ?>" width="189" height="292">
				<span class="ctg"></span>
			</a>
		</div>
		<div class="pic-mid">
			<p class="clearfix">
				<a class="fl" href="<?= $tupianArr[2]['url'] ?>" pdata="index|tupian|2|0" target="_blank"><img class="animation" src="<?= $tupianArr[2]['img'] ?>" alt="<?= $tupianArr[2]['topic'] ?>" width="188" height="138"></a>
				<a class="fr" href="<?= $tupianArr[3]['url'] ?>" pdata="index|tupian|3|0" target="_blank"><img class="animation" src="<?= $tupianArr[3]['img'] ?>" alt="<?= $tupianArr[3]['topic'] ?>" width="188" height="138"></a>
			</p>
			<p class="mt16 clearfix">
				<a class="fl" href="<?= $tupianArr[4]['url'] ?>" pdata="index|tupian|4|0" target="_blank"><img class="animation" src="<?= $tupianArr[4]['img'] ?>" alt="<?= $tupianArr[4]['topic'] ?>" width="188" height="138"></a>
				<a class="fr" href="<?= $tupianArr[5]['url'] ?>" pdata="index|tupian|5|0" target="_blank"><img class="animation" src="<?= $tupianArr[5]['img'] ?>" alt="<?= $tupianArr[5]['topic'] ?>" width="188" height="138"></a>
			</p>
		</div>
	</div>
</div>  <!-- /图片 end -->

<!-- 右侧固定导航菜单 start -->
<div class="goto_top">
	<a id='gotop_btn' class='show_go_0' href="javascript:;"></a>
	<a class='show_go_1' href="javascript:;"></a>
	<div class="erwei_cnt"></div>
</div>  <!-- /右侧固定导航菜单 end -->

<script src="<?php echo __WWW_QD_ASSET ?>global.js"></script>
<script src="<?php echo __WWW_QD_ASSET ?>page_index_qd.js"></script>
<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
		}
	});
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
</body>
</html>
