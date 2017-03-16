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

//<!-- 嵩恒_头条_分页页面_分页推荐1 -->
function fenye_hot_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.fenye_hot_1.isempty) != "undefined" && channel_name.fenye_hot_1.isempty ==  true) return ;
    if (channel_name.fenye_hot_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.fenye_hot_1.type == "baidu"){
        if (typeof(channel_name.fenye_hot_1.src) != "undefined" && channel_name.fenye_hot_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.fenye_hot_1.id+"\";</script><script src=\""+channel_name.fenye_hot_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.fenye_hot_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.fenye_hot_1.type == "sougo"){
    }else if (channel_name.fenye_hot_1.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_分页推荐2 -->
function fenye_tuijian_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.fenye_tuijian_1.isempty) != "undefined" && channel_name.fenye_tuijian_1.isempty ==  true) return ;
    if (channel_name.fenye_tuijian_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.fenye_tuijian_1.type == "baidu"){
        if (typeof(channel_name.fenye_tuijian_1.src) != "undefined" && channel_name.fenye_tuijian_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.fenye_tuijian_1.id+"\";</script><script src=\""+channel_name.fenye_tuijian_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.fenye_tuijian_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.fenye_tuijian_1.type == "sougo"){
    }else if (channel_name.fenye_tuijian_1.type == "taobao"){
    }
}

//<!-- 嵩恒_头条_分页页面_分页推荐3-->
function fenye_hot_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.fenye_hot_2.isempty) != "undefined" && channel_name.fenye_hot_2.isempty ==  true) return ;
    if (channel_name.fenye_hot_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.fenye_hot_2.type == "baidu"){
        if (typeof(channel_name.fenye_hot_2.src) != "undefined" && channel_name.fenye_hot_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.fenye_hot_2.id+"\";</script><script src=\""+channel_name.fenye_hot_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.fenye_hot_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.fenye_hot_2.type == "sougo"){
    }else if (channel_name.fenye_hot_2.type == "taobao"){
    }
}


//<!-- 嵩恒_头条_分页页面_分页推荐4 -->
function fenye_tuijian_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.fenye_tuijian_2.isempty) != "undefined" && channel_name.fenye_tuijian_2.isempty ==  true) return ;
    if (channel_name.fenye_tuijian_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.fenye_tuijian_2.type == "baidu"){
        if (typeof(channel_name.fenye_tuijian_2.src) != "undefined" && channel_name.fenye_tuijian_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.fenye_tuijian_2.id+"\";</script><script src=\""+channel_name.fenye_tuijian_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.fenye_tuijian_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.fenye_tuijian_2.type == "sougo"){
    }else if (channel_name.fenye_tuijian_2.type == "taobao"){
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



