/**
 * 更新日志js文件
 * Created by lizhigao on 2015/8/25.
 */
$(function(){
    /**
     * 变量定义区
     */
    var $yearList = $('#J_year_list'),
        top = $yearList.position().top,
        $years = $yearList.find('a');

    /**
     * 版本详情点击事件
     */
    $('.J-intro').on('click', function(){
        var $this = $(this),
            $i = $this.children('i'),
            $next = $this.next();
        if($next.css('display') == 'block'){
            $i.removeClass('chev-down').addClass('chev-right');
            $next.stop().slideUp('normal');
        } else {
            $i.removeClass('chev-right').addClass('chev-down');
            $next.stop().slideDown('normal');
        }
    }).attr({   // 防止双击选中文本
        unselectable: 'no',
        style: '-moz-user-select:none;',
        onselectstart: 'return false;'
    });

    /**
     * 页面滚动事件
     */
    $(window).scroll(function(){
        // 兼容ie、firefox、safari的写法
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
        var st = top + scrollTop - 65;
        if(scrollTop > 65){
            $yearList.stop().animate({
                'top': st + 'px'
            }, 200);
        } else {
            $yearList.stop().animate({
                'top': top + 'px'
            }, 200);
        }

        /**
         * 将jquery对象转成数组
         */
        // 方法一：
        //var yArr = $years.map(function(){
        //    return $(this).attr('href');
        //}).get();
        // 方法二：
        var yArr = $.map($years, function(ele, i){
            return $(ele).data('target');
        });
        // 当滚动条滚动到了浏览器底部，直接选中最后一个年份，否则进行循环判断
        var dh = $(document).height(),wh = $(window).height();
        if( scrollTop >= dh - wh ){
            $years.removeClass('active');
            $('a[data-target="' + yArr[yArr.length - 1] + '"]').addClass('active');
        } else if(scrollTop == 0){
            $years.removeClass('active');
            $('a[data-target="' + yArr[0] + '"]').addClass('active');
        } else {
            for(var i = yArr.length - 1; i >= 0; i--){
                if(scrollTop >= $(yArr[i]).offset().top - 30){  // -30为了显示效果更明显
                    $years.removeClass('active');
                    $('a[data-target="' + yArr[i] + '"]').addClass('active');
                    break;
                }
            }
        }

    });

    /**
     * 年份选择点击事件
     */
    $years.on('click', function(){
        var $this = $(this);
        var year = $this.attr('data-target');
        $yearList.find('a').removeClass('active');
        $this.addClass('active');
        var $scrollObj = $(document.documentElement);
        var ua = window.navigator.userAgent;
        if(ua.indexOf('Chrome') > -1){
            $scrollObj = $(document.body);
        }
        $scrollObj.animate({
            scrollTop: $(year).offset().top - 30
        });
    });

    /**
     * 调用base.js中封装的事件注册方法
     */
    /*GLOBAL.Event.addEvent($('.J-updateLog-wrap')[0], 'mousewheel', function(e){
         GLOBAL.Event.stopBubble(e);
         var $this = $(this);
         $this.scrollTop($this.scrollTop() - e.wheelDelta);
     });*/
});

