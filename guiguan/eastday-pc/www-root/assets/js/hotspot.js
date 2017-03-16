$(function(){
	var $change = $('#J_change'),
		$hot2 = $('#J_today_hot_2'),
		$recommend1 = $('#J_today_hot_1'),
		$recommend2 = $('#J_recommend_2'),
		recommendData = [],
		recId = null,	// URL ID
		param = null,
		qid = null,
		softtype='toutiao';
		softname='DFTT';
		uid = null,		// 用户唯一ID
				recUrl = 'http://ttpc.dftoutiao.com/jsonpc/newsrec02', // 获取推荐新闻接口
		clickFlag = true,
		timer = null;

   init();

	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	function init(){
		// 获取uid
		if(!$.cookie('mylist')){
			uid = getUserId();
		}else{
			uid = $.parseJSON($.cookie('mylist')).uid;
		}
		function getUserId(){
			return (+new Date()) + Math.random().toString(10).substring(2, 6);
		}
		// 获取渠道ID
		qid = getCooName();
		// 获取文章ID
		recId = getQueryString('uk');
		param = qid + '\t' + uid + '\t' + softtype + '\t' + softname;

		recAjax(recUrl);
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
				if (d.length ==0) return ;
				var len = 0;
				if(d.length < 11){
					len = d.length-1;
				} else {
					len = 10;
					
				}
				for (var i = 0; i < len; i++) {
						recommendData.push({
							topic: d[i].topic,
							url: d[i].url,
							img: d[i].miniimg[0].src,
							recommendtype: d[i].recommendtype
						});
					}
				for(var i = 0; i < recommendData.length; i++){
					loadRecData(recommendData[i], i);
				}
				// loadRecData($recommend2, recommendData,10, 30);
			},
			complete:function () {
			},
			error:function(jqXHR,textStatus,errrorThrown){
				/*concatArray([]);
				for(var i = 0; i < 10; i++){
					loadRecData(recommendData[i], i);
				}*/
				// loadRecData($recommend1, recommendData, 10, 15);
				// loadRecData($recommend2, recommendData, 15, 30);
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
	 * 用获取的推荐图片替换原图
	 */
	function loadRecData(d, i){
		var $li = $('#J_today_hot_1 .J-line a.tui-content').eq(i);
		$li.replaceWith('<a class="news-link fl" href="' + d.url + '?btype=topic&subtype=xgtj&idx=' + i + '&ishot=0&recommendtype=' + (d.recommendtype ? d.recommendtype : -1) + '&uk=' + recId + '" target="_blank">' +
            '<span class="img"><img class="animation" src="' + d.img + '" alt="' + d.topic + '"></span>' +
            '<span class="txt" title="' + d.topic + '">' + d.topic + '</span>' +
            '<span class="hot-icon recommend">荐<i></i></span>' +
        '</a>');
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
/**
	function loadRecData($list, d){
		var $li = $('<li class="J-line line clearfix"></li>');
		for (var i = from; i < (from + len); i++) {
			$li.append('<a class="news-link fl" href="' + d[i].url + '?btype=topic&subtype=xgtj&idx=' + i + '&ishot=0&recommendtype=' + (d[i].recommendtype ? d[i].recommendtype : -1) + '&uk=' + recId + '" target="_blank">' +
                '<span class="img"><img class="animation" src="' + d[i].img + '" alt="' + d[i].topic + '" width="160" height="120"></span>' +
                '<span class="txt" title="' + d[i].topic + '">' + d[i].topic + '</span>' +
            '</a>');
		}
		$list.append($li);
	}
**/
	/**
	 * 获取UID
	 * @param  {[type]} url [description]
	 * @return {[type]}     [description]
	 */
	function uidAjax(url){
		$.ajax({
			type: 'get',
			url: url,
			dataType: 'jsonp',
			jsonp: 'jsonpcallback',
			timeout: 6000,
			success: function(data){
				//数据传递验证成功后执行的操作
				uid=data.uid;
				setCookie(uid);
			},
			error: function(jqXHR,textStatus){
				console.error(textStatus);
				console.error(jqXHR);
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
	 /**
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
	**/
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