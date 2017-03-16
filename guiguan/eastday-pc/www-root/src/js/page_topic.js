$(function(){
	var $change = $('#J_change'),
		$hot1 = $('#J_today_hot_1'),
		$hot2 = $('#J_today_hot_2'),
		$recommend1 = $('#J_recommend_1'),
		$recommend2 = $('#J_recommend_2'),
		recommendData = [],
		recId = null,	// URL ID
		param = null,
		qid = null,
		softtype='toutiao';
		softname='DFTT';
		uid = null,		// 用户唯一ID
		recUrl = '//ttpc.dftoutiao.com/jsonpc/newsrec02', // 获取推荐新闻接口
		clickFlag = true,
		timer = null;

	init();

	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	function init(){
		var f1 = 5, f2 = 20;
		$change.on('click', function(e){
			e.preventDefault();
			timer && clearTimeout(timer);
			if(clickFlag){
				clickFlag = false;
				// 更换今日热点数据
				hotChange($hot1, 400);
				hotChange($hot2, 400);
				// 更换推荐数据
				loadRecData($recommend1, recommendData, f1, 5, 400);
				loadRecData($recommend2, recommendData, f2, 5, 400);
				f1 += 5;
				f2 += 5;
				if(f1 >= 15){
					f1 = 0;
				}
				if(f2 >= 30){
					f2 = 15;
				}
			}
			timer = setTimeout(function(){clickFlag = true;}, 500);
		});
		// 获取uid
		if(!$.cookie('mylist')){
			uid = getUserId();
			setCookie(uid);
		}else{
			uid = $.parseJSON($.cookie('mylist')).uid;
		}
		// 获取渠道ID
		qid = getCooName();
		// 获取文章ID
		recId = getQueryString('uk');
		param = qid + '\t' + uid + '\t' + softtype + '\t' + softname;

		recAjax(recUrl);
	}
	function getUserId(){
		return (+new Date()) + Math.random().toString(10).substring(2, 6);
	}
	/**
	 * 获取推荐数据
	 * @param  {[type]} url [description]
	 * @return {[type]}     [description]
	 */
	function recAjax(url){
		$.ajax({
			type: 'get',
			url: url,
			timeout: 6000,
			data: {
				recId: encodeURI(recId),
				param: encodeURI(param)
			},
			dataType:'jsonp',
			jsonp: 'jsonpcallback',
			beforeSend: function () {},
			success: function(data){
				var d = data.data ? data.data : [];
				if(d.length < 30){
					concatArray(d);
				} else {
					for (var i = 0; i < 30; i++) {
						recommendData.push({
							topic: d[i].topic,
							url: d[i].url,
							img: d[i].miniimg[0].src,
							recommendtype: d[i].recommendtype
						});
					}
				}
				loadRecData($recommend1, recommendData, 0, 5);
				loadRecData($recommend2, recommendData, 15, 5);
			},
			complete:function () {
			},
			error:function(jqXHR,textStatus,errrorThrown){
				concatArray([]);
				loadRecData($recommend1, recommendData, 0, 5);
				loadRecData($recommend2, recommendData, 15, 5);
				console.error(textStatus);
				console.error(jqXHR);
			}
		});
	}

	/**
	 * 数组数据重组
	 * @param  {[type]} array [description]
	 * @return {[type]}       [description]
	 */
	function concatArray(array){
		var al = array.length,
			l = 30 - al,
			i = 0;
		for (i = 0; i < al; i++) {
			recommendData.push({
				topic: array[i].topic,
				url: array[i].url,
				img: array[i].miniimg[0].src,
				recommendtype: array[i].recommendtype
			});
		}
		for (i = 0; i < l; i++) {
			recommendData.push(tArr[i]);
		}
	}

	/**
	 * 加载推荐数据并生成渲染到HTML
	 * @param  {[type]} $list [description]
	 * @param  {[type]} d     [description]
	 * @param  {[type]} from  [description]
	 * @param  {[type]} len   [description]
	 * @param  {[type]} time  [description]
	 * @return {[type]}       [description]
	 */
	function loadRecData($list, d, from, len, time){
		var $li = $('<li class="J-line line clearfix"></li>');
		for (var i = from; i < (from + len); i++) {
			$li.append('<a class="news-link fl" href="' + d[i].url + '?recommendtype=' + (d[i].recommendtype ? d[i].recommendtype : -1) + '&uk=' + recId + '" pdata="topic|xgtj|' + i + '|0"' + 'target="_blank">' +
                '<span class="img"><img class="animation" src="' + d[i].img + '" alt="' + d[i].topic + '" width="160" height="120"></span>' +
                '<span class="txt" title="' + d[i].topic + '">' + d[i].topic + '</span>' +
            '</a>');
		}
		$list.append($li);
		var $lis = $list.children('li');
		if($lis.length >= 2){
			$list.animate({
				'margin-top': '-154px'
			}, time, function(){
				$lis.first().remove();
				$list.css('margin-top', 0);
			});
		}
		//绑定统计事件
		$list.find("a").click(function(){
			if ($(this).attr("pdata")){
				$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
			}
		});
	}

	/**
	 * 获取渠道ID
	 * @return {[type]} [description]
	 */
	function getCooName(){
		var cooName = String(coo_name);
		if(cooName=='' || cooName == 'null'){
			cooName = 'null';
		}else{
			if(cooName.indexOf('=') != -1){
				cooName = cooName.split('=')[1];
			}
		}
		return cooName;
	}

	/**
	 * 存入cookie
	 * @param {[type]} uid [description]
	 */
	function setCookie(uid){
		//设置cookie
		var info = '{"uid":"' + uid + '","softtype":"'+ softtype +'","softname":"'+ softname +'"}';
		$.cookie('mylist',info,{expires:3000,path:'/',domain:'eastday.com'});
	}

	/**
	 * 今日热点数据更换
	 * @param  {[type]} $list [description]
	 * @param  {[type]} time [description]
	 * @return {[type]}       [description]
	 */
	function hotChange($list, time){
		$list.animate({
			'margin-top': '-154px'
		}, time, function(){
			var $lis = $list.children('li');
			if($lis.length >= 2){
				$lis.first().insertAfter($lis.last());
			}
			$list.css('margin-top', 0);
		});
	}

	/**
	 * 获取链接中参数值
	 * @param  {[type]} name 参数名
	 * @return {[type]}      [description]
	 */
	function getQueryString(name) {
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return decodeURI(r[2]); return null;
	}
});