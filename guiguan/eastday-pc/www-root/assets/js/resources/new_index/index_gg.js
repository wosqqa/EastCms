/**
 * Created by Administrator on 2016/5/26.
 */

if (typeof(channel_name) == "undefined"){
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_index/default.js\"><\/script>");
}

//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片上-->
function nxw_shang(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.nxw_shang.isempty) != "undefined" && channel_name.nxw_shang.isempty ==  true) return ;
    if (channel_name.nxw_shang.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.nxw_shang.type == "baidu"){
        if (typeof(channel_name.nxw_shang.src) != "undefined" && channel_name.nxw_shang.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.nxw_shang.id+"\";</script><script src=\""+channel_name.nxw_shang.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.nxw_shang.id,
                container: s,
                size: '582,35',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.nxw_shang.type == "sougo"){
    }else if (channel_name.nxw_shang.type == "taobao"){
    }
}


//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片下-->
function nxw_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.nxw_xia.isempty) != "undefined" && channel_name.nxw_xia.isempty ==  true) return ;
    if (channel_name.nxw_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.nxw_xia.type == "baidu"){
        if (typeof(channel_name.nxw_xia.src) != "undefined" && channel_name.nxw_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.nxw_xia.id+"\";</script><script src=\""+channel_name.nxw_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.nxw_xia.id,
                container: s,
                size: '582,35',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.nxw_xia.type == "sougo"){
    }else if (channel_name.nxw_xia.type == "taobao"){
    }
}


//<!-- 340*130  嵩恒_头条_PC_首页_默认渠道_阅读排行下-->
function ydph_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.ydph_xia.isempty) != "undefined" && channel_name.ydph_xia.isempty ==  true) return ;
    if (channel_name.ydph_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.ydph_xia.type == "baidu"){
        if (typeof(channel_name.ydph_xia.src) != "undefined" && channel_name.ydph_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.ydph_xia.id+"\";</script><script src=\""+channel_name.ydph_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.ydph_xia.id,
                container: s,
                size: '582,35',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.ydph_xia.type == "sougo"){
    }else if (channel_name.ydph_xia.type == "taobao"){
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_社会图片下方 -->
function shtp_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.shtp_xia.isempty) != "undefined" && channel_name.shtp_xia.isempty ==  true) return ;
    if (channel_name.shtp_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.shtp_xia.type == "baidu"){
        if (typeof(channel_name.shtp_xia.src) != "undefined" && channel_name.shtp_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.shtp_xia.id+"\";</script><script src=\""+channel_name.shtp_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.shtp_xia.id,
                container: s,
                size: '240,145',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.shtp_xia.type == "sougo"){
    }else if (channel_name.shtp_xia.type == "taobao"){
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_科技图片下方（位置已移到军事图片下方） -->
function jstp_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.jstp_xia.isempty) != "undefined" && channel_name.jstp_xia.isempty ==  true) return ;
    if (channel_name.jstp_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.jstp_xia.type == "baidu"){
        if (typeof(channel_name.jstp_xia.src) != "undefined" && channel_name.jstp_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.jstp_xia.id+"\";</script><script src=\""+channel_name.jstp_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.jstp_xia.id,
                container: s,
                size: '240,296',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.jstp_xia.type == "sougo"){
    }else if (channel_name.jstp_xia.type == "taobao"){
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_时尚潮流下方 -->
function sscl_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.sscl_xia.isempty) != "undefined" && channel_name.sscl_xia.isempty ==  true) return ;
    if (channel_name.sscl_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.sscl_xia.type == "baidu"){
        if (typeof(channel_name.sscl_xia.src) != "undefined" && channel_name.sscl_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.sscl_xia.id+"\";</script><script src=\""+channel_name.sscl_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.sscl_xia.id,
                container: s,
                size: '315,120',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.sscl_xia.type == "sougo"){
    }else if (channel_name.sscl_xia.type == "taobao"){
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_财经图片下方 -->
function cjtt_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.cjtt_xia.isempty) != "undefined" && channel_name.cjtt_xia.isempty ==  true) return ;
    if (channel_name.cjtt_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.cjtt_xia.type == "baidu"){
        if (typeof(channel_name.cjtt_xia.src) != "undefined" && channel_name.cjtt_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.cjtt_xia.id+"\";</script><script src=\""+channel_name.cjtt_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.cjtt_xia.id,
                container: s,
                size: '315,120',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.cjtt_xia.type == "sougo"){
    }else if (channel_name.cjtt_xia.type == "taobao"){
    }
}

//<!-- 广告位：嵩恒_头条_首页_体育右侧 -->
function tyyc(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.tyyc.isempty) != "undefined" && channel_name.tyyc.isempty ==  true) return ;
    if (channel_name.tyyc.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.tyyc.type == "baidu"){
        if (typeof(channel_name.tyyc.src) != "undefined" && channel_name.tyyc.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.tyyc.id+"\";</script><script src=\""+channel_name.tyyc.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.tyyc.id,
                container: s,
                size: '315,120',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.tyyc.type == "sougo"){
    }else if (channel_name.tyyc.type == "taobao"){
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告1 -->
function hengfu_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_1.isempty) != "undefined" && channel_name.hengfu_1.isempty ==  true) return ;
    if (channel_name.hengfu_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_1.type == "baidu"){
        if (typeof(channel_name.hengfu_1.src) != "undefined" && channel_name.hengfu_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hengfu_1.id+"\";</script><script src=\""+channel_name.hengfu_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.writeln("<script>BAIDU_CLB_SLOT_ID="+channel_name.hengfu_1.id+"</script>");
            document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/o.js"></script>');
        }
    }else if (channel_name.hengfu_1.type == "sougo"){
    }else if (channel_name.hengfu_1.type == "taobao"){
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告2 -->
function hengfu_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_2.isempty) != "undefined" && channel_name.hengfu_2.isempty ==  true) return ;
    if (channel_name.hengfu_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_2.type == "baidu"){
        if (typeof(channel_name.hengfu_2.src) != "undefined" && channel_name.hengfu_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hengfu_2.id+"\";</script><script src=\""+channel_name.hengfu_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.writeln("<script>BAIDU_CLB_SLOT_ID="+channel_name.hengfu_2.id+"</script>");
            document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/o.js"></script>');
        }
    }else if (channel_name.hengfu_2.type == "sougo"){
    }else if (channel_name.hengfu_2.type == "taobao"){
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告3 -->
function hengfu_3(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_3.isempty) != "undefined" && channel_name.hengfu_3.isempty ==  true) return ;
    if (channel_name.hengfu_3.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_3.type == "baidu"){
        if (typeof(channel_name.hengfu_3.src) != "undefined" && channel_name.hengfu_3.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hengfu_3.id+"\";</script><script src=\""+channel_name.hengfu_3.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.writeln("<script>BAIDU_CLB_SLOT_ID="+channel_name.hengfu_3.id+"</script>");
            document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/o.js"></script>');
        }
    }else if (channel_name.hengfu_3.type == "sougo"){
    }else if (channel_name.hengfu_3.type == "taobao"){
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告4 -->
function hengfu_4(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_4.isempty) != "undefined" && channel_name.hengfu_4.isempty ==  true) return ;
    if (channel_name.hengfu_4.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_4.type == "baidu"){
        if (typeof(channel_name.hengfu_4.src) != "undefined" && channel_name.hengfu_4.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hengfu_4.id+"\";</script><script src=\""+channel_name.hengfu_4.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.writeln("<script>BAIDU_CLB_SLOT_ID="+channel_name.hengfu_4.id+"</script>");
            document.writeln('<script type="text/javascript" src="http://cbjs.baidu.com/js/o.js"></script>');
        }
    }else if (channel_name.hengfu_4.type == "sougo"){
    }else if (channel_name.hengfu_4.type == "taobao"){
    }
}

///* 嵩恒_头条_PC_新闻页面_360导航_右下悬浮 嵩恒_头条_PC_首页_360导航_侧栏悬浮_对联_360dh */
function ce_lan_xuan_fu(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.ce_lan_xuan_fu.isempty) != "undefined" && channel_name.ce_lan_xuan_fu.isempty ==  true) return ;
    if (channel_name.ce_lan_xuan_fu.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.ce_lan_xuan_fu.type == "baidu"){
        if (typeof(channel_name.ce_lan_xuan_fu.src) != "undefined" && channel_name.ce_lan_xuan_fu.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.ce_lan_xuan_fu.id+"\";</script><script src=\""+channel_name.ce_lan_xuan_fu.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.ce_lan_xuan_fu.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.ce_lan_xuan_fu.type == "sougo"){
    }else if (channel_name.ce_lan_xuan_fu.type == "taobao"){
    }
}