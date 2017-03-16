/**
 * Created by H-083 on 2015/5/31.
 */
$(function () {
    var set = {},
        H = {
            em: "请输入邮箱",
            ew: "邮箱格式错误"
        },
        setUserMsg = $("#setUserMsg"),
        myh = '{:get_url()}';
    var hint = {},
        reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    set.email = $("#setEmail");
    set.submit = $("#setSubmit");
    $(function() {
        //$("#userMenu").foldMenu({time:300});
        getFocus(setUserMsg);
        // 提交保存事件.
        set.submit.on("click",function() {
            var data = {
                email: set.email.val()
            };
            // 缓存错误信息.
            hint.email = getWrongMsg(set.email);
            if(!data.email){
                hintShow(hint.email,H.em);
                return false;
            }
            if(data.email && !reg.test(data.email)){
                hintShow(hint.email,H.ew);
                return false;
            }
            var _this = this;
            $.ajax({
                type:"POST",
                url:USER_URL+"/email/active_send",
                dataType:"JSON",
                data: data,
                success:function(d) {
                    if (d.success != 1){
                        $(_this).popupMeans({
                            popid: "#popupMessage", // 弹出框ID.
                            width: 400, // 弹出框宽.
                            height: 172, // 弹出框高.
                            shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                            callback: function() {
                                var $messageMain = $("#popupMessage").find("[data-main]"),
                                    _height = 172-81;
                                $messageMain.height(_height);
                                $("#popupMessage").find('.popup-main').append('<div style="text-align: center;margin-top:10px;">'+d.data+'</div>');
                                $('.phone_1').show();
                                $("#popupMessage").find('.submit-btn').click(function(){
                                    if(d.success==1){
                                        $(this).attr({href:USER_URL+'/edit/index/type/1'});
                                    }else{
                                        $(this).attr({href:myh});
                                    }
                                });
                            } // 弹出回调函数.
                        });
                    }else{
                        $(_this).popupMeans({
                            popid: "#popupMessage", // 弹出框ID.
                            width: 400, // 弹出框宽.
                            height: 172, // 弹出框高.
                            shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                            callback: function() {
                                var $messageMain = $("#popupMessage").find("[data-main]"),
                                    _height = 172-81;
                                $messageMain.height(_height);
                                var a = set.email.val();
                                b = a.split('@')
                                c = b[0].substr(0,4)
                                d = c+'****'+b[1];
                                $("#popupMessage").find('.popup-main').append('<div style="text-align: center;margin-top: 10px;margin-left: 50px;margin-right: 80px;line-height: 20px;">已向邮箱<b>'+d+'</b>发送了一封激活邮件，点击<a href="https://mail.qq.com/" target="_blank">进入邮箱</a>完成邮箱验证</div>');
                                $("#popupMessage").find('.submit-btn').click(function(){
                                    if(d.success==1){
                                        $(this).attr({href:USER_URL+'/edit/index/type/1'});
                                    }else{
                                        $(this).attr({href:myh});
                                    }
                                });
                            } // 弹出回调函数.
                        });
                    }
                    //window.location.href = d.data.url;
                }
            });
        })
    });

    function hintShow(h,t) {
        h.css("display","inline-block").text(t);
    }

    function getFocus(f) {
        var $form = f,
            $elem = $form.find("[data-type]");
        $elem.focus(function() {
            var ThisHint = $elem.parents("li").find("[data-hint]");
            ThisHint.hide();
        });
    }

    function getWrongMsg(e){
        var h = e.parents("li").find("[data-hint]");
        return h;
    }
});