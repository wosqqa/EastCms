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
    <link rel="canonical" href="http://mini.eastday.com/" />
    <title>头条新闻_东方头条</title>
    <meta name="keywords" content="东方头条,头条新闻,头条,今日新闻头条,头条网,头条新闻,今日头条新闻" />
    <meta name="description" content="东方头条网 东方网 旗下《东方头条》是一款会自动学习的资讯软件,它会分析你的兴趣爱好,为你推荐喜欢的内容,并且越用越懂你.就要你好看,东方头条新闻网!" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>common.css" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>page_index_v9.css" />
    <script type="text/javascript" src="<?php echo __WWW_JS ?>device_index.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
    <?php
    $img_domain = \Lib\Core::config('img_domain');
    echo '<script type="text/javascript">var img_domain = "'.$img_domain.'"; var newstype = "toutiao";</script>';
    ?>
    <script src="<?php echo __WWW_JS ?>global.js"></script>
    <script src="<?php echo __WWW_JS ?>page_index_v2.js"></script>
    <!-- 搜索框提示词 -->
    <script type="text/javascript" src="<?php echo __WWW_JS_V1 ?>search_word.js"></script>
    <script src="//dup.baidustatic.com/js/ds.js"></script>
    <script type="text/javascript" src="//afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script>
    <!-- html5shiv.js支持H5的插件&Respond.js支持媒体查询的插件 -->
    <!--[if lt IE 9]>
    <script src="<?php echo __WWW_JS ?>html5shiv.js"></script>
    <script src="<?php echo __WWW_JS ?>respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript">
        if(coo_name == null){
            filename = "<?php echo __WWW_JS ?>resources/new_index_v2/default.js";
        }else {
            if (coo_name.indexOf("=") != -1) {
                var tmp = coo_name.replace("=", '_');
            } else if (coo_name.indexOf(".") != -1) {
                var tmp = coo_name.replace(/\./g, '_')
            } else{
                var tmp = coo_name;
            }
            filename = "<?php echo __WWW_JS ?>resources/new_index_v2/" + tmp + ".js";
        }
    </script>
    <script type="text/javascript">
        try {
            document.write("<script language=javascript   src="+filename+"><\/script>");
        }catch(e){}
    </script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_index_v2/index_gg.js?taobao2"></script>
</head>
<body>
<!-- 头部 start -->
<div class="header">
    <div class="header_cnt">
        <div class="header_cnt_l"><a href=""><img src="<?php echo __WWW_IMG ?>logoNew.png" width="160" height="60" alt="东方头条" title='东方头条'></a>
        </div>
        <div class="header_cnt_2">
            <!-- 广告位：新版新闻首页 顶部右侧640*60-百度 -->
            <!--<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/index/index_640_60_gg.js"></script>-->
            <div class="header_cnt_2_t">
                <form action="http://s.eastday.com/" target='_blank'>
                    <input type="text" value="" name="kw"  class="search_head" id='search_head' />
                    <a href="http://s.eastday.com/" target='_blank'>搜索</a>
                </form>
            </div>
            <div id='hotword_header' class="header_cnt_2_b"></div>
        </div>
    </div>
</div>  <!-- /头部 end -->

<!-- 导航 start -->
<div id='nav_cnt' class="nav_cnt">
    <ul class="nav">
        <li><a href="/" pdata="index|nav|0|0" target="_blank" class='active'>头条</a></li>
        <li><a href="/mainland.html" pdata="index|nav|1|0" target="_blank">国内</a></li>
        <li><a href="/world.html" pdata="index|nav|2|0" target="_blank">国际</a></li>
        <li><a class="pr" href="http://miniimg.eastday.com/" pdata="nav|mini_index|0|0" target="_blank" >图片</a></li>
        <li><a href="/society.html" pdata="index|nav|3|0" target="_blank">社会</a></li>
        <li><a href="/ent.html" pdata="index|nav|4|0" target="_blank">娱乐</a></li>
        <li><a href="http://video.eastday.com/" pdata="nav|mini_index|1|0" target="_blank">视频</a></li>
        <!--<li><a href="/health.html" pdata="index|nav|15|0" target="_blank">健康</a></li>-->
        <li><a href="/mil.html" pdata="index|nav|7|0" target="_blank">军事</a></li>
        <li><a href="/tech.html" pdata="index|nav|8|0" target="_blank">科技</a></li>
        <li><a href="/finance.html" pdata="index|nav|11|0" target="_blank">财经</a></li>
        <li><a href="/fashion.html" pdata="index|nav|6|0" target="_blank">时尚</a></li>
        <!--        <li><a href="/sports.html" pdata="index|nav|10|0" target="_blank">体育</a></li>-->
        <li><a href="/sports.html" pdata="index|nav|10|0" target="_blank">体育</a></li>
        <li><a href="/listpage/mainland.html" pdata="index|nav|12|0" target="_blank">滚动</a></li>
        <li>
            <a class='more' target="_blank">更多</a>
            <div class="more-links">
                <a href="/history.html" pdata="index|nav|13|0" target="_blank">人文</a>
                <a href="/health.html" pdata="index|nav|15|0" target="_blank">健康</a>
                <a href="/auto.html" pdata="index|nav|9|0" target="_blank">汽车</a>
                <a href="/games.html" pdata="index|nav|14|0" target="_blank">游戏</a>
                <a href="/astro.html" pdata="index|nav|16|0" target="_blank">星座</a>
                <a href="/home.html" pdata="index|nav|17|0" target="_blank">家居</a>
                <a href="http://tianqi.eastday.com/?qid=nav" target="_blank">天气</a>
            </div>
        </li>
    </ul>
</div>  <!-- /导航 end -->

<div>
    <!--广告位：嵩恒_头条_PC_首页_京东横幅-->
     <script>
         (function() {
             var s = "_" + Math.random().toString(36).slice(2);
             document.write('<div id="' + s + '"></div>');
             (window.slotbydup=window.slotbydup || []).push({
                 id: '2563146',
                 container: s,
                 size: '1002,35',
                 display: 'inlay-fix'
             });
         })();
     </script>
</div>
<!-- 第一屏 start -->
<div class="first-view">
    <div class="container first-view-container clearfix">
        <!-- 热点要闻 + 个性推荐 start -->
        <div class="hot-personality fl">
            <div id="J_hot_personality_nav" class="hot-personality-nav pr clearfix">
                <a class="J-nav nav-hot fl active" id="index_rdyw" href="javascript:;" data-target="hn">热点要闻</a>
                <!--<a class="J-nav nav-personality fl" id="index_gxtj" href="javascript:;" data-target="pr">个性推荐</a>-->
                <!--<a class="more" href="javascript:;">更多<i>+</i></a>-->
                <span class="J-bt-line bt-line"></span>
                <!--天气插件-->
                <div class="weather_plug">
                    <iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" src="//tianqi.eastday.com/plugin/widget.html?sc=3&z=3&t=1&v=0&d=3&bd=0&k=&f=808080&q=1&e=1&a=1&c=54511&w=180&h=36&align=center"></iframe>
                </div>
            </div>
            <div class="hot-personality-content pr clearfix">
                <!-- 热点要闻 start -->
                <div id="J_hot_news" class="hot-news clearfix">
                    <div class="hot-news-top">
                        <ul class="hnt-list">
                            <?php $j = 0 ?>
                            <?php foreach((array)$indexTopArray as $val){?>
                                <?php if(isImgNews($val['t']['url'])) {
                                    $li_class = "hnt-item pr";
                                    $i_class = "bgicon";
                                }else{
                                    $li_class = "hnt-item pr";
                                    $i_class = "";
                                }?>
                                <li class="<?= $li_class ?>">
                                    <i class="dot"></i>
                                    <a class="title-lg" href="<?=$val['t']['url']?>" pdata="index|hotnews|<?=intval($j++)?>|0" target="_blank" title="<?=$val['t']['topic']?>"><span><?=$val['t']['topic']?></span><i class="<?= $i_class ?>"></i></a>
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
                                    <?php if(isImgNews($v['url'])){
                                        $li_class = "";
                                        $i_class = "bgicon";
                                    }else {
                                        $li_class = "";
                                        $i_class = "";
                                    }?>
                                    <li class="hnb-item <?=$li_class ?><?php if ($k == 0) {?> first<?php } ?> pr"><i class="<?php if($k == 0){ ?>dot<?php }else{ ?>dot-sm<?php }?>"></i><a class="<?php if ($k == 0) echo "title-main";else echo "title-sub";?>" href="<?= $v['url'] ?>" pdata="index|top|<?=intval($j++)?>|0" target="_blank" title="<?=$v['topic']?>"><span><?=$v['topic']?></span><i class="<?= $i_class?>"></i></a></li>
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
                            <a class="img_a" target="_blank" data-title="<?=$val['topic']?>" href="<?= $val['url'] ?>" pdata="index|lb|<?= $key ?>|0">
                                <img src="<?=$val['img']?>" alt="<?=$val['topic']?>">
                            </a>
                        <?php }?>
                        <?php foreach((array)$lunhuanData as $key => $val) {?>
                            <a class="img_a" target="_blank" data-title="<?=$val['topic']?>" href="<?= $val['url'] ?>" pdata="index|lb|<?= $key ?>|0">
                                <img src="<?=$val['img']?>" alt="<?=$val['topic']?>">
                            </a>
                        <?php }?>
                        <?php foreach((array)$lunhuanData as $key => $val) {?>
                            <a class="img_a" target="_blank" data-title="<?=$val['topic']?>" href="<?= $val['url'] ?>" pdata="index|lb|<?= $key ?>|0">
                                <img src="<?=$val['img']?>" alt="<?=$val['topic']?>">
                            </a>
                        <?php }?>
                    </div>
                    <div class="banner_bar"></div>
                    <div class="banner_txt">
                        <a target="_blank" href="<?= $lunhuanData[0]['url'] ?>" pdata="index|lb|0|0"><?=$lunhuanData[0]['topic']?></a>
                    </div>
                    <div class="banner_act"><div  class="now"><span></span></div> <div><span></span></div> <div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div></div><div class="btn_l"></div><div class="btn_r"></div>
                </div>
            </div>  <!-- /轮播 end -->

            <!-- 推广1广告修改成暖新闻 start -->
            <div class="gg-index-1 mt20">
                <div class="lbNnews clearfix">
                    <script>
                    (function() {
                        var s = "_" + Math.random().toString(36).slice(2);
                        document.write('<div id="' + s + '"></div>');
                        (window.slotbydup=window.slotbydup || []).push(
                        { id: '2728824', container: s, size: '580,35', display: 'inlay-fix' }
                        );
                    })();
                    </script>               
                </div>
            </div>
            <!-- 推广1广告修改成暖新闻 end -->
            <!-- 广告图 + 图start -->
            <div class="clearfix mt20">
                <div class="gg-pic-1 fl">
                    <?php $picNews = $toutiaoData['picNews']?>
                    <a href="<?= $picNews[0]['url'] ?>" pdata="index|picNews|0|0" target="_blank" title="<?= $picNews[0]['topic'] ?>" class="img">
                        <img class="animation" src="<?= $picNews[0]['img'] ?>"  alt="<?= $picNews[0]['topic'] ?>">
                        <span class='bg'></span>
                        <em class='txt'> <?= $picNews[0]['topic'] ?></em>
                    </a>
                </div>
                <div class="gg-pic-2 gg-pic-lp fl">
                    <!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片上-->
                    <script> nxw_shang(); </script>
                </div>
                <div class="gg-pic-2 gg-pic-rp fl">
                    <!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片下-->
                    <script> nxw_xia(); </script>

                </div>
                <div class="gg-pic-1 gg-pic-3 fl">
                    <a href="<?= $picNews[1]['url'] ?>" pdata="index|picNews|1|0" target="_blank" title="<?= $picNews[1]['topic'] ?>" class="img">
                        <img class="animation" src="<?= $picNews[1]['img'] ?>"  alt="<?= $picNews[1]['topic'] ?>">
                        <span class='bg'></span>
                        <em class='txt'> <?= $picNews[1]['topic'] ?></em>
                    </a>
                </div>
            </div>  <!-- /热搜新闻词 + 阅读排行 end -->
            <!-- 大家在看 + 阅读排行 start -->
            <div class="clearfix mt30">
                <div class="everybody-see fl clearfix">
                    <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                    <?php $hotArr =  $toutiaoData['hot']; ?>
                    <div class="all-see clearfix">
                        <a class="img1 fl" href="<?=$hotArr[0]['url']?>" pdata="index|cat|0|0" target="_blank" title="<?=$hotArr[0]['topic']?>">
                            <span class="img"><img class="animation" src="<?=$hotArr[0]['img']?>" alt="<?=$hotArr[0]['topic']?>" width="112" height="84"></span>
                            <span class="txt"><?=$hotArr[0]['topic']?></span>
                        </a>
                        <a class="img1 fr" href="<?=$hotArr[1]['url']?>" pdata="index|cat|1|0" target="_blank" title="<?=$hotArr[1]['topic']?>">
                            <span class="img"><img class="animation" src="<?=$hotArr[1]['img']?>" alt="<?=$hotArr[1]['topic']?>" width="112" height="84"></span>
                            <span class="txt"><?=$hotArr[1]['topic']?></span>
                        </a>
                    </div>
                    <ul class="sl-list clearfix">
                        <?php for($i=2;$i<9;$i++) { ?>
                            <li class="sl-item  pr">
                                <i class="dot-sm"></i>
                                <a class="title-sub" href="<?=$hotArr[$i]['url']?>" pdata="index|cat|<?=$i?>|0" target="_blank" title="<?=$hotArr[$i]['topic']?>"><?=$hotArr[$i]['topic']?></a>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
                <div class="read-rate pr fr clearfix">
                    <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                    <ul id="J_read_rate_tab" class="tab-list clearfix">
                        <li class="tab-item fr"><a class="yesterday" id="index_shehui" href="javascript:;" data-target="yesterday">社会</a></li>
                        <li class="tab-item fr"><a class="today active" id="index_guonei" href="javascript:;" data-target="today">国内</a></li>
                    </ul>
                    <div class="tab-ty-wrap">
                        <div id="J_tab_today" class="tab-today">
                            <ul class="rate-list">
                                <?php foreach ($guonei_rank  as $k => $v) { ?>
                                    <li><i class="png24 i<?=$k?>"></i><a href="<?=$v['url']?>" pdata="index|guoneirank|<?=$k?>|0" target="_blank" title="<?=$v['topic']?>"><?=$v['topic']?></a></li>
                                <?php } ?>
                            </ul>
                        </div>
                        <div id="J_tab_yesterday" class="tab-yesterday none">
                            <ul class="rate-list">
                                <?php foreach ($shehui_rank  as $k => $v) { ?>
                                    <li><i class="png24 i<?=$k?>"></i><a href="<?=$v['url']?>" pdata="index|shehuirank|<?=$k?>|0" target="_blank" title="<?=$v['topic']?>"><?=$v['topic']?></a></li>
                                <?php } ?>
                            </ul>
                        </div>
                    </div>
                    <!-- 推广? start -->
                    <div class="gg-index-2 mt10">
                        <!-- 340*130  嵩恒_头条_PC_首页_默认渠道_阅读排行下-->
                        <script> ydph_xia(); </script>
                    </div>
                    <!-- 推广? end -->
                </div>
            </div>  <!-- /大家在看 + 阅读排行 end -->
        </div>
    </div>
</div>
<!-- 第一屏 end -->
<!-- 社会 start -->
<div class="container social mt40">
    <div class="section-title png24 social-hd pr">
        <h3><a href="/society.html" pdata="index|SOCIETY|0|0" target="_blank">社会<em>SOCIETY</em></a></h3>
        <a class="more" href="/society.html" pdata="index|SOCIETY|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content social-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=17;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6,12])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6,12])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6,12])) echo "title-main";else echo "title-sub";?>"  href='<?= $shehuiArr[$i]['url']?>' pdata="index|shehui|<?=$i?>|0"  target='_blank' title="<?= $shehuiArr[$i]['topic']?>"><?= $shehuiArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $shehuiArr[18]['url']?>" pdata="index|shehui|18|0" target="_blank" title="<?= $shehuiArr[18]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $shehuiArr[18]['imglunbname']['name']?>" alt="<?= $shehuiArr[18]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $shehuiArr[18]['topic']?></span>
                    </a>
                    <a class="img2 fl" href='<?= $shehuiArr[19]['url']?>' pdata="index|shehui|19|0" target="_blank" title="<?= $shehuiArr[19]['topic']?>"><span class="img"><img class="animation" src="<?= $shehuiArr[19]['imgmininame']['name']?>" alt="<?= $shehuiArr[19]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shehuiArr[19]['topic']?></span></a>
                    <a class="img3 fr" href='<?= $shehuiArr[20]['url']?>' pdata="index|shehui|20|0" target="_blank" title="<?= $shehuiArr[20]['topic']?>"><span class="img"><img class="animation" src="<?= $shehuiArr[20]['imgmininame']['name']?>" alt="<?= $shehuiArr[20]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shehuiArr[20]['topic']?></span></a>
                </div>
                <!-- 推广5 -->
                <div class="gg-index-5 mt30">
                    <!-- 广告位：嵩恒_头条_新站_首页_社会图片下方 -->
                    <script> shtp_xia(); </script>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <div class="right-img clearfix">
                    <a class="img1 fl" href='<?= $shehuiArr[21]['url']?>' pdata="index|shehui|21|0" target="_blank" title="<?= $shehuiArr[21]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $shehuiArr[21]['imgmininame']['name']?>" alt="<?= $shehuiArr[21]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $shehuiArr[21]['topic']?></span>
                    </a>
                    <a class="img2 fr"  href='<?= $shehuiArr[22]['url']?>' pdata="index|shehui|22|0" target="_blank" title="<?= $shehuiArr[22]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $shehuiArr[22]['imgmininame']['name']?>" alt="<?= $shehuiArr[22]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $shehuiArr[22]['topic']?></span>
                    </a>
                </div>
                <ul class="sl-list mt25">
                    <?php  for($i=23;$i<33;$i++){?>
                    <li class="sl-item <?php if ($i == 23 || $i ==28 ) echo "first"?> pr"><i class="<?php if($i == 23 || $i == 28){ ?>dot<?php }else{?>dot-sm <?php }?>"></i><a class="<?php if (in_array($i,[23,28])) echo "title-main";else echo "title-sub";?>" href='<?= $shehuiArr[$i]['url']?>' pdata="index|shehui|<?=$i?>|0" target='_blank' title="<?= $shehuiArr[$i]['topic']?>"><?= $shehuiArr[$i]['topic']?></a></li>
                    <?php if ($i== 27) {?>
                </ul>
                <ul class="sl-list mt25">
                    <?php }?>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
    <!-- 推广4 -->
    <div class="section-bottom gg-index-4 mt20">
        <!-- 嵩恒_新闻站首页_横幅广告1 -->
        <script> hengfu_1(); </script>
    </div>
</div>  <!-- /社会 end -->

<!-- 娱乐 start -->
<div class="container entertainment mt40">
    <div class="section-title png24 entertainment-hd pr">
        <h3><a href="/ent.html" pdata="index|ENTERTAINMENT|0|0" target="_blank">娱乐<em>ENTERTAINMENT</em></a></h3>
        <a class="more" href="/ent.html"  pdata="index|ENTERTAINMENT|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content entertainment-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $yuleArr[$i]['url']?>' pdata="index|yule|<?=$i?>|0"  target='_blank' title="<?= $yuleArr[$i]['topic']?>"><?= $yuleArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $yuleArr[12]['url']?>" pdata="index|yule|12|0" target="_blank" title="<?= $yuleArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $yuleArr[12]['imglunbname']['name']?>" alt="<?= $yuleArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $yuleArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href='<?= $yuleArr[13]['url']?>' pdata="index|yule|13|0" target="_blank" title="<?= $yuleArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $yuleArr[13]['imgmininame']['name']?>" alt="<?= $yuleArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $yuleArr[13]['topic']?></span></a>
                    <a class="img3 fr" href='<?= $yuleArr[14]['url']?>' pdata="index|yule|14|0" target="_blank" title="<?= $yuleArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $yuleArr[14]['imgmininame']['name']?>" alt="<?= $yuleArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $yuleArr[14]['topic']?></span></a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <ul class="order-list">
                    <?php  for($i=15;$i<21;$i++){?>
                        <li <?php if($i == 20 ) echo 'class="last"'; ?>><i class="png24 i<?=intval($jc++)?>"></i><a href="<?= $yuleArr[$i]['url']?>" pdata="index|yule|<?=$i?>|0" target="_blank" title="<?= $yuleArr[$i]['topic']?>"><?= $yuleArr[$i]['topic']?></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>  <!-- /娱乐 end -->
<!-- 军事 start -->
<div class="container military mt40">
    <div class="section-title png24 military-hd pr">
        <h3><a href="http://mil.eastday.com" pdata="index|MILITARY|0|0" target="_blank">军事<em>MILITARY</em></a></h3>
        <a class="more" href="http://mil.eastday.com" pdata="index|MILITARY|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content military-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=17;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6,12])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6,12])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6,12])) echo "title-main";else echo "title-sub";?>"  href='<?= $junshiArr[$i]['url']?>' pdata="index|junshi|<?=$i?>|0"  target='_blank' title="<?= $junshiArr[$i]['topic']?>"><?= $junshiArr[$i]['topic']?></a></li>
                <?php if($i == 5 || $i == 11){ ?>
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
                    <a class="img1 block" href="<?= $junshiArr[18]['url']?>" pdata="index|junshi|18|0" target="_blank" title="<?= $junshiArr[18]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $junshiArr[18]['imglunbname']['name']?>" alt="<?= $junshiArr[18]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $junshiArr[18]['topic']?></span>
                    </a>

                    <!-- 推广7 -->
                    <div class="gg-index-7 mt30">
                        <script> jstp_xia(); </script>
                    </div>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <ul class="img-txt-list">
                    <?php  for($i=19;$i<24;$i++){?>
                        <li class="img-txt-item clearfix">
                            <a class="img fl" href="<?= $junshiArr[$i]['url']?>" pdata="index|junshi|<?=$i?>|0" target="_blank" title="<?= $junshiArr[$i]['topic']?>">
                                <img class="animation" src="<?= $junshiArr[$i]['imgmininame']['name']?>" alt="<?= $junshiArr[$i]['topic']?>" width="112" height="84">
                            </a>
                            <div class="txt">
                                <p class="topic"><a href="<?= $junshiArr[$i]['url']?>" pdata="index|junshi|<?=$i?>|0" target="_blank" title="<?= $junshiArr[$i]['topic']?>"><?= $junshiArr[$i]['topic']?></a></p>
                                <p class="from mt5">来源：<?= $kejiArr[$i]['source']?></p>
                                <p class="time">20<?= $junshiArr[$i]['year']?>年<?= $junshiArr[$i]['month']?>月<?= $junshiArr[$i]['day']?>日 <?= $junshiArr[$i]['hour']?>:<?= $junshiArr[$i]['minute']?></p>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
    <!-- 推广6 -->
    <div class="section-bottom gg-index-6 mt20">
        <!-- 嵩恒_新闻站首页_横幅广告2 -->
        <script> hengfu_2(); </script>
    </div>
</div>
</div>  <!-- /军事 end -->


<!-- 国内 start -->
<div class="container inland mt40">
    <div class="section-title png24 inland-hd">
        <h3><a href="mainland.html" pdata="index|MAINLAND|0|0" target="_blank">国内<em>MAINLAND</em></a></h3>
        <a class="more" href="mainland.html" pdata="index|MAINLAND|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content inland-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $guoneiArr[$i]['url']?>' pdata="index|guonei|<?=$i?>|0"  target='_blank' title="<?= $guoneiArr[$i]['topic']?>"><?= $guoneiArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $guoneiArr[12]['url']?>" pdata="index|guonei|12|0" target="_blank" title="<?= $guoneiArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $guoneiArr[12]['imglunbname']['name']?>" alt="<?= $guoneiArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $guoneiArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href='<?= $guoneiArr[13]['url']?>' pdata="index|guonei|13|0" target="_blank" title="<?= $guoneiArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $guoneiArr[13]['imgmininame']['name']?>" alt="<?= $guoneiArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guoneiArr[13]['topic']?></span></a>
                    <a class="img3 fr" href='<?= $guoneiArr[14]['url']?>' pdata="index|guonei|14|0" target="_blank" title="<?= $guoneiArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $guoneiArr[14]['imgmininame']['name']?>" alt="<?= $guoneiArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guoneiArr[14]['topic']?></span></a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <div class="right-img clearfix">
                    <a class="img1 fl" href='<?= $guoneiArr[15]['url']?>' pdata="index|guonei|15|0" target="_blank" title="<?= $guoneiArr[15]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $guoneiArr[15]['imgmininame']['name']?>" alt="<?= $guoneiArr[15]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $guoneiArr[15]['topic']?></span>
                    </a>
                    <a class="img2 fr"  href='<?= $guoneiArr[16]['url']?>' pdata="index|guonei|16|0" target="_blank" title="<?= $guoneiArr[16]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $guoneiArr[16]['imgmininame']['name']?>" alt="<?= $guoneiArr[16]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $guoneiArr[16]['topic']?></span>
                    </a>
                </div>
                <ul class="sl-list">
                    <?php  for($i=17;$i<22;$i++){?>
                        <li class="sl-item <?php if ($i == 17 ) echo "first"?> pr"><i class="<?php if($i == 17){ ?>dot<?php }else{?>dot-sm <?php }?>"></i><a class="<?php if ($i == 17) echo "title-main";else echo "title-sub";?>" href='<?= $guoneiArr[$i]['url']?>' pdata="index|guonei|<?=$i?>|0" target='_blank' title="<?= $guoneiArr[$i]['topic']?>"><?= $guoneiArr[$i]['topic']?></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>  <!-- /国内 end -->

<!-- 国际 start -->
<div class="container internatioinal mt40">
    <div class="section-title png24 internatioinal-hd pr">
        <h3><a href="/world.html" pdata="index|WORLD|0|0"  target="_blank">国际<em>WORLD</em></a></h3>
        <a class="more"  href="/world.html" pdata="index|WORLD|1|0"  target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content internatioinal-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $guojiArr[$i]['url']?>' pdata="index|guoji|<?=$i?>|0"  target='_blank' title="<?= $guojiArr[$i]['topic']?>"><?= $guojiArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $guojiArr[12]['url']?>" pdata="index|guoji|12|0" target="_blank" title="<?= $guojiArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $guojiArr[12]['imglunbname']['name']?>" alt="<?= $guojiArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $guojiArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href='<?= $guojiArr[13]['url']?>' pdata="index|guoji|13|0" target="_blank" title="<?= $guojiArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $guojiArr[13]['imgmininame']['name']?>" alt="<?= $guojiArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guojiArr[13]['topic']?></span></a>
                    <a class="img3 fr" href='<?= $guojiArr[14]['url']?>' pdata="index|guoji|14|0" target="_blank" title="<?= $guojiArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $guojiArr[14]['imgmininame']['name']?>" alt="<?= $guojiArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $guojiArr[14]['topic']?></span></a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <ul class="order-list">
                    <?php  for($i=15;$i<21;$i++){?>
                        <li <?php if($i == 20 ) echo 'class="last"'; ?>><i class="png24 i<?=intval($jj++)?>"></i><a href="<?= $guojiArr[$i]['url']?>" pdata="index|guoji|<?=$i?>|0" target="_blank" title="<?= $guojiArr[$i]['topic']?>"><?= $guojiArr[$i]['topic']?></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>  <!-- /国际 end -->

<!-- 图片 start -->
<div class="container mt40">
    <div class="section-title png24 picture-hd pr">
        <h3><a href="http://miniimg.eastday.com/" pdata="index|IMAGE|0|0" target='_blank'>图片<em>IMAGE</em></a></h3>
        <a class="more" href="http://miniimg.eastday.com/" pdata="index|IMAGE|1|0" target='_blank'>更多<i>+</i></a>
    </div>
    <div class="picture-bd clearfix">
        <div class="pic-l fl">
            <a href="<?= $tupianArr[0]['url'] ?>" pdata="index|tupian|0|0" target="_blank">
                <img  src="<?= str_replace("http://","//",$tupianArr[0]['img']) ?>" alt="<?= $tupianArr[0]['topic'] ?>" width="390" height="292">
                <span class="txt"><?= $tupianArr[0]['topic'] ?></span>
                <span class="bg"></span>
                <span class="ctg"></span>
            </a>
        </div>
        <div class="pic-r fr">
            <a href="<?= $tupianArr[1]['url'] ?>" pdata="index|tupian|1|0" target="_blank">
                <img src="<?= str_replace("http://","//",$tupianArr[1]['img']) ?>" alt="<?= $tupianArr[1]['topic'] ?>" width="189" height="292">
                <span class="txt"><?= $tupianArr[1]['topic'] ?></span>
                <span class="bg"></span>
            </a>
        </div>
        <div class="pic-mid">
            <p class="clearfix">
                <a class="fl" href="<?= $tupianArr[2]['url'] ?>" pdata="index|tupian|2|0" target="_blank">
                    <img  src="<?= str_replace("http://","//",$tupianArr[2]['img']) ?>" alt="<?= $tupianArr[2]['topic'] ?>" width="188" height="138">
                    <span class="txt"><?= $tupianArr[2]['topic'] ?></span>
                    <span class="bg"></span>
                </a>
                <a class="fr" href="<?= $tupianArr[3]['url'] ?>" pdata="index|tupian|3|0" target="_blank">
                    <img  src="<?= str_replace("http://","//",$tupianArr[3]['img']) ?>" alt="<?= $tupianArr[3]['topic'] ?>" width="188" height="138">
                    <span class="txt"><?= $tupianArr[3]['topic'] ?></span>
                    <span class="bg"></span>
                </a>
            </p>
            <p class="mt16 clearfix">
                <a class="fl" href="<?= $tupianArr[4]['url'] ?>" pdata="index|tupian|4|0" target="_blank">
                    <img  src="<?= str_replace("http://","//",$tupianArr[4]['img'])?>" alt="<?= $tupianArr[4]['topic'] ?>" width="188" height="138">
                    <span class="txt"><?= $tupianArr[4]['topic'] ?></span>
                    <span class="bg"></span>
                </a>
                <a class="fr" href="<?= $tupianArr[5]['url'] ?>" pdata="index|tupian|5|0" target="_blank">
                    <img  src="<?= str_replace("http://","//",$tupianArr[5]['img']) ?>" alt="<?= $tupianArr[5]['topic'] ?>" width="188" height="138">
                    <span class="txt"><?= $tupianArr[5]['topic'] ?></span>
                    <span class="bg"></span>
                </a>
            </p>
        </div>
    </div>
</div>  <!-- /图片 end -->

<!-- 科技 start -->
<div class="container technology mt40">
    <div class="section-title png24 technology-hd pr">
        <h3><a href="/tech.html" pdata="index|TECHNOLOGY|0|0" target="_blank">科技<em>TECHNOLOGY</em></a></h3>
        <a class="more" href="/tech.html" pdata="index|TECHNOLOGY|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content technology-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $kejiArr[$i]['url']?>' pdata="index|keji|<?=$i?>|0"  target='_blank' title="<?= $kejiArr[$i]['topic']?>"><?= $kejiArr[$i]['topic']?></a></li>
                <?php if($i == 5){ ?>
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
                    <a class="img1 block" href="<?= $kejiArr[12]['url']?>" pdata="index|keji|12|0" target="_blank" title="<?= $kejiArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $kejiArr[12]['imglunbname']['name'] ?>" alt="<?= $kejiArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $kejiArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href='<?= $kejiArr[13]['url']?>' pdata="index|keji|13|0" target="_blank" title="<?= $kejiArr[13]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $kejiArr[13]['imgmininame']['name'] ?>" alt="<?= $kejiArr[13]['topic']?>" width="112" height="84"></span>
                        <span class="txt"><?= $kejiArr[13]['topic']?></span>
                    </a>
                    <a class="img2 fr" href='<?= $kejiArr[14]['url']?>' pdata="index|keji|14|0" target="_blank" title="<?= $kejiArr[14]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $kejiArr[14]['imgmininame']['name'] ?>" alt="<?= $kejiArr[14]['topic']?>" width="112" height="84"></span>
                        <span class="txt"><?= $kejiArr[14]['topic']?></span>
                    </a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <div class="right-img clearfix">
                    <a class="img1 fl" href='<?= $kejiArr[15]['url']?>' pdata="index|keji|15|0"  target="_blank" title="<?= $kejiArr[15]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $kejiArr[15]['imgmininame']['name'] ?>" alt="<?= $kejiArr[15]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $kejiArr[15]['topic']?></span>
                    </a>
                    <a class="img2 fr"  href='<?= $kejiArr[16]['url']?>' pdata="index|keji|16|0" target="_blank" title="<?= $kejiArr[16]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $kejiArr[16]['imgmininame']['name'] ?>" alt="<?= $kejiArr[16]['topic']?>" width="145" height="105"></span>
                        <span class="txt"><?= $kejiArr[16]['topic']?></span>
                    </a>
                </div>
                <ul class="sl-list">
                    <?php  for($i=17;$i<=21;$i++){?>
                        <li class="sl-item <?php if (in_array($i,[17])) echo "first"?> pr"> <i class="<?php if(in_array($i,[17])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[17])) echo "title-main";else echo "title-sub";?>"  href='<?= $kejiArr[$i]['url']?>' pdata="index|keji|<?=$i?>|0"  target='_blank' title="<?= $kejiArr[$i]['topic']?>"><?= $kejiArr[$i]['topic']?></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
</div>  <!-- /科技 end -->

<!-- 时尚 start -->
<div class="container fashion mt40">
    <div class="section-title png24 fashion-hd pr">
        <h3><a href="/fashion.html" pdata="index|FASHION|0|0" target="_blank">时尚<em>FASHION</em></a></h3>
        <a class="more" href="/fashion.html" pdata="index|FASHION|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content fashion-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $shishangArr[$i]['url']?>' pdata="index|shishang|<?=$i?>|0"  target='_blank' title="<?= $shishangArr[$i]['topic']?>"><?= $shishangArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $shishangArr[12]['url']?>" pdata="index|shishang|12|0" target="_blank" title="<?= $shishangArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $shishangArr[12]['imglunbname']['name']?>" alt="<?= $shishangArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $shishangArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href="<?= $shishangArr[13]['url']?>" pdata="index|shishang|13|0" target="_blank" title="<?= $shishangArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $shishangArr[13]['imgmininame']['name']?>" alt="<?= $shishangArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shishangArr[13]['topic']?></span></a>
                    <a class="img3 fr" href="<?= $shishangArr[14]['url']?>" pdata="index|shishang|14|0" target="_blank" title="<?= $shishangArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $shishangArr[14]['imgmininame']['name']?>" alt="<?= $shishangArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $shishangArr[14]['topic']?></span></a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <a class="srr-img" href="<?= $shishangArr[15]['url']?>" pdata="index|shishang|15|0" target="_blank"><img class="animation" src="<?= $shishangArr[15]['imglunbname']['name']?>" alt="" width="316" height="142"></a>
                <!-- 推广8 -->
                <div class="gg-index-8 mt30">
                    <!-- 广告位：嵩恒_头条_新站_首页_时尚潮流下方 -->
                    <script> sscl_xia(); </script>
                </div>
            </div>
        </div>
    </div>
    <!-- 推广11 -->
    <div class="section-bottom gg-index-11 mt20">
        <!-- 嵩恒_新闻站首页_横幅广告3 -->
        <script> hengfu_3(); </script>
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
        <h3><a href="/finance.html" pdata="index|FINANCE|0|0" target="_blank">财经<em>FINANCE</em></a></h3>
        <a class="more" href="/finance.html" pdata="index|FINANCE|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content finance-bd">
        <div class="section-left">
            <ul class="sl-list">
                <?php  for($i=0;$i<=11;$i++){?>
                <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $caijingArr[$i]['url']?>' pdata="index|caijing|<?=$i?>|0"  target='_blank' title="<?= $caijingArr[$i]['topic']?>"><?= $caijingArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $caijingArr[12]['url']?>" pdata="index|caijing|12|0" target="_blank" title="<?= $caijingArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $caijingArr[12]['imglunbname']['name']?>" alt="<?= $caijingArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $caijingArr[12]['topic']?></span>
                    </a>
                    <!-- 推广13 -->
                    <div class="gg-index-13 mt30">
                        <!-- 广告位：嵩恒_头条_新站_首页_财经图片下方 -->
                        <script> cjtt_xia(); </script>
                    </div>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <div class="right-img clearfix">
                    <?php  for($i=15;$i<=16;$i++){?>
                        <a class="img1 <?php if($i==15) echo "fl";else echo "fr";?>" href="<?= $caijingArr[$i]['url']?>" pdata="index|caijing|<?=$i?>|0" target="_blank" title="<?= $caijingArr[$i]['topic']?>">
                            <span class="img"><img class="animation" src="<?= $caijingArr[$i]['imgmininame']['name']?>" alt="<?= $caijingArr[$i]['topic']?>" width="145" height="105"></span>
                            <span class="txt"><?= $caijingArr[$i]['topic']?></span>
                        </a>
                    <?php } ?>
                </div>
                <ul class="sl-list">
                    <?php  for($i=17;$i<=21;$i++){?>
                        <li class="sl-item <?php if($i==17) echo "first"?> pr">
                            <i class="<?php if($i==17) echo "dot";else echo "dot-sm"?>"></i>
                            <a class="<?php if($i==17) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $caijingArr[$i]['url']?>" pdata="index|caijing|<?=$i?>|0" target="_blank" title="<?=$caijingArr[$i]['topic']?>"><?=$caijingArr[$i]['topic']?>
                            </a>
                        </li>
                    <?php }?>
                </ul>
            </div>
        </div>
    </div>
</div>  <!-- /财经 end -->

<!-- 体育 start -->
<div class="container sports mt40 picture">
    <div class="section-title png24 sports-hd pr">
        <h3><a href="/sports.html" pdata="index|SPORTS|0|0" target="_blank">体育<em>SPORTS</em></a></h3>
        <a class="more" href="/sports.html" pdata="index|SPORTS|1|0" target="_blank">更多<i>+</i></a>
    </div>
    <div class="section-content sports-bd">
        <div class="section-left">
            <div class="section-left">
                <ul class="sl-list">
                    <?php  for($i=0;$i<=11;$i++){?>
                    <li class="sl-item <?php if (in_array($i,[0,6])) echo "first"?> pr"> <i class="<?php if(in_array($i,[0,6])){?>dot<?php }else{?>dot-sm<?php } ?>"></i><a class="<?php if (in_array($i,[0,6])) echo "title-main";else echo "title-sub";?>"  href='<?= $tiyuArr[$i]['url']?>' pdata="index|tiyu|<?=$i?>|0"  target='_blank' title="<?= $tiyuArr[$i]['topic']?>"><?= $tiyuArr[$i]['topic']?></a></li>
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
                    <a class="img1 block" href="<?= $tiyuArr[12]['url']?>" pdata="index|tiyu|12|0" target="_blank" title="<?= $tiyuArr[12]['topic']?>">
                        <span class="img"><img class="animation" src="<?= $tiyuArr[12]['imglunbname']['name']?>" alt="<?= $tiyuArr[12]['topic']?>" width="240" height="120"></span>
                        <span class="txt"><?= $tiyuArr[12]['topic']?></span>
                    </a>
                    <a class="img2 fl" href="<?= $tiyuArr[13]['url']?>" pdata="index|tiyu|13|0" target="_blank" title="<?= $tiyuArr[13]['topic']?>"><span class="img"><img class="animation" src="<?= $tiyuArr[13]['imgmininame']['name']?>" alt="<?= $tiyuArr[13]['topic']?>" width="112" height="84"></span><span class="txt"><?= $tiyuArr[13]['topic']?></span></a>
                    <a class="img3 fr" href="<?= $tiyuArr[14]['url']?>" pdata="index|tiyu|14|0" target="_blank" title="<?= $tiyuArr[14]['topic']?>"><span class="img"><img class="animation" src="<?= $tiyuArr[14]['imgmininame']['name']?>" alt="<?= $tiyuArr[14]['topic']?>" width="112" height="84"></span><span class="txt"><?= $tiyuArr[14]['topic']?></span></a>
                </div>
            </div>
            <div class="sr-r fr">
                <h4 class="title pr"><i class="png24"></i><span class="png24"></span></h4>
                <ul class="sl-list">
                    <?php  for($i=15;$i<=19;$i++){?>
                        <li class="sl-item <?php if($i==15) echo "first"?> pr">
                            <i class="<?php if($i==15) echo "dot";else echo "dot-sm"?>"></i>
                            <a class="<?php if($i==15) {echo "title-main";} else {echo "title-sub";}?>" href="<?= $tiyuArr[$i]['url']?>" pdata="index|tiyu|<?=$i?>|0" target="_blank" title="<?=$tiyuArr[$i]['topic']?>"><?=$tiyuArr[$i]['topic']?>
                            </a>
                        </li>
                    <?php }?>
                </ul>
                <!-- 推广9 -->
                <div class="gg-index-9 mt15">
                    <!-- 广告位：嵩恒_头条_首页_体育右侧 -->
                    <script> tyyc(); </script>
                </div>
            </div>
        </div>
    </div>
    <!-- 推广12 -->
    <div class="section-bottom gg-index-12 mt20">
        <!-- 嵩恒_新闻站首页_横幅广告4 -->
        <script> hengfu_4(); </script>
    </div>
</div>  <!-- /体育 end -->


<!-- 右侧固定导航菜单 start -->
<div class="goto_top">
    <a id='J_shoucang' class='shoucang' href="javascript:;"></a>
    <div class="sc-txt"><span>Ctrl+D</span>&nbsp;收藏本站为书签，关注最热门的头条</div>
    <a id='gotop_btn' class='show_go_0' href="javascript:;"></a>
    <a class='show_go_1' href="javascript:;"></a>
    <div class="erwei_cnt"></div>
</div>  <!-- /右侧固定导航菜单 end -->

<!-- 右侧二维码-->
<!--<div class="right_cod" style="">
    <img src="<?php /*echo __WWW_IMG */?>news_code_n.png">
</div>-->
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

<!-- 底部 start -->
<div class="footer">
    <div id='footer' class="footer_cnt">
        <p>友情链接<?php foreach((array)$f_urls as $val){?>  |　<a target="_blank" href="<?=$val['link']?>"><?=$val['name']?></a><?php }?></p>
        <p><a href="http://news.eastday.com/images/ditu/zzzs.htm" target="_blank">增值电信业务经营许可证（ICP）：沪B2-20050088号</a>　互联网新闻信息服务许可证:3112006001　广告经营许可证:3100003000089</p>
        <p><a href="http://imedia.eastday.com/license/index.htm" target="_blank">信息网络传播视听节目许可证：0907180</a>　互联网出版许可证:新出网证（沪）字003号　<a href="http://i1.eastday.com/images/ad/CZC_3532.jpg" target="_blank">广播电视节目制作经营许可证:(沪)字第406号</a></p>
        <p class="grey12">ISO9001质量管理体系认证:00307Q10176R1S　BS17799信息安全管理体系认证:00307I10001R0S</p>
        <p><a title="" target="_blank" href="/about.html">联系我们</a>　|　eastday.com All Right Reserve 版权所有</p>
    </div>
</div>  <!-- /底部 end -->

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
<script src="<?php echo __WWW_JS ?>globle_bottom.js"></script>

<script type="text/javascript">
    /* 嵩恒_头条_PC_新闻页面_360导航_右下悬浮 嵩恒_头条_PC_首页_360导航_侧栏悬浮_对联 */
    ce_lan_xuan_fu();
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
