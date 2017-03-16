(function () {
    $(function () {
        var img_url = "http://mini.eastday.com/assets/images/jd_gg.jpg";  // 这个要替换
        var link_jd = "http://sale.jd.com/act/yioeOL7fZJlu6VCT.html";


        var wrap = $(".right_cod");

        if (!wrap.length) return;

        //添加IE6样式，用于fixed

        var styleContent = '<style>* html .right_cod{position:absolute;bottom:auto;top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-300))}</style>';

        var div = document.createElement('div');
        div.innerHTML = styleContent;
        document.body.appendChild(div);

        //修改样式

        var zaocan = wrap.children("img").eq(0);
        zaocan.css({
            position: "absolute",
            left: "-1160px",
            top: "0"
        });


        var jd = '<a target="_blank" href=' + link_jd + '></a>';
        jd = $(jd);
        jd.css({
            width: "120px",
            height: "120px",
            background: 'url(' + img_url + ') no-repeat',
            position: "absolute",
            left: "0",
            top: "80px"
        });
        wrap.append(jd);
    });
})();
