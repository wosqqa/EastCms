/**
 * 快压官网首页js文件
 * Created by lizhigao on 2015/9/6.
 */
$(function(){
    /* 顶部活动关闭事件 */
    $('#J_activity_banner').children('.close').click(function(){
        $('#J_activity_banner_wrap').animate({
            marginBottom: 0,
            height: 0
        }, 'normal', function(){
            $(this).remove();
        });
        return false;
    });

    /* banner轮播实现 */
    (function(){
        var $banner = $('#J_banner'),   // banner
            $infoList = $('#J_info_list'),  // 介绍信息列表
            $as = $infoList.find('a.icon'), // 介绍信息icon
            tempA = null,   // 小技巧,hover事件优化
            $prev = $('#J_prev_arrow'), // 向左箭头
            $next = $('#J_next_arrow'); // 向右箭头
        var $carousel = $banner.Carousel({
            targetUl: '.banner-list',
            height: '550px',
            interval: 5000,
            speed: 'normal',
            autoPlay: true,
            prevHandler: '#J_prev_arrow',
            nextHandler: '#J_next_arrow',
            callback: function(index){
                $as.removeClass('hover');
                $as.eq(index).addClass('hover');
            }
        });
        // 介绍信息hover事件
        $as.hover(function(){
            if(tempA != this){
                tempA = this;
                var $this = $(this);
                $as.removeClass('hover');
                $this.addClass('hover');
                $carousel.showPage($this.data('index')); 
            }
        });
        // 上下页按钮hover事件
        $prev.hover(function(){
            $(this).addClass('active');
        }, function(){
            $(this).removeClass('active');
        });
        $next.hover(function(){
            $(this).addClass('active');
        }, function(){
            $(this).removeClass('active');
        });
    })();

    /* 名人媒体评价 行业文章 tab功能实现 */
    $('#J_tab_header').on('click', 'a', function(){
        var $this = $(this),
            target = $this.data('target');
        $this.addClass('active').siblings('a').removeClass('active');
        $(target + '').show().siblings().hide();
    });
});