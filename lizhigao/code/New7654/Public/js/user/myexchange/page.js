/**
 * 
 */
$(function() {
    $('#J-tab').Tabs({
        event:'click'  //事件类型
        //timeout:100  //设置事件延迟
    });  //返回了this

    /* 确认兑换信息（宝盒详情页） start */
    (function(){
        // 兑换数量事件
        var $decrease = $('#decrease');
        var $input = $decrease.next();
        var $increase = $('#increase');
        // 减少
        $decrease.on('click', function(){
            if($input.val() > 0){
                $input.val(parseInt($input.val()) - 1);
            }
        });
        // 增加
        $increase.on('click', function(){
            $input.val(parseInt($input.val()) + 1);
        });
    })();

});