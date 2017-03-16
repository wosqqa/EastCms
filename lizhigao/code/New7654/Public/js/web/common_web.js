/*
 * 7654通用js，一般是供通用模板调用。
 * @author created by lizhigao（lizhigao@021.com）
 * @date 2015-05-22
 */
$(function(){
    /* 全局变量定义区 - start */
    // 定义一个命名空间Ie
    GLOBAL.namespace('Ie');
    // 定义一个全局变量
    GLOBAL.Ie.isIe = !!window.ActiveXObject;
    GLOBAL.Ie.isIe6 = !!window.ActiveXObject && !window.XMLHttpRequest;
    GLOBAL.Ie.isIe8 = !!window.ActiveXObject && !!document.documentMode;
    /* 全局变量定义区 - end */

    /* 右侧导航栏“返回顶部”事件 start */
    $('.rightSidebarItem .toTop').click(function(){
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.J-toTop').fadeIn('slow');
        } else {
            $('.J-toTop').fadeOut('slow');
        }
    });
    /* 右侧固定导航栏 - IE6兼容方案 */
    if(GLOBAL.Ie.isIe6){
        $('.J-rightSidebar').addClass('rightSidebarFixedForIE6');
    } else {
        $('.J-rightSidebar').addClass('rightSidebarFixed');
    }
    /* 右侧导航栏“返回顶部”事件 end */

    /* “全部软件产品”列表事件 - start */
    // 非首页，导航栏鼠标悬停显示效果
    $('.J-nav-allProducts').hover(function(){
        $(this).addClass('nav-allProducts-hover');
    }, function(){
        $(this).removeClass('nav-allProducts-hover');
    });

    setTimeout(function(){
        // 判断产品数量，动态调整产品展示列表宽度（延迟计算）
        $('.subProductList').each(function(){
            // 一列最多显示4个产品,超过4个，就按每列4个处理
            var len = $(this).children().length;
            // 由于产品列表是隐藏的，所以计算不到宽度，得让它显示，计算出宽度，然后再还原。
            $('.J-nav-allProducts').addClass('nav-allProducts-hover');
            $('.productItem').addClass("hover");
            var liWidth = getMaxWidth($(this)) + 2;
            if(len > 4){
                $(this).width(liWidth * Math.ceil(len/4));
            } else {
                $(this).width(liWidth);
            }
            $('.J-nav-allProducts').removeClass('nav-allProducts-hover');
            $('.productItem').removeClass("hover");
        });
        // 计算获取产品列表中最宽的产品的宽度
        function getMaxWidth($list){
            var maxWidth = 0;
            $list.children().each(function(){
                if(maxWidth < $(this).outerWidth()){
                    maxWidth = $(this).outerWidth();
                }
            });
            return maxWidth;
        }
    },10);

    /* 产品列表鼠标悬停效果 */
    $(".productItem").hover(function(){
        $(this).addClass("hover");
        var $ul = $(this).parent(),
            $panel = $(this).children('.productPanel'),
            ulHeight = $ul.height(),
            ulOffsetTop = $ul.offset().top,
            panelOffsetTop = $panel.offset().top,
            value = panelOffsetTop - ulOffsetTop,
            panelHeight = $panel.innerHeight();
        if (value + panelHeight > ulHeight){
            $panel.css('top', -(value + panelHeight - ulHeight + 3));
        }
    },function(){
        $(this).removeClass("hover");
    });
    /* “全部软件产品”列表事件 - end */

    /* 未读消息弹窗关闭事件 */
    $('.J-closeNoticePopWin').click(function(){
        $(this).parent().fadeOut('slow');
    });

});