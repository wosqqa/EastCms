/**
 * 快压 - 联系我们页面js文件
 * @dependencies jquery
 * @created by lizhigao(lizhigao@021.com)
 * @date 2015-08-26
 */
$(function(){
    $('#J_contactUsForm').validate({
        rules: {
            email: {
                required: true,
                isEmail: true
            },
            phone: {
                isMobile: true
            },
            title: {
                required: true
            },
            content: {
                required: true
            }
        }
    });
});

