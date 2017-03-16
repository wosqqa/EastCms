/**
 * 搜索页面js
 * @author lizhigao(lizhigao@021.com)
 * @date 2016-01-05
 */
$(function(){
    var $resultWrap = $('#J_result_wrap'),				// 结果容器
    	$resultUl = $('#result_list'),                  //有结果内容的容器
    	$searchTextInput = $('#J_search_text_input'),	// 搜索文本框
    	$top10List = $('#J_top10_list'),				// 今日top10
    	$todayHotNews = $('#J_today_hot_news'),			// 今日热点
    	$searchTotalNum = $('#J_search_total_num'),		// 搜索结果总数
    	imgHostName = 'http://imgmini.eastday.com/',	// 图片hostname
    	page_k=0,//搜索接口结果分页数
    	global_share_title  = '',	// 分享标题
    	global_share_url  = '',		// 分享链接
    	global_share_img  = '',		// 分享图片
    	bdshareStr = '<div id="bdsharebuttonbox_wrap"><div class="J-bdsharebuttonbox bdsharebuttonbox clearfix"><span class="fl">分享</span><a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;"></a><a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;"></a><a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;"></a><a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;"></a></div></div>';
	var flag_cooke=0;
	var _flag_search = 0;
	var u_id='';
	var soft_type='';
	var soft_name='';
	var OSType='';//操作系统
	var browserType='';//浏览器
	OSType=detectOS();
	browserType=explorerType();
	var wayPath=String(coo_name);//渠道来源
	if(wayPath == null || wayPath== ''){
		wayPath='null';
	}else{
		if(wayPath.indexOf('=') != -1){
			// wayPath=wayPath.substr(4);
			wayPath=wayPath.split('=')[1];
		}
	}
	var getSearch_url = 'http://minisearch.dftoutiao.com/search/pcsearch';
	var uid_url='http://pclog.dftoutiao.com/getpcdata/getuid';//请求UID 接口
	var keywords ='',stkey='',lastcol='',splitwordsarr='',temp_keywords='',_splitword='';
	var $search_btn=$('#search_btn');//搜索按钮
	var ajax_scroll=false;
	var ajax_scroll_noDate=false;

	// 解析链接，获取关键词
	var kw = getUrlParamVal('kw');
	$searchTextInput.val(kw);
	if(!kw){
		// 无搜索关键词
		noResult();
	} else {
		keywords = $.trim(kw);
		if( keywords == ''  || temp_keywords == keywords){
			return;
		}else{
			$search_btn.off('click');
			$resultUl.html('');
			if(!$.cookie('mylist')){
				uid_ajax(uid_url);
				// console.log('--第一次请求cookie--');
			}else{
				u_id=$.parseJSON($.cookie('mylist')).uid;
				soft_type=$.parseJSON($.cookie('mylist')).softtype;
				soft_name=$.parseJSON($.cookie('mylist')).softname;
				getSearch_ajax(getSearch_url,u_id,soft_type,soft_name);
				// console.log('--非第一次请求cookie--');
			}
		}
	}

	/**
	 * 搜索按钮点击事件
	 */
	$search_btn.on('click', searchBtnClick);
	/**
	 * 搜索按钮点击方法
	 */
	function searchBtnClick(){
		var input_val = $.trim($searchTextInput.val());
		location.href = location.protocol + '//' + location.hostname + '/search/?kw=' + encodeURI(input_val);
	}

	/**
	 * window滚动事件
	 */
	var $contentRight=$('#bodyRight');
	var ot_s_r = $contentRight.offset().top,
		contentHeight = $contentRight.outerHeight(),
		ff_r_s = true;	 
	$(window).on('scroll',function(){
		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());//浏览器的高度加上滚动条的高度
		if($(document).height() <= totalheight + 200){
			if(_flag_search == 0){
				_flag_search = 1;
				ajax_scroll = true;
				if(lastcol != ''){
					getSearch_ajax(getSearch_url,u_id,soft_type,soft_name);//超过20条滚动加载						
				}
			}
		}

		var  windowHeight = $(window).height();
		var body_scrollTop= document.documentElement.scrollTop || document.body.scrollTop;
		if(contentHeight + ot_s_r + 125 <= windowHeight + body_scrollTop){
			if(ff_r_s){
				$contentRight.addClass('content-r-fixed');
				ff_r_s = false;
			}
		}else{
			if(!ff_r_s){
				$contentRight.removeClass('content-r-fixed');
				ff_r_s = true;
			}
		}

	});		

	$(window).on('resize', function(event) {
		event.preventDefault();
		var windowWidth = $(window).width();
		if(windowWidth <= 1002){
			$contentRight.removeClass('content-r-fixed');
		}
	});
		/* 右侧固定功能实现 end */

    // 加载今日热点数据
    $.getJSON('/json/detail/hot_daily.json', function(data, status){
		if(!(data || data.data)){
    		return;
    	}
		generateTodayHotNews(data.data);
	});

    // 加载今日top10数据
	$.getJSON('/json/search/hotword.json', function(data, status){
		if(!(data || data.data)){
    		return;
    	}
		generateTodayTop10(data.data);
	});

    /**
     * 百度分享按钮的事件委托绑定
     */
    $('body').on('mouseover', '.J-bdshare', function(){
    	var $this = $(this),
    		$parent = $this.parents('.J-has-share').eq(0),
    		$shareA = $parent.find('.J-share-a').eq(0);
    	// 给全局变量 分享链接、图片、文字赋值
		global_share_url = window.location.protocol + '//' + window.location.host + $shareA.attr('href');
		global_share_title = $shareA.text();
		global_share_img = $parent.find('img').eq(0).attr('src');
    });
    (function(){
    	// 百度分享配置
	    window._bd_share_config = {
	        common: {
	            //bdText: "东方头条 - 你想看的新闻都在这。",	// 分享标题
	            //bdDesc: "东方头条 - 你想看的新闻都在这。",	// 分享描述
	            //bdUrl: "http://mini.eastday.com", 			// 分享url
	            //bdPic: '', 									// 分享图片
	            bdMiniList: ['tsina', 'qzone', 'tqq', 'weixin'],
	            onBeforeClick: setShareConfig
	        },
	        share: {
	            bdSize: 16
	        }
	    };
	    // 分享js
	    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
	    /**
	     * 设置分享参数
	     * @param {[type]} cmd    [description]
	     * @param {[type]} config [description]
	     */
		function setShareConfig(cmd, config) {
	        if (global_share_title) {
	            config.bdText = global_share_title + '（来自：东方头条）';
	        }
	        if (global_share_url) {
	            config.bdUrl = global_share_url;
	        }
	        if (global_share_img) {
	            config.bdPic = global_share_img;
	        }
	        return config;
	    }
    })();

    /**
     * 搜索方法
     */
	function getSearch_ajax(url,uid,softtype,softname){
		// var qid=wayPath;
		var uid=uid;
		var softtype=softtype;
		var softname=softname;
		var _vbb='0.5.1';//版本号
		// var OS=OS;//操作系统
		// var browser=browser;//浏览器类型
		var param=wayPath+"\t"+uid+"\t"+softtype+"\t"+softname+"\t"+_vbb+"\t"+OSType+"\t"+browserType;
		SearchAjaxDone(ajax_scroll,url,param);
	}
	function SearchAjaxDone(ajax_scroll,url,param){
		$.ajax({
			type:'get',
			url:url,
			data:{
				keywords:encodeURI($.trim(keywords)),
				stkey:encodeURI(stkey),
				lastcol:encodeURI(lastcol),
				splitwordsarr:encodeURI(splitwordsarr),
				param:encodeURI(param)
			},
			dataType:'jsonp',
			jsonp: 'jsonpcallback',
			timeout:6000,
			beforeSend:function () {
				// 加载提示
				$('#ajax_tips').show();
			},
			success:function(data){
				//数据传递验证成功后执行的操作
				if(ajax_scroll){
					//类型为滚动请求时
			    	if(data== '' || data == null){
			    		ajax_scroll_noDate = true;//没数据了
			    	}else{
			    		var emVal = $searchTotalNum.find('em').text();
			    		$searchTotalNum.find('em').html( parseInt(emVal) + data.length);
			    		generateSearchResult(data);
			    	}
				}else{
			    	if(!(data || data.data)){
			    		return;
			    	}
			    	$searchTotalNum.find('em').html(data.length);
			    	if(data.length > 0){
			    		// 有搜索结果
				    	generateSearchResult(data);
			    	} else {
			    		noResult();
			    	}						
				}						
			},
			complete:function () {
				$search_btn.on('click', searchBtnClick);
				temp_keywords= keywords;
				$('#ajax_tips').hide();
				_flag_search=0;
				if( ajax_scroll_noDate == true ){
					$('#ajax_tips').html('没有更多数据了…').show();
					_flag_search=1;
				}
			},
			error:function(jqXHR,textStatus,errrorThrown){if(errrorThrown=='Not Found'){console.log('Your requested address is not found.');}else if(textStatus=='timeout'){console.log('Verify the request timeout, please refresh the page and try again');}else{console.log('Your requested address is not found.');}}
		});
	}

	function getUserId(){
		return (+new Date()) + Math.random().toString(10).substring(2, 6);
	}

	function Mycookie(uid){
		//设置cookie
		var info = '{"uid":"' + uid + '","softtype":"toutiao","softname":"DFTT"}';
		$.cookie('mylist',info,{expires:30,path:'/'});
	}

	//判断浏览器
	function explorerType(){
		var brow=$.browser;
		var bInfo="非主流浏览器";
		if(brow.msie){
			bInfo="MicrosoftInternetExplorer"+brow.version;
		}
		if(brow.mozilla){
			bInfo="MozillaFirefox"+brow.version;
		}
		if(brow.safari){
			bInfo="AppleSafari"+brow.version;
		}
		if(brow.opera){
			bInfo="Opera"+brow.version;
		}
		if(brow.chrome){
			bInfo="chrome"+brow.version;
		}
		return bInfo;
	}

	//获取客户端操作系统类型
	function detectOS() {
		var sUserAgent = navigator.userAgent;
		var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
		var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
		if (isMac) return "Mac";
		var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
		if (isUnix) return "Unix";
		var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
		if (isLinux) return "Linux";
		if (isWin) {
			var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
			if (isWin2K) return "Win2000";
			var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
			if (isWinXP) return "WinXP";
			var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
			if (isWin2003) return "Win2003";
			var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
			if (isWin2003) return "WinVista";
			var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
			if (isWin2003) return "Win7";
		}
		return "None";
	}

	/**
	 * 无搜索结果（显示无结果说明+显示推荐新闻）
	 * @return {[type]} [description]
	 */
	function noResult(){
		// 无搜索结果
		generateNoResult();
		// 获取推荐新闻数据
		$.getJSON('/json/search/tuijian.json', function(data, status){
			if(!(data || data.data)){
	    		return;
	    	}
	    	// 生成推荐新闻
			generateRecommendNews(data.data);
		});
	}

    /**
     * 有搜索结果(生成搜索结果列表)
     * @param  {[type]} data 
     * @return {[type]}      [description]
     */
	function generateSearchResult(d){
		var dLength = d.length;
    	try{
    		page_k++;
    		for (var i = 0; i < dLength; i++) {			
    			var url = d[i].url,					// url
		    		title = $.trim(d[i].title),		// 标题
		    		newTitle = '',					// 处理后的标题
		    		source = $.trim(d[i].source),	// 来源
		    		imgArr = d[i].imgstr,			// 图片数组
		    		imgLength = imgArr.length,		// 图片数量
		    		dateTime = new Date(d[i].ts),	// 时间戳
		    		time = timeToString(dateTime),	// 转换之后的字符串时间
		    		date = d[i].date,				// 日期
		    		splitWord = d[0].splitword,      //需标红的词组合
		    		j=i+20*(page_k-1);
	    		newTitle = getNewStr(title, splitWord, 0);
				lastcol = d[0].lastcol;
				stkey   = d[0].stkey;
				splitwordsarr = d[0].splitwordsarr;
		    	// 多图样式
		    	if(imgLength >= 3){
		    		var imgSrc1 = imgArr[0].src,
		    			imgSrc2 = imgArr[1].src,
		    			imgSrc3 = imgArr[2].src;
		    		$resultUl.append('<li class="J-has-share result-item-s2 pr clearfix"><h3><a class="J-share-a" href="' + url  + '?btype=search&subtype=searchNews&idx=' + j + '" target="_blank">' + newTitle + '</a></h3><p class="img-wrap clearfix"><a class="fl" href="' + url +'?btype=search&subtype=searchNews&idx=' + j + '" title="' + title + 'target="_blank"><img class="animation" src="' + imgSrc1 + '" alt="" width="200" height="150"></a><a class="fl" href="' + url +'?btype=search&subtype=searchNews&idx=' + j +'" title="' + title + '" target="_blank"><img class="animation" src="' + imgSrc2 + '" alt="" width="200" height="150"></a><a class="fl" href="' + url +'?btype=search&subtype=searchNews&idx=' + j + '" title="' + title + '" target="_blank"><img class="animation" src="' + imgSrc3 + '" alt="" width="200" height="150"></a></p><p class="from">' + time + ' 来源：' + source + '</p>' + bdshareStr + '</li>');
		    	} else {	// 单图样式
		    		var imgSrc = imgArr[0].src;
		    		$resultUl.append('<li class="J-has-share result-item-s1 clearfix"><div class="img fl"><a href="' + url +'?btype=search&subtype=searchNews&idx=' + j + '" target="_blank"><img class="animation" src="' + imgSrc + '" width="145" height="105"></a></div><div class="info pr"><h3><a class="J-share-a" href="' + url +'?btype=search&subtype=searchNews&idx=' + j + '" target="_blank">' + newTitle + '</a></h3><p class="from">' + time + ' 来源：' + source + '</p>' + bdshareStr + '</div></li>');
		    	}
    		};
    	} catch(e){
    		console.error(e);
    	}	    	
	}

	/**
	 * 关键词加红处理
	 * @param  {String} txt   标题
	 * @param  {Array} swArr 关键词数组
	 * @param  {Number} i     0
	 * @return {String}       新的标题
	 */
	function getNewStr(txt, swArr, i){
		if(txt && swArr && swArr.length){
			var len = swArr.length;
			if(i == len){
				return txt;
			} else {
				var reg = new RegExp(swArr[i], 'gi');
				var tempTxt = txt;
				var subTxtIndex = tempTxt.toLowerCase().indexOf(swArr[i]);
				var subTxt = txt.substring(subTxtIndex, subTxtIndex + swArr[i].length);
				return getNewStr(txt.replace(reg, '<em>' + subTxt + '</em>'), swArr, ++i);
			}
		} else {
			return '';
		}
	}

	/**
	 * 无搜索结果(生成无结果页面)
	 * @return {[type]} [description]
	 */
	function generateNoResult(){
		var $noResult = $('<p class="no-result tc mt10"><img src="/assets/images/no_result.png" alt="" width="581" height="282"></p>');
		$resultUl.html('');
		$resultWrap.append($noResult);
	}

	/**
	 * 生成推荐新闻
	 * @param  {Object} d 推荐新闻数据
	 * @return {[type]}   [description]
	 */
	function generateRecommendNews(d){
		var dLength = d.length,
			// 推荐新闻
			$recNewsWrap = $('<div class="rec-news-wrap mt10"><div class="rec-news-title pr"><h3>推荐新闻</h3><span class="bt-line"></span></div></div>'),
			// 推荐新闻列表
			$recNewsList = $('<ul class="rec-news-list"></ul>');
    	try{
    		for (var i = 0; i < dLength; i++) {
    			var url = d[i].url,					// url
		    		title = $.trim(d[i].topic),		// 标题
		    		source = $.trim(d[i].source),	// 来源
		    		desc = $.trim(d[i].desc),		// 描述
		    		imgSrc = imgHostName + $.trim(d[i].img), // 图片地址
		    		time = d[i].time;				// 时间
		    	// 单图样式
	    		$recNewsList.append('<li class="J-has-share rec-news-item-s1 clearfix"><div class="img fl"><a href="' + url +'?btype=search&subtype=tjNews&idx=' + i + '" target="_blank"><img src="' + imgSrc + '" width="180" height="135"></a></div><div class="info pr"><h3><a class="J-share-a" href="' + url +'?btype=search&subtype=tjNews&idx=' + i + '" target="_blank">' + title + '</a></h3><p class="desc">' + desc + '</p><p class="from">' + time + ' 来源：' + source + '</p>' + bdshareStr + '</div></li>');
    		};
    		$resultWrap.append($recNewsWrap.append($recNewsList));
    	} catch(e){
    		console.error(e);
    	}
	}

	/**
	 * 生成今日热点数据
	 * @param  {[type]} d 今日热点数据
	 * @return {[type]}   [description]
	 */
	function generateTodayHotNews(d){
		var dLength = d.length;
		for (var i = 0; i < dLength; i++) {
			var imgSrc = imgHostName + $.trim(d[i].img),
				title = $.trim(d[i].topic),
				url = d[i].url;
			$todayHotNews.append('<div class="block fl"><a href="' + url +'?btype=search&subtype=todayhot&idx=' + i + '" target="_blank" class="img"><img src="' + imgSrc + '" alt="" width="145" height="105"></a><a href="' + url +'?btype=search&subtype=todayhot&idx=' + i + '" target="_blank" class="txt">' + title +'</a></div>');
		}
	}

	/**
	 * 生成今日top10数据
	 * @param  {[type]} d 今日top10数据
	 * @return {[type]}   [description]
	 */
	function generateTodayTop10(d){
		var dLength = d.length;
		for (var i = 0; i < dLength; i++) {
			var hostName = location.protocol + '//' + location.hostname;
			if(i < 3){
				$top10List.append('<li class="top10-item"><span class="hot">' + (i + 1) + '</span><a href="' + hostName +'/search/?kw=' + encodeURI(d[i]) + '" title="' + d[i] +'">' + d[i] +'</a></li>');
			} else {
				$top10List.append('<li class="top10-item"><span>' + (i + 1) + '</span><a href="' + hostName +'/search/?kw=' + encodeURI(d[i]) + '" title="' + d[i] +'">' + d[i] +'</a></li>');
			}
		}
	}

    /**
     * 发送Ajax请求(POST)
     * @param  {String}   url      请求的url
     * @param  {Ojject}   config   参数
     * @param  {Function} success  成功回调方法
     * @param  {Function} error    失败回调方法
     * @return {[type]}            [description]
     */
    function sendAjax(url, config, success, error){
    	if(!$.trim(url)){
    		return;
    	}
    	var d = config.data ? config.data : {};
    	$.ajax({
    		type: 'POST',
    		url: url,
    		data: d,
    		success: callback,
    		error: error
    	});
    }

    /**
     * 时间戳转换为字符串
     * @param  {[type]} t 时间戳
     * @param  {[type]} splitStr 分隔符
     * @return {[type]}   [description]
     */
    function timeToString(t, splitStr){
    	return dateToString(timeToDate(t), splitStr);
    }

    /**
     * 毫秒级时间转日期时间
     * @param  {[type]} t 毫秒时间戳
     * @return {[type]}   日期时间
     */
    function timeToDate(t){
    	return new Date(t);
    }

    /**
     * 日期转字符串
     * @param  {[type]} d           日期时间
     * @param  {[type]} splitStr 分隔符
     * @return {[type]}             默认返回 yyyy-MM-dd HH:mm
     */
    function dateToString(d, splitStr){
    	var year = d.getFullYear().toString(),
    		month = (d.getMonth() + 1).toString(),
    		day = d.getDate().toString(),
    		h = d.getHours().toString(),
    		m = d.getMinutes().toString();
    	month = month.length > 1 ? month : ('0' + month);
    	day = day.length > 1 ? day : ('0' + day);
    	h = h.length > 1 ? h : ('0' + h);
    	m = m.length > 1 ? m : ('0' + m);
    	var str = year + '-' + month + '-' + day + ' ' + h + ':' + m;
    	if(splitStr){
    		str = str.replace(/-/g, splitStr);
    	}
    	return str;
    }

    /**
     * 获取url参数值
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function getUrlParamVal(name) {
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  decodeURI(r[2]); return null;
	}


});

