(function () {
    var url = 'http://mini.eastday.com/assets/images/jd_gg_hengfu.png';   // 图片路径，需要替换
    var link = 'http://union.click.jd.com/jdc?e=0&p=AyIHVCtaJQMiQwpDBUoyS0IQWlALHFBXCE9ETlcNVQtHRUVQVxkdQwVBfG8BAnAgSEYVYCd%2BRExHTlplSAdXQEJlC2k7bF5QYwEYXnMLWg9WTVcZMhABVh9dEwETBWUZXxYHFg5UGVolMnN1ZVA1FDISN1UeXBAFEwJTGVMcChs3UisPRUBXUgVTXxYDIjdl&t=W1dCFBBFC0BCWgEEAEAdQFkJBQtHRwxPDUUPa38UUD5gBlEFdXUwBAJQXk8%3D';

    var nav = $("#nav_cnt");

    if (!nav.length) return;

    var banner = $('<a target="_blank" href="' + link + '"></a>');   //banner 初始化

    banner.css({
        display: "block",
        margin: "0 auto",
        width: "1000px",
        height: "350px",
        position: "relative",
        background: "url(" + url + ") no-repeat"
    });

    var close = $('<span>×</span>');
    close.css({
        width: "35px",
        height: "35px",
        position: "absolute",
        right: 0,
        top: 0,
        "line-height": "32px",
        "text-align": "center",
        color: "#fff",
        "font-size": "36px"
    });
    close.attr('title', '折叠');

    close.click(function () {
        zheDie();
        return false;
    });

    banner.append(close);


    function zheDie() {
        banner.animate({
            height: "35px"
        });
        close.hide();
    }

    $(function () {

        nav.after(banner);  // 添加

        setTimeout(function () {
            zheDie();
        }, 5000);
    });


})();

