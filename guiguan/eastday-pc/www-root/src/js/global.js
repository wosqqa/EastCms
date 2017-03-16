/**
 * 全局日志记录行为js
 * Created by xiaoqiulin on 2015/11/26
 */
var global_uid = '';
var global_userid = '';
var global_wayPath = '';
var global_loginid = 'null';//app分享用户id
var global_newstype = '';
var global_from = '';//url
var global_to = '';
var global_os = '';
var global_btype = '';//或可以判断是否从二级页面跳过来的
var global_subtype = '';
var global_idx_1 = '';
var global_ishot = '';
var global_ver = '0.5.1';
var global_browser = '';
var global_pixel = 'null';//客户端分辨率
var global_ime = 'null';  //App用户的ime号
var global_idx = 0;
var global_fr_url = '';
var ver ='null';
var appqid='null';
var ttloginid='null';
var apptypeid='null';
var appver='null';
var global_recommendtype ='';
var global_ispush = '';
var deviceid = 'null';

(function() {
	// 获取uid，存入cookie
	var recommendtype='-1';//是否是推荐新闻默认-1
	var protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
	var getData_url=protocol+'pclog.dftoutiao.com/getpcdata/data';//请求传递数据接口修改地址01月17日
    var getOnlineData_url = protocol+'tjpc02.dftoutiao.com/pconline/pconline';//请求传递online数据接口
	var soft_type='toutiao';
	var soft_name='DFTT';
	var OSType=detectOS();
	global_os = OSType;//操作系统
	var browserType=explorerType();
	global_browser = browserType;//浏览器
	var _vbb='0.5.1';//版本号
	var wayPath=String(coo_name);//渠道来源
	var from='';//来源（备选参数）
	var idx='';//新闻链接位置
	var ishot='';//是否热新闻
	var btype='';//大类
	var subtype='';//子类
    var to = protocol + window.location.host + window.location.pathname;//当前url
	var fr_url=document.referrer;//来源
	function Mycookie(uid) {
		//设置cookie
		var info = '{"uid":"' + uid + '","softtype":"' + soft_type + '","softname":"' + soft_name + '"}';
		$.cookie('mylist', info, {expires: 3000, path: '/',domain:'eastday.com'});
	}
	if (!$.cookie('mylist')) {
		global_uid = getUserId();
        Mycookie(global_uid);
	} else {
		global_uid = $.parseJSON($.cookie('mylist')).uid;
	}
    var u_id = global_uid;//访客uid
	if (fr_url == '' || fr_url == 'null') {
		fr_url = 'null';
	} else {
		fr_url = fr_url.split("?");
		fr_url = String(fr_url[0]);
		if (fr_url.indexOf('sm.cn') != -1) {
			$.cookie('search_qid', 'smcn', {expires: 1, path: '/'});
		}
		if (fr_url.indexOf('baidu.com') != -1) {
			$.cookie('search_qid', 'baiducom', {expires: 1, path: '/'});
		}
	}
	global_from = fr_url;
    from = fr_url;
	global_fr_url = fr_url;

	var temp = window.location.search; //获取url中"?"符后的字串
	if (temp.indexOf("?") != -1 && String(GetRequest(temp).btype) != 'undefined') {
		btype = GetRequest(temp).btype;
		subtype = GetRequest(temp).subtype;
		idx = GetRequest(temp).idx;
		ishot = GetRequest(temp).ishot;
	} else if ($.cookie("tjdata")) {
		var pdata = $.cookie("tjdata").split("|");
		btype = pdata[0] || 'null';
		subtype = pdata[1] || 'null'
		idx = pdata[2] || 'null';//没传参时的情况下
		ishot = pdata[3] || 0;
	}else {
		btype = 'null';
		subtype = 'null';
		idx = 'null';//没传参时的情况下
		ishot = 0;
	}
	global_idx_1 = idx;
	global_ishot = ishot;
	global_btype = btype;
	global_subtype = subtype;
	if (wayPath == 'null' || wayPath == '') {
		//推广渠道优先原则，如果推广渠道没有的情况下 种的$.cookie('search_qid')存在则代表是从搜索过来的
		if ($.cookie('search_qid')) {
			wayPath = $.cookie('search_qid');
		} else {
            wayPath = 'null';
		}
	} else {
		if (wayPath.indexOf('=') != -1) {
			wayPath = wayPath.split('=')[1];
		}
	}
	global_wayPath = wayPath;
	// console.log(wayPath);
	// console.log(global_wayPath);
	getData_ajax(getData_url);//请求传递数据,wayPath\newstype全局变量qid
	//10秒定时去请求传online数据
    var timer1 = setInterval(function () {
		getOnline_ajax(getOnlineData_url);
	}, 10000);
    //10分钟不上报日志
    setTimeout(function () {
        clearInterval(timer1);
    }, 600000)
	//请求传递数据
	var strPath = String(window.location.pathname);
	if (strPath.indexOf('/a/') != -1) {
		//是否是推荐新闻的详细页是就赋值recommendtype
		var temp = window.location.search; //获取url中"?"符后的字串
		if (temp.indexOf("?") != -1) {
			if (String(GetRequest(temp).recommendtype) != 'undefined') {
				recommendtype = GetRequest(temp).recommendtype;
				from = String(window.location.host) + "/a/" + String(GetRequest(temp).uk) + ".html";
			}
		}
	}
	global_recommendtype = recommendtype;
	function getData_ajax(url) {
		if (typeof(wayPath) == "undefined" || wayPath == '') wayPath = 'null';
		var param = wayPath + "\t" + u_id + "\t" + soft_type + "\t" + soft_name + "\t" + newstype + "\t" + from + "\t" + to + "\t" + btype + "\t" + subtype + "\t" + idx + "\t" + ishot + "\t" + fr_url + "\t" + _vbb + "\t" + OSType + "\t" + browserType + "\t" + recommendtype;
		$.ajax({
			type: 'get',
			url: url + '?param=' + encodeURI(param),
			dataType: 'jsonp',
			jsonp: 'jsonpcallback',
			timeout: 6000,
			beforeSend: function () {
				// 加载提示
				// $('#ajax_tips').show();
			},
			success: function (data) {
				//数据传递验证成功后执行的操作
				// console.log(url);
			},
			complete: function () {
			},
			error: function (jqXHR, textStatus, errrorThrown) {
				if (errrorThrown == 'Not Found') {
					//console.log('Your requested address is not found.');
				} else if (textStatus == 'timeout') {
					//console.log('Verify the request timeout, please refresh the page and try again');
				} else {
					//console.log('Your requested address is not found.');
				}
			}
		});
        //清除统计data
		$.removeCookie("tjdata",{path:'/', domain:'eastday.com'});
	}

	//请求传递online数据
	function getOnline_ajax(url) {
		var setIntervalTime = 10;
		if (typeof(wayPath) == "undefined" || wayPath == '') wayPath = 'null';
		var paramOnline = wayPath + "\t" + u_id + "\t" + soft_type + "\t" + soft_name + "\t" + newstype + "\t" + to + "\t" + ishot + "\t" + _vbb + "\t" + OSType + "\t" + browserType + "\t" + setIntervalTime;
		$.ajax({
			type: 'get',
			url: url,
			data: {
				param: encodeURI(paramOnline)
			},
			dataType: 'jsonp',
			jsonp: 'jsonpcallback'
		});
	}

	//判断浏览器
	function explorerType() {
		var brow = $.browser;
		var bInfo = "非主流浏览器";
		if (brow.msie) {
			bInfo = "MicrosoftInternetExplorer" + brow.version;
		}
		if (brow.mozilla) {
			bInfo = "MozillaFirefox" + brow.version;
		}
		if (brow.safari) {
			bInfo = "AppleSafari" + brow.version;
		}
		if (brow.opera) {
			bInfo = "Opera" + brow.version;
		}
		if (brow.chrome) {
			bInfo = "chrome" + brow.version;
		}
		return bInfo;
	}
	function getUserId(){
		return (+new Date()) + Math.random().toString(10).substring(2, 6);
	}
	//获取客户端操作系统类型
	function detectOS() {
		var sUserAgent = navigator.userAgent;
		var isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
		var isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
		var bIsIpad = sUserAgent.match(/ipad/i) === "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) === "iphone os";
		var isUnix = (navigator.platform === "X11") && !isWin && !isMac;
		var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
		var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) === "android";
		var bIsCE = sUserAgent.match(/windows ce/i) === "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) === "windows mobile";
		if (isMac) return "Mac";
		if (isUnix) return "Unix";
		if (isLinux) {
			if (bIsAndroid) {
				return "Android";
			} else {
				return "Linux";
			}
		}
		if (bIsCE || bIsWM) {
			return 'wm';
		}
		if (isWin) {
			var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
			if (isWin2K) return "Win2000";
			var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
			if (isWinXP) return "WinXP";
			var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
			if (isWin2003) return "Win2003";
			var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
			if (isWinVista) return "WinVista";
			var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
			if (isWin7) return "Win7";
			var isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
			if (isWin8) return "Win8";
		}
		return "other";
	}
	/*截取url参数*/
	function GetRequest(temp) {
		var theRequest = new Object();
		// if (url.indexOf("?") != -1) {
		var str = temp.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
		// }
		return theRequest;
	}
})();
$(function(){
	//global_sider 全局侧边栏
	(function(){
		var topbtn = $('#gotop_btn'),
				$shouCang = $('#J_shoucang');	// 收藏
		$shouCang.hover(function(){
			$(this).addClass('active');
			$(this).next().show();
		}, function(){
			$(this).removeClass('active');
			$(this).next().hide();
		});
		//绑定页面滚动事件
		$(window).bind('scroll',function(){
			var len=$(this).scrollTop();
			if(len>=100){
				//显示回到顶部按钮
				$('.goto_top').show();
			}else{
				//影藏回到顶部按钮
				$('.goto_top').hide();
			}
		});
		//顶部
		topbtn.on('click', function(){
			$("html, body").filter(':not(:animated)').animate({
				scrollTop: 0
			});
		});
	})();

	/*记录传递访客最后的三个详细新闻页面*/
	(function(){
		/**
		 *  jQuery 扩展方法
		 *      $.Object.count( p )
		 *          获取一个对象的长度，需要指定上下文，通过 call/apply 调用
		 *          示例: $.Object.count.call( obj, true );
		 *          @param  {p}             是否跳过 null / undefined / 空值
		 */
		$.extend({
			//  获取对象的长度，需要指定上下文 this
			Object:     {
				count: function( p ) {
					p = p || false;
					return $.map( this, function(o) {
						if( !p ) return o;
						return true;
					} ).length;
				}
			}
		});
		//  示例
		// var obj = {a:null,b:undefined,c:1,d:2,e:'test'};
		// //  不过滤空值
		// console.log( $.Object.count.call( obj ) );
		// //  过滤空值
		// console.log( $.Object.count.call( obj, true ) );		
		//只有详细页执行
		var strPath = String(window.location.pathname);
		if( strPath.indexOf('/a/') != -1 ){
			//(重要)注意：整站只有详细页路径带有/a/，如果后期其他非详细页面的名称会带有数字则需对此进行相应修改！！
			var articleId = strPath.substring(strPath.lastIndexOf('/') + 1, strPath.indexOf('.'));
			if(window.localStorage){
				// supports localStorage
				if(!localStorage.getItem('pageId')){
					localStorage.setItem('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}');//设置存储文章ID
				}else{
					var pageIdTemp=$.parseJSON( localStorage.getItem('pageId') );
					var len=$.Object.count.call( pageIdTemp ,true );
					var flag = true;
					for(var i=0;i<len;i++){
						if( pageIdTemp['pid' + i] != 'null'){
							if( articleId == pageIdTemp['pid' + i] ){
								flag = false;
							}
						}
					}
					if(flag){
						localStorage.removeItem('pageId');
						localStorage.setItem('pageId','{"pid0":"' + articleId + '","pid1":"'+ pageIdTemp['pid0'] +'","pid2":"'+ pageIdTemp['pid1'] +'"}');
					}
				}
			}else{
				// does not supports localStorage
				// delCookie('pageId');
				if(getCookie('pageId') == null){
					// $.cookie('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}',{expires:30,path:'/'});
					setCookie('pageId','{"pid0":"' + articleId + '","pid1":"null","pid2":"null"}');
				}else{
					var pageIdTemp=$.parseJSON( getCookie('pageId') );
					var len=$.Object.count.call( pageIdTemp ,true );
					var flag = true;
					for(var i=0;i<len;i++){
						if( pageIdTemp['pid' + i] != 'null'){
							if( articleId == pageIdTemp['pid' + i] ){
								flag = false;
							}
						}
					}
					if(flag){
						delCookie('pageId');
						setCookie('pageId','{"pid0":"' + articleId + '","pid1":"'+ pageIdTemp['pid0'] +'","pid2":"'+ pageIdTemp['pid1'] +'"}');
					}
				}
				// console.log(getCookie('pageId'));			
			}
		}
		//写cookies
		function setCookie(name,value){
			var Days = 3000;//天
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ encodeURI (value) + ";expires=" + exp.toUTCString() + ";path=/";
		}
		//读取cookies
		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg)){
				return decodeURI(arr[2]);
			}else{
				return null;
			}
		}
		//删除cookies
		function delCookie(name){
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=getCookie(name);
			if(cval!=null){
				document.cookie= name + "="+cval+";expires="+exp.toUTCString() + ";path=/";
			}
		}
	})();
	$('ul.nav li:last').hover(function(){
		$(this).children('div').show();
	},function(){
		$(this).children('div').hide();
	});

});
