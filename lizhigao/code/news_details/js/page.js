/**
 * 东方头条新闻详情页js文件
 * Created by lizhigao on 2015/12/2.
 */
$(function(){
    /**
     * 定义变量
     */
    var $wechat = $('#J_wechat'),
        $wechatEwm = $('#J_wechat_ewm'),
        $phone = $('#J_phone'),
        $phoneEwm = $('#J_phone_ewm'),
        $specialLinks = $('#J_special_list').children('li'),
        $carouselWrap = $('#J_carousel_wrap'),
        $carouselTable = $('#J_carousel_table'),
        $carouselImgs = $carouselTable.find('img'),
        $prevImg = $('#prev_img'),
        $nextImg = $('#next_img'),
        index = 0,
        length = $carouselImgs.length,
        $syImgWrap = $('#J_sy_img_wrap'),
        $pages = $('#J_pages'),
        $pagesIndex = $pages.find('.J-pages-index'),
        $pagesLength = $pages.find('.J-pages-length'),
        $scalImgLink = $('#J_scale_img');


    /* 初始化图片索引 */
    $pagesIndex.html(index + 1);
    $pagesLength.html(length);

    // 微信二维码 hover事件
    $wechat.hover(function(){
        $wechatEwm.show();
    }, function(){
        $wechatEwm.hide();
    });
    // 手机app二维码 hover事件
    $phone.hover(function(){
        $phoneEwm.show();
    }, function(){
        $phoneEwm.hide();
    });

    // 右侧链接列表hover事件
    $specialLinks.hover(function(){
        $specialLinks.children('a').removeClass('active');
        $(this).children('a').addClass('active');
    });

    // 上下图 hover效果实现
    $prevImg.hover(function(){
        $(this).css('opacity', '0.8');
    }, function(){
        $(this).css('opacity', '0.2');
    });

    $nextImg.hover(function(){
        $(this).css('opacity', '0.8');
    }, function(){
        $(this).css('opacity', '0.2');
    });

    // 图片轮播
    $prevImg.on('click', function(event) {
        event.preventDefault();
        if(index === 0){
            $syImgWrap.show();
            $carouselWrap.hide();
            $syImgWrap.find('.J-back').on('click', function(){
                $carouselWrap.show();
                $syImgWrap.hide();
            });
            $syImgWrap.find('.J-review').on('click', function(){
                $carouselWrap.show();
                $syImgWrap.hide();
                index = 0;
                show(index);
            });
        } else {
            index--;
        }
        show(index);
    });
    $nextImg.on('click', function(event) {
        event.preventDefault();
        if(index === length - 1){
            $syImgWrap.show();
            $carouselWrap.hide();
            $syImgWrap.find('.J-back').on('click', function(){
                $carouselWrap.show();
                $syImgWrap.hide();
            });
            $syImgWrap.find('.J-review').on('click', function(){
                $carouselWrap.show();
                $syImgWrap.hide();
                index = 0;
                show(index);
            });
        } else {
            index++;
        }
        show(index);
    });

    function show(i){
        $carouselImgs.eq(i).css('display', 'inline').siblings('img').css('display','none');
        $scalImgLink.attr('href', $carouselImgs.eq(i).attr('src'));
        $pagesIndex.html(i+1);
    }

});