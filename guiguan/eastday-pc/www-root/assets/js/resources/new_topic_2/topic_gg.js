/**
 * Created by Administrator on 2016/5/19.
 */

if (typeof(channel_name) == "undefined"){
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_topic/default.js\"><\/script>");
}

//<!-- 嵩恒_头条_分页页面_顶部右侧 -->
function fenye_tuijian_top(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.fenye_tuijian_top.isempty) != "undefined" && channel_name.fenye_tuijian_top.isempty ==  true) return ;
    if (channel_name.fenye_tuijian_top.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.fenye_tuijian_top.type == "baidu"){
        if (typeof(channel_name.fenye_tuijian_top.src) != "undefined" && channel_name.fenye_tuijian_top.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.fenye_tuijian_top.id+"\";</script><script src=\""+channel_name.fenye_tuijian_top.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.fenye_tuijian_top.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.fenye_tuijian_top.type == "sougo"){
    }else if (channel_name.fenye_tuijian_top.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_广告1 -->
function gg1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.gg1.isempty) != "undefined" && channel_name.gg1.isempty ==  true) return ;
    if (channel_name.gg1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.gg1.type == "baidu"){
        if (typeof(channel_name.gg1.src) != "undefined" && channel_name.gg1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.gg1.id+"\";</script><script src=\""+channel_name.gg1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.gg1.id,
                container: s,
                size: '250,250',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.gg1.type == "sougo"){
    }else if (channel_name.gg1.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_广告2 -->
function gg2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.gg2.isempty) != "undefined" && channel_name.gg2.isempty ==  true) return ;
    if (channel_name.gg2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.gg2.type == "baidu"){
        if (typeof(channel_name.gg2.src) != "undefined" && channel_name.gg2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.gg2.id+"\";</script><script src=\""+channel_name.gg2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.gg2.id,
                container: s,
                size: '250,250',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.gg2.type == "sougo"){
    }else if (channel_name.gg2.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_广告3 -->
function gg3(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.gg3.isempty) != "undefined" && channel_name.gg3.isempty ==  true) return ;
    if (channel_name.gg3.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.gg3.type == "baidu"){
        if (typeof(channel_name.gg3.src) != "undefined" && channel_name.gg3.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.gg3.id+"\";</script><script src=\""+channel_name.gg3.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.gg3.id,
                container: s,
                size: '250,250',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.gg3.type == "sougo"){
    }else if (channel_name.gg3.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_左右对联 -->
function zuo_you_dui_lian(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.zuo_you_dui_lian.isempty) != "undefined" && channel_name.zuo_you_dui_lian.isempty ==  true) return ;
    if (channel_name.zuo_you_dui_lian.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.zuo_you_dui_lian.type == "baidu"){
        if (typeof(channel_name.zuo_you_dui_lian.src) != "undefined" && channel_name.zuo_you_dui_lian.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.zuo_you_dui_lian.id+"\";</script><script src=\""+channel_name.zuo_you_dui_lian.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.zuo_you_dui_lian.id,
                container: s,
                size: '300,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.zuo_you_dui_lian.type == "sougo"){
    }else if (channel_name.zuo_you_dui_lian.type == "taobao"){
    }
}



