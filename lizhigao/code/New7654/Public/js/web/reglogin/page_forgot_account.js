/*
 * 找回账号页面专用js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-25
 */
(function($) {

    //找回账号---
    var validate = {
        mobile: false,
        code: false,
        mcode: false,
        password: false,
        repassword: false
    };

    var ref = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
    var ref_cod = /^\d{4}$/;
    var ref_cod_p = /^\d{6}$/;
    $('#account').on({
        focus: function(){
            var $that_ph = $(this).val();
            if($that_ph == '请输入您所绑定的手机号码' || $that_ph == null){
                $(this).val('');
            }
        },
        blur: function(){
            // debugger;
            this.value = this.value.replace(/\s/g,'').replace(/(\d{3})(\d{4})/,"$1 $2 ");
            var $that_ph = $(this).val().replace(/\s/g,"");
            if($that_ph == '' || $that_ph == null || $that_ph == '请输入您所绑定的手机号码'){
                $(this).val('请输入您所绑定的手机号码');
                $('.foc-hint').eq(0).text('请输入您所绑定的手机号码').removeClass('f-right');
                $('#forgot-btn-msg').removeClass('forgot-btn-a-on').attr('disabled',"true");
            }else if($that_ph && !ref.test($that_ph)){
                $('.foc-hint').eq(0).text('输入手机号码格式不对').removeClass('f-right');
                $('#forgot-btn-msg').removeClass('forgot-btn-a-on').attr('disabled',"true");
            }else{
                $.getJSON("/Forgotaccount/ex_mobile?mobile="+$that_ph,function(d){
                    if(d.errcode=="0000") {
                        $('.foc-hint').eq(0).text('').addClass('f-right');
                        $('#forgot-input-cod').on({
                            focus: function(){
                                var $that_ph = $(this).val();
                                if($that_ph == '请输入验证码' || $that_ph == null){
                                    $(this).val('');
                                }
                            },
                            blur: function(){
                                var $that_ph = $(this).val();
                                if($that_ph == '' || $that_ph == null || $that_ph == '请输入验证码'){
                                    $(this).val('请输入验证码');
                                    $('.foc-hint').eq(1).text('请输入验证码').removeClass('f-right');
                                    validate.code = false;
                                }else if($that_ph && !ref_cod.test($that_ph)){
                                    $('.foc-hint').eq(1).text('验证码格式不正确').removeClass('f-right');
                                    validate.code = false;
                                }else{
                                    $('.foc-hint').eq(1).text('');
                                    $('#forgot-btn-msg').addClass('forgot-btn-a-on').removeAttr("disabled");
                                    validate.code = true;
                                }
                            }
                        });
                    } else {
                        $('.foc-hint').eq(0).text(d.msg).removeClass('f-right');
                        $('#forgot-btn-msg').removeClass('forgot-btn-a-on').attr('disabled',"true");
                        validate.mobile = false;
                    }
                });
                validate.mobile = true;
            }
        }
    });

    $('#forgot-input-cod').on({
        focus: function(){
            var $that_ph = $(this).val();
            if($that_ph == '请输入验证码' || $that_ph == null){
                $(this).val('');
            }
        },
        blur: function(){
            var $that_ph = $(this).val();
            if($that_ph == '' || $that_ph == null || $that_ph == '请输入验证码'){
                $(this).val('请输入验证码');
                $('.foc-hint').eq(1).text('请输入验证码').removeClass('f-right');
                validate.code = false;
            }else if($that_ph && !ref_cod.test($that_ph)){
                $('.foc-hint').eq(1).text('验证码格式不正确').removeClass('f-right');
                validate.code = false;
            }else{
                $('.foc-hint').eq(1).text('');
                validate.code = true;
                if(validate.mobile == true){
                    $('#forgot-btn-msg').addClass('forgot-btn-a-on').removeAttr("disabled");
                }
            }
        }
    });

    $('#forgot-input-msg').on({
        focus: function(){
            var $that_ph = $(this).val();
            if($that_ph == '请输入短信验证码' || $that_ph == null){
                $(this).val('');
            }
        },
        blur: function(){
            var $that_ph = $(this).val();
            if($that_ph == '' || $that_ph == null || $that_ph == '请输入短信验证码'){
                $(this).val('请输入短信验证码');
                $('.foc-hint').eq(2).text('请输入短信验证码').removeClass('f-right f-right-color');
                validate.mcode = false;
            }else if($that_ph && !ref_cod_p.test($that_ph)){
                $('.foc-hint').eq(2).text('请输入6位手机验证码').removeClass('f-right f-right-color');
                validate.mcode = false;
            }else{
                // $('.foc-hint').eq(2).text('').addClass('f-right');
                $('.foc-hint').eq(2).text('');
                validate.mcode = true;
            }
        }
    });

    //找回账号 通过验证--修改psw-------
    var ref_pwd = /[a-zA-Z\d+]{6,16}/;

    $('#forgot-input-pwd').on({
        focus: function(){
            var $that_ph = $(this).val();
            if($that_ph == '' || $that_ph == null){
                $(this).val('');
            }
        },
        blur: function(){
            var $that_ph = $(this).val();
            if($that_ph == '' || $that_ph == null){
                $('.foc-hint').eq(0).text('密码不能为空').removeClass('f-right');
                validate.password = false;
            }else if( $that_ph && !ref_pwd.test($that_ph) ){
                $('.foc-hint').eq(0).text('密码格式不正确').removeClass('f-right');
                validate.password = false;
            }else{
                $('.foc-hint').eq(0).text('').addClass('f-right');
                validate.password = true;
            }
        }
    });

    $('#forgot-input-pwdd').on({
        focus: function(){
            var $that_ph = $(this).val();
            if($that_ph == '' || $that_ph == null){
                $(this).val('');
            }
        },
        blur: function(){
            var input_pwd = $('#forgot-input-pwd').val();
            var $that_ph = $(this).val();
            if(input_pwd == '' || input_pwd == null || input_pwd == '6~16位数字，字母组成'){
                $('.foc-hint').eq(0).text('请输入密码').removeClass('f-right');
                validate.repassword = false;
            }else if($that_ph == '' || $that_ph == null){
                $('.foc-hint').eq(1).text('请输入密码').removeClass('f-right');
                validate.repassword = false;
            }else if( $that_ph && !ref_pwd.test($that_ph) ){
                $('.foc-hint').eq(1).text('密码格式不正确').removeClass('f-right');
                validate.repassword = false;
            }else if($that_ph != $('#forgot-input-pwd').val()){
                $('.foc-hint').eq(1).text('两次密码不一致').removeClass('f-right');
                validate.repassword = false;
            }else{
                $('.foc-hint').eq(1).text('').addClass('f-right');
                validate.repassword = true;
            }
        }
    });

    //提交验证 找回账号 【一】

    var forgot_id = $('#form_forgot_id');
    forgot_id.submit(function() {

        //点击提交按钮依次触发失去焦点再次验证
        $('input[name=mobile]', forgot_id).trigger('blur');
        $('input[name=code]', forgot_id).trigger('blur');
        $('input[name=mcode]', forgot_id).trigger('blur');
        $('input[name=password]', forgot_id).trigger('blur');
        $('input[name=repassword]', forgot_id).trigger('blur');

        var isOk = validate.mobile && validate.code && validate.mcode,
            dfOk = validate.password && validate.repassword;
        if (isOk) {
            return true;
        }
        if (dfOk) {
            return true;
        }
        return false;
    });


    $("#forgot-btn-msg").click(function(){
        $('.foc-hint').eq(1).text('').removeClass('f-right');
        $('.foc-hint').eq(2).text('');
        var obj = $(this);
        if(!$(this).hasClass("forgot-btn-a-on")) return false;
        var param = {};
        param['mobile'] = $("#account").val();
        param['code'] = $("#forgot-input-cod").val();
        param['rand'] = Math.random();
        $.post("/Forgotaccount/verify_code",param,function(d){
            if(d=="发送成功"){
                var t=60;
                TT = setInterval(function(){
                    if(t>0) {
                        obj.html("请在"+t+"秒后重试");
                        obj.removeClass("forgot-btn-a-on");
                        --t;
                    } else {
                        clearInterval(TT);
                        obj.html("获取短信验证码");
                        obj.addClass("forgot-btn-a-on");
                        t=60;

                    }
                },1000);
                $('.foc-hint').eq(1).text('').addClass('f-right');
                $('.foc-hint').eq(2).text(d).addClass('f-right-color');
                validate.code = true;
            } else if(d=='短信验证码一天最多发送3次'){
                obj.removeClass("forgot-btn-a-on");
                $('.foc-hint').eq(1).text(d);
                validate.code = false;
            }else{
                $('.foc-hint').eq(1).text(d);
                validate.code = false;
            }
        });
        return false;
    });

    /* 手机验证成功后修改密码表单校验 */
    (function(){
        var $form = $('form#resetPwd');
        var valid = $form.validate({
            rules: {
                loginPwd: {
                    required: true,
                    rangelength: [6,16]
                },
                loginPwdConfirm: {
                    required: true,
                    rangelength: [6,16],
                    equalTo: '#loginPwd'
                }
            },
            messages: {
                loginPwd:{
                    required: "请输入密码！",
                    rangelength: "密码长度为6到16位！"
                },
                loginPwdConfirm: {
                    required: "请输入确认密码！",
                    rangelength: "密码长度为6到16位！",
                    equalTo: '两次密码不一致！'
                }
            }
        });
        $form.find('.submit').click(function(){
            if(valid.form()){
                alert("校验成功！");
                return false;   // 取消表单默认提交
            } else {
                alert("校验失败！");
            }
        });
    })();

})(jQuery);
