/*
 * 7654首页专用js代码
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-22
 */
$(function(){
    /* banner切换效果实现方案 */
    (function(){
        var index = 0,
            $img = $('.bannerItem'),
            len = $img.length,
            $i = $('.i-wrap span');
        $i.on('click', function(){
            show($(this).index());
            index = $(this).index();
        });
        function show(n){
            $img.eq(n).fadeIn('slow').siblings("li").fadeOut('slow');
            $i.eq(n).addClass('on').siblings("span").removeClass('on');
        }
        setInterval(function(){
            show(index);
            index++;
            if(index === len){
                index = 0;
            }
        }, 3000);
    })();

    /* 技术员排名-表格斑马线实现方法 */
    (function(){
        $('.technicianRanking-b table tr:even').addClass('gray');
        $('.technicianRanking-b table tr td:first-child').css('color', '#C81623');
    })();
});