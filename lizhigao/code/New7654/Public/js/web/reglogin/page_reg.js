/*
 * 注册页面专用js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-23
 */
$(function(){
    var R = {};
    R.getPhoneCode = $("#getPhoneCode"); // 缓存获取短信验证码按钮.
    R.registerform = $("#registerform");
    R.phone = $("#phone");
    R.code = $(".codeImport");
    R.password = $("#password");
    R.invitecode = $("#invitecode");
    R.regSubmit = $("#regSubmit");
    R.codeURL = $('#codeURL');
    var getFocusEvent = function(elem) {
            var that  = elem,
                hint  = that.parents("li").find("[data-hint]"),
                error = that.parents("li").find("[data-error]"),
                type  = that.data("type");
            that.focus(function() {
                if(type == "key"){
                    if(that.val() =="建议填写"){
                        that.val("").css({"color":"#000"});
                    }
                    if(!error.is(":hidden")){
                        error.hide();
                    }
                }else if(type == "code"){
                    R.code.attr("data-code",0);
                    if(!that.val()) {
                        hint.show();
                        error.hide();
                    }else{
                        if(!error.is(":hidden")){
                            error.hide();
                        }
                    }
                }else{
                    if(!that.val()) {
                        hint.show();
                        error.hide();
                    }else{
                        if(!error.is(":hidden")){
                            error.hide();
                        }
                    }
                }
            }).blur(function() {
                hint.hide();
                if(that.val()){
                    if(type == "phone"){
                        if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(that.val())) || that.val().length < 11){
                            error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                            error.show().find("span").text("请输入正确的手机号码");
                        }else {
                            $.post("{$Think.USER_URL}/register/phonenum2_validate", {phone:R.phone.val()}, function(d){
                                var success = d.success,
                                    msg = d.msg;
                                if(success != 1){
                                    error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                                    error.show().find("span").text(msg);
                                }
                                else {
                                    error.show().find("i").removeClass("wrong-icon").addClass("right-icon");
                                    error.show().find("span").text("");
                                }
                            }, 'json');
                        }
                    }else if(type == "code") {

                        if(that.val().length < 6){
                            error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                            error.show().find("span").text("短信验证码不正确");
                        }else{
                            $.post("{$Think.USER_URL}/register/phonenum_validate", {code:R.code.val(),phone:R.phone.val(),type:1}, function(d){
                                var success = d.success,
                                    msg = d.msg;
                                if(success != 1){
                                    error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                                    error.show().find("span").text("短信验证码不正确");
                                }
                                else {
                                    error.show().find("i").removeClass("wrong-icon").addClass("right-icon");
                                    error.show().find("span").text("");
                                }
                            }, 'json');

                        }
                    }else if(type == "password") {
                        if(that.val().length < 6 || !(/^[a-zA-Z0-9]{6,16}$/.test(that.val()))){
                            error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                            error.show().find("span").text("密码格式不正确");
                        }else {
                            error.show().find("i").removeClass("wrong-icon").addClass("right-icon");
                            error.show().find("span").text("");
                        }
                    }else if(type == "key") {
                        $.get("{$Think.USER_URL}/Ajax/isinvitecode?invitecode="+that.val()+'&r='+new Date().getTime(), {}, function(d){
                            var success = d.success,
                                msg = d.msg;
                            if(success != 1){
                                error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                                error.show().find("span").text("激活码不正确");
                                that.val("").attr("data-key",1);
                                return false;
                            }
                            else {
                                error.show().find("i").removeClass("wrong-icon").addClass("right-icon");
                                error.show().find("span").text("");
                            }
                        }, 'json');
                    }
                }else {
                    if(type == "phone"){
                        error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                        error.show().find("span").text("手机号不能为空");
                    }else if(type == "code"){
                        error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                        error.show().find("span").text("短信验证码不能为空");
                    }else if(type == "password"){
                        error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                        error.show().find("span").text("密码不能为空");
                    }else if(type == "key"){
                        that.val("建议填写").css({"color":"#9f9e9f"});
                    }
                }
            });
        },
        restartCode = function(e) {
            var cd = e,intervalCd = 0;
            if (cd > 0 && !intervalCd) {
                intervalCd = setInterval(function(){
                    cd--;
                    //倒时时
                    R.getPhoneCode.html('<span>' + cd + '</span>秒后重新获取')
                        .addClass("get-again")
                        .unbind("click"); // 移除点击事件.
                    if (cd <= 0 ) {
                        //倒计时结束
                        R.getPhoneCode.html('获取验证码')
                            .removeClass("get-again")
                            .bind("click",eventClick()); // 重新添加点击事件.
                        clearInterval(intervalCd);
                        intervalCd = 0;
                    }
                }, 1000);
            }
            return intervalCd;
        },
        eventClick = function() {
            // 获取手机验证码.
            R.getPhoneCode.on("click",function() {
                var phoneval = R.phone.val(),
                    error = R.phone.parents("li").find("[data-error]");
                if(phoneval == ""){
                    error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                    error.show().find("span").text("请输入手机号码");
                    return false;
                }else {
                    if(phoneval.length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phoneval))) {
                        error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                        error.show().find("span").text("请输入正确的手机号码");
                        return false;
                    }
                }
                /* 不需要跨域获取验证码.*/
                data = {phone:phoneval};
                $.post("{$Think.USER_URL}/Register/phone_verify_code_send_do", data, function(d){
                    var success = d.success,
                        msg = d.msg;
                    if(success != 1){
                        error.show().find("i").removeClass("right-icon").addClass("wrong-icon");
                        error.show().find("span").text(msg);
                    }
                    else {
                        restartCode(60);
                    }
                }, 'json');
                return false;
            }).keydown(function(e){
                if(e.keyCode==13){
                    $(this).submit(); //处理事件
                };
            });
        }
    // 获取焦点事件.
    getFocusEvent(R.phone);
    getFocusEvent(R.code);
    getFocusEvent(R.password);
    getFocusEvent(R.invitecode);
    getFocusEvent(R.codeURL);
    //获取短信验证码.
    eventClick(R.getPhoneCode);
    if(R.invitecode.attr('data')!=''){
        R.invitecode.val(R.invitecode.attr('data'));
    }
    // 提交注册.
    R.regSubmit.on("click",function() {
        //debugger;
        var data = {
                phone: R.phone.val(),
                captcha: R.code.val(),
                password: R.password.val(),
                invitecode: R.invitecode.val(),
                isubmit:true
            },
            phoneError = R.phone.parents("li").find("[data-error]"),
            codeError = R.code.parents("li").find("[data-error]"),
            passwordError = R.password.parents("li").find("[data-error]"),
            keyError = R.invitecode.parents("li").find("[data-error]");
        if(!data.phone || phoneError.find("i").hasClass("wrong-icon")){
            if(!phoneError.is(":hidden")){
                return false;
            }else {
                R.phone.focus().blur();
                return false;
            }
        }
        if(R.code.attr("data-code") == 1){
            return false;
        }
        if(!data.captcha){
            R.code.focus().blur();
            return false;
        }
        if(!data.password || passwordError.find("i").hasClass("wrong-icon")){
            R.password.focus().blur();
            return false;
        }
        if(R.invitecode.attr("data-key") == 1){
            R.invitecode.attr("data-key",0)
            return false;
        }
        $.ajax({
            url:"{$Think.USER_URL}/Register/success",
            dataType:'json',
            data:data,
            type:'post',
            success:function(d){
                var mag = d.msg;
                if(d.success == 1){
                    location.href = "{$Think.USER_URL}{:U('Register/register_success')}";
                } else if(d.success == -14){
                    keyError.find("i").removeClass("right-icon").addClass("wrong-icon");
                    keyError.show().find("span").text(mag);
                } else if(d.success == -18){
                    phoneError.find("i").removeClass("right-icon").addClass("wrong-icon");
                    phoneError.show().find("span").text(mag);
                    keyError.hide();
                } else if(d.success == -16){
                    codeError.find("i").removeClass("right-icon").addClass("wrong-icon");
                    codeError.show().find("span").text(mag);
                    R.code.attr("data-code",1);
                    keyError.hide();
                    //errorMsg(authcode,msg);
                } else if(d.success == -10){
                    passwordError.find("i").removeClass("right-icon").addClass("wrong-icon");
                    passwordError.show().find("span").text(mag);
                    keyError.hide();
                    //errorMsg(authcode,msg);
                }
            }
        });
    }).keydown(function(e){
        if(e.keyCode==13){
            $(this).submit(); //处理事件
        };
    });
    $("#btn_reg_license").on("click",function() {
        $(this).popupMeans({
            popid: "#popWrap", // 弹出框ID.
            width: 700, // 弹出框宽.
            height: 550, // 弹出框高.
            shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
            callback: null // 弹出回调函数.
        });
    });
});