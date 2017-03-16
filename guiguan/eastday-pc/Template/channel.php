<!doctype html>
<html lang="zh-cmn-Hans-CN" xmlns="http://www.w3.org/1999/html">
<head>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta http-equiv="Cache-Control" content="no-siteapp" />
	<META name="filetype" content="1">
	<META name="publishedtype" content="1">
	<META name="pagetype" content="2">
    <meta name="applicable-device" content="pc">
    <META name="catalogs" content="toutiao_PC">
	<link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
    <link rel="canonical" href="http://mini.eastday.com/<?=$english_type?>.html" />
	<title><?=\Lib\Core::config('seo')[$channel]['title']?></title>
	<meta name="keywords" content="<?=\Lib\Core::config('seo')[$channel]['_meta_keywords']?>" />
	<meta name="description" content="<?=\Lib\Core::config('seo')[$channel]['_meta_description']?>" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>common.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>channel.css" />
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>json2.js"></script>
    <![endif]-->
    <script src="//dup.baidustatic.com/js/ds.js"></script>
    <script type="text/javascript" src="//afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script>
    <?php
    $img_domain = \Lib\Core::config('img_domain');?>
    <script type="text/javascript">
        var global_share_title="";
        var global_share_url="";
        var global_share_img="";
        var img_domain = '<?=$img_domain?>';
        var type = '<?=$type?>';
        var channel = '<?=$channel?>';
        var newstype='<?=$channel?>';
        var channel_list_url= '<?=$channel_list_url?>';
        var channel_list_next_url ='<?=$channel_list_next_url?>';
        var channel_no_lunbo = <?=$no_pic?>;
    </script>
    <script type="text/javascript">
        if(coo_name == null){
            filename = "<?php echo __WWW_JS ?>resources/new_channel_v2/default.js";
        }else {
            if (coo_name.indexOf("=") != -1) {
                var tmp = coo_name.replace("=", '_');
            } else if (coo_name.indexOf(".") != -1) {
                var tmp = coo_name.replace(/\./g, '_')
            } else{
                var tmp = coo_name;
            }
            var timestamp = new Date().getTime();
            filename = "<?php echo __WWW_JS ?>resources/new_channel_v2/" + tmp + ".js?_"+timestamp;
        }
    </script>
    <script type="text/javascript">
        document.write("<script language=javascript   src="+filename+"><\/script>");
    </script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_channel_v2/channel_gg.js"></script>
    <script src="<?php echo __WWW_JS ?>global.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS_V1 ?>search_word.js"></script>
</head>
<body>
<div class="header_cnt_detail clear-fix">
  <div class="header_cnt_l_detail clear-fix">
    <ul class="nav_detail clearfix">

      <li class='first'><a href="/" pdata="channel|nav|0|0" target="_blank">头条</a></li>
      <li><a href="/mainland.html" pdata="channel|nav|1|0" target="_blank">国内</a></li>
      <li><a href="/world.html" pdata="channel|nav|2|0" target="_blank">国际</a></li>
      <li><a class="pr" href="http://miniimg.eastday.com/" pdata="nav|mini_channel|0|0" target="_blank" >图片<img class="hot" src="<?php echo __WWW_IMG ?>hot_2.gif" alt="" width="21" height="13"></a></li>
      <li><a href="/society.html" pdata="channel|nav|3|0" target="_blank">社会</a></li>
      <li><a href="/ent.html" pdata="channel|nav|4|0" target="_blank">娱乐</a></li>
      <li><a href="http://video.eastday.com/" pdata="nav|mini_channel|1|0" target="_blank">视频</a></li>
      <li><a href="/fashion.html" pdata="channel|nav|6|0" target="_blank">时尚</a></li>
        <li><a href="/mil.html" pdata="channel|nav|7|0" target="_blank">军事</a></li>
      <li><a href="/tech.html" pdata="channel|nav|8|0" target="_blank">科技</a></li>
      <li><a href="/auto.html" pdata="channel|nav|9|0" target="_blank">汽车</a></li>
      <li><a href="/sports.html" pdata="channel|nav|10|0" target="_blank">体育</a></li>
      <li><a href="/finance.html" pdata="channel|nav|11|0" target="_blank">财经</a></li>
      <!--<li><a href="/health.html" pdata="channel|nav|12|0" target="_blank">健康</a></li>-->
      <li><a href="/history.html" pdata="channel|nav|13|0" target="_blank">人文</a></li>
      <li id="J_more" class="more-wrap pr">
        <a class="more">更多&nbsp;<img class="png24" src="/assets/images/chev_b.png" alt="" width="10" height="7"></a>
        <div class="J-more-link more-link none">
          <a href="/games.html" pdata="channel|nav|15|0" target="_blank">游戏</a>
          <a href="/astro.html" pdata="channel|nav|16|0" target="_blank">星座</a>
          <a href="/home.html" pdata="channel|nav|17|0" target="_blank">家居</a>
            <a href="http://tianqi.eastday.com/?qid=nav" target="_blank">天气</a>
            <a href="/health.html" pdata="channel|nav|12|0" target="_blank">健康</a>
          <a href="/listpage/mainland.html" pdata="channel|nav|14|0" target="_blank">滚动</a>

        </div>
      </li>
    </ul>
    <div class="icon_cnt_dtl clear-fix">
      <a class='weixin_ew' href="javascript:;">微信<span></span></a>
      <a class='phone_ew' href="javascript:;">手机版<span></span></a>
    </div>
  </div>
  <div class="header_cnt_2_detail" id="channel_top_1">
    <!-- 广告位：嵩恒_头条_新闻页面_顶部通栏 -->
        <script type="text/javascript">channel_top_1();</script>
  </div>
</div>
<div class="head_search_cnt positionSearch">
    <div class="head_search_cnt_contain positionSearchCnt">
        <div class="head_search_cnt_left">
              <div class="detail_position">
                  <a href='javascript:;' class='detail_logo'><span><?= \Lib\Core::config('type_map')[$channel][0] ?></span></a>
                  <a href="/" pdata="channel|wz|1|0">东方头条</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="javascript:;"><?= \Lib\Core::config('type_map')[$channel][0] ?>频道</a>
              </div>
        </div>
        <div class="head_search_cnt_right">
            <form action="http://s.eastday.com/" target='_blank'>
                <input id='bdcsMain' class='search_text' placeholder='请输入' type="text" name="kw"/>
                <a id='search_btn' class='search_btn png-fixIe6' target="_blank" href='http://s.eastday.com/?kw='></a>
                  <script type="text/javascript">
                      (function(){
                          var $input = $('#bdcsMain');
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
<!-- 第一个新闻容器 -->
<!--<div id='first_news_cnt' class='first_news_cnt'></div>-->
<div class='main_contain_cnt clear-fix'>
		<div class='main_left clear-fix'>
              <?php if(!$no_pic): ?>
              <div class="slider_cnt_channel">
                    <h1 id="titleNewsSlider">
                        <a target="_blank" href="<?=$lunboArray[0]['url']?>" pdata="channel|lunbo|0|0"><?=$lunboArray[0]['topic']?></a>
                        <em><i class="now">1</i>/<i class="sum">4</i>
                        </em>
                    </h1>
                    <ul id="sliderContain" class="sliderContain">
                        <?php foreach($lunboArray as $k=>$v) { ?>
                            <li  <?php if ($k > 0) {?>style="display: none;"<?php } ?>>
                                <a href="<?=$v['url']?>" pdata="channel|lunbo|<?=$k?>|0" target="_blank">
                                    <img src="<?=str_replace("http://","//",$v['img'])?>" alt="<?=$v['topic']?>" />
                                </a>
                            </li>
                        <?php } ?>
                        <a class="btn_left" href="javascript:;" style="left: -42px;"></a>
                        <a class="btn_right" href="javascript:;" style="right: -42px;"></a>
                    </ul>
              </div>
              <?php endif ?>
                <hr class="split-line" />
              <ul id='listNewsTimeLy' class="listNewsTimeLy"></ul>
    </div>
		<div id="J_channel_right_sidebar" class='main_right clear-fix'>
          <div class="main_r_title"><h4><span><em style='width:130px;'></em>24小时新闻排行</span></h4></div>
  				<div class="main_item_cnt">
                      <ul id="hoursListNews" class="special_more_item">

                          <?php foreach($rankArray as $k=>$v) { ?>
                          <li><i class="i<?= $k ?>"></i><a
                                  href="<?=$v['url']?>" pdata="channel|24rank|<?=$k?>|0"
                                  target="_blank" title="<?=$v['topic']?>"><?=$v['topic']?></a></li>

                          <?php } ?>
                      </ul>
  				</div>
          <div class="gg_channel_r_b gg_right1"  id="channel_right_2">
          <!-- 广告位：默认渠道 新闻内页_300*250-->
              <script type="text/javascript">channel_right_2();</script>
          </div>
  				<div class="main_r_title"><h4><span><em></em>新闻热点</span></h4></div>
  				<div class="main_item_cnt">
                      <ul id="news_hot_day_item" class="main_item_news">
                          <?php foreach($hotNewsArray as $k=>$v) { ?>
                              <li><a title="<?=$v['topic']?>"
                                     href="<?=$v['url']?>" pdata="channel|hotNews|<?=$k?>|0"
                                     target="_blank" class="news_pic"><img class="animation"
                                          src="<?=str_replace("http://","//",$v['img'])?>"
                                          alt="<?=$v['topic']?>" width="145" height="105"></a><a
                                      href="<?=$v['url']?>" pdata="channel|hotNews|<?=$k?>|0"
                                      target="_blank" class="title_news" title="<?=$v['topic']?>"><?=$v['topic']?></a></li>

                          <?php } ?>
                      </ul>
  				</div>
  				<div class="gg_channel_r_b gg_right2" id="channel_right_3">
  					<!-- 广告位：默认渠道 新闻内页_322*140   2447092-->
                    <script type="text/javascript">channel_right_3();</script>
  				</div>
          <div class="gg_channel_r_b gg_right3" id="channel_right_4">
            <!-- 广告位：默认渠道 新闻内页_300*400    2447086-->
              <script type="text/javascript">channel_right_4();</script>
          </div>
          <div class="gg_channel_r_b gg_right4" id="channel_right_5">
            <!-- 广告位：默认渠道 新闻内页_300*250    2447090 -->
              <script type="text/javascript">channel_right_5();</script>
          </div>
          <div class="gg_channel_r_b gg_right5" id="channel_right_6">
            <!-- 广告位：默认渠道 新闻内页_300*250    2447088-->
              <script type="text/javascript">channel_right_6();</script>
          </div>                              
		</div>
</div>
<div class="goto_top"><a class="show_go_index" href="/?ycdh" target="_blank"></a><a id='gotop_btn' class='show_go_0' href="javascript:;"></a><a class='show_go_1' href="javascript:;"></a><div class="erwei_cnt"></div></div>
	<?php include 'footer.php'?>
<script src="<?php echo __WWW_JS ?>channel.js?ad"></script>
<script  type="text/javascript">
  (function(){
    if (!channel_no_lunbo){
        setTimeout(function(){
            //图片切换
            var sliderCnt=$('#sliderContain');
            var btn_left=sliderCnt.find('.btn_left');
            var btn_right=sliderCnt.find('.btn_right');
            var oLi=sliderCnt.children('li');
            var titleNewsSlider=$('#titleNewsSlider');//新闻标题dom
            var i_iNow=titleNewsSlider.find('i.now');//当前页索引容器dom
            var _Sum=oLi.length;//图片总数
            var iNow=0;
            timer();
            titleNewsSlider.find('i.sum').html(_Sum);
            btn_right.on('click',function(){
                iNow++;
                if(iNow >= parseInt(_Sum)){
                    iNow=0;
                }
                move(iNow);
            });
            btn_left.on('click',function(){
                iNow--;
                if(iNow < 0){
                    iNow=parseInt(_Sum-1);
                }
                move(iNow);
            });
            sliderCnt.hover(function(){
                btn_left.stop();
                btn_right.stop();
                btn_left.animate({'left':'0px'});
                btn_right.animate({'right':'0px'});
                clearInterval(t);
            },function(){
                btn_left.stop();
                btn_right.stop();
                btn_left.animate({'left':'-42px'});
                btn_right.animate({'right':'-42px'});
                timer();
            });
            function timer(){
              t=setInterval(function(){
               iNow++;
               if(iNow >= parseInt(_Sum)){
                 iNow=0;
               }
                move(iNow);
                 },5000);
            }
            function move(index){
                oLi.eq(index).show().siblings('li').hide();
                titleNewsSlider.find('a').html(oLi.eq(index).find('img').attr('alt')).attr('href',oLi.eq(index).find('a').attr('href'));
                i_iNow.html(index+1);
            }
        },3000);
    }
  })();
</script>
<script src="<?php echo __WWW_JS ?>globle_bottom.js"></script>
<script type="text/javascript">
    //绑定统计事件
    $("a").click(function(){
        if ($(this).attr("pdata")){
            $.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
        }
    });
    $("body").on('click','a',function(){
        if ($(this).attr("data-error")){
            $.cookie("errordata",$(this).attr("data-error"),{path:'/',domain:'eastday.com'});
        }    
    });
</script>
<script type="text/javascript">
    /*嵩恒-悬浮-左右折叠200*250-创建于 2015-07-15*/
    channel_zyzd();
</script>

<!--[if IE 6]>
<script src="<?php echo __WWW_JS ?>DDPngMin.js"></script>
<script>
    DD_belatedPNG.fix('.png24,.btn_left,.btn_right');
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
