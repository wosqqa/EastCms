/**
 * 我的业绩页面js文件
 * @author Cleam Lee
 * @date 2015-09-14
 */
$(function(){
	/* 分页实现 */
	$('#J_pages_holder').jPages({
		containerID: 'J_pages_performance',
		perPage: 7,	// 每页显示5条
		first: '首页',
		previous: '上一页',
		next: '下一页',
		last: '最后一页',
		delay: 0	// 同时显示
	});

	/* 查询表单校验 */
	$('#J_search_submit').click(function(){
		var $earchErrorInfo = $('#J_search_error_info');
		if($.trim($('#J_startDate').val()) == ''){
			$earchErrorInfo.html('请选择开始时间。');
			return false;
		} else if($.trim($('#J_endDate').val()) == ''){
			$earchErrorInfo.html('请选择结束时间。');
			return false;
		} else {
			$earchErrorInfo.html('');
			// 开始查询
			
		}
	});

	// 判断整数value是否大于10
    jQuery.validator.addMethod("isGteTen", function(value, element) {
        value = parseInt(value);
        return this.optional(element) || value >= 10;
    }, "最低提现金额10元");
    // 手机号码或邮箱验证    
    jQuery.validator.addMethod("isMobileOrEmail", function(value, element) {
        var length = value.length;
        var email =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var mobilePhone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobilePhone.test(value)) || (email.test(value));
    }, "请填写正确的支付宝账号(邮箱或手机号)。");

	/* 提现表单校验 */
	$('#J_withdraw_form').validate({
		rules: {
			// 提现金额
			money: {
				isGteTen: true
			},
			// 手机校验
			mobilephone: {
				isMobile: true
			},
			// 支付宝校验
			alipayAccount: {
				isMobileOrEmail: true
			}
		},
		errorPlacement:function(error,element) {
	     	if (element.attr("name") == "mobilephone"){
	     		error.insertAfter("#J_get_phone_yzm");
	     	} else {
	       		error.insertAfter(element);
	     	}
	   	}
	});

	// 发送短信验证码事件
	$('#J_get_phone_yzm').click(function(){
		var $this = $(this),
			timer = null,
			num = 60,
			$phone = $('#J_withdraw_form').find('.phone');
		if($.trim($phone.val()) == ''){
			$this.siblings('label.error').html('请输入手机号码');
		} else if(!/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test($phone.val())) {
			$this.siblings('label.error').html('手机号码格式不正确！');
		} else {
			// 发送短信验证码
			// todo...
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

	// 提交提现表单
	$('#J_withdraw_submit').click(function(){
		var $withdrawForm = $('#J_withdraw_form');
		if(!$withdrawForm.valid()){
			alert('前端验证不通过');
		} else {
			var $shadow = $('#J_login_win_bg_shadow'),
				$confirmWin = $('#J_confirm_win'),
				$confirmSubmit = $('#J_confirm_submit'),
				$money = $withdrawForm.find('input[name="money"]'),
				$mobolephone = $withdrawForm.find('input[name="mobolephone"]'),
				$alipayAccount = $withdrawForm.find('input[name="alipayAccount"]');
			$confirmWin.find('.money').html($money.val());
			$confirmWin.find('.mobolephone').html($mobolephone.val());
			$confirmWin.find('.alipayAccount').html($alipayAccount.val());
			$shadow.show();
			$confirmWin.show();
			// 取消、关闭窗口
			$confirmWin.on('click', 'a.close, button.cancel', function(){
				$confirmWin.hide();
				$shadow.hide();
			});
			// 确认提交
			$confirmSubmit.on('click', function(){
				alert('确认提交!');
			});
		}
		return false;
	});



});



