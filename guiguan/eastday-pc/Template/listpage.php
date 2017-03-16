<!DOCTYPE html>
<html lang="zh-cmn-Hans-CN">
<head>
	<meta charset="utf-8" />
	<meta name="renderer" content="webkit" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta http-equiv="Cache-Control" content="no-siteapp" />
	<META name="filetype" content="1">
	<META name="publishedtype" content="1">
	<META name="pagetype" content="2">
	<META name="catalogs" content="toutiao_PC">
	<meta name="applicable-device" content="pc">
	<link href="<?php echo __WWW_IMG ?>favicon.ico" type="image/x-icon" rel="icon" />
	<link rel="canonical" href="http://mini.eastday.com/listpage/<?=$type?>.html" />
	<title><?=date('n月d日')?>最新新闻_滚动新闻_东方头条网</title>
	<meta name="keywords" content="新闻,最近新闻,滚动新闻" />
	<meta name="description" content="滚动新闻列表展示最新的国内新闻、国际新闻，需要了解最新最近最热的国内国际新闻事就在东方头条网" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>reset.css" />
	<link rel="stylesheet" href="<?php echo __LISTPAGE_SOURCE ?>common.css" />
	<link rel="stylesheet" href="<?php echo __WWW_CSS ?>jquery-ui.css" />
	<link rel="stylesheet" href="<?php echo __LISTPAGE_SOURCE ?>run.css" />
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery.cookie.js"></script>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>resources/minicookie.js"></script>
	<?php
	$img_domain = \Lib\Core::config('img_domain');
	echo '<script type="text/javascript">var img_domain = "'.$img_domain.'";var newstype="'.$channel.'";</script>';
	?>
	<script type="text/javascript" src="<?php echo __WWW_JS ?>global.js"></script>
    <!-- 搜索框提示词 -->
    <script type="text/javascript" src="<?php echo __WWW_JS_V1 ?>search_word.js"></script>
	<!-- html5shiv.js支持H5的插件&Respond.js支持媒体查询的插件 -->
	<!--[if lt IE 9]>
	<script src="<?php echo __WWW_JS ?>html5shiv.js"></script>
	<script src="<?php echo __WWW_JS ?>respond.min.js"></script>
	<![endif]-->
</head>
<body>
<!-- 头部 start -->
<div class="header">
    <div class="header_cnt">
        <div class="header_cnt_l"><a href=""><img src="<?php echo __WWW_IMG ?>logoNew.png" alt="东方头条网" title='东方头条网'></a></div>
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
<div>
	<div id='nav_cnt' class="nav_cnt">
		<ul class="nav">
			<li><a href="/" pdata="index|nav|0|0" target="_blank">头条</a></li>
			<li><a href="/mainland.html" pdata="index|nav|1|0" target="_blank">国内</a></li>
			<li><a href="/world.html" pdata="index|nav|2|0" target="_blank">国际</a></li>
			<li><a href="http://miniimg.eastday.com/" pdata="nav|mini_listpage|0|0"  target="_blank" >图片</a></li>
			<li><a href="/society.html" pdata="index|nav|3|0" target="_blank">社会</a></li>
			<li><a href="/ent.html" pdata="index|nav|4|0" target="_blank">娱乐</a></li>
			<li><a href="http://video.eastday.com/" pdata="nav|mini_listpage|1|0" target="_blank">视频</a></li>
			<li><a href="/mil.html" pdata="index|nav|7|0" target="_blank">军事</a></li>
			<li><a href="/tech.html" pdata="index|nav|8|0" target="_blank">科技</a></li>
			<li><a href="/finance.html" pdata="index|nav|11|0" target="_blank">财经</a></li>
			<li><a href="/fashion.html" pdata="index|nav|6|0" target="_blank">时尚</a></li>
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
	</div>
</div>
<div class="run_cnt clear-fix">
	<div class="run_left">
	<?php $map = \Lib\Core::config('type_map'); ?>
		<div class="left_balloon"><span><?php if($channel != 'all'){ echo $map[$channel][0]; }else{ echo "全部"; } ?></span><i></i></div>
		<div class="run_title">
			<h3><span>滚动新闻</span><i></i></h3>
		</div>
		<ul class="item_run_news" style='height:910px;'>

			<?php
				foreach($data as $i=>$item){
					if($channel != 'all'){
						$url = \Lib\Core::config('cdn_path').date('ymdHis',substr($item['crawlerts'],0,10)).substr($item['crawlerts'],-3).'.html';
						$date = date('Y-m-d H:i',substr($item['crawlerts'],0,10));
						$py = array_search($item['urlmaintypeid'],\Lib\Core::config('channel_map'));
						$topic = $item['titel'];
					}else{
						$url = \Lib\Core::config('cdn_path').$item['url'];
						$date = $item['news_time'];
						$topic = $item['topic'];
					}

			?>
					<li><div><a href="<?= $url ?>" pdata="listpage|news|<?= $i ?>|0" target="_blank"><?=$topic?></a></div><i></i><em><?= $date ?></em></li>
			<?php } ?>

		</ul>
		<div class="pre_day_data clear-fix">
			<div class='page_cnt clear-fix'>
				<?php
				$parameter  = $hasDate == ''? $type.'-?.html' :  $type.'-'.$hasDate.'-?.html';
				if ($total_rows > 1){
					require_once ('page.php');
					$params = array(
							'total_rows'=>$total_rows, #(必须)
							'method'    =>'html', #(必须)
							'parameter' =>$parameter,  #(必须)
							'now_page'  =>$now_page,  #(必须)
							'list_rows' =>$list_rows #(可选) 默认为15
						// 'total_pagea'=>'1'
					);
					$page = new page($params);
					echo  $page->show(4);
				}
				?>
			</div>
			<a id='cat_yesterday' href="<?php $this_time=$hasDate?strtotime($hasDate):time()?><?=$type ."-". date("Ymd",strtotime("-1 day", $this_time)).".html"?>" title='点击查看前一天'>查看前一天</a>
		</div>
	</div>
	<div class="run_right" id='right_fixed'>
		<div class="run_title more_run_news">
			<h3><span>更多频道滚动新闻</span><em></em></h3>
		</div>
		<ul class="nav_item">
			<li data-type='mainland'><a <?php if($channel == 'guonei') echo 'class="active"'?> href="/listpage/mainland.html" pdata="listpage|more|0|0"><span>国内</span></a></li>
			<li data-type='world'><a <?php if($channel == 'guoji') echo 'class="active"'?> href="/listpage/world.html" pdata="listpage|nav|1|0" title='国际'><span>国际</span></a></li>
			<li data-type='society'><a <?php if($channel == 'shehui') echo 'class="active"'?> href="/listpage/society.html" pdata="listpage|nav|2|0" title='社会'><span>社会</span></a></li>
			<li data-type='ent'><a <?php if($channel == 'yule') echo 'class="active"'?> href="/listpage/ent.html" pdata="listpage|nav|3|0" title='娱乐'><span>娱乐</span></a></li>
			<!--<li data-type='joke'><a <?php /*if($channel == 'xiaohua') echo 'class="active"'*/?> href="/listpage/joke.html" pdata="listpage|nav|4|0" title='笑话'><span>笑话</span></a></li>-->
			<li data-type='fashion'><a <?php if($channel == 'shishang') echo 'class="active"'?> href="/listpage/fashion.html" pdata="listpage|nav|5|0" title='时尚'><span>时尚</span></a></li>
			<li data-type='mil'><a <?php if($channel == 'junshi') echo 'class="active"'?> href="/listpage/mil.html" pdata="listpage|nav|6|0" title='军事'><span>军事</span></a></li>
			<li data-type='tech'><a <?php if($channel == 'keji') echo 'class="active"'?> href="/listpage/tech.html" pdata="listpage|nav|7|0" title='科技'><span>科技</span></a></li>
			<li data-type='auto'><a <?php if($channel == 'qiche') echo 'class="active"'?> href="/listpage/auto.html" pdata="listpage|nav|8|0" title='汽车'><span>汽车</span></a></li>
			<li data-type='sports'><a <?php if($channel == 'tiyu') echo 'class="active"'?> href="/listpage/sports.html" pdata="listpage|nav|9|0" title='体育'><span>体育</span></a></li>
			<li data-type='finance'><a <?php if($channel == 'caijing') echo 'class="active"'?> href="/listpage/finance.html" pdata="listpage|nav|10|0" title='财经'><span>财经</span></a></li>
			<li data-type='health'><a <?php if($channel == 'jiankang') echo 'class="active"'?> href="/listpage/health.html" pdata="listpage|nav|11|0" title='健康'><span>健康</span></a></li>
			<li data-type='history'><a <?php if($channel == 'lishi') echo 'class="active"'?> href="/listpage/history.html" pdata="listpage|nav|13|0" title='人文'><span>人文</span></a></li>
			<li data-type='games'><a <?php if ($channel == 'youxi') echo 'class="active"' ?>
						href="/listpage/games.html" pdata="listpage|nav|12|0" title='游戏'><span>游戏</span></a>
			</li>
			<li data-type='astro'><a <?php if($channel == 'xingzuo') echo 'class="active"'?> href="/listpage/astro.html" pdata="listpage|nav|14|0" title='星座'><span>星座</span></a></li>
			<li data-type='home'><a <?php if($channel == 'jiaju') echo 'class="active"'?> href="/listpage/home.html" pdata="listpage|nav|15|0" title='家居'><span>家居</span></a></li>
			<li data-type='home'><a <?php if($channel == 'all') echo 'class="active"'?> href="/listpage/all.html" pdata="listpage|nav|16|0" title='全部'><span>全部</span></a></li>
		</ul>
		<div id='oldTimeyTitle' class="run_title more_run_news">
			<h3><span>往期回顾</span><em></em></h3>
		</div>

		<div id='old_news_cnt' class="old_news_cnt calendar_div">
			<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all">
				<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
					<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev" href="<?php $this_time=$hasDate?strtotime($hasDate):time()?><?= $type."-".date("Ym01",strtotime("-1 month",  strtotime(date('Ym01',$this_time)))).".html" ?>">
						<span class="ui-icon ui-icon-circle-triangle-w">Prev</span>
					</a>
					<a class="ui-datepicker-next ui-corner-all" title="Next" href="<?php $this_time=$hasDate?strtotime($hasDate):time()?><?= $type."-".date("Ym01",strtotime("+1 month", strtotime(date('Ym01',$this_time)))).".html" ?>">
						<span class="ui-icon ui-icon-circle-triangle-e">Next</span>
					</a>
					<div class="ui-datepicker-title">
						<span class="ui-datepicker-month"><?= ($hasDate ? substr($hasDate,4,2):date("m"))?>月</span>&nbsp;<span class="ui-datepicker-year"><?=($hasDate ? substr($hasDate,0,4):date("Y"))?>年</span>
					</div>

				</div>
				<table class="ui-datepicker-calendar">
					<thead>
					<tr>
						<th scope="col"><span title="星期五">日</span></th>
						<th scope="col"><span title="星期一">一</span></th>
						<th scope="col"><span title="星期二">二</span></th>
						<th scope="col"><span title="星期三">三</span></th>
						<th scope="col"><span title="星期四">四</span></th>
						<th scope="col"><span title="星期五">五</span></th>
						<th scope="col"><span title="星期四">六</span></th>

					</tr></thead><tbody><tr>
						<?php $j=1;?>
						<?php
							if($hasDate){
								$d=date('d', strtotime($hasDate));
								$ym = substr($hasDate, 0 ,6);
								$w = date('w',strtotime(substr($hasDate, 0 ,6)."01"));
								$t = date('t', strtotime($hasDate));
							}else{
								$d=date('d');
								$ym = date("Ym");
								$w = date('w', strtotime(date("Ym01")));
								$t = date('t');
							}
						?>
						<?php for($i=0; $i<$w; $i++){ ?>
							<td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
						<?php } ?>
						<?php for($i=$w; $i<7; $i++){ ?>
							<?php
								$page_name = getPageName($j, $d, $type, $hasDate);
								$class = getStyleClass($j, $minDate, $d );
							?>
							<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
								<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
							</td>
							<?php $j++; ?>
						<?php } ?>
					</tr>
					<tr>
						<?php for($i=0; $i<7; $i++){ ?>
							<?php
							$page_name = getPageName($j, $d, $type, $hasDate);
							$class = getStyleClass($j, $minDate, $d );
							?>
							<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
								<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
							</td>
							<?php $j++; ?>
						<?php } ?>
					</tr>
					<tr>
						<?php for($i=0; $i<7; $i++){ ?>
							<?php
							$page_name = getPageName($j, $d, $type, $hasDate);
							$class = getStyleClass($j, $minDate, $d );
							?>
							<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
								<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
							</td>
							<?php $j++; ?>
						<?php } ?>
					</tr>
					<tr>
						<?php for($i=0; $i<7; $i++){ ?>
							<?php
							$page_name = getPageName($j, $d, $type, $hasDate);
							$class = getStyleClass($j, $minDate, $d );
							?>
							<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
								<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
							</td>
							<?php $j++; ?>
						<?php } ?>
					</tr>
					<tr>
						<?php for($i=0; $i<7; $i++){ ?>
							<?php
							$page_name = getPageName($j, $d, $type, $hasDate);
							$class = getStyleClass($j, $minDate, $d );
							?>
							<?php if($j<=$t){ ?>
								<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
									<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
								</td>
								<?php $j++; ?>
							<?php } ?>
						<?php } ?>
					</tr>
					<tr>
						<?php for($i=0; $i<7; $i++){ ?>
							<?php
							$page_name = getPageName($j, $d, $type, $hasDate);
							$class = getStyleClass($j, $minDate, $d );
							?>
							<?php if($j<=$t){ ?>
								<td class="<?=$class?>" data-ymd="<?=$ym?><?php echo $j < 10 ? '0'.$j : $j ;?>">
									<a class="ui-state-default" href="<?= $page_name?>"><?=$j?></a>
								</td>
								<?php $j++; ?>
							<?php } ?>
						<?php } ?>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="run_title more_run_news">
			<h3><span>新闻排行</span><em></em></h3>
		</div>
		<ul id="news_paixing" class="special-list" style='height:370px;'>
		</ul>
	</div>
</div>
<div class="goto_top"><a class='show_go_index' href="/"></a><a id='gotop_btn' class='show_go_0' href="javascript:;"></a><a class='show_go_1' href="javascript:;"></a><div class="erwei_cnt"></div></div>
<script>
	$(function(){
		var url = window.location.pathname;
		var time = url.substring(url.indexOf("-")+1,url.indexOf("."));
		var mydate = new Date();
		var year =  String(mydate.getFullYear());
		var month = String(mydate.getMonth()+1);
		if(month < 10){
			month = '0' + month;
		}
		var day1 = String(mydate.getDate());
		var day = day1;
		if(day1 < 10){
			day = '0' + day1;
		}
		var time_st = year + month + day;
		var time_num = parseInt(time_st);

		if(time != time_num){
			$(".ui-state-default").each(function(idx, ele) {
				if(ele.innerHTML == day1 && time.substr(0,6) == time_st.substr(0,6)){
					tdEle = $(this).parent();
					if(typeof(tdEle) != "undefined"){
						tdEle.addClass('border_lit');
					}
				}
			});
		}

		f(time_st);
		ym();
		function f(current_time){
			$(".calendar-future").each(function(idx, ele) {
				time = $(this).data("ymd");
				if(time > current_time){
					$(this).addClass("calendar-not-display");
				}else if(time == current_time){
					url = $(this).find("a:eq(0)").attr("href");
					$(this).find("a:eq(0)").attr("href", "<?= $type?>.html");
				}
			});
		}

		function ym(){
			var m = parseInt($('.ui-datepicker-month').html());
			//console.log(m);
			var y = parseInt($('.ui-datepicker-year').html());
			var num = parseInt(String(y) + String(m));
			var mydate = new Date();
			var year =  String(mydate.getFullYear());
			var month = String(mydate.getMonth()+1);
			var time_st = parseInt(year + month);
			//console.log(time_st)
			if(time_st <= num){
				$('.ui-datepicker-next').addClass('ui-state-disabled');
			}
		}


	});

</script>
<div>
	<?php include 'footer.php';?>
</div>
<script type="text/javascript" src="<?php echo __WWW_JS ?>jquery-ui.js"></script>
<script type="text/javascript" src="<?php echo __LISTPAGE_SOURCE ?>run.js"></script>
<script type="text/javascript">
	var top_fixed = $('#oldTimeyTitle').offset().top + $('#oldTimeyTitle').outerHeight() + 15;//日历定位页面TOP值
	var  str=window.location.href;
	var strs = str.split("-");
	var date_choose = String(parseInt(strs[1]));
	var type_url = '';
	var mydate = new Date();
	var Y = mydate.getFullYear().toString();
	var M = (mydate.getMonth()+1).toString();
	var D = mydate.getDate().toString();

	$('ul.nav_item li').each(function(){
		var _this=$(this);
		if(_this.find('a').hasClass('active')){
			type_url=_this.attr('data-type');
		}
	});

	if(M.length == 1){
		M = '0'+M;
	}
	if(D.length == 1){
		D = '0'+D;
	}
	var date_today = Y+M+D;
	if(date_choose == '' || date_choose == 'NaN'){
		date_choose = date_today;
	}
	$('#calendar').val(date_choose);

	function check_next_month_url(date_today){
		var next_month_url = $(".ui-datepicker-next").attr("href");
		if(typeof (next_month_url) != 'undefined'){
			var str_arr = next_month_url.split("-");
			if(str_arr.length > 1){
				var ymd_str = str_arr[1].split(".")[0];
				if(ymd_str == date_today){
					$(".ui-datepicker-next").attr("href", str_arr[0]+".html");
				}
			}

		}
	}
	check_next_month_url(date_today);

	$(function(){
		$.datepicker.regional['zh-CN'] = {
			prevBigText: '<<',
			nextBigText: '>>',
			monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
			monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
			dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
			dayNamesMin: ['日','一','二','三','四','五','六'],
			dateFormat: 'yymmdd',
			firstDay: 1,
			isRTL: false};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
		$('#calendar').datepicker({
			minDate: '<?= $minDate ?>',
			maxDate: date_today,
			onSelect: function(){
				if(date_today == $.trim($('#calendar').val())){
					// location.href = '/roll/'+type_url+'/index.html';
					location.href = '/listpage/'+type_url+'.html?btype=listpage&subtype=calendar&idx=0&ishot=0';
				}else{
					location.href = '/listpage/'+type_url+'-'+$.trim($('#calendar').val())+'.html?btype=listpage&subtype=calendar&idx=0&ishot=0';
				}
			}
		});
		$('#calendar').focus();
		$('#ui-datepicker-div').on('click', function(){
			$('.calendar_div').height(parseInt($('#ui-datepicker-div').height()) + 39);
		});
		setTimeout(function(){
			(function(){
				// 滚动页左右悬浮效果
				var oul = $('ul.item_run_news');
				var oli = oul.children('li');
				var len = oli.length;
				var step=20;
				var mod=len%step;//去摸，余数
				var num=Math.ceil(len/step);//当前页面li分页数
				var i_item=0;
				var _top_oul=oul.offset().top;
				var ff_run=true;
				var footer = $('#footer');
				var window_ = $(window);
			// console.log(mod);
				if(len<=20){
					$('.page_cnt').show();
					oul.css('height','auto');
					ff_run=false;
					footer.show();
				}
				// 右边导航更多频道新闻开始
				var nav_ul=$('ul.nav_item');
				var nva_li=nav_ul.find('li');
				var oliNum = nva_li.length;
				for(var i=1;i <= oliNum;i++){
					if( i%5 == 0){
						nva_li.eq( i-1 ).css('padding-right','0px');
					}
				}
				nav_ul.find('li:even').children('a').css('background-color','#fdf0f0');
				// 右边导航更多频道新闻结束
				// 左边新闻列表开始
				var list_l_ul = $('ul.item_run_news');
				var list_l_li = list_l_ul.children('li');
				for(var i=0;i <= list_l_li.length; i++){
					if(i%5 ==0){
						list_l_li.eq( i ).children('i').addClass('first');
						if(i!=0){
							list_l_li.eq( i ).css({'height':'52px','line-height':'68px','border-top':'1px dashed #999','margin-top':'18px'}).children('i').css('top','68%');
						}
					}
				}
				// 左边新闻列表结束
			    var _balloon = $('.left_balloon');
				var _top_balloon = _balloon.offset().top;
				var right_fixed = $('#right_fixed');//右边容器
				var right_fixed_w= right_fixed.outerHeight();
				var right_fixed_top =right_fixed.offset().top;
				var ff_balloon = true;
				var ff_fixed = true;
				var datepicker_fixed = $('#ui-datepicker-div');//日历容器
				var ff_temp_val = 0;
				var ff_flag = true;
				var  windowHeight = $(window).height();
				window_.on('scroll',w_scroll=function(){
					var body_scrollTop=  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
					var totalheight = parseFloat(windowHeight + body_scrollTop);//浏览器的高度加上滚动条的高度
					// 气球
					if(body_scrollTop >= _top_balloon){
						if(ff_balloon){
							_balloon.addClass('left_balloon_active');
							ff_balloon = false;
						}
					}else{
						if(!ff_balloon){
							_balloon.removeClass('left_balloon_active');
							ff_balloon = true;
						}
					}
					//右边容器定位效果
					if(right_fixed_w + right_fixed_top +200 - windowHeight <= body_scrollTop){
						if(ff_flag){
								ff_temp_val = Math.abs(top_fixed - body_scrollTop);
								ff_flag = false;
						}
						if($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
							if(ff_fixed){
								right_fixed.addClass('right_fixed');
								ff_fixed = false;
							}
							datepicker_fixed.css({'top':(body_scrollTop + ff_temp_val + 20 ) + 'px'});
						}else{
							if(ff_fixed){
								right_fixed.addClass('right_fixed');
								datepicker_fixed.addClass('datepicker_fixed');
								ff_fixed = false;
							}
						}
					}else{
						if($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
							if(!ff_fixed){
								right_fixed.removeClass('right_fixed');
								ff_fixed = true;
							}
							datepicker_fixed.css({'top':top_fixed+'px'});
						}else{
							if(!ff_fixed){
								right_fixed.removeClass('right_fixed');
								datepicker_fixed.removeClass('datepicker_fixed');
								ff_fixed = true;
							}
						}
					}
					//左边列表新闻加载效果
					if(ff_run){
						if($(document).height() <= totalheight + 200){
								if(num<=2){
									oul.css('height','auto');
									$('.page_cnt').show();
									footer.show();
								}else{
									if(i_item<num-2){
										i_item++;
										oul.height(910*(i_item+1));
									}else{
										// i_item=num;
										oul.css('height','auto');
										$('.page_cnt').show();
										footer.show();
									}
								}
						}
					}
				});
				// datepicker_fixed.trigger('click');		
				window_.on('resize',function(){
					var top_new = top_fixed - 30;
					if(window_.width() >= 1002 ){
						datepicker_fixed.css({
							'left':'50%','top':top_new+'px','margin-left':'200px','bottom':'auto'
						});
						window_.on('scroll',w_scroll);
					}else{
						window_.off('scroll',w_scroll);
						if(right_fixed.hasClass('right_fixed')){
							right_fixed.removeClass('right_fixed');
						}
						if(datepicker_fixed.hasClass('datepicker_fixed')){
							datepicker_fixed.removeClass('datepicker_fixed');
						}
						datepicker_fixed.css({'position':'absolute','left':'700px','top':top_new+'px','margin-left':0,'bottom':'auto'});
					}
					$('.calendar_div').height(parseInt(datepicker_fixed.height()) + 39);
				});
				window_.trigger('resize');
			})();
		}, 100);
	});

</script>
<script type="text/javascript">
	//绑定统计事件
	$("a").click(function(){
		if ($(this).attr("pdata")){
			$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
		}
	});
</script>
<script src="<?php echo __WWW_JS ?>globle_bottom.js"></script>
<!--[if IE 6]>
<script src="<?php echo __WWW_JS ?>DDPngMin.js"></script>
<script>
    DD_belatedPNG.fix('.left_balloon span');
    $('#gotop_btn').find('.erwei_cnt').append("<img src='<?php echo __WWW_IMG ?>2codes.png'>");
    $('a.show_go_1').on('mouseenter', function(){
      $(this).siblings('.erwei_cnt').css({'display':'block','filter':'alpha(opacity=100)'});
    });
    $('a.show_go_1').on('mouseleave', function(){
      $(this).siblings('.erwei_cnt').css({'display':'none','filter':'alpha(opacity=0)'});
    });
    // 滚动页页码移入移出效果
    $('.middle_page').on('mouseenter', function(){
      $(this).children('.middle_page_sub').css({'display':'block','filter':'alpha(opacity=100)'});
    });
    $('.middle_page').on('mouseleave', function(){
      $(this).children('.middle_page_sub').css({'display':'none','filter':'alpha(opacity=0)'});
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
