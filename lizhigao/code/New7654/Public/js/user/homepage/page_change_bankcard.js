/**
 * 银行卡号设置
 * Created by lizhigao on 2015/5/31.
 */
var remoteData = '';// <?php echo json_encode($bank);?>;
var set = {},
    H = {
        nameEmpty: "开户人姓名不能为空",
        nameWrong: "开户人姓名格式错误",
        idcord: "开户人身份证不能为空",
        idcordWrong: "开户人身份证格式错误",
        bankname: "银行名称不能为空",
        cityEmpty: "请选择开户所在省市",
        openname: "开户行名称不能为空",
        openname2: "开户行名称格式有误",
        bankEmpty: "银行卡帐号不能为空",
        bankWrong: "银行卡帐号格式有误"
    },
    setUserMsg = $("#setUserMsg"),
    myh = '{:get_url()}';

var proData = [{"id": 0, "text": "请选择"}].concat(Wdata.provincelist),
    cityData = Wdata.citylist;
var hint = {},
    reg = /^[\u0391-\uFFE5·]+$/;
set.username = $("#setName");
set.idcord = $("#setIDCard");
set.bankname = $("#setBankName");
set.province = $("#setProvince");
set.city = $("#setCity");
set.openname = $("#setOpenBankName");
set.account = $("#setBankAccount");
set.submit = $("#setSubmit");

var a, b, c;
$(function () {
    a = location.pathname, b = a.split('/'), c = false;
    if (b[b.length - 2] == 'from' && b[b.length - 1] == 'tt')
        c = true;
    if (c) {
        $('.header.userset-header,.user-message-wrap.section.pd0x').hide();
        $('html,body').css({overflow: 'hidden'});

    }
    //$("#userMenu").foldMenu({time:300});
    // 省市联动.
    cityLinkage(set.province, set.city, proData, cityData);
    getFocus(setUserMsg);

    function initBank(data, id) {
        if (data.err == "true") {
            var str = "", i;
            for (i = 0; i < data.name.length; i++) {
                str += "<option value=" + data.name[i].type + ">" + data.name[i].text + "</option>";
            }
            id.html(str);
        }
    }

    initBank({"err": "true", "name": Wdata.banklist}, set.bankname);
    // 提交保存事件.
    set.submit.on("click", function () {

        var data = {
            username: set.username.val(),
            idcord: set.idcord.val(),
            bankname: set.bankname.val(),
            bankid: set.bankname.find("option:selected").text(),
            province: set.province.find("option:selected").text(),
            pval: set.province.val(),
            city: set.city.find("option:selected").text(),
            cval: set.city.val(),
            openname: set.openname.val(),
            account: set.account.val()
        };

        // 缓存错误信息.
        hint.username = getWrongMsg(set.username);
        hint.idcord = getWrongMsg(set.idcord);
        hint.bankname = getWrongMsg(set.bankname);
        hint.city = getWrongMsg(set.city);
        hint.openname = getWrongMsg(set.openname);
        hint.account = getWrongMsg(set.account);


        if (!data.username) {

            hintShow(hint.username, H.nameEmpty);
            return false;
        }
        if (data.username && !reg.test(data.username)) {

            hintShow(hint.username, H.nameWrong);
            return false;
        }
        if (!data.idcord) {
            hintShow(hint.idcord, H.idcord);
            return false;
        }
        if (data.idcord && !(IdCardValidate(data.idcord))) {

            hintShow(hint.idcord, H.idcordWrong);
            return false;
        }
        if (!data.bankname) {

            hintShow(hint.bankname, H.bankname);
            return false;
        }
        if (data.pval == 0) {

            hintShow(hint.city, H.cityEmpty);
            return false;
        }
        if (!data.openname) {

            hintShow(hint.openname, H.openname);
            return false;
        }
        if (!/^[\u4e00-\u9fa5()（）]+$/gi.test(data.openname)) {
            hintShow(hint.openname, H.openname2);
            return false;
        }
        if (!data.account) {
            hintShow(hint.account, H.bankEmpty);
            return false;
        }
        if (data.account.length > 20 || data.account.length < 16) {
            hintShow(hint.account, H.bankWrong);
            return false;
        }
        var d = {
            username: data.username,
            usernumb: data.idcord,
            bankid: data.bankname,
            bankname: data.bankid,

            openprovinceid: data.pval,
            openprovince: data.province,
            opencityid: data.cval,
            opencity: data.city,

            banksubname: data.openname,
            bankaccount: data.account

        };
        var _this = this;
        $.ajax({
            type: "POST",
            url: USER_URL + "/alipay/set_bank",
            dataType: "JSON",
            data: {bankcard: d, verifyAccount: data.account, type: 1},
            success: function (d) {
                /MSIE 6/ig.test(navigator.userAgent) && $('select').hide();
                $(_this).popupMeans({
                    popid: "#popupMessage", // 弹出框ID.
                    width: 400, // 弹出框宽.
                    height: 172, // 弹出框高.
                    shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                    callback: function () {

                        var $messageMain = $("#popupMessage").find("[data-main]"),
                            _height = 172 - 81;

                        $messageMain.height(_height);
                        $("#popupMessage").find('.popup-main').html('<div style="text-align: center;margin-top:10px;">' + d.data + '</div>');
                        function redirect(obj) {


                            if (!c) {
                                if (d.success == 1) {
                                    var url_back = USER_URL + '/edit/index/type/1';
                                    if ($('#backurl').val() != '') {
                                        url_back = $('#backurl').val();
                                    }
                                    $(obj).attr({href: url_back});
                                } else {
                                    $(obj).attr({href: myh});
                                }
                            } else {
                                $('#7654_handle').attr({src: PHONE_USER + '/shop/index_help/r/' + (new Date().getTime())});
                            }
                        }

                        $("#popupMessage").find('.submit-btn').click(function () {
                            redirect(this);
                        });
                        $('.clone-btn').unbind('click').on('click', function () {
                            redirect(this);
                        });
                    } // 弹出回调函数.
                });
            }
        });
    });

    setTimeout(function () {
        if (remoteData) {
            var proid = 0;
            if (remoteData.bankname) {
                $('#setBankName option').each(function () {
                    if (this.text == remoteData.bankname) {
                        this.selected = true;
                    }
                });
            }
            if (remoteData.openprovince) {
                $('#setProvince option').each(function () {
                    if (this.text == remoteData.openprovince) {
                        this.selected = true;
                        proid = this.value;
                    }
                });
                if (remoteData.opencity) {
                    var a = false;
                    for (var i in Wdata.citylist) {
                        var _cur = Wdata.citylist[i];
                        if (_cur && proid == _cur.pid) {
                            var y = document.createElement('option');
                            y.text = _cur.text;
                            y.id = _cur.id;
                            if (remoteData.opencity == _cur.text) {
                                y.selected = true;
                                a = true;
                            }
                            $('#setCity')[0].add(y);
                        }
                    }
                    if (a == false) {
                        $('#setCity')[0].remove(0);
                        $('#setCity option:eq(1)').attr({selected: true});
                    }
                }
            }
        }
    }, 1);

});

/* 简易省市二级联动.*/
function cityLinkage(pro, city, pdata, cdata) {
    var pstr = "",
        cstr = "", i, z;
    for (i = 0; i < pdata.length; i++) {
        pstr += "<option value=" + pdata[i].id + ">" + pdata[i].text + "</option>";
    }
    pro.on("change", function () {
        cstr = ""; 					// 置为初始化.
        for (z = 0; z < cdata.length; z++) {
            if (cdata[z].pid == pro.val()) {

                cstr += "<option value=" + cdata[z].id + ">" + cdata[z].text + "</option>";
            }
        }
        city.html(cstr);
        var _hint = getWrongMsg(pro)
        if (!_hint.is(":hidden") && _hint) {
            _hint.hide(); // 隐藏错误信息.
        }
    });
    city.html("<option value='0'>全部</option>");
    pro.html(pstr);
}

function hintShow(h, t) {
    h.css("display", "inline-block").text(t);
}
var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 加权因子
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 身份证验证位值.10代表X
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //进行18位身份证的基本验证和第18位的验证
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/* 获取错误信息.*/
function getWrongMsg(e) {
    var h = e.parents("li").find("[data-hint]");
    return h;
}

/* 获取焦点事件.*/
function getFocus(f) {
    var $form = f,
        $elem = $form.find("[data-type]");
    $elem.focus(function () {
        var ThisHint = $elem.parents("li").find("[data-hint]");
        ThisHint.hide();
    });
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和
    }
    valCodePosition = sum % 11;                // 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (temp_date.getFullYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (temp_date.getYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
//去掉字符串头尾空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 通过身份证判断是男是女
 * @param idCard 15/18位身份证号码
 * @return 'female'-女、'male'-男
 */
function maleOrFemalByIdCard(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));        // 对身份证号码做处理。包括字符间有空格。
    if (idCard.length == 15) {
        if (idCard.substring(14, 15) % 2 == 0) {
            return 'female';
        } else {
            return 'male';
        }
    } else if (idCard.length == 18) {
        if (idCard.substring(14, 17) % 2 == 0) {
            return 'female';
        } else {
            return 'male';
        }
    } else {
        return null;
    }
}
