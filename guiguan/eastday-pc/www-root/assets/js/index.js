$(function(){
	//var url_top='../../json/index/toutiao.json';
    var silider=$('#banner_silider');//轮播容器
	toutiao_ajax();
	//$('#footer').hide();//首页进来但对设置底部隐藏
	// 首页轮播图
	function toutiao_ajax(){
        $section_0=$('#cnt_1');
        silider.find('a.img_a').eq(0).css('display','inline');
        silider.append("<div class='banner_bar'></div><div class='banner_txt'><a target='_blank' href=''></a></div>");
        silider.find('div.banner_txt').children('a').html(silider.find('a.img_a').eq(0).attr('data-title'));
        silider.append("<div class='banner_act'></div>");
        silider.find('.banner_act').append('<div><span></span></div> <div><span></span></div> <div><span></span></div><div><span></span></div>');
        silider.find('.banner_act').find('span').eq(0).addClass('now');
        silider.append("<div class='btn_l'></div><div class='btn_r'></div>");
	}
});
$(function(){
		//轮播图
		var _banner_current = 0;
		var prev = null;
		var next = null;
		var _banner_time = null;	
		$('body').on('click','.btn_l',function(){
			if(_banner_current == 0){
				prev = $('.banner_act div').length - 1;
			}else{
				prev = _banner_current-1
			}
			$('.banner_act div span:eq('+prev+')').trigger('mouseenter');
		});
		$('body').on('click','.btn_r',function(){
			if(_banner_current == $('.banner_act div').length - 1){
				next = 0;
			}else{
				next = _banner_current+1
			}
			$('.banner_act div span:eq('+next+')').trigger('mouseenter');
		});
		$('body').on('mouseover','.banner_act div',function(e){
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
		$('body').on('mouseenter','.banner',function(){
			$('.btn_l, .btn_r').stop();
			$('.btn_l').animate({
				left:'20px'
			});
			$('.btn_r').animate({
				right:'20px'
			});
			clearInterval(_banner_time);
		});
		$('body').on('mouseleave','.banner',function(){
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
	
	//右侧中图
	$('body').on('mouseenter','ul.item_odd_cnt li',function(){
		$(this).find('a.item_odd_a_text').animate({
			top:'108px'
		});
	});
	$('body').on('mouseleave','ul.item_odd_cnt li',function(){
		$(this).find('a.item_odd_a_text').animate({
			top:'158px'
		});
	});	
	//右侧两个大图
	$('body').on('mouseenter','div.big_hover_pic',function(){
		var _this=$(this);		
		_this.find('p').animate({
			bottom:'0px'
		});	
	});
	$('body').on('mouseleave','div.big_hover_pic',function(){
		var _this=$(this);
		_this.find('p').animate({
			bottom:'-50px'
		});		
	});	
	//底部图
	$('body').on('mouseenter','ul.contain_pic_t_cnt li',function(){
		var _this=$(this);		
		_this.find('p').animate({
			bottom:'0px'
		});	
	});
	$('body').on('mouseleave','ul.contain_pic_t_cnt li',function(){
		var _this=$(this);
		_this.find('p').animate({
			bottom:'-30px'
		});		
	});	
	//tab选项卡			
	var tab_cnt=$('#tab_cnt');
	var tab=tab_cnt.children('li');
	var contain_0=$('#contain_t_l_0');
	var contain_1=$('#contain_t_l_1');
	var  personal_object = null;
	tab.on('click',function(){
		var _this=$(this);
		if(!_this.hasClass('active')){
			_this.addClass('active').siblings('li').removeClass('active');
			if(_this.hasClass('end')){
				contain_0.hide();
				contain_1.show();
                if (personal_object == null)personal_ajax('../../json/index/personal.json');
			}else{
				contain_0.show();
				contain_1.hide();				
			}
		}
	});
    // 个性推荐
    function personal_ajax(url){
        $.ajax({
            type:'get',
            url:url,
            dataType:'json',
            timeout:6000,
            success:function(data){
                personal_object = data;
                var _html='';
                $.each(data,function(i,item){
                    _html+="<li><a href='"+item.url+"?btype=index&subtype=gexintuijian&idx="+i+"&ishot=0' target='_blank'><span><img src='"+item.img+"' alt='"+item.topic+"'></span><p><em>"+item.topic+"</em><i>"+item.desc+"</i></p></a></li>";
                });
                $("#contain_t_l_1").html(_html);
            },
            error:function(jqXHR,textStatus,errrorThrown){if(errrorThrown=='Not Found'){console.log('Your requested address is not found.');}else if(textStatus=='timeout'){console.log('Verify the request timeout, please refresh the page and try again');}else{console.log('Your requested address is not found.');}}
        });
    }


    
});