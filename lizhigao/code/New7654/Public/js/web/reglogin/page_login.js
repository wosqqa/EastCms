/*
 * 登录页面专用js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-06-01
 */
$(function(){
    $('.username:first').focus();
    $("#login_username,#login_password").on('keydown',function(event){
        if (event.keyCode == 13) {
            $('#u5').click();
        }
    });

    /* 登录表单校验 */
    $('#loginForm').validate({
        rules: {
            username: {
                required: true,
                maxlength: 16
            },
            password: {
                required: true,
                rangelength: [6,16]
            }
        },
        messages: {
            username: {
                required: "请输入用户名！",
                maxlength: "用户名长度不能超过16个字符！"
            },
            password: {
                required: "请输入密码！",
                rangelength: "密码长度为6到16个字符之间！"
            }
        }
    });


});



