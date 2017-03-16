/**
 * Created by lizhigao on 2015/5/31.
 */
$(function () {
    var set = {}, hint, phoneis = false;
    var a, b, c;
    a = location.pathname, b = a.split('/'), c = false;
    if (b[b.length - 2] == 'from' && b[b.length - 1] == 'tt')
        c = true;
    if (c) {
        $('.header.userset-header,.user-message-wrap.section.pd0x').hide();
        $('body').css({overflow: 'hidden', marginLeft: '-185px'});
        $('html,body').css({overflow: 'hidden'});
    }
    var H = {
            phone: "手机号不能为空",
            code: "验证码不能为空",
            pW: "手机号格式不正确",
            cW: "验证码不正确"
        },
        setUserMsg = $("#setUserMsg"),
        host = '{$Think.SHICHANG}',
        h = '{:get_url()}';

    hint = {},
        reg = /^[\u0391-\uFFE5]+$/;

    set.phone = $("#setPhone");
    set.code = $("#setCode");
    set.codebtn = $("#getCode");
    //set.newPhone = $("#setNewPhone");
    //set.newCode = $("#getNewCode");
    set.submit = $("#setSubmit");

    var getPhoneCode = function (p, c) {
        var phone = p, code = c;
        var pHint = getWrongMsg(phone), cHint = getWrongMsg(code);
        var restartCode = function (e) {
                var cd = e, intervalCd = 0;
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
                    $.post('/ajax/phone', {key: set.phone.val()}, function (d) {
                        var phone = set.phone;
                        if (!d.status) {
                            pHint.show().text(d.info);
                        } else {
                            if (!phone.val()) {
                                pHint.show().text("请输入手机号码");
                                return false;
                            }
                            if (phone.val().length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(phone.val()))) {
                                pHint.show().text("请输入正确的手机号");
                                return false;
                            }
                            if (!phoneis) {
                                pHint.show().text("手机号码已经存在");
                                return false;
                            }
                            restartCode(60);
                            $.ajax({
                                url: USER_URL + '/phone/bind_verify_code_send.action',
                                data: {phone: phone.val(), sms_type: 'bind_phone'},
                                type: 'post',
                                dataType: 'json',
                                success: function (d) {
                                }
                            });
                        }
                    });

                });
            };
        phone.blur(function () {
            var phone = set.phone.val();
            if (!phone || !phone.length || phone == $(this).attr('placeholder')) {
                pHint.show().text("请输入手机号码");
                return true;
            }
            $.post('/ajax/phone', {key: phone}, function (d) {
                if (!d.status) {
                    pHint.show().text(d.info);
                } else {
                    phoneis = true;
                }
            });
        });
        return eventClick();
    };
    getFocus(setUserMsg);
    getPhoneCode(set.phone, set.codebtn);
    // 提交保存事件.
    set.submit.on("click", function () {
        var phone = set.phone.val();
        $.post('/ajax/phone', {key: phone}, function (d) {
            var phone = set.phone.val();
            var pHint = getWrongMsg(set.phone), cHint = getWrongMsg(set.code);
            if (!d.status) {
                pHint.show().text(d.info);
            } else {
                var pHint = getWrongMsg(set.phone), cHint = getWrongMsg(set.code);
                var data = {
                    phone: set.phone.val(),
                    code: set.code.val()
                };
                // 缓存错误信息.
                hint.phone = getWrongMsg(set.phone);
                hint.code = getWrongMsg(set.code);
                if (!phoneis) {
                    pHint.show().text("手机号码已经存在");
                    return false;
                }
                if (!data.phone) {
                    hintShow(hint.phone, H.phone);
                    return false;
                }
                if (data.phone.length < 11 || !(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(data.phone))) {
                    hintShow(hint.phone, H.phone2);
                    return false;
                }
                if (!data.code) {
                    hintShow(hint.code, H.code);
                    return false;
                }
                $.ajax({
                    type: "POST",
                    url: USER_URL + "/phone/bind",
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
                                $("#popupMessage").find('.popup-main').html('<div style="text-align: center;margin-top:10px;">' + (d.success == 1 ? '设置成功' : d.msg) + '</div>');
                                $("#popupMessage").find('.submit-btn').click(function () {
                                    if (a) {
                                        $('#7654_handle').attr({src: PHONE_USER + '/shop/index_help/r/' + (new Date().getTime())});
                                    } else {
                                        /**/
                                        if (d.success == 1) {
                                            $(this).attr({href: USER_URL + '/edit/index/type/1'});
                                        } else {
                                            set.code.val('');
                                        }
                                    }
                                });
                            } // 弹出回调函数.
                        });

                    }
                });
            }
        });
    });

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
