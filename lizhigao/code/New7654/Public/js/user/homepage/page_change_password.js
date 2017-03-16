/**
 * Created by H-083 on 2015/5/31.
 */
$(function () {
    var set = {},
        H = {
            password_old: "请输入原始密码",
            pn: "请输入新密码",
            pw: "原始密码错误",
            pwa: "两次输入不一致"
        },
        setUserMsg = $("#setUserMsg"),
        h = '{:get_url()}';

    var hint = {},reg = /^[\u0391-\uFFE5]+$/;

    set.password_old = $("#password_oldPassword");
    set.password_new = $("#password_new");
    set.password_new_2 = $("#password_new_2");
    set.submit = $("#setSubmit");

    var error = [1, 1, 1], is_submit = false;
    $('#password_oldPassword,#password_new,#password_new_2').unbind('focus').keyup(function () {
        if (this.value.length > 0) {
            var charCode = this.value.charCodeAt(this.value.length - 1);
            if (charCode >= 97 && charCode <= 122) {

            } else if (charCode >= 65 && charCode <= 90) {

            } else if (charCode >= 48 && charCode <= 57) {

            } else {
                this.value = this.value.substr(0, this.value.length - 1);
            }
        }
    }).focus(function () {
        $(this).parent().children('.hint-msg').hide();
    });
    set.password_old.blur(function () {
        var str = this.value.replace(/^\s/g, '').replace(/\s$/g, '');
        var len = str.length;
        if (len <= 0) {
            error[0] = 1;
            hintShow(getWrongMsg(set.password_old), '原密码不能为空');
        } else {
            $.ajax({
                type: "POST",
                url: "",
                dataType: "JSON",
                data: {passwd: str},
                success: function (d) {
                    if (d.success != 1) {
                        error[0] = 1;
                        hintShow(getWrongMsg(set.password_old), d.data);
                        $(set.password_new_2).parent().children('.hint-msg').hide();
                        $(set.password_new).parent().children('.hint-msg').hide();
                    } else {
                        error[0] = 0;
                    }
                }
            });
        }
        if (error[0] == 1) {
            $(set.password_new_2).parent().children('.hint-msg').hide();
            $(set.password_new).parent().children('.hint-msg').hide();
        }
    });
    set.password_new.blur(function () {
        console.log(error);
        if (error[0] == 0) {
            var str = this.value.replace(/^\s/g, '').replace(/\s$/g, '');
            var len = str.length;
            if (len <= 0) {
                error[1] = 1;
                hintShow(getWrongMsg(set.password_new), '新密码不能为空');
            } else if (len > 16 || len < 6) {
                error[1] = 1;
                hintShow(getWrongMsg(set.password_new), '密码建议大于6位 小于16位的字母或数字，不支持特殊字符。');
            } else {
                this.value = str;
                error[1] = 0;
            }
            if (error[1] == 1) {
                $(set.password_new_2).parent().children('.hint-msg').hide();
                return false;
            }
        }
    });
    set.password_new_2.blur(function () {
        if (error[0] == 0 && error[1] == 0) {
            var str = this.value.replace(/^\s/g, '').replace(/\s$/g, '');
            var len = str.length;
            if (set.password_new.val() == set.password_new_2.val()) {
                if (len <= 0) {
                    error[2] = 1;
                    hintShow(getWrongMsg(set.password_new_2), '确认密码不能为空');
                } else if (len > 16 || len < 6) {
                    error[2] = 1;
                    hintShow(getWrongMsg(set.password_new_2), '密码建议大于6位 小于16位的字母或数字，不支持特殊字符。');
                } else {
                    this.value = str;
                    error[2] = 0;
                }
            } else {
                if (len <= 0) {
                    error[2] = 1;
                    hintShow(getWrongMsg(set.password_new_2), '确认密码不能为空');
                } else {
                    error[2] = 1;
                    hintShow(getWrongMsg(set.password_new_2), '与新密码不一致');
                }
            }
            if (error[2] == 1) {
                return false;
            }
        }
    });

    //getFocus(setUserMsg);
    // 提交保存事件.
    set.submit.on("click", function () {
        if (is_submit) {
            return true;
        }
        var data = {
            password_old: set.password_old.val(),
            password_new: set.password_new.val(),
            password_new_2: set.password_new_2.val(),
            isubmit: 1,
            type: 1
        };
        var _this = this;
        // 缓存错误信息.
        hint.password_old = getWrongMsg(set.password_old);
        hint.password_new = getWrongMsg(set.password_new);
        hint.password_new_2 = getWrongMsg(set.password_new_2);
        set.password_old.trigger('blur');
        set.password_new.trigger('blur');
        set.password_new_2.trigger('blur');
        if (error[0] + error[1] + error[2] > 0) {
            return false;
        }
        if (!data.password_old) {
            hintShow(hint.password_old, H.password_old);
            return false;
        }
        if (!data.password_new) {
            hintShow(hint.password_new, H.pn);
            return false;
        }
        if (data.password_new_2 != data.password_new) {
            hintShow(hint.password_new_2, H.pwa);
            return false;
        }

        $('input').attr({disabled: true});
        $('.mylogining').show();
        is_submit = true;
        setTimeout(function () {
            $.ajax({
                type: "POST",
                url: "{$Think.USER_URL}/password/modify",
                dataType: "JSON",
                data: data,
                success: function (d) {
                    if (d.success == 1) {
                        var $myiframes = $('.myiframe');
                        $myiframes.first().attr({src: SHICHANG + '/index/loginout'});
                        $myiframes.eq(1).attr({src: USER_URL + '/logout'});
                    }
                    $('input').attr({disabled: false});
                    $('.mylogining').hide();
                    $(this).popupMeans({
                        popid: "#popupMessage", // 弹出框ID.
                        width: 400, // 弹出框宽.
                        height: 172, // 弹出框高.
                        shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                        callback: function () {
                            var $messageMain = $("#popupMessage").find("[data-main]"),
                                _height = 172 - 81;
                            $messageMain.height(_height);
                            $("#popupMessage").find('.contents').html('<div style="text-align: center;margin-top:10px;">' + (d.success == 1 ? '修改成功' : d.msg) + '</div>');
                            $("#popupMessage").find('.submit-btn').click(function () {
                                var sq = $('.signout').attr('index-url');
                                if (d.success == 1) {
                                    $(this).attr({href: sq});
                                } else {
                                    $(this).attr({href: h});
                                }
                            }).focus();
                        } // 弹出回调函数.
                    });
                }
            });
        }, 1000);
    }).unbind('keyup').keyup(function () {
        //$("#popupMessage").find('.submit-btn').trigger('click');
        //alert();
    });

    function hintShow(h, t) {
        h.css("display", "inline-block").text(t);
    }

    function getWrongMsg(e){
        var h = e.parents("li").find("[data-hint]");
        return h;
    }
});