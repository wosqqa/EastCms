/**
 * 首页js
 * Created by lizhigao on 2016/1/12
 * update by xiaoqiulin on 2016/3/10.
 */
$(function(){
	/**
	 * 导航动态固定置顶
	 */
	 (function(){
	 	var $nav = $('#nav_cnt');
         var ot = $nav.offset().top,
             ff = true;
         $(window).on('scroll', function(event) {
             event.preventDefault();
             var body_scrollTop= document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
             if(ot <=  body_scrollTop){
                 if(ff){
                     $nav.addClass('nav-fixed');
                     ff = false;
                 }
             }else{
                 if(!ff){
                     $nav.removeClass('nav-fixed');
                     ff = true;
                 }
             }

         });
         // $(window).on('resize', function(event) {
         //     event.preventDefault();
         //     var windowWidth = $(window).width();
         //     if(windowWidth <= 1002){
         //         $nav.removeClass('nav-fixed');
         //     }
         // });

	 	//暖新闻 轮播 add by xiaoqiulin@2016/03/16
	    silder_up_down($('#lbNnews'),3000);
	    function silder_up_down(obj,time){
	        var scrtime;
	        obj.hover(function(){
	            clearInterval(scrtime);
	        
	        },function(){
	            scrtime = setInterval(function(){
	                var liHeight = obj.find("li:last").height();
	                obj.animate({marginTop : liHeight + "px"},1000,function(){
	                
	                obj.find("li:first").appendTo(obj);
	                obj.find("li:first").hide();
	                obj.css({marginTop:0});
	                obj.find("li:first").fadeIn(1000);
	                });
	            },time);   
	        }).trigger("mouseleave");
	    }	 	

	 })();
	/**
	 * 轮播功能
	 */
	(function(){
		//轮播图
		var _banner_current = 0;
		var prev = null;
		var next = null;
		var _banner_time = null;
		var $body = $('body');
        // 左侧按钮点击事件
		$body.on('click','.btn_l',function(){
			if(_banner_current == 0){
				prev = $('.banner_act div').length - 1;
			}else{
				prev = _banner_current-1
			}
			$('.banner_act div span:eq('+prev+')').trigger('mouseenter');
		});
        // 右侧按钮点击事件
		$body.on('click','.btn_r',function(){
			if(_banner_current == $('.banner_act div').length - 1){
				next = 0;
			}else{
				next = _banner_current+1
			}
			$('.banner_act div span:eq('+next+')').trigger('mouseenter');
		});
		$body.on('mouseover','.banner_act div',function(e){
			$('.banner_act div span').removeClass('now');
			$(this).find('span').addClass('now');
			$('.banner .img_a').hide();
			$('.banner .img_a:eq('+$(this).index()+')').show();
			$('.banner_txt a').text($('.banner .img_a:eq('+$(this).index()+')').attr('data-title'));
			$('.banner_txt a').attr('href', $('.banner .img_a:eq('+$(this).index()+')').attr('href'));
			_banner_current = $(this).index();
			e.stopPropagation();
		});
		// $('.banner_act div span:eq(0)').trigger('mouseenter');
		$body.on('mouseenter','.banner',function(){
			$('.btn_l, .btn_r').stop();
			$('.btn_l').animate({
				left:'20px'
			});
			$('.btn_r').animate({
				right:'20px'
			});
			clearInterval(_banner_time);
		});
		$body.on('mouseleave','.banner',function(){
			$('.btn_l, .btn_r').stop();
			$('.btn_l').animate({
				left:'-50px'
			});
			$('.btn_r').animate({
				right:'-50px'
			});
			_banner_time = setInterval(function(){
				$('.btn_r').trigger('click');
			}, 6000);
		});	
		$(window).load(function(){
			$('.banner').trigger('mouseleave');	
		});
	})();

	/**
	 * 热点要闻、个性推荐切换功能
	 */
	(function(){
		var $hotPersonalityNav = $('#J_hot_personality_nav'),
            $line = $hotPersonalityNav.children('.J-bt-line'),
			$hotNews = $('#J_hot_news'),
			$personalityRecommend = $('#J_personality_recommend'),
            clickFlag = true;
		$hotPersonalityNav.on('click', '.J-nav', function(){
			var $this = $(this);
			$hotPersonalityNav.find('.J-nav').removeClass('active');
			$this.addClass('active');
			if($this.data('target') == 'hn'){	// 热点要闻
				$personalityRecommend.stop().fadeOut(100, function(){
                    $hotNews.fadeIn(200);
                });
                // 下面红线运动
                $line.animate({
                    'left': 0
                }, 200);
			} else {	// 个性化推荐
                // 首次点击时无内容，需要先加载内容
                var $prContentWrap = $personalityRecommend.children('.J-pr-content-wrap'),
                    h = $prContentWrap.height(),
                    $prList = $('#J_pr_list');
                if(clickFlag){
                    clickFlag = false;
                    $.getJSON('/json/index/personal.json', function(data){
                        try {
                            $prList.empty();
                            for(var i = 0; i < data.length; i++){
                                var url = data[i].url,
                                    imgSrc = data[i].img,
                                    topic = data[i].topic,
                                    desc = data[i].desc;
                                $prList.append('<li class="pr-item pr"><a class="img" href="' + url + '?btype=index&subtype=lb&idx=0&ishot=0" target="_blank" title="' + topic + '"><img class="animation" src="'+ imgSrc + '" alt="' + topic + '" width="100" height="75"></a><div class="pr-list-txt-wrap"><h4><a href="' + url + '?btype=index&subtype=personal&idx=' + i + '&ishot=0" target="_blank" title="' + topic + '">' + topic + '</a></h4><p>' + desc + '</p></div></li>');
                            }
                        } catch (e){
                            console.log('加载个性推荐数据出错：');
                            console.error(e);
                        }
                    });
                    $hotNews.stop().fadeOut(100, function(){
                        $personalityRecommend.fadeIn(200);
                        $prContentWrap.height(0).animate({
                            'height': h + 'px'
                        }, 1000);
                    });
                    setTimeout(function(){clickFlag = true;}, 300000);   // 5分钟
                } else {
                    $hotNews.stop().fadeOut(100, function(){
                        $personalityRecommend.fadeIn(200);
                    });
                }
                // 下面红线运动
                $line.animate({
                    'left': '120px'
                }, 200);
			}

		});
	})();

	/**
	 * 阅读排行（国内、社会切换功能）
	 */
	(function(){
		var $readRateTab = $('#J_read_rate_tab');
		tab($readRateTab.next().find('div'),$readRateTab.find('a'),'active');
		/*
		** tab选项卡
		** aDiv 显示隐藏与否的容器集合
		** aTab 接收事件元素集合
		*/
		function tab(aDiv,aTab,classname){
			var timeId=null;
			aTab.mouseover(function(){
				var _this = $(this);
				timeId=setTimeout(function(){
					_this.addClass(function(){
						return classname;
					}).parent().siblings().children().removeClass(classname);
					var index = _this.parent().index();
					aDiv.eq(index).fadeIn(200).siblings().fadeOut(100);
				},300);
			}).mouseout(function(){
				//clearTimeout的作用是清除定时器
				clearTimeout(timeId);				
			});
		}
	})();

	/**
	 * 搜索框 和 新闻热词
	 */
	(function(){
		var $search_head = $('#search_head');
		var $a_search = $search_head.siblings('a');
		var input=$search_head[0];
		$search_head.val(JS_SEARCH_WORD);
		var vfirst = $search_head.val();
		var firstUrl = $a_search.attr('href');
		$a_search.attr('href',firstUrl+'?kw='+encodeURI( vfirst ) );
		$search_head.focus(function(){
			if(this.value == vfirst){
				this.value = '';
			}
		});
		$search_head.blur(function(){
			if(this.value == ''){
				this.value = vfirst;
			}
			$a_search.attr('href',firstUrl+'?kw='+encodeURI( this.value ) );
		});

		// if(!isSupportPlaceHolder()) {
		//     input.onfocus = function () {
		//     if(this.value == this.getAttribute('placeholder')) {
		//       this.value = '';
		//     }
		//   };
		// 	input.onblur = function () {
		//     if(!this.value) {
		//       this.value = this.getAttribute('placeholder');
		//     }
		//     input.blur();
		//   };
		// }
		// function isSupportPlaceHolder () {
		//     var test = $search_head[0];
		//     return ('placeholder' in test);
		// }	

		var $hotword = $('#hotword_header');
        $.getJSON('/json/search/hotword.json', function(data){
        	var d = data.data;
            try {
                $hotword.empty();
                for(var i = 0; i < 4; i++){
                    if(i==0 || i== 2){
						$hotword.append("<a href='http://s.eastday.com/?kw="+encodeURI(d[i])+"' target='_blank'><em></em>"+d[i]+"</a>");
                    }else{
                    	$hotword.append("<a href='http://s.eastday.com/?kw="+encodeURI(d[i])+"' target='_blank'>"+d[i]+"</a>");
                    }
                }
            } catch (e){
                console.log('加载个性推荐数据出错：');
                console.error(e);
            }
        });			

	})();

	//侧边栏二维码
	(function(){
		$(window).on('resize',function(){
			var windWindth = $(window).width();
			if(windWindth<1230){
				$('.right_cod').fadeOut(600);
			}else{
				$('.right_cod').fadeIn(600);
			}
		})
	})();
   /* (function(){
        //红包
        if( !$.cookie('voteClose') ){
        	var now = new Date(),
					y = now.getFullYear(),
					m = now.getMonth() + 1,
					d = now.getDate(),
					expiresDate = new Date(y+'/'+m+'/'+d+' ' + '23:59:59');
        	$.cookie('voteClose','0',{expires:expiresDate,path:'/'});
	        if( $(window).outerWidth() > 1330 ){
		        var _body=$('body');
		        var $html_hb=$("<div class='vote'><a class='bg' id='yearVote' href='javascript:;' target='_blank'></a><a class='vote_close' href='javascript:;'></a></div>");
		        _body.append($html_hb);
		        var lock_flag=0;
		        var t=setInterval(function(){
		            if(lock_flag== 0){
		                lock_flag=1;
		                $html_hb.addClass('votechange');
		            }else{
		                lock_flag=0;
		                $html_hb.removeClass('votechange');                
		            }
		        },200);
		        _body.on('click','a.vote_close',function(){
		            $html_hb.hide();
		            clearInterval(t);                      
		        });
		        _body.on('click','.vote a.bg',function(){
		            $(this).attr('href','http://act.dftoutiao.com/?pc');
		            $html_hb.hide(); 
		            clearInterval(t);                    
		        });
	        }        	
        }
    })(); */
});