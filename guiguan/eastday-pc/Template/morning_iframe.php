<html lang="zh-cmn-Hans-CN">
<head>
	<meta charset="utf-8"/>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta http-equiv="Cache-Control" content="no-siteapp" />
	<title></title>
	<style>
		body {
			margin: 0;
			padding: 0;
			font: 14px/1.5 \5FAE\8F6F\96C5\9ED1, "Microsoft YaHei", arial, sans-serif;
			color: #ddd;
		}
		ul,ol,li{
			list-style: none;
		}
		* {
			margin: 0;
			padding: 0;
		}

		img {
			border: 0;
		}

		.clearfix:after {
			content: "";
			display: block;
			height: 0;
			clear: both;
			visibility: hidden;
		}

		*html .clearfix {
			height: 1%;
			zoom: 1;
		}

		.clearfix {
			display: block;
			zoom: 1;
		}

		.tab-yesterday {
			width: 275px;
			height: 450px;
			overflow: hidden;
		}

		.rate-list {
			margin-left: 20px;
		    margin-top: 15px;
		}

		.rate-list li {
			padding-left: 24px;
			position: relative;
			float: left;
		}

		.rate-list li a {
			display: block;
			width: 230px;
			height: 41px;
			line-height: 41px;
			overflow: hidden;
			text-decoration: none;
			outline: none;
			color: #333;
			cursor: pointer;
			overflow: hidden;
		}

		.rate-list li a:hover {
			color: #ee4b4b;
		}

		.rate-list li i {
			position: absolute;
			display: block;
			width: 20px;
			height: 14px;
			line-height: 14px;
			left: -3px;
			top: 15px;
			background-image: url("../assets/images/index_10.png");
			background-repeat: no-repeat;
			background-position: 0 0;
			font-size: 0;
		}

		.rate-list li i.i0 {
			background-position: 0 0;
		}

		.rate-list li i.i1 {
			background-position: 0 -17px;
		}

		.rate-list li i.i2 {
			background-position: 0 -34px;
		}

		.rate-list li i.i3 {
			background-position: 0 -51px;
		}

		.rate-list li i.i4 {
			background-position: 0 -68px;
		}

		.rate-list li i.i5 {
			background-position: 0 -85px;
		}

		.rate-list li i.i6 {
			background-position: 0 -102px;
		}

		.rate-list li i.i7 {
			background-position: 0 -119px;
		}

		.rate-list li i.i8 {
			background-position: 0 -136px;
		}

		.rate-list li i.i9 {
			background-position: 0 -153px;
		}
	</style>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
</head>
<body>
<div class="tab-yesterday">
	<ul class="rate-list clearfix">
		<?php foreach ($top10Arr as $k=>$v) { ?>
			<li>
				<i class="png24 i<?=$k?>"></i>
				<a href="<?= $v['url'] ?>" pdata="morning|iframe|<?=$k?>|0" target="_blank" title="<?= $v['topic'] ?>"><?= $v['topic'] ?></a>
			</li>
		<?php } ?>
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
