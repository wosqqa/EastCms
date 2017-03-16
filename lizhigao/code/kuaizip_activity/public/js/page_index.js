/**
 * 首页js文件
 * @author Cleam Lee
 * @date 2015-09-14
 */
$(function(){
	/* 文字向上滚动 */
	$('#J_scroll').txtScroll({
		speed: 50,
		rowHeight: 40
	});

});

/*
 * 文字向上滑动插件.
 */
$.fn.txtScroll = function(options) {
    //默认配置
    var defaults = {
        speed:50,  //滚动速度,值越大速度越慢
        rowHeight:24 //每行的高度
    };
    var opts = $.extend({}, defaults, options),
        intId = [],
        that = $(this);
    var marquee = function(obj, step){
        obj.find("ul").animate({
            marginTop: '-=1'
        },0,function(){
            var s = Math.abs(parseInt($(this).css("margin-top")));
            if(s >= step){
                $(this).find("li").slice(0, 1).appendTo($(this));
                $(this).css("margin-top", 0);
            }
        });
    };
    this.each(function(i){
        var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
        intId[i] = setInterval(function(){
            if(_this.find("ul").height()<=_this.height()){
                clearInterval(intId[i]);
            }else{
                marquee(_this, sh);
            }
        }, speed);
        _this.hover(function(){
            clearInterval(intId[i]);
        },function(){
            intId[i] = setInterval(function(){
                if(_this.find("ul").height()<=_this.height()){
                    clearInterval(intId[i]);
                }else{
                    marquee(_this, sh);
                }
            }, speed);
        });
    });
    return this;
};
