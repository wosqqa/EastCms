/**
 * 频道页js
 * update by xiaoqiulin on 2015/03/14
 */
// 频道页面
// 国内频道页
$(function(){
	var _flag_new=0;//实时新闻列表页标识位
	coo_name = String(coo_name);
	// 获取uid，存入cookie
	  if(coo_name=='' || coo_name == 'null'){
	  	coo_name='null';
	  }else{
		    if(coo_name.indexOf('=') != -1){
		    	// coo_name=coo_name.substr(4);
		    	coo_name=coo_name.split('=')[1];
		    }	  	
	  }  
	  var qid=coo_name;
	  var uid='';
	  var softtype='toutiao';
	  var softname='DFTT';
	  var page_k=1;//实时接口分页数
	  var readhistory='';//访问的最后三篇文章id
	  var page_id='';
		if(window.localStorage){
			// supports localStorage
			if(!localStorage.getItem('pageId')){
				readhistory = 'null,null,null';//文章ID
			}else{
				page_id = $.parseJSON( localStorage.getItem('pageId') );
				readhistory = String(page_id.pid0) + ',' + String(page_id.pid1) + ',' + String(page_id.pid2);
			}
		}else{
			if(!$.cookie('pageId')){
				readhistory = 'null,null,null';
			}else{	
				page_id = $.parseJSON( $.cookie('pageId') );
				readhistory = String(page_id.pid0) + ',' + String(page_id.pid1) + ',' + String(page_id.pid2);
			}		
		}
		

		if(!$.cookie('mylist')){
			uid = getUserId();
			Mycookie(uid);
		}else{
			uid=$.parseJSON($.cookie('mylist')).uid;
			//softtype=$.parseJSON($.cookie('mylist')).softtype;
			//softname=$.parseJSON($.cookie('mylist')).softname;
		}
	     function Mycookie(uid){
	     	//设置cookie
			var info = '{"uid":"' + uid + '","softtype":"'+ softtype +'","softname":"'+ softname +'"}';
			$.cookie('mylist',info,{expires:3000,path:'/',domain:'eastday.com'});

	     }
	function getUserId(){
		return (+new Date()) + Math.random().toString(10).substring(2, 6);
	}
	var param=encodeURI(qid+"\t"+uid+"\t"+softtype+"\t"+softname+"\t"+page_k);
	var url_news_timely= channel_list_url+"?type="+type+"&param="+param+"&readhistory="+readhistory;
	var imgtab_url='../../json/channel/lunbo_'+channel+'.json';//图片切换url
	var startkey=null;
	var $oulTimeLy = $('#listNewsTimeLy');//左侧列表UL容器
	var url_news_timely_0="";//动态URL
	if(_flag_new==0){
		_flag_new=1;
		news_timely(url_news_timely);//左侧新闻列表实时接口载入加载
	}
	$(window).on('scroll',function(){
		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());//浏览器的高度加上滚动条的高度
		if($(document).height() <= totalheight + 200){
			if(_flag_new==0){
				_flag_new=1;
				url_news_timely_0= channel_list_next_url+"?type="+type+"&startkey="+startkey+"&newsnum=20&isnew=1&param="+param+"&readhistory="+readhistory;
				if(startkey!=0){
					if($oulTimeLy.children('li.listNews-item-360gg4')){
		    			$oulTimeLy.children('li').removeClass('listNews-item-360gg4');
		    			$oulTimeLy.children('li').removeClass('listNews-item-360gg5');
		    			$oulTimeLy.children('li').removeClass('listNews-item-360gg6');
	    			}
					news_timely(url_news_timely_0);//左侧新闻列表实时接口载入加载
				}else{
					$('#ajax_tips').html('没有更多数据了…').show();
				}
			}
		}
	});

    /**
     * 获取频道页新闻列表实时接口
     * @param url
     */
	function news_timely(url){
		$.ajax({
			type:'get',
			url:url,
			dataType:'jsonp',
			jsonp: 'jsonpcallback',
			timeout:6000,
			beforeSend:function () {
				// 加载提示
				$('#ajax_tips').show();
			},
			success:function(data){
				//数据传递验证成功后执行的操作
				page_k++;
				param=encodeURI(qid+"\t"+uid+"\t"+softtype+"\t"+softname+"\t"+page_k);
				$.each(data.data,function(i,item){
					var j=i+20*(page_k-2),
                        imgLength = item.miniimg_size, // 图片数量
                        imgArr = item.miniimg,  // 图片数组
                        url = item.url,         // url
                        source = item.source,   // 来源
                        hotNews = item.hotnews, // 是否热新闻 0：非热新闻
                        title = item.topic,     // 标题
                        brief = $.trim(item.brief),     // 摘要
                        dateTime = item.date,   // 新闻发表时间
                        bdShareStr = '<div class="J-bdsharebuttonbox-wrap"><div class="J-bdsharebuttonbox bdsharebuttonbox clearfix"><span class="fl">分享</span><a class="J-bdshare bds-tsina fl" data-cmd="tsina" href="javascript:;"></a><a class="J-bdshare bds-qzone fl" data-cmd="qzone" href="javascript:;"></a><a class="J-bdshare bds-tqq fl" data-cmd="tqq" href="javascript:;"></a><a class="J-bdshare bds-weixin fl" data-cmd="weixin" href="javascript:;"></a></div></div>',
                        $li = null,
                        classAd = '';
                    if(page_k == 2 && i ==2){
                    	classAd = '360gg1'
                    }else if(page_k == 2 && i ==9){
                    	classAd = '360gg2'
                    }else if(page_k == 2 && i ==19){
                    	classAd = '360gg3'
                    }else if(page_k > 2 && i ==5){
                    	classAd = '360gg4'
                    }else if(page_k > 2 && i ==12){
                    	classAd = '360gg5'
                    }else if(page_k > 2 && i ==19){
                    	classAd = '360gg6'
                    }
                    if(imgLength < 1){
                        $li = $('<li class="J-has-share listNews-item-s1 listNews-item-'+classAd+' clearfix">' +
                            '<div style="margin-left:0;" class="info">' +
                                '<h3><a class="J-share-a" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" target="_blank">' + title + '</a></h3>' +
                                '<p class="desc">' + brief + '...</p><p class="from">' + dateTime + ' 来源：' + source + '</p>' + bdShareStr + '</div>' +
                        '</li>');
                        if(hotNews != 0){
                            $li.append('<i class="hot">热</i>');
                        }
                        $oulTimeLy.append($li);
                    }else if( imgLength < 3 && imgLength > 0 ){ // 单图样式
                        $li = $('<li class="J-has-share listNews-item-s1 listNews-item-'+classAd+' clearfix">' +
                            '<div class="img fl">' +
                                '<a href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" target="_blank"><img class="animation" src="' + imgArr[0].src.replace("http://","//") + '" alt="' + title + '" width="180" height="135"></a>' +
                            '</div><div class="info">' +
                                '<h3><a class="J-share-a" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" target="_blank">' + title + '</a></h3>' +
                                '<p class="desc">' + brief + '...</p><p class="from">' + dateTime + ' 来源：' + source + '</p>' + bdShareStr + '</div>' +
                        '</li>');
                        if(hotNews != 0){
                            $li.append('<i class="hot">热</i>');
                        }
                        $oulTimeLy.append($li);
                    } else {            // 多图样式
                        $li = $('<li class="J-has-share listNews-item-s2 listNews-item-'+classAd+' clearfix">' +
                            '<h3><a class="J-share-a" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" target="_blank">' + title + '</a></h3>' +
                            '<p class="img-wrap clearfix">' +
                            '<a class="fl" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" title="'  + title + '"  target="_blank"><img class="animation" src="' + imgArr[0].src.replace("http://","//") + '" alt="" width="200" height="150"></a>' +
                            '<a class="fl" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" title="' + title + '" target="_blank"><img class="animation" src="' + imgArr[1].src.replace("http://","//") + '" alt="" width="200" height="150"></a>' +
                            '<a class="fl" href="/a/' + url + '" pdata="channel|newsTimely|' + j +'|' + hotNews + '" data-error="'+(page_k-1)+'|'+i+'|' + j +'" title="' + title + '" target="_blank"><img class="animation" src="' + imgArr[2].src.replace("http://","//") + '" alt="" width="200" height="150"></a>' +
                            '</p>' +
                            '<p class="from">' + dateTime + ' 来源：' + source + '</p>' + bdShareStr +
                        '</li>');
                        if(hotNews != 0){
                            var $h3 = $li.children('h3');
                            $h3.append('<i class="hot">热</i>');
                            $h3.css('padding-left', '45px');
                        }
                        $oulTimeLy.append($li);
                    }
					if(data.data.length >=20){
						if(i%19==0 & i != 0){
							// 每页第20条数据的时候，取出下一页的参数
							startkey=item.rowkey;
						}
					}else{
						startkey=0;
					}
				});
				//淘宝广告
				// if( $oulTimeLy.hasClass('taobao') ){
				// 	$oulTimeLy.removeClass('taobao').children('li').eq( Math.floor(Math.random()*20) + (page_k-2)*20 ).css('border-top','1px solid #E9E9E9').before('<div style="width:655px;height:90px;padding:20px 0px 20px 15px;"><iframe src="/frames/bd_gg.html" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></div>');
				// }else{
				// 	$oulTimeLy.addClass('taobao').children('li').eq( Math.floor(Math.random()*20) + (page_k-2)*20 ).css('border-top','1px solid #E9E9E9').before('<div style="width:670px;height:203px;padding:20px 0px;"><iframe src="/frames/tb_gg.html" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></div>');
				// }
				
				//360接口广告
				ajax360gg(page_k);

				//绑定统计事件
				$oulTimeLy.find("a").click(function(){
					if ($(this).attr("pdata")){
						$.cookie("tjdata",$(this).attr("pdata"),{path:'/',domain:'eastday.com'})
					}
				});
			},
			complete:function () {
				$('#ajax_tips').hide();
				_flag_new=0;
			},
			error:function(jqXHR,textStatus,errrorThrown){
				console.error(textStatus + '-' + errrorThrown);
			}
		});
	}
	//360广告
	function ajax360gg(page_k){
	    //接口调广告
	    function url_scroll(k){
	        $('body').append('<iframe src="' + k + '" style="display: none;"></iframe>');
	    }
	    //点击曝光
	    function url_click(m){
	        $('.click_360gg').on('click',function(){
	            $('body').append('<iframe src="' + m + '" style="display: none;"></iframe>');
	        })
	    }
		var recommend_uid = function(){//用户id
	        function gethash(s){
	            var m;
	            if(s.indexOf('?') > 0){
	                var k = s.split('?')[1];
	                m = k.length;
	            }else{
	                m = 0;
	            }
	            return m;
	        }
	        // var s = window.location.href;
	        // console.log(gethash(s))
	        var uid = function(){
	            var d = (new Date() - 0);
	            var s = window.location.href;
	            var hash = gethash(s);
	            uid = "" + d + hash + Math.random() + Math.random() + Math.random() + Math.random();
	            uid = uid.replace(/\./g, "").substring(0, 32);
	            return uid;
	        }
	        var ml = uid();
	        return ml;
	    };
	    var recommend_url = 'http://show.g.mediav.com/s',
	    recommend_type = 1,
	    recommend_of = 4,
	    recommend_newf= 1,
	    recommend_showid = 'gUjmVX',
	    recommend_adnum = 1,
	    //recommend_ref = 'mil.eastday.com',
	    recommend_uid = recommend_uid(),
	    recommend_param = recommend_url+'?type='+recommend_type+'&of='+recommend_of+'&newf='+recommend_newf+'&showid='+recommend_showid+'&uid='+recommend_uid+'&impct='+recommend_adnum;
	    var type = true;
	    if(page_k==2){
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg1').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg2').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg3').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
	    }else{
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg4').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg5').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
		    $.ajax({
		        type: 'post',
		        url: recommend_param,
		        dataType: 'jsonp',
		        jsonp: 'jsonp',
		        success: function(data) {
		            var d = data.ads ? data.ads : [];
	                type = true;
	            	$oulTimeLy.children('li.listNews-item-360gg6').after(
					'<li class="J-has-share listNews-item-s1 clearfix">'+
					'<div class="img fl">'+
						'<a class="click_360gg" href="'+d[0].curl+'" target="_blank" title="'+d[0].title+'">'+
							'<img class="animation" src="'+d[0].img.replace("http://","//")+'" alt="" width="180" height="135">'+
						'</a>'+
					'</div>'+
					'<div class="info">'+
						'<h3><a class="J-share-a click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].title+'</a></h3>'+
						'<p class="desc"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">'+d[0].desc+'</a></p>'+
						'<p class="from"><a class="click_360gg" href="'+d[0].curl+'" target="_blank">广告：'+d[0].src+'</a></p>'+
					'</div>'+
					'</li>');
	                for(var i = 0;i<d[0].imptk.length;i++){
	                	url_scroll(d[0].imptk[i]);
	                }
	                url_click(d[0].clktk[0]);
		        }
		    });
	    }
	}
	/* 百度分享 */
	(function(){
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
            var text_laiyu = '（来自：东方头条）';
            if( cmd == 'tsina' ){
            	text_laiyu = '（来自：@东方头条新闻）';
            }
            if (global_share_title) {
                config.bdText = global_share_title + text_laiyu;
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

	/* 二维码 */
	(function(){
		$('.icon_cnt_dtl').find('a').each(function(){
			var _this=$(this);
			_this.hover(function(){
				_this.children().show();
			},function(){
				_this.children().hide();
			});
		});
	})();
    /* 导航栏[更多]功能实现 */
    (function(){
        $('#J_more').hover(function(){
            $(this).addClass('active');
            $(this).children('.J-more-link').show();
        }, function(){
            $(this).removeClass('active');
            $(this).children('.J-more-link').hide();
        });

    })();
	/* 右侧固定功能实现 start */
	setTimeout(function(){
		var $contentRight=$('#J_channel_right_sidebar');
		var ot = $contentRight.offset().top,
			contentHeight = $contentRight.outerHeight(),
			ff = true;
		$(window).on('scroll', function(event) {
			event.preventDefault();
			var  windowHeight = $(window).height();
			var body_scrollTop= document.documentElement.scrollTop || document.body.scrollTop;
			if(contentHeight + ot + 180 <= windowHeight + body_scrollTop){
				if(ff){
					$contentRight.addClass('content-r-fixed');
					ff = false;
				}
			}else{
				if(!ff){
					$contentRight.removeClass('content-r-fixed');
					ff = true;
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
	},3000);

});



