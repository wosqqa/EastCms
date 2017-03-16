<!doctype html>
<html lang="zh-cmn-Hans-CN">
<head>
    <meta charset="utf-8"/>
    <meta name="renderer"content="webkit"/>
    <meta http-equiv="X-UA-Compatible"content="IE=Edge,chrome=1"/>
    <meta http-equiv="Cache-Control"content="no-siteapp"/>
    <title></title>
    <style>
body, html {
	margin: 0;
	padding: 0;
	font: 14px/1.5 \5FAE\8F6F\96C5\9ED1, "Microsoft YaHei", arial, sans-serif
        }
        ul, li {
	margin: 0;
	padding: 0
        }
        img {
	border: none
        }
        a {
	text-decoration: none;
            outline: none;
            color: #333;
            cursor: pointer
        }
        .clearfix:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden
        }
        *html .clearfix {
	height: 1%;
	zoom: 1
        }
        .clearfix {
	display: block;
	zoom: 1
        }
        .news_focus {
	width: 660px;
            height: 140px;
            padding: 5px 5px 8px;
        }
        .news_focus .focus_img li {
	float: left;
	display: inline;
	width: 155px;
            height: 140px;
            overflow: hidden;
            padding: 0 5px;
        }
        .news_focus .focus_img li a {
	display: block;
	width: 100%;
	height: 100%;
	font-size: 0;
            overflow: hidden;
        }
        .news_focus .focus_img li a img {
	width: 155px;
            height: 115px;
            border: 0;
        }
        .news_focus .focus_img li a span {
			display: block;
			width: 100%;
			height: 18px;
            text-align: center;
            font-size: 12px;
            overflow: hidden;
        }
		li a:hover span{color:#EE4B4B;}
    </style>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
</head>
<body>
<div class="news_focus" id="news_focus_normal">
    <ul class="focus_img">

	    <?php foreach ($below_page_arr as $k=>$v){?>
		    <li>
			    <a href="<?=$v['url']?>" pdata="detail|xwjj|<?=$k+4?>|0" target="_blank" title='<?=$v['topic']?>'>
				    <img src="<?=$v['img']?>"/>
				    <span><?=$v['topic']?></span>
			    </a>
		    </li>
	    <?php }?>

    </ul>
</div>
<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
		}
	});
</script>
</body>
</html>