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
  <link rel="stylesheet" href="<?php echo __WWW_CSS ?>page_sports_iframe.css" />
  <script type="text/javascript" src="<?php echo __WWW_JS ?>device_index.js"></script>
  <script src="http://dup.baidustatic.com/js/ds.js"></script>
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
</head>
<body>
<!-- 第一屏 start -->
<div class="first-view">
  <div class="container first-view-container clearfix">
    <?php $toutiaoArr = $data['toutiao']; ?>
    <div class="hot_news_h2 clearfix">
      <span>头条</span><h1><a href="<?= $toutiaoArr[0]['url'] ?>" pdata="tiyu_index|toutiao|0|0" target="_blank"><?= $toutiaoArr[0]['topic'] ?></a></h1>
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
                <img src="<?=$val['img']?>" alt="<?=$val['topic']?>">
              </a>
            <?php }?>
            <div class="banner_bar"></div>
            <div class="banner_txt">
              <a target="_blank" href="<?= $lunhuanData[0]['url'] ?>" pdata="tiyu_index|lb|0|0"><?=$lunhuanData[0]['topic']?></a>
            </div>
            <div class="banner_act"><div><span class="now"></span></div> <div><span></span></div><div><span></span></div><div><span></span></div></div><div class="btn_l"></div><div class="btn_r"></div>
          </div>
        </div>
      </div>  <!-- /轮播 end -->
      <div class="carouse_pic">
        <ul class="carouse_pic_ul clearfix">
          <?php for($i=19;$i<=21;$i++) { ?>
            <li><a href="<?= $toutiaoArr[$i]['url']?>" pdata="tiyu_index|toutiao|<?=$i?>|0" target="_blank" title="<?= $toutiaoArr[$i]['topic']?>"><img src="<?= $toutiaoArr[$i]['img43']?>" alt="<?= $toutiaoArr[$i]['topic']?>" width="180" height="135"><span><?= $toutiaoArr[$i]['topic']?></span></a></li>
          <?php }?>
        </ul>
      </div>
    </div>  <!-- /热搜新闻词 + 阅读排行 end -->
  </div>
</div>
<!-- 第一屏 end -->

<!-- 篮球 start -->
<div class="container social">
  <div class="container_top">
    <div class="container_top_left fl">
      <span class="sports_b"></span><h2>篮球</h2>
    </div>
    <ul id="container_top_b" class="container_top_right fr"><li class="border_left_none"><a href="/nba.html" pdata="tiyu_index|right_label_nba|0|0" target="_blank">NBA</a></li><li class="border_right_none"><a href="/cba.html" pdata="tiyu_index|right_label_cba|0|0" target="_blank">CBA</a></li></ul>
  </div>
  <div id="container_sports_b clearfix">
    <div class="container_content clearfix">
      <div class="container_content_left">
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
          <a class="bigimg_c" href="<?=$nbaArr[10]['url']?>" pdata="tiyu_index|nba|10|0" target="_blank" title="<?=$nbaArr[10]['topic']?>"><span><img src="<?=$nbaArr[10]['imglunbname']['name']?>" alt="<?=$nbaArr[10]['topic']?>" width="260" height="130"></span><i><?=$nbaArr[10]['topic']?></i></a>
        </div>
        <div class="container_content_smallimg">
          <ul class="small_content clearfix">
            <li>
              <a class="bigimg_c" href="<?=$nbaArr[11]['url']?>" pdata="tiyu_index|nba|11|0" target="_blank" title="<?=$nbaArr[11]['topic']?>"><span><img src="<?=$nbaArr[11]['imgmininame']['name']?>" alt="<?=$nbaArr[11]['topic']?>" width="120" height="90"></span><i><?=$nbaArr[11]['topic']?></i></a>
            </li>
            <li>
              <a class="bigimg_c" href="<?=$nbaArr[12]['url']?>" pdata="tiyu_index|nba|12|0" target="_blank" title="<?=$nbaArr[12]['topic']?>"><span><img src="<?=$nbaArr[12]['imgmininame']['name']?>" alt="<?=$nbaArr[12]['topic']?>" width="120" height="90"></span><i><?=$nbaArr[12]['topic']?></i></a>
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
    <div class="container_content clearfix">
      <div class="container_content_left">
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
          <a class="bigimg_c" href="<?=$cbaArr[10]['url']?>" pdata="tiyu_index|cba|10|0" target="_blank" title="<?=$cbaArr[10]['topic']?>"><span><img src="<?=$cbaArr[10]['imglunbname']['name']?>" alt="<?=$cbaArr[10]['topic']?>" width="260" height="130"></span><i><?=$cbaArr[10]['topic']?></i></a>
        </div>
        <div class="container_content_smallimg">
          <ul class="small_content clearfix">
            <li>
              <a class="bigimg_c" href="<?=$cbaArr[11]['url']?>" pdata="tiyu_index|cba|11|0" target="_blank" title="<?=$cbaArr[11]['topic']?>"><span><img src="<?=$cbaArr[11]['imgmininame']['name']?>" alt="<?=$cbaArr[11]['topic']?>" width="120" height="90"></span><i><?=$cbaArr[11]['topic']?></i></a>
            </li>
            <li>
              <a class="bigimg_c" href="<?=$cbaArr[12]['url']?>" pdata="tiyu_index|cba|12|0" target="_blank" title="<?=$cbaArr[12]['topic']?>"><span><img src="<?=$cbaArr[12]['imgmininame']['name']?>" alt="<?=$cbaArr[12]['topic']?>" width="120" height="90"></span><i><?=$cbaArr[12]['topic']?></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container_content_right clearfix mt20">
        <div class="container_content_smallimg clearfix">
          <ul class="small_content_mub clearfix">
            <li>
              <a class="bigimg_c" href="<?=$cbaArr[13]['url']?>" pdata="tiyu_index|cba|13|0" target="_blank" title="<?=$cbaArr[13]['topic']?>"><span><img src="<?=$cbaArr[13]['imgmininame']['name']?>" alt="<?=$cbaArr[13]['topic']?>" width="140" height="105"></span><i><?=$cbaArr[13]['topic']?></i></a>
            </li>
            <li>
              <a class="bigimg_c" href="<?=$cbaArr[14]['url']?>" pdata="tiyu_index|cba|14|0" target="_blank" title="<?=$cbaArr[14]['topic']?>"><span><img src="<?=$cbaArr[14]['imgmininame']['name']?>" alt="<?=$cbaArr[14]['topic']?>" width="140" height="105"></span><i><?=$cbaArr[14]['topic']?></i></a>
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
            href="<?=$nbaArr[$i]['url']?>" pdata="tiyu_index|cba|<?=$i?>|0" target="_blank" title="<?=$nbaArr[$i]['topic']?>"><?=$nbaArr[$i]['topic']?></a></li>
          <?php } ?>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- /篮球 end -->
<!-- 足球 start -->
<div class="container social">
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
    <div class="container_content clearfix">
      <div class="container_content_left">
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
          <a class="bigimg_c" href="<?=$yijiaArr[5]['url']?>" pdata="tiyu_index|yijia|5|0" target="_blank" title="<?=$yijiaArr[5]['topic']?>"><span><img src="<?=$yijiaArr[5]['imglunbname']['name']?>" alt="<?=$yijiaArr[5]['topic']?>" width="260" height="130"></span><i><?=$yijiaArr[5]['topic']?></i></a>
        </div>
        <div class="container_content_bigimg mt20">
          <a class="bigimg_c" href="<?=$yijiaArr[6]['url']?>" pdata="tiyu_index|yijia|6|0" target="_blank" title="<?=$yijiaArr[6]['topic']?>"><span><img src="<?=$yijiaArr[6]['imglunbname']['name']?>" alt="<?=$yijiaArr[6]['topic']?>" width="260" height="130"></span><i><?=$yijiaArr[6]['topic']?></i></a>
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
    <div class="container_content clearfix">
      <div class="container_content_left">
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
          <a class="bigimg_c" href="<?=$zhongchaoArr[11]['url']?>" pdata="tiyu_index|zhongchao|11|0" target="_blank" title="<?=$zhongchaoArr[11]['topic']?>"><span><img src="<?=$zhongchaoArr[11]['imglunbname']['name']?>" alt="<?=$zhongchaoArr[11]['topic']?>" width="260" height="130"></span><i><?=$zhongchaoArr[11]['topic']?></i></a>
        </div>
        <div class="container_content_bigimg mt20">
          <a class="bigimg_c" href="<?=$zhongchaoArr[12]['url']?>" pdata="tiyu_index|zhongchao|12|0" target="_blank" title="<?=$zhongchaoArr[12]['topic']?>"><span><img src="<?=$zhongchaoArr[12]['imglunbname']['name']?>" alt="<?=$zhongchaoArr[12]['topic']?>" width="260" height="130"></span><i><?=$zhongchaoArr[12]['topic']?></i></a>
        </div>
      </div>
      <div class="container_content_right clearfix mt20">
        <div class="container_content_smallimg clearfix">
          <ul class="small_content_mub clearfix">
            <li>
              <a class="bigimg_c" href="<?=$zhongchaoArr[13]['url']?>" pdata="tiyu_index|zhongchao|13|0" target="_blank" title="<?=$zhongchaoArr[13]['topic']?>"><span><img src="<?=$zhongchaoArr[13]['imgmininame']['name']?>" alt="<?=$zhongchaoArr[13]['topic']?>" width="140" height="105"></span><i><?=$zhongchaoArr[13]['topic']?></i></a>
            </li>
            <li>
              <a class="bigimg_c" href="<?=$zhongchaoArr[14]['url']?>" pdata="tiyu_index|zhongchao|14|0" target="_blank" title="<?=$zhongchaoArr[14]['topic']?>"><span><img src="<?=$zhongchaoArr[14]['imgmininame']['name']?>" alt="<?=$zhongchaoArr[14]['topic']?>" width="140" height="105"></span><i><?=$zhongchaoArr[14]['topic']?></i></a>
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
<!-- 综合体育 start -->
<div class="container social">
  <div class="container_top">
    <div class="container_top_left fl">
      <span  class="sports_com"></span><h2>综合体育</h2>
    </div>
    <ul id="container_top_compre" class="container_top_right fr">
      <li class="active border_left_none"><a href="/tennis.html" pdata="tiyu_index|right_label_wangqiu|0|0" target="_blank">网球</a></li>
      <li ><a href="/badmin.html" pdata="tiyu_index|right_label_yumaoqiu|0|0" target="_blank">羽毛球</a></li>
      <li><a href="/golf.html" pdata="tiyu_index|right_label_gaoerfu|0|0" target="_blank">高尔夫</a></li>
      <li class="border_right_none"><a href="/volley.html" pdata="tiyu_index|right_label_paiqiu|0|0" target="_blank">排球</a></li>
    </ul>
  </div>
  <div id="container_sports_compre" class="clearfix">
    <div class="clearfix ">
      <div class="mt20  clearfix">
        <?php $wangqiuArr = $data['tennis'];?>
        <?php $yumaoqiuArr = $data['badmin'];?>
        <?php $gaoerfuqiuArr = $data['golf'];?>
        <?php $paiqiuArr = $data['volley'];?>

        <div class="compre_content margin_left_0">
          <a class="compre_content_img" href="<?=$wangqiuArr[0]['url']?>" pdata="tiyu_index|wangqiu|0|0" target="_blank" title="<?=$wangqiuArr[0]['topic']?>"><img src="<?=$wangqiuArr[0]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$wangqiuArr[0]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=1;$i<=5;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$wangqiuArr[$i]['url']?>" pdata="tiyu_index|wangqiu|<?=$i?>|0" target="_blank" title="<?=$wangqiuArr[$i]['topic']?>"><?=$wangqiuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
        <div class="compre_content">
          <a class="compre_content_img" href="<?=$yumaoqiuArr[0]['url']?>" pdata="tiyu_index|yumaoqiu|0|0" target="_blank" title="<?=$yumaoqiuArr[0]['topic']?>"><img src="<?=$yumaoqiuArr[0]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$yumaoqiuArr[0]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=1;$i<=5;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$yumaoqiuArr[$i]['url']?>" pdata="tiyu_index|yumaoqiu|<?=$i?>|0" target="_blank" title="<?=$yumaoqiuArr[$i]['topic']?>"><?=$yumaoqiuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
        <div class="compre_content">
          <a class="compre_content_img" href="<?=$gaoerfuqiuArr[0]['url']?>" pdata="tiyu_index|gaoerfuqiu|0|0" target="_blank" title="<?=$gaoerfuqiuArr[0]['topic']?>"><img src="<?=$gaoerfuqiuArr[0]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$gaoerfuqiuArr[0]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=1;$i<=5;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$gaoerfuqiuArr[$i]['url']?>" pdata="tiyu_index|gaoerfu|<?=$i?>|0" target="_blank" title="<?=$gaoerfuqiuArr[$i]['topic']?>"><?=$gaoerfuqiuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
      </div>
      <div class="mt10  clearfix">
        <div class="compre_content margin_left_0">
          <a class="compre_content_img" href="<?=$paiqiuArr[0]['url']?>" pdata="tiyu_index|paiqiu|0|0" target="_blank" title="<?=$paiqiuArr[0]['topic']?>"><img src="<?=$paiqiuArr[0]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$paiqiuArr[0]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=1;$i<=5;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$paiqiuArr[$i]['url']?>" pdata="tiyu_index|paiqiu|<?=$i?>|0" target="_blank" title="<?=$paiqiuArr[$i]['topic']?>"><?=$paiqiuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
        <div class="compre_content">
          <?php $tiyuArr = $data['tiyu']; ?>
          <a class="compre_content_img" href="<?=$tiyuArr[0]['url']?>" pdata="tiyu_index|zonghe|0|0" target="_blank" title="<?=$tiyuArr[0]['topic']?>"><img src="<?=$tiyuArr[0]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$tiyuArr[0]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=1;$i<=5;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$tiyuArr[$i]['url']?>" pdata="tiyu_index|zonghe|<?=$i?>|0" target="_blank" title="<?=$tiyuArr[$i]['topic']?>"><?=$tiyuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
        <div class="compre_content">
          <a class="compre_content_img" href="<?=$tiyuArr[6]['url']?>" pdata="tiyu_index|zonghe|6|0" target="_blank" title="<?=$tiyuArr[6]['topic']?>"><img src="<?=$tiyuArr[6]['imgmininame']['name']?>" alt="" width="320" height="240"/><span><?=$tiyuArr[6]['topic']?></span></a>
          <ul class="sl-list">
            <?php for($i=7;$i<=11;$i++){ ?>
              <li class="sl-item  pr"> <i class="dot-sm"></i><a class="title-sub" href="<?=$tiyuArr[$i]['url']?>" pdata="tiyu_index|zonghe|<?=$i?>|0" target="_blank" title="<?=$tiyuArr[$i]['topic']?>"><?=$tiyuArr[$i]['topic']?></a></li>
            <?php }?>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 综合体育 end -->
<script src="<?php echo __WWW_JS ?>page_sports_v1.js"></script>
<script type="text/javascript">
  //绑定统计事件
  $("a").click(function(){
    if ($(this).attr("pdata")){
      $.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
    }
  });
</script>
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
