<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="applicable-device" content="pc">
    <link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
    <link rel="canonical" href="http://mini.eastday.com/topic/index.html" />
    <title>头条新闻_东方头条</title>
    <meta name="keywords" content="东方头条,头条新闻,头条,今日新闻头条,头条网,头条新闻,今日头条新闻" />
    <meta name="description" content="东方头条网 东方网 旗下《东方头条》是一款会自动学习的资讯软件,它会分析你的兴趣爱好,为你推荐喜欢的内容,并且越用越懂你.就要你好看,东方头条新闻网!" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>common.css" />
    <link rel="stylesheet" href="<?php echo __WWW_CSS ?>page_topic.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>marvellous.css" />
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>json2.js"></script>
    <![endif]-->
    <!--头部引入-->
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
    <script src="http://dup.baidustatic.com/js/ds.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
    <script type="text/javascript">
        var newstype = "topic";
        var img_domain = 'http://imgmini.eastday.com/';
    </script>

	<script type="text/javascript">
		if(coo_name == null){
			filename = "<?php echo __WWW_JS ?>resources/new_topic_2/default.js";
		}else {
			if (coo_name.indexOf("=") != -1) {
				var tmp = coo_name.replace("=", '_');
			} else if (coo_name.indexOf(".") != -1) {
				var tmp = coo_name.replace(/\./g, '_')
			} else{
				var tmp = coo_name;
			}
			filename = "<?php echo __WWW_JS ?>resources/new_topic_2/" + tmp + ".js";
		}
	</script>
	<script type="text/javascript">
		document.write("<script type=\"text/javascript\" src="+filename+"><\/script>");
	</script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_topic_2/topic_gg.js"></script>

</head>

<body>
<!-- header start -->
<div class="header-wrap">
    <div class="container pr">
        <div class="header">
            <a href="/" target="_blank"><img src="<?php echo __WWW_IMG ?>logoNew.png" alt="头条看世界" width="313" height="60"></a>
        </div>
        <div class="sy-top">
            <!-- 嵩恒_头条_分页页面_顶部右侧 -->
            <script type="text/javascript">fenye_tuijian_top();</script>
        </div>
    </div>
</div>
<!-- header end -->
<div class="marvell-nav">
    <ul>
        <li>阅读完毕</li>
        <li class="p6">></li>
        <li>更多精彩</li>
    </ul>
</div>
<div class="container">
    <!-- 新闻聚焦 start -->
    <div class="marvell">
        <div class="panel-bd">
            <!-- 今日热点1 -->
            <div class="marvell-content">
                <ul id="J_today_hot_1" >
	                <?php $data_idx = 0;?>
                    <?php for($i=0;$i<10;$i++){ ?>
                        <?php $gg_idx = mt_rand(1,4); ?>
	                        <li class="J-line line clearfix">

		                        <?php for($j=1;$j<=4;$j++){ ?>
			                        <?php if($j == $gg_idx){ ?>
				                        <!-- 广告 -->
				                        <div class="topic-gg-content">
					                        <script type="text/javascript">gg<?=($i%3 + 1)?>();</script>
				                        </div>

			                        <?php } else { ?>


					                        <?php $item = $data[$data_idx]; ?>
					                        <a class="news-link fl <?php if($item['is_imgnews'] != 1){echo "tui-content";}?>" href="<?= $item['url'] ?><?php if($item['is_imgnews'] != 1) {?>?btype=topic&subtype=top&idx=<?=$i*4+$j?>&ishot=0<?php } else{ ?>?qid=fyym<?php }?>" target="_blank">
						                        <span class="img"><img class="animation" src="<?= $item['img'] ?>" alt="<?= $item['topic'] ?>" width="250" height="188"></span>
						                        <span class="txt" title="<?= $item['topic'] ?>"><?= $item['topic'] ?></span>
						                        <?php if($item['is_imgnews'] != 1) {?><span class="hot-icon">热<i></i></span><?php }?>
					                        </a>
											<?php $data_idx++; ?>
				                        <?php }?>

		                        <?php } ?>

	                        </li>
                    <?php } ?>
                </ul>
	        </div>
	    </div>
        <!-- 新闻聚焦 end -->
	    </div>
    </div>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>global.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>hotspot.js"></script>

	<div class="goto_top" style="height: 95px;">
		<a id='J_shoucang' class='shoucang' href="javascript:;"></a>
		<div class="sc-txt"><span>Ctrl+D</span>&nbsp;将本页面保存为书签，全面了解最新资讯，方便快捷。</div>
		<a id='gotop_btn' class='show_go_0' href="javascript:;"></a>
		<!--	<a class='show_go_1' href="javascript:;"></a>-->
		<!--    <div class="erwei_cnt"></div>-->
	</div>

	<div id='' class="footer_cnt" style="background: #f4f4f4;">
		<p><a href="http://news.eastday.com/images/ditu/zzzs.htm" target="_blank">增值电信业务经营许可证（ICP）：沪B2-20050088号</a>　互联网新闻信息服务许可证:3112006001　广告经营许可证:3100003000089</p>
		<p><a href="http://imedia.eastday.com/license/index.htm" target="_blank">信息网络传播视听节目许可证：0907180</a>　互联网出版许可证:新出网证（沪）字003号　<a href="http://i1.eastday.com/images/ad/CZC_3532.jpg" target="_blank">广播电视节目制作经营许可证:(沪)字第406号</a></p>
		<p class="grey12">ISO9001质量管理体系认证:00307Q10176R1S　BS17799信息安全管理体系认证:00307I10001R0S</p>
		<p><a title="" target="_blank" href="/about.html">联系我们</a>　|　eastday.com All Right Reserve 版权所有</p>
	</div>


<div style="display:none;">
        <!-- 对联 -->
        <script type="text/javascript">zuo_you_dui_lian();</script>
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
	<!--[if lte IE 6]>
	<script>
		<script src="/assets/js/DDPngMin.js"></script>
	<script>DD_belatedPNG.fix('.png24');</script>
	</script>
	<![endif]-->
	<!--[if lte IE 7]>
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

</body>
</html>