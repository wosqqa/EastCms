/**
 * 用户个人中心事件、效果js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-27
 */
$(function(){
    /* 个人中心首页 */
    (function(){
        var setMouseHover = function(e) {
            var isset = e.find(".isset"),
                shade = e.find(".shade"),
                modify = e.find(".to-modify"),
                explain = e.find(".explain");
            return {
                GetInto:function() {
                    isset.stop();
                    modify.stop();
                    explain.stop();
                    shade.stop();
                    shade.fadeIn(400);
                    isset.css({"display":"block","opacity":0,"right":"-20px"});
                    isset.animate({"opacity":1,"right":"5px"},400);
                    modify.css({"display":"block","opacity":0,"left":"40px"});
                    modify.animate({"opacity":1},200);
                    explain.css({"display":"block","opacity":0,"top":"100px"});
                    explain.animate({"opacity":1,"top":"160px"},400);
                },
                GetOut:function() {
                    isset.stop();
                    modify.stop();
                    explain.stop();
                    shade.stop();
                    shade.fadeOut(400);
                    isset.css({"display":"block","opacity":1,"right":"5px"});
                    isset.animate({"opacity":0,"right":"-20px"},400,function() {
                        $(this).hide();
                    });
                    modify.css({"display":"block","opacity":1,"left":"40px"});
                    modify.animate({"opacity":0},400,function() {
                        $(this).hide();
                    });
                    explain.css({"display":"block","opacity":1,"top":"160px"});
                    explain.animate({"opacity":0,"top":"100px"},400,function() {
                        $(this).hide();
                    });
                }
            }
        }

        var start = 0,end = 0;
        $(".userSettingList li").mouseenter(function() {
            var that = $(this);
            start = new Date().getTime();
            setMouseHover(that).GetInto();
        }).mouseleave(function() {
            var that = $(this);
            end = new Date().getTime()
            setMouseHover(that).GetOut();
        });
        // 待结算积分提示
        $('.question-icon').poshytip({
            className: 'tip-yellowsimple',
            showTimeout: 1,
            alignTo: 'target',
            alignX: 'center',
            offsetY: 5,
            allowTipHover: false
        });
    })();

});