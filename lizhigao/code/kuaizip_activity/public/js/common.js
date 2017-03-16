/**
 * 快压官网通用js
 * 注意：此文件不能轻易更改
 * @author lizhigao(lizhigao@021.com)
 * @date 2015-08-05
 */
$(function(){
	/* 快速登录 */
	$('#J_fast_login').on('click', function(){
		var $shadow = $('#J_login_win_bg_shadow'),
			$loginWin = $('#J_fast_login_win'),
			$close = $loginWin .find('a.close');
		$shadow.show();
		$loginWin.show();
		$close.on('click', function(){
			$loginWin.hide();
			$shadow.hide();
		});
	});

	/* 登录表单提交 */
	(function(){
		var $loginForm = $('#J_login_form'),
			$formErrorInfo = $('#form_error_info'),
			$phone = $loginForm.find('.phone'),
			$yzm = $loginForm.find('.yzm');
		$('#J_login_submit').on('click', function(){
			if($.trim($phone.val()) == ''){
				$formErrorInfo.html('请输入手机号码！');
				return;
			} else if(!/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test($phone.val())){
				$formErrorInfo.html('手机号码格式不正确！');
				return;
			} else if($.trim($yzm.val()) == ''){
				$formErrorInfo.html('请输入验证码！');
				return;
			}
			$formErrorInfo.html('');


		});

		/* 获取验证码 */
		$('#J_get_yzm').on('click', function(){
			var $this = $(this),
				timer = null,
				num = 60;
			if($this.hasClass('active')){
				return;
			}
			if($.trim($phone.val()) == ''){
				$formErrorInfo.html('请输入手机号码！');
				return;
			} else if(!/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test($phone.val())){
				$formErrorInfo.html('手机号码格式不正确！');
				return;
			} else {
				$formErrorInfo.html('');
				// 手机号码正确且不为空
				
				$this.addClass('active').html('<span id="J_second">'+num+'</span>秒后重新获取');
				clearInterval(timer);
				var $second = $('#J_second');
				timer = setInterval(function(){
					$second.html(--num);
					if(num == 0){
						clearInterval(timer);
						$this.removeClass('active').html('获取验证码');
					}
				}, 1000);
			}
		});
	})();
		
});



