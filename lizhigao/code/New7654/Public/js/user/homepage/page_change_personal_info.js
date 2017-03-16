/**
 * 个人资料设置
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-06-01
 */
var set = {},
    H = {
        nameEmpty: "姓名不能为空",
        nameWrong: "姓名格式错误",
        cityEmpty: "请选择所在省市",
        tencentEm: "QQ号码不能为空",
        areaEmpty: "所在地址不能为空"
    },
    setUserMsg = $("#setUserMsg"),
    myh = '{:get_url()}',
    remoteData = '';//<? php echo json_encode($view);?>;
var proData = [{"id": 0, "text": "请选择"}].concat(Wdata.provincelist),
    cityData = Wdata.citylist;
var hint = {},
    reg = /^[\u0391-\uFFE5·]+$/;
set.name = $("#setName");
set.gender = $("#setGender");
set.tencent = $("#setTencent");
set.province = $("#setProvince");
set.city = $("#setCity");
set.area = $("#setArea");
set.submit = $("#setSubmit");
$(function () {
    //$("#userMenu").foldMenu({time:300});
    // 省市联动.
    cityLinkage(set.province, set.city, proData, cityData);
    getFocus(setUserMsg);
    // 提交保存事件.
    set.submit.on("click", function () {
        var data = {
            name: set.name.val(),
            gender: set.gender.val(),
            tencent: set.tencent.val(),
            province: set.province.find("option:selected").text(),
            pval: set.province.val(),
            city: set.city.find("option:selected").text(),
            cval: set.city.val(),
            area: set.area.val()
        };
        // 缓存错误信息.
        hint.name = getWrongMsg(set.name);
        hint.city = getWrongMsg(set.city);
        hint.tencent = getWrongMsg(set.tencent);
        hint.area = getWrongMsg(set.area);
        if (!data.name) {
            hint.name.css("display", "inline-block").text(H.nameEmpty);
            return false;
        }
        if (data.name && !reg.test(data.name)) {
            hint.name.css("display", "inline-block").text(H.nameWrong);
            return false;
        }
        if (!data.tencent) {
            hint.tencent.css("display", "inline-block").text(H.tencentEm);
            return false;
        }
        if (data.pval == 0) {
            hint.city.css("display", "inline-block").text(H.cityEmpty);
            return false;
        }
        if (!data.area) {
            hint.area.css("display", "inline-block").text(H.areaEmpty);
            return false;
        }
        var dd = {
            username: data.name,
            gender: data.gender,
            userqq: data.tencent,
            pro: data.province,

            proid: data.pval,
            city: data.city,
            cityid: data.cval,
            address: data.area
        };
        $.ajax({
            type: "POST",
            url: USER_URL + "/personal/savedata",
            dataType: "JSON",
            data: dd,
            success: function (d) {
                /MSIE 6/ig.test(navigator.userAgent) && $('select').hide();
                $(this).popupMeans({
                    popid: "#popupMessage", // 弹出框ID.
                    width: 400, // 弹出框宽.
                    height: 172, // 弹出框高.
                    shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                    callback: function () {
                        var $messageMain = $("#popupMessage").find("[data-main]"),
                            _height = 172 - 81;
                        $messageMain.height(_height);
                        $("#popupMessage").find('.popup-main').html('<div style="text-align: center;margin-top:10px;">' + (d.success == -404 ? d.msg : d.data) + '</div>');
                        function redirect(obj) {
                            if (d.success == 1) {
                                $(obj).attr({href: USER_URL + '/edit/index/type/1'});
                            } else if (d.success == -404) {
                                $(obj).attr({href: SHICHANG});
                            } else {
                                $(obj).attr({href: myh});
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
        var cur_pro = $('#cur_pro').val();
        var cur_city = $('#cur_city').val();
        var proid = 0;
        if (remoteData.user_info_ext) {
            if (remoteData.user_info_ext.province) {
                $('#setProvince option').each(function () {
                    if (this.text == remoteData.user_info_ext.province) {
                        this.selected = true;
                        proid = this.value;
                    }
                });
            }
            if (remoteData.user_info_ext.province) {
                for (var i in Wdata.citylist) {
                    var _cur = Wdata.citylist[i];
                    if (_cur && proid == _cur.pid) {
                        var y = document.createElement('option');
                        y.text = _cur.text;
                        y.id = _cur.id;
                        if (remoteData.user_info_ext.city == _cur.text) {
                            y.selected = true;
                        }
                        $('#setCity')[0].add(y);
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