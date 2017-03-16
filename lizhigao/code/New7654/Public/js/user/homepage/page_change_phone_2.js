/**
 * Created by lizhigao on 2015/5/31.
 */
$(function () {
    var set = {}, hint, restartCode, myfunc, H, is_check = false;
    var a, b, c;
    a = location.pathname, b = a.split('/'), c = false;
    if (b[b.length - 2] == 'from' && b[b.length - 1] == 'tt')
        c = true;
    if (c) {
        $('.header.userset-header,.user-message-wrap.section.pd0x').hide();
        $('body').css({overflow: 'hidden', marginLeft: '-185px'});
        $('html,body').css({overflow: 'hidden'});
    }
    var setUserMsg = $("#setUserMsg"),
        host = '{$Think.SHICHANG}',
        h = '{:get_url()}',
        intervalCd = 0;
    var H = {
            phone: "手机号不能为空",
            code: "验证码不能为空",
            pW: "手机号格式不正确",
            cW: "验证码不正确"
        },
        hint = {},
        reg = /^[\u0391-\uFFE5]+$/;
    restartCode = null;
    set.phone = $("#setPhone");
    set.code = $("#setCode");
    set.codebtn = $("#getCode");
    //set.newPhone = $("#setNewPhone");
    //set.newCode = $("#getNewCode");
    set.submit = $("#setSubmit");
    set.phone.blur(function () {
        var phone = set.phone.val();
        var pHint = getWrongMsg(set.phone);
        if (!phone || !phone.length || phone == $(this).attr('placeholder')) {
            pHint.show().text("请输入手机号码");
            return true;
        }
        $.post('/ajax/phone', {key: phone}, function (d) {
            if (!d.status) {
                pHint.show().text(d.info);
                $(set.code).parent().children('.hint-msg').hide();
            } else {
                is_check = true;
                $(set.phone).parent().children('.hint-msg').hide();
            }
        });
    });
    var getPhoneCode = function (p, c) {
        var phone = p, code = c;
        var pHint = getWrongMsg(phone), cHint = getWrongMsg(code);
        restartCode = function (e) {
            var cd = e;
            if (cd > 0 && !intervalCd) {
                intervalCd = setInterval(function () {
                    cd--;
                    //倒时时
                    code.html('' + cd + '秒后重新获取')
                        .addClass("not-get-code")
                        .unbind("click"); // 移除点击事件.
                    if (cd <= 0) {
                        //倒计时结束
                        code.html('获取验证码')
                            .removeClass("not-get-code")
                            .bind("click", eventClick()); // 重新添加点击事件.
                        clearInterval(intervalCd);
                        intervalCd = 0;
                    }
                }, 1000);
            }
        },
            eventClick = function () {
                code.on("click", function () {
                    if (!phone.val()) {
                        pHint.show().text("请输入手机号码");
                        return false;
                    }
                    if (phone.val().length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phone.val()))) {

                        pHint.show().text("手机号码格式不正确");
                        return false;

                    }
                    restartCode(60);
                    $.ajax({
                        url: USER_URL + '/user/phone_verify_code_send',
                        data: {use_bind: 1, sms_type: 'bind_modify_phone'},
                        type: 'post',
                        dataType: 'json',
                        success: function (d) {
                        }
                    });
                });
            };
        return eventClick();
    };
    //getFocus(setUserMsg);
    getPhoneCode(set.phone, set.codebtn);
    // 提交保存事件.
    set.submit.on("click", function () {
        var phone = set.phone, code = set.codebtn;
        var data = {
            code: set.code.val()
        };
        // 缓存错误信息.
        if (!phone.val()) {
            pHint.show().text("请输入手机号码");
            return false;
        }
        if (phone.val().length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phone.val()))) {
            pHint.show().text("手机号码格式不正确");
            return false;
        }
        hint.code = getWrongMsg(set.code);
        if (!data.code) {
            hintShow(hint.code, H.code);
            return false;
        }
        $(set.phone).parent().children('.hint-msg').hide();
        $(set.code).parent().children('.hint-msg').hide();
        $.ajax({
            type: "POST",
            url: USER_URL + "/phone/bind_modify_submit?r=" + new Date().getTime(),
            dataType: "JSON",
            data: data,
            success: function (d) {
                $(this).popupMeans({
                    popid: "#popupMessage", // 弹出框ID.
                    width: 400, // 弹出框宽.
                    height: 172, // 弹出框高.
                    shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                    callback: function () {
                        var $messageMain = $("#popupMessage").find("[data-main]"),
                            _height = 172 - 81;
                        $messageMain.height(_height);
                        $("#popupMessage").find('.popup-main').html('<div style="text-align: center;margin-top:10px;">' + (d.success == 1 ? '验证成功' : d.msg) + '</div>');
                        myfunc = $("#popupMessage").find('.submit-btn')[0].onclick;
                        $("#popupMessage").find('.submit-btn').click(function () {
                            if (d.success == 1) {
                                set.phone.attr({disabled: false}).val('');
                                set.code.val('');
                                //倒计时结束
                                set.codebtn.html('获取验证码')
                                    .removeClass("not-get-code")
                                    .bind("click", eventClick()); // 重新添加点击事件.
                                clearInterval(intervalCd);
                                var a = d.data.split('####');
                                var b = a[1].split('|');
                                $('body').append('<div style="display:none">' + a[0] + '</div>');
                                setNewPhone(b[0], b[1]);
                                intervalCd = 0;
                            } else {
                                if (d.success == -8) {
                                    set.code.val('');
                                }
                            }
                        });
                    } // 弹出回调函数.
                });
            }
        });
    });

    function setNewPhone(sid, sid_dateline) {
        var phone = set.phone, code = set.codebtn;
        var pHint = getWrongMsg(phone), cHint = getWrongMsg(code);
        var arr = [sid, sid_dateline];
        code.unbind('click');
        code.on("click", function () {
            if (!phone.val()) {
                pHint.show().text("请输入手机号码");
                return false;
            }
            if (phone.val().length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phone.val()))) {
                pHint.show().text("手机号码格式不正确");
                return false;
            }
            set.phone.trigger('blur');
            if (!is_check) {
                return false;
            }
            $(set.code).parent().children('.hint-msg').hide();
            restartCode(60);
            $.ajax({
                url: USER_URL + '/phone/bind_verify_code_send',
                data: {phone: phone.val(), sid: arr[0], sms_type: 'bind_modify_phone'},
                type: 'post',
                dataType: 'json',
                success: function (d) {
                }
            });
        });
        $('#setUserMsg li:eq(0) label').html('<i>*</i>新手机号：');
        /* 设置密码 */
        set.submit.unbind('click');
        set.submit.on("click", function () {
            var data = {
                code: set.code.val(),
                phone: set.phone.val(),
                sid: arr[0],
                sid_dateline: arr[1]
            };
            // 缓存错误信息.
            if (!phone.val()) {
                pHint.show().text("请输入手机号码");
                return false;
            }
            if (phone.val().length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phone.val()))) {
                pHint.show().text("手机号码格式不正确");
                return false;
            }
            set.phone.trigger('blur');
            hint.code = getWrongMsg(set.code);
            if (!is_check) {
                return false;
            }
            if (!data.code) {
                hintShow(hint.code, H.code);
                return false;
            }
            $(set.code).parent().children('.hint-msg').hide();
            $(set.phone).parent().children('.hint-msg').hide();
            $.ajax({
                type: "POST",
                url: USER_URL + "/phone/bind_new?r=" + new Date().getTime(),
                dataType: "JSON",
                data: data,
                success: function (d) {
                    if (d.success == 1) {
                        $(set.code).parent().children('.hint-msg').hide();
                        $(set.phone).parent().children('.hint-msg').hide();
                    }
                    $(this).popupMeans({
                        popid: "#popupMessage", // 弹出框ID.
                        width: 400, // 弹出框宽.
                        height: 172, // 弹出框高.
                        shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                        callback: function () {
                            var $messageMain = $("#popupMessage").find("[data-main]"),
                                _height = 172 - 81;
                            $messageMain.height(_height);
                            $("#popupMessage").find('.popup-main').html('<div style="text-align: center;margin-top:10px;">' + (d.success == 1 ? '设置成功' : d.msg) + '</div>');
                            $("#popupMessage").find('.submit-btn').unbind('click');
                            $("#popupMessage").find('.submit-btn').click(function () {
                                if (c) {
                                    $('#7654_handle').attr({src: PHONE_USER + '/shop/index_help/r/' + (new Date().getTime())});
                                } else {
                                    if (d.success == 1) {
                                        console.info(USER_URL + '/edit/index/type/1');
                                        $(this).attr({href: USER_URL + '/edit/index/type/1'});
                                    } else {
                                        $("#popupMessage").find('.clone-btn').trigger('click');
                                    }
                                }
                            });
                        } // 弹出回调函数.
                    });
                }
            });
        });
    }

    function getFocus(f) {
        var $form = f,
            $elem = $form.find("[data-type]");
        $elem.focus(function () {
            var ThisHint = $elem.parents("li").find("[data-hint]");
            ThisHint.hide();
        });
    }

    function getWrongMsg(e) {
        var h = e.parents("li").find("[data-hint]");
        return h;
    }
});



