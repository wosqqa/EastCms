/**
 * Created by Administrator on 2016/5/26.
 */

if (typeof(channel_name) == "undefined") {
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_index/default.js\"><\/script>");
}

//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片上-->
function nxw_shang() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2731073"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}


//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片下-->
function nxw_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2731075"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}


//<!-- 340*130  嵩恒_头条_PC_首页_默认渠道_阅读排行下-->
function ydph_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734628"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 广告位：嵩恒_头条_新站_首页_社会图片下方 -->
function shtp_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734632"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 广告位：嵩恒_头条_新站_首页_科技图片下方（位置已移到军事图片下方） -->
function jstp_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734652"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 广告位：嵩恒_头条_新站_首页_时尚潮流下方 -->
function sscl_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734654"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 广告位：嵩恒_头条_新站_首页_财经图片下方 -->
function cjtt_xia() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734656"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 广告位：嵩恒_头条_首页_体育右侧 -->
function tyyc() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734658"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_新闻站首页_横幅广告1 -->
function hengfu_1() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734663"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_新闻站首页_横幅广告2 -->
function hengfu_2() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734663"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_新闻站首页_横幅广告3 -->
function hengfu_3() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734663"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_新闻站首页_横幅广告4 -->
function hengfu_4() {
    document.writeln('<script type="text/javascript">var cpro_id = "u2734663"; </script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

///* 嵩恒_头条_PC_新闻页面_360导航_右下悬浮 嵩恒_头条_PC_首页_360导航_侧栏悬浮_对联_360dh */
function ce_lan_xuan_fu() {
    var s = "_" + Math.random().toString(36).slice(2);
    if (typeof (channel_name.ce_lan_xuan_fu.isempty) != "undefined" && channel_name.ce_lan_xuan_fu.isempty == true) return;
    if (channel_name.ce_lan_xuan_fu.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.ce_lan_xuan_fu.type == "baidu") {
        if (typeof(channel_name.ce_lan_xuan_fu.src) != "undefined" && channel_name.ce_lan_xuan_fu.src != "") {
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \"" + channel_name.ce_lan_xuan_fu.id + "\";</script><script src=\"" + channel_name.ce_lan_xuan_fu.src + "\" type=\"text/javascript\">" +
                "</script>");
        } else {
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup = window.slotbydup || []).push({
                id: channel_name.ce_lan_xuan_fu.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    } else if (channel_name.ce_lan_xuan_fu.type == "sougo") {
    } else if (channel_name.ce_lan_xuan_fu.type == "taobao") {
    }
}