<html>
<head>
	<meta charset="utf-8"/>
	<title>搜索</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			font: 14px/1.5 \5FAE\8F6F\96C5\9ED1, "Microsoft YaHei", arial, sans-serif;
			color: #ddd;
		}
		ul,li{
			list-style:none;
			padding:0;
			margin:0;
		}
		p{
			padding:0;
			margin:0;
		}
		img{
			border: 0;
		}
		.hot_recommend_cnt {
			width: 100%;
			height: auto;
			overflow: hidden;
			position: relative;
		}

		.tjnewsleftnav {
			width: 80px;
			border-right: 1px solid #ececec;
			position: absolute;
			left: 0;
			top: 0;
		}

		.tjnewsleftnav a {
			display: block;
			width: 100%;
			height: 46px;
			font-size: 16px;
			color: #757575;
			line-height: 46px;
			text-align: center;
		}

		.tjnewsleftnav a.current {
			color: #fff;
			background-color: #ec4c4b;
		}

		.tjnewsright {
			width: 100%;
			overflow: hidden;
			height: auto;
		}

		ul.tjnewsrcontent {
			width: 100%;
			height: auto;
			overflow: hidden;
			padding: 0;
			margin: 0;
		}

		ul.tjnewsrcontent li.recommend_news {
			width: 100%;
			height: 133px;
			padding: 14px 0px;
			border-bottom: 1px solid #ececec;
			overflow: hidden;
			*float: left;
			box-sizing:border-box;
		}

		ul.tjnewsrcontent li .pic {
			float: left;
			display: inline;
			width: 140px;
			height: 105px;
			overflow: hidden;
		}

		ul.tjnewsrcontent li .pic img {
			width: 100%;
			height: 100%;
		}

		ul.tjnewsrcontent li .text {
			float: left;
			display: inline;
			width: 510px;
			height: 93px;
			padding-left: 20px;
			overflow: hidden;
			position: relative;
			font-size: 12px;
			color: #999;
		}

		ul.tjnewsrcontent li .text h3 {
			width: 100%;
			height: 30px;
			line-height: 30px;
			font-size: 18px;
			margin: 0;
			padding: 0;
			color: #333;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			font-weight: normal;
		}

		ul.tjnewsrcontent li .text h3 em {
			display: inline;
			float: left;
			width: 16px;
			height: 16px;
			background-color: #eb4b48;
			color: #fff;
			font-size: 12px;
			line-height: 16px;
			text-align: center;
			border-radius: 1px;
			margin-top: 9px;
			margin-right: 8px;
		}

		ul.tjnewsrcontent li .text h3 a {
			color: #333;
			display: inline;
			font-size: 18px;
			font-weight: bold;
			text-decoration: none;
			float: left;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			max-width: 100%;
		}

		ul.tjnewsrcontent li .text h3 a:hover {
			color: #ec4b4b; /*font-size:16px;*/
		}

		ul.tjnewsrcontent li .text h3.hot a {
			max-width: 419px;
		}

		ul.tjnewsrcontent li .text p.source {
			position: absolute;
			margin: 0;
			padding: 0;
			left: 16px;
			bottom: -5px;
			width: 510px;
			height: 25px;
			line-height: 25px;
		}

		ul.tjnewsrcontent li .text p.source i {
			position: absolute;
			right: 0;
			bottom: 0;
			font-style: normal;
		}

		ul.tjnewsrcontent li .text p.source span {
			position: absolute;
			left: 0;
			bottom: 0;
			font-size: 14px;
			color: #b4b4b4;
		}

		a.getmorenewsbtn {
			position: relative;
			width: 577px;
			border: 1px solid #ececec;
			height: 48px;
			display: block;
			font: 20px/48px 微软雅黑, "Microsoft YaHei", arial, sans-serif;
			text-align: center;
			margin-left: 91px;
			margin-top: 20px;
			margin-bottom: 25px;
		}

		a.getmorenewsbtn i {
			font-size: 30px;
			position: absolute;
			left: 230px;
			top: 50%;
			margin-top: -14px;
			width: 28px;
			height: 28px;
			line-height: 28px;
			-webkit-transition: all .3s;
			-moz-transition: all .3s;
			-ms-transition: all .3s;
			-o-transition: all .3s;
			transition: all .3s;
		}

		a.getmorenewsbtn span {
			padding-left: 60px;
		}

		a.getmorenewsbtn:hover i {
			-webkit-transform: rotate(90deg);
			-moz-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			-o-transform: rotate(90deg);
			transform: rotate(90deg);
		}

		.Tabfixed {
			position: fixed;
			top: 60px;
			bottom: auto;
			left: 50%;
			margin-left: -501px;
			_position: absolute;
			_top: expression(eval(document.documentElement.scrollTop));
			_margin-top: 60px;
		}

		.Tabfixedend {
			position: absolute;
			left: 0;
			top: auto;
			bottom: 0;
		}

		.ad_mar_k{
			font-size:0;
			border-bottom: 1px solid #ececec;
		}
		.ad_mar_k iframe{
		    margin: 14px 0 14px -11px !important;
		}
		.content_so{
			width: 500px;
			word-break: break-all;
			font-size: 14px;
			color: #666;
			line-height: 19px;
		    margin-top: 4px;		
		}
	</style>
	<script src="http://dup.baidustatic.com/js/ds.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
	<!--[if lt IE 9]>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>json2.js"></script>
	<![endif]-->
	<script type="text/javascript">
		if (coo_name == null) {
			filename = "<?php echo __WWW_JS ?>resources/new_detail/default.js";
		} else {
			if (coo_name.indexOf("=") != -1) {
				var tmp = coo_name.replace("=", '_');
			} else if (coo_name.indexOf(".") != -1) {
				var tmp = coo_name.replace(/\./g, '_')
			} else {
				var tmp = coo_name;
			}
			filename = "<?php echo __WWW_JS ?>resources/new_detail/" + tmp + ".js";
		}
	</script>
	<script type="text/javascript">
		document.write("<script language=javascript   src=" + filename + "><\/script>");
	</script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/new_detail/detail_gg.js"></script>
</head>
<body>
<div id='hot_recommend_cnt' class="hot_recommend_cnt clear-fix">
	<div id='tjnewsrcontcnt' class="tjnewsright clear-fix">
		<?php $gg_idx_first= mt_rand(1,4)?>
		<!-- 当前栏目下推荐 -->
		<ul class="tjnewsrcontent">

			<?php foreach ((array)$recommend_arr  as $key=>$item) { ?>
				<li class="recommend_news">
					<div class="pic"><a href="<?=$item['url']?>?xx=1" pdata="detail|hottj_tuijian|<?= $key ?>|0" target="_blank" title="<?=$item['topic']?>"><img src="<?=$item['img']?>" alt="<?=$item['topic']?>"></a></div>
					<div class="text">
						<h3><a href="<?=$item['url']?>?xx=1" pdata="detail|hottj_tuijian|<?= $key ?>|0" target="_blank" title="<?=$item['topic']?>"><?=$item['topic']?></a></h3>
						<p class="content_so"><?= $item['desc'] ?></p>
						<p class="source">
							<span>&nbsp;来源：<?=$item['from']?></span>
						</p>
					</div>
				</li>
				<?php if($key == $gg_idx_first) {?>
					<!-- 热门推荐列表随机广告1 -->
					<li class="ad_mar_k"><script type="text/javascript">hottj1();</script></li>
				<?php }?>
				<?php if($key == $gg_idx_first + 3) {?>
					<!-- 热门推荐列表随机广告2 -->
					<li class="ad_mar_k"><script type="text/javascript">hottj2();</script></li>
				<?php }?>
			<?php } ?>
			
		</ul>
	</div>
</div>
</body>
<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
		}
	});
</script>
