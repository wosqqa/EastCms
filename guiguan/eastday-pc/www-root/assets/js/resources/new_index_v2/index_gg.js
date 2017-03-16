/**
 * Created by Administrator on 2016/5/26.
 */

if (typeof(channel_name) == "undefined"){
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_index_v2/default.js\"><\/script>");
}

//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片上-->
function nxw_shang(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.nxw_shang.isempty) != "undefined" && channel_name.nxw_shang.isempty ==  true) return ;
    if (channel_name.nxw_shang.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.nxw_shang.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.nxw_shang.id,
            container: s,
            size: '582,35',
            display: 'inlay-fix'
        });
    }else if (channel_name.nxw_shang.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.nxw_shang.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script></script>');
    }
}


//<!--337*135 嵩恒_头条_PC_首页_默认渠道_暖新闻图片下-->
function nxw_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.nxw_xia.isempty) != "undefined" && channel_name.nxw_xia.isempty ==  true) return ;
    if (channel_name.nxw_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.nxw_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.nxw_xia.id,
            container: s,
            size: '582,35',
            display: 'inlay-fix'
        });
    }else if (channel_name.nxw_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.nxw_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}


//<!-- 340*130  嵩恒_头条_PC_首页_默认渠道_阅读排行下-->
function ydph_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.ydph_xia.isempty) != "undefined" && channel_name.ydph_xia.isempty ==  true) return ;
    if (channel_name.ydph_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.ydph_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.ydph_xia.id,
            container: s,
            size: '582,35',
            display: 'inlay-fix'
        });
    }else if (channel_name.ydph_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.ydph_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_社会图片下方 -->
function shtp_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.shtp_xia.isempty) != "undefined" && channel_name.shtp_xia.isempty ==  true) return ;
    if (channel_name.shtp_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.shtp_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.shtp_xia.id,
            container: s,
            size: '240,145',
            display: 'inlay-fix'
        });
    }else if (channel_name.shtp_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.shtp_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_科技图片下方（位置已移到军事图片下方） -->
function jstp_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.jstp_xia.isempty) != "undefined" && channel_name.jstp_xia.isempty ==  true) return ;
    if (channel_name.jstp_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.jstp_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.jstp_xia.id,
            container: s,
            size: '240,296',
            display: 'inlay-fix'
        });
    }else if (channel_name.jstp_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.jstp_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_时尚潮流下方 -->
function sscl_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.sscl_xia.isempty) != "undefined" && channel_name.sscl_xia.isempty ==  true) return ;
    if (channel_name.sscl_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.sscl_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.sscl_xia.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.sscl_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.sscl_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 广告位：嵩恒_头条_新站_首页_财经图片下方 -->
function cjtt_xia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.cjtt_xia.isempty) != "undefined" && channel_name.cjtt_xia.isempty ==  true) return ;
    if (channel_name.cjtt_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.cjtt_xia.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.cjtt_xia.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.cjtt_xia.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.cjtt_xia.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 广告位：嵩恒_头条_首页_体育右侧 -->
function tyyc(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.tyyc.isempty) != "undefined" && channel_name.tyyc.isempty ==  true) return ;
    if (channel_name.tyyc.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.tyyc.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.tyyc.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.tyyc.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.tyyc.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告1 -->
function hengfu_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_1.isempty) != "undefined" && channel_name.hengfu_1.isempty ==  true) return ;
    if (channel_name.hengfu_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_1.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.hengfu_1.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.hengfu_1.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.hengfu_1.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告2 -->
function hengfu_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_2.isempty) != "undefined" && channel_name.hengfu_2.isempty ==  true) return ;
    if (channel_name.hengfu_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_2.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.hengfu_2.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.hengfu_2.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.hengfu_2.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告3 -->
function hengfu_3(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_3.isempty) != "undefined" && channel_name.hengfu_3.isempty ==  true) return ;
    if (channel_name.hengfu_3.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_3.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.hengfu_3.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.hengfu_3.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.hengfu_3.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

//<!-- 嵩恒_新闻站首页_横幅广告4 -->
function hengfu_4(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hengfu_4.isempty) != "undefined" && channel_name.hengfu_4.isempty ==  true) return ;
    if (channel_name.hengfu_4.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hengfu_4.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.hengfu_4.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.hengfu_4.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.hengfu_4.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}

///* 嵩恒_头条_PC_新闻页面_360导航_右下悬浮 嵩恒_头条_PC_首页_360导航_侧栏悬浮_对联_360dh */
function ce_lan_xuan_fu(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.ce_lan_xuan_fu.isempty) != "undefined" && channel_name.ce_lan_xuan_fu.isempty ==  true) return ;
    if (channel_name.ce_lan_xuan_fu.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.ce_lan_xuan_fu.type == "ssp"){
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup=window.slotbydup || []).push({
            id: channel_name.ce_lan_xuan_fu.id,
            container: s,
            size: '315,120',
            display: 'inlay-fix'
        });
    }else if (channel_name.ce_lan_xuan_fu.type == "afp"){
        document.write('<script type="text/javascript">_acM({aid:"'+ channel_name.ce_lan_xuan_fu.id + '",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
    }
}