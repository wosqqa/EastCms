/**
 * 仅供7654流量平台首页使用
 * @dependencies jquery.min.js, jquery.placeholder.min.js
 * @author lizhigao(lizhigao@021.com)
 * @date 2015-08-04
 */
$(function(){
	/* 让IE支持html5的placeholder属性 */
	$('input, textarea').placeholder();
	/* 轮播图 */
	(function(){
		// 缓存对象
		var $bannerList = $('#J_banner_list'),
			$indicators = $('#J_indicators').find('li'),
			$lis = $bannerList.find('li'),
			$activeLi = $bannerList.find('li.active'),
			index = 0,
			len = $lis.length,
			isHover = false;
		// 初始化函数（执行一次）
		(function(){
			$lis.eq(0).show().siblings().hide();
			$indicators.eq(0).addClass('active').siblings().removeClass('active');
			index = $activeLi.index();
		})();
		// 轮播函数
		function run(){
			index++;
			if(index >= len){
				index = 0;
			}
			$lis.eq(index).fadeIn().siblings().fadeOut();
			$indicators.eq(index).addClass('active').siblings().removeClass('active');
		}
		// 定时函数
		setInterval(function(){
			if(!isHover){
				run();
			}
		}, 3000);
		// 鼠标放上去暂停轮播
		$bannerList.hover(function(){
			isHover = true;
		}, function(){
			isHover = false;
		});
		// 操作“指标”轮播
		$indicators.hover(function(){
			isHover = true;
			$(this).addClass('active').siblings().removeClass('active');
			$lis.stop().eq($(this).index()).fadeIn().siblings().fadeOut();
			index = $(this).index();
		}, function(){
			isHover = false;
		});
	})();

	/* 登录表单校验 */
	(function(){
		$('#J_loginForm').on('blur', '#J_username, #J_password', function(event) {
			var $this = $(this);
			var $errorInfo = $('#J_errorInfo');
			if($this.attr('name') == 'username'){
				if(isEmpty($(this).val())){
					$errorInfo.html('请输入用户名！').show();
				} else {
					$errorInfo.html('').hide();
				}
			} else {
				if(!checkPassword($(this).val())){
					$errorInfo.html('密码格式不正确！').show();
				} else {
					$errorInfo.html('').hide();
				}
			}
		});

		/**
		 * 校验密码(以字母开头，长度在6-12之间，只能包含字母、数字和下划线)
		 * @param  {string} password 密码
		 * @return {boolean}      true：校验通过; false：校验不通过
		 */
		function checkPassword (password) {
			if(isEmpty(password) || !/^[a-zA-Z]{1}\w{5,11}$/.test(password)){
				return false;
			}
			return true;
		}

		/**
		 * 判断是否为空
		 * @param  {string}  val 需要判断的值
		 * @return {Boolean}     [description]
		 */
		function isEmpty (val) {
			var v = $.trim(val);
			return (v === undefined || v === '' || v === null || v.length === 0) ? true : false;
		}

	})();



});







