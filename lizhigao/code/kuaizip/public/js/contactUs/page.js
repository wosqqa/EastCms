/**
 * ��ѹ - ��ϵ����ҳ��js�ļ�
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

