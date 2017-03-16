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

	 	//暖新闻 轮播 add by xiaoqiulin@2016/03/16
	    // silder_up_down($('#lbNnews'),3000);
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
		var next = 0;
		var _banner_time = null;
		var timer = null;
		var timerl = null;
		var timerh = null;
		var clickFlag = true;
		var clickFlagl = true;
		var clickFlagh = true;
		var $body = $('body');
		function animateTap(k,time){
			var bannerLeft = parseInt($('#banner_silider').css('left'));
			//console.log(bannerLeft);
			if(bannerLeft < -5800 ){
				$('#banner_silider').css('left',-2900);
				//console.log(121);
			}
			if(bannerLeft == 0){
				$('#banner_silider').css('left',-3480);
				//console.log(121);
			}
			bannerLeft = parseInt($('#banner_silider').css('left'));
			$('#banner_silider').animate({'left': bannerLeft+k},time);
			//bannerLeft = parseInt($('#banner_silider').css('left'));
		}
		function bannerScroll(next){
			$('.banner_act div').removeClass('now');
			$('.banner_act div:eq('+next+')').addClass('now');
			$('.banner_txt a').text($('.banner .img_a:eq('+next+')').attr('data-title'));
			$('.banner_txt a').attr('href', $('.banner .img_a:eq('+next+')').attr('href'));
		}
        //左侧按钮点击事件
		$body.on('click','.btn_l',function(e){
			e.preventDefault();
			timerl && clearTimeout(timerl);
			if(clickFlagl){
				clickFlagl = false;
				next = $('.banner_act div.now').index();
				if(next == 0){
					next = 5;
					//$('#banner_silider').animate({'left':-2900},400);
					bannerScroll(next);
					animateTap(580,400);
				}else{
					next -= 1
					bannerScroll(next);
					animateTap(580,400);
				}
			}
			timerl = setTimeout(function(){clickFlagl = true;}, 400);
			//console.log(next);
		});
		$body.on('click','.btn_r',function(e){
			e.preventDefault();
			timer && clearTimeout(timer);
			if(clickFlag){
				clickFlag = false;
				next = $('.banner_act div.now').index();
				if(next == $('.banner_act div').length - 1){
					next = 0;
					//$('#banner_silider').animate({'left':0},400);
					bannerScroll(next);
					// var rlm = parseInt($('#banner_silider').css('left'));
					// console.log(rlm);
					animateTap(-580,400);
				}else{
					next += 1
					//appendDom(next);
					bannerScroll(next);
					animateTap(-580,400);
				}
			}
			timer = setTimeout(function(){clickFlag = true;}, 400);
		});
		$body.on('mouseover','.banner_act div',function(e){
			var $this = $(this);
			if($this.hasClass('now')){
				return;
			}
			$('.banner_act div').removeClass('now');
			$this.addClass('now');
			if($this.hasClass('now')){
				var k = $this.index();
				$('#banner_silider').stop().animate({'left':-k*580},400);
				bannerScroll(k);
			}
		});

		$body.on('mouseover','.right_slider_cnt',function(e){
			$('.btn_r').stop();
			$('.btn_l').stop();
			$('.btn_l').animate({
				left:'20px'
			});
			$('.btn_r').animate({
				right:'20px'
			});
			// typey = 0;
			// e.stopPropagation();
			clearInterval(_banner_time);
		});
		$body.on('mouseleave','.right_slider_cnt',function(){
			$('.btn_r').stop();
			$('.btn_l').stop();
			$('.btn_l').animate({
				left:'-50px'
			});
			$('.btn_r').animate({
				right:'-50px'
			});
			_banner_time = setInterval(function(){
				$('.btn_r').trigger('click');
			}, 4000);
		});	
		$(window).load(function(){
			$('.right_slider_cnt').trigger('mouseleave');	
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
});