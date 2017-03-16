/*
 * 找回账号页面专用js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-25
 */
(function($) {
    /* 第一步step1 - 填写用户名 */
    $('#step1_username').keyup(function(){
        var $this = $(this);
        if(!!$.trim($this.val())){
            $('#step1_submit').css({
                'background-color': '#E4393C',
                'cursor': 'pointer'
            });
        } else {
            $('#step1_submit').css({
                'background-color': '#DDDDDD',
                'cursor': 'not-allowed'
            });
        }
    });

    /* 第二步step2 - 验证用户名 */
    $('.J-step2-tab').tabs({event: 'click'});

    /* 第三步step3 - 重置密码 */
    function validate($node, str){
        $node.parent().next().text(str);
    }
    function removeTips($node){
        $node.parent().next().text('');
    }
    var RL = {};
    RL.$pwdInput1 = $('.step3-form-inputWrap .new');
    RL.$pwdInput2 = $('.step3-form-inputWrap .confirm');
    RL.$pwdInput = $('.step3-form-inputWrap input[type="password"]');
    RL.$pwdInput1.focusout(function(){
        if($(this).val() == ''){
            validate($(this), '请输入密码！');
        }
        if(check(RL.$pwdInput1.val(), RL.$pwdInput2.val())){
            removeTips(RL.$pwdInput2);
        }
    }).keyup(function(){
        if($(this).val().length < 6){
            validate($(this), '密码至少6位数！');
        } else {
            removeTips($(this));
        }
    });
    RL.$pwdInput2.keyup(function(){
        if(check(RL.$pwdInput1.val(), RL.$pwdInput2.val())){
            removeTips($(this));
        }
    });
    function check(pwd1, pwd2){
        if(pwd1 != pwd2){
            validate(RL.$pwdInput2, '两次密码不一致！');
            return false;
        }
        return true;
    }

})(jQuery);
