/**
 * 仅供7654流量平台 - 注册页面使用
 * @dependencies jquery.min.js, jquery.placeholder.min.js
 * @author lizhigao(lizhigao@021.com)
 * @date 2015-08-06
 */
$(function(){
	/* 让IE支持html5的placeholder属性 */
	$('input, textarea').placeholder();

	/* 表单校验 */
	(function(){
		var $registerForm = $('#J_registerForm'),
			$phone = $('#phone'),
			$code = $('#code'),
			$password = $('#password'),
			$win = $('#J_window'),
			$winBg = $('#J_window_bg');

		// “立即注册”按钮点击事件
		$registerForm.on('click', '#submit', function(event) {
			if (!checkForm()) {
				return false;
			}
			// ajax请求可以写这里...


			// 注册成功窗口
			$winBg.show();
			$win.show(function() {
				var $second = $(this).find('.second').eq(0);
				var num = parseInt($second.html());
				var timer = setInterval(function(){
					if(num <= 0){
						clearInterval(timer);
						location.href = '../index/index.html';
					}
					num--;
					$second.html(num);
				}, 1000);
			});
		});

		// 表单校验
		$registerForm.on('blur', '#phone,#code,#password', function(event) {
			var $this = $(this);
			
			if($this.attr('id') == 'phone'){
				if(!checkPhone($phone.val())){
					addErrorInfo($this);
				} else {
					removeErrorInfo($this);
				}
			} else if ($this.attr('id') == 'code') {
				if(!checkCode($code.val())){
					addErrorInfo($this);
				} else {
					removeErrorInfo($this);
				}
			} else {
				if(!checkPassword($password.val())){
					addErrorInfo($this);
				} else {
					removeErrorInfo($this);
				}
			}
		});

		

		/**
		 * 校验表单$registerForm
		 * @return {boolean}      true：校验通过; false：校验不通过
		 */
		function checkForm(){
			if(checkPhone($phone.val()) && checkCode($code.val()) && checkPassword($password.val())){
				return true;
			}
			$phone.addClass('input-error');
			$code.addClass('input-error');
			$password.addClass('input-error');
			return false;
		}
		/**
		 * 校验手机号码
		 * @param  {string} phone 手机号码
		 * @return {boolean}      true：校验通过; false：校验不通过
		 */
		function checkPhone (phone) {
			if(isEmpty(phone) || !/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(phone)){
				return false;
			}
			return true;
		}
		/**
		 * 校验验证码(6位数)
		 * @param  {string} code  验证码
		 * @return {boolean}      true：校验通过; false：校验不通过
		 */
		function checkCode (code) {
			if(isEmpty(code) || !/^\d{6}$/.test(code)){
				return false;
			}
			return true;
		}
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
		/**
		 * 增加验证不通过样式
		 * @param {object} $target 
		 */
		function addErrorInfo($target){
			var $tips = $target.parent().next().children('p').eq(0);
			$target.removeClass('input-success').addClass('input-error');
			$tips.removeClass('text-success').addClass('text-error');
		}
		/**
		 * 移除验证不通过样式
		 * @param {object} $target 
		 */
		function removeErrorInfo($target){
			var $tips = $target.parent().next().children('p').eq(0);
			$target.removeClass('input-error').addClass('input-success');
			$tips.removeClass('text-error').addClass('text-success');
		}

		// 免费获取验证码
		$('#J_getCode').on('click', function(){
			$('#J_getCode').hide();
			$('#J_getCodeing').show();
			var seconds = 10,
				$secondsWrap = $('#J_getCodeing').find('span').eq(0);
			$secondsWrap.html(seconds);
			var timer = setInterval(function(){
				seconds--;
				$secondsWrap.html(seconds);
				if(seconds < 0){
					clearInterval(timer);
					$('#J_getCode').show();
					$('#J_getCodeing').hide();
				}
			}, 1000);

		});



	})();

});
