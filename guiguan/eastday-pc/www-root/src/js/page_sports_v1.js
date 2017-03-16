/**
 * 首页js
 * Created by lizhigao on 2016/1/12
 * update by xiaoqiulin on 2016/3/10.
 */
$(function() {
	/**
	 * 轮播功能
	 */
	(function() {
		//轮播图
		var _banner_current = 0;
		var prev = null;
		var next = null;
		var _banner_time = null;
		var $body = $('body');
		// 左侧按钮点击事件
		$body.on('click', '.btn_l', function() {
			if (_banner_current == 0) {
				prev = $('.banner_act div').length - 1;
			} else {
				prev = _banner_current - 1
			}
			$('.banner_act div span:eq(' + prev + ')').trigger('mouseenter');
		});
		// 右侧按钮点击事件
		$body.on('click', '.btn_r', function() {
			if (_banner_current == $('.banner_act div').length - 1) {
				next = 0;
			} else {
				next = _banner_current + 1
			}
			$('.banner_act div span:eq(' + next + ')').trigger('mouseenter');
		});
		$body.on('mouseover', '.banner_act div', function(e) {
			$('.banner_act div span').removeClass('now');
			$(this).find('span').addClass('now');
			$('.banner .img_a').hide();
			$('.banner .img_a:eq(' + $(this).index() + ')').show();
			$('.banner_txt a').text($('.banner .img_a:eq(' + $(this).index() + ')').attr('data-title'));
			$('.banner_txt a').attr('href', $('.banner .img_a:eq(' + $(this).index() + ')').attr('href'));
			_banner_current = $(this).index();
			e.stopPropagation();
		});
		// $('.banner_act div span:eq(0)').trigger('mouseenter');
		$body.on('mouseenter', '.banner', function() {
			$('.btn_l, .btn_r').stop();
			$('.btn_l').animate({
				left: '20px'
			});
			$('.btn_r').animate({
				right: '20px'
			});
			clearInterval(_banner_time);
		});
		$body.on('mouseleave', '.banner', function() {
			$('.btn_l, .btn_r').stop();
			$('.btn_l').animate({
				left: '-50px'
			});
			$('.btn_r').animate({
				right: '-50px'
			});
			_banner_time = setInterval(function() {
				$('.btn_r').trigger('click');
			}, 6000);
		});
		$(window).load(function() {
			$('.banner').trigger('mouseleave');
		});
	})();
	/* 导航栏[更多]功能实现 */
	(function() {
		$('#J_more').hover(function() {
			$(this).addClass('active');
			$(this).children('.J-more-link').show();
		}, function() {
			$(this).removeClass('active');
			$(this).children('.J-more-link').hide();
		});

	})();
	//侧边栏二维码
	(function() {
		$(window).on('resize', function() {
			var windWindth = $(window).width();
			if (windWindth < 1230) {
				$('.right_cod').fadeOut(600);
			} else {
				$('.right_cod').fadeIn(600);
			}
		})
	})();
});