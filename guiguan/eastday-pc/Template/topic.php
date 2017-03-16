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
    <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>json2.js"></script>
    <![endif]-->
    <!--头部引入-->
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
    <script src="//dup.baidustatic.com/js/ds.js"></script>
    <script type="text/javascript" src="//afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
    <script type="text/javascript">
        var newstype = "topic";
        var img_domain = 'http://imgmini.eastday.com/';
    </script>

    <script type="text/javascript">
        if(coo_name == null){
            filename = "<?php echo __WWW_JS ?>resources/new_topic_v2/default.js";
        }else {
            if (coo_name.indexOf("=") != -1) {
                var tmp = coo_name.replace("=", '_');
            } else if (coo_name.indexOf(".") != -1) {
                var tmp = coo_name.replace(/\./g, '_')
            } else{
                var tmp = coo_name;
            }
            filename = "<?php echo __WWW_JS ?>resources/new_topic_v2/" + tmp + ".js";
        }
    </script>
    <script type="text/javascript">
        try{
            document.write("<script language=javascript   src="+filename+"><\/script>");
        }catch(e){}
    </script>
    <script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_topic_v2/topic_gg.js"></script>
</head>
<body>
<!-- header start -->
<div class="header-wrap">
    <div class="container pr">
        <div class="header">
            <a href="/" target="_blank"><img src="/assets/images/logoNew.png" alt="头条看世界" width="313" height="60"></a>
        </div>
        <div class="sy-top">
            <!-- 嵩恒_头条_分页页面_顶部右侧 -->
            <script>fenye_tuijian_top();</script>
        </div>
    </div>
</div>
<!-- header end -->

<div class="container">
    <!-- 新闻聚焦 start -->
    <div class="panel mb20 pb20">
        <div class="panel-hd pr"><h3>新闻聚焦</h3><a id="J_change" class="change" href="javascript:;">换一换</a></div>
        <div class="panel-bd">
            <!-- 今日热点1 -->
            <div class="news-block-wrap">
                <ul id="J_today_hot_1" class="news-block">
                    <?php for($i = 0;$i<35;$i++ ){
                        $item = $hot_arr[$i];
                        ?>
                        <?php if (in_array($i,[0,5,10,15,20,25,30])){?>
                            <li class="J-line line clearfix">
                        <?php }?>
                        <a class="news-link fl" href="<?=$item['url']?>" pdata="topic|top|<?=$i?>|0" target="_blank">
                            <span class="img"><img class="animation" src="<?=str_replace("http://","//",$item['img'])?>" alt="<?=$item['topic']?>"  width="160" height="120"></span>
                            <span class="txt" title="<?=$item['topic']?>"><?=$item['topic']?></span>
                        </a>
                        <?php if (in_array($i,[4,9,14,19,24,29,34])){?>
                            </li>
                        <?php }?>
                    <?php }?>
                </ul>
            </div>
            <!-- 广告1 -->
            <div class="sy-1">
                <!--嵩恒_头条_分页页面_今日热点1-->
                <script type="text/javascript">fenye_hot_1();</script>

            </div>

            <!-- 热门推荐1 -->
            <div class="news-block-wrap">
                <ul id="J_recommend_1" class="news-block">
                    <!-- <li class="J-line line clearfix">
                        <a class="news-link fl" href="javascript:;" target="_blank">
                            <span class="img"><img class="animation" src="http://img7.file.cache.docer.com/news/uploadfile/2015/1106/thumb_140_105_20151106035650663.jpg" alt="20大香港三级片艳星经典代表作" width="160" height="120"></span>
                            <span class="txt" title="20大香港三级片艳星经典代表作">20大香港三级片艳星经典代表作</span>
                        </a>
                    </li> -->
                </ul>
            </div>
            <!-- 广告2 -->
            <div class="sy-2">
                <!--嵩恒_头条_分页页面_分页推荐1-->
                <script>fenye_tuijian_1();</script>
            </div>

            <!-- 今日热点2 -->
            <div class="news-block-wrap">
                <ul id="J_today_hot_2" class="news-block">
                    <?php for($i = 35;$i<70;$i++ ){
                        $item = $hot_arr[$i];
                        ?>
                        <?php if (in_array($i,[35,40,45,50,55,60,65])){?>
                            <li class="J-line line clearfix">
                        <?php }?>
                        <a class="news-link fl" href="<?=$item['url']?>" pdata="topic|top|<?=$i?>|0" target="_blank">
                            <span class="img"><img class="animation" src="<?=str_replace("http://","//",$item['img'])?>" alt="<?=$item['topic']?>"  width="160" height="120"></span>
                            <span class="txt" title="<?=$item['topic']?>"><?=$item['topic']?></span>
                        </a>
                        <?php if (in_array($i,[39,44,49,54,59,64,69])){?>
                            </li>
                        <?php }?>
                    <?php }?>
                </ul>
            </div>
            <!-- 广告3 -->
            <div class="sy-3">
                <!--嵩恒_头条_分页页面_今日热点2-->
                <script>fenye_hot_2();</script>
            </div>

            <!-- 热门推荐2 -->
            <div class="news-block-wrap">
                <ul id="J_recommend_2" class="news-block">
                </ul>
            </div>
            <!-- 广告4 -->
            <div class="sy-4">
                <!--嵩恒_头条_分页页面_相关推荐2-->
                <script>fenye_tuijian_2();</script>
            </div>
        </div>
    </div>
    <!-- 新闻聚焦 end -->
</div>
<script type="text/javascript">
    var tArr = <?= json_encode($tArr)?>;
</script>

<!-- 对联 -->
<script>zuo_you_dui_lian();</script>

<script type="text/javascript" src="<?php echo __WWW_JS ?>global.js"></script>
<script type="text/javascript" src="<?php echo __WWW_JS ?>page_topic.js"></script>
<script type="text/javascript">
    //绑定统计事件
    $("a").click(function(){
        if ($(this).attr("pdata")){
            $.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
        }
    });
</script>
<div class="footer_cnt">
    <p><a href="http://news.eastday.com/images/ditu/zzzs.htm" target="_blank">增值电信业务经营许可证（ICP）：沪B2-20050088号</a>　互联网新闻信息服务许可证:3112006001　广告经营许可证:3100003000089</p>
    <p>注：凡本网注明来源非东方头条的作品，均转载自其它媒体，并不代表本网赞同其观点和对其真实性负责。</p>
    <p>如因作品内容、版权和其它问题需要同本网联系的。联系方式：<a href="mailto:toutiao@em.eastday.com">toutiao@em.eastday.com</a></p>
    <p>eastday.com All Right Reserve 版权所有</p>
</div>
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