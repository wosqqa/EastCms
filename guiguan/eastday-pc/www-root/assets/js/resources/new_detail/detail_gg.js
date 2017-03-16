/**
 * Created by Administrator on 2016/5/19.
 */

if (typeof(channel_name) == "undefined"){
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_detail/default.js\"><\/script>");
}

//顶部通栏
function top_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.top_1.isempty) != "undefined" && channel_name.top_1.isempty ==  true) return ;
    if (channel_name.top_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.top_1.type == "baidu"){
        if (typeof(channel_name.top_1.src) != "undefined" && channel_name.top_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.top_1.id+"\";</script><script src=\""+channel_name.top_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.top_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.top_1.type == "sougo"){
    }else if (channel_name.top_1.type == "taobao"){
    }
}

//顶部通栏左  300*110
function top_left(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.top_left.isempty) != "undefined" && channel_name.top_left.isempty ==  true) return ;
    if (channel_name.top_left.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.top_left.type == "baidu"){
        if (typeof(channel_name.top_left.src) != "undefined" && channel_name.top_left.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.top_left.id+"\";</script><script src=\""+channel_name.top_left.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.top_left.id,
                container: s,
                size: '700,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.top_left.type == "sougo"){
    }else if (channel_name.top_left.type == "taobao"){
    }
}

//顶部通栏右1  300*110
function top_right1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.top_right1.isempty) != "undefined" && channel_name.top_right1.isempty ==  true) return ;
    if (channel_name.top_right1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.top_right1.type == "baidu"){
        if (typeof(channel_name.top_right1.src) != "undefined" && channel_name.top_right1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.top_right1.id+"\";</script><script src=\""+channel_name.top_right1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.top_right1.id,
                container: s,
                size: '300,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.top_right1.type == "sougo"){
    }else if (channel_name.top_right1.type == "taobao"){
    }
}

//顶部通栏右2  300*110
function top_right2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.top_right2.isempty) != "undefined" && channel_name.top_right2.isempty ==  true) return ;
    if (channel_name.top_right2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.top_right2.type == "baidu"){
        if (typeof(channel_name.top_right2.src) != "undefined" && channel_name.top_right2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.top_right2.id+"\";</script><script src=\""+channel_name.top_right2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.top_right2.id,
                container: s,
                size: '300,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.top_right2.type == "sougo"){
    }else if (channel_name.top_right2.type == "taobao"){
    }
}

//顶部通栏右3  300*110
function top_right3(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.top_right3.isempty) != "undefined" && channel_name.top_right3.isempty ==  true) return ;
    if (channel_name.top_right3.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.top_right3.type == "baidu"){
        if (typeof(channel_name.top_right3.src) != "undefined" && channel_name.top_right3.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.top_right3.id+"\";</script><script src=\""+channel_name.top_right3.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.top_right3.id,
                container: s,
                size: '300,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.top_right3.type == "sougo"){
    }else if (channel_name.top_right3.type == "taobao"){
    }
}

//标题下方
function left_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_1.isempty) != "undefined" && channel_name.left_1.isempty ==  true) return ;
    if (channel_name.left_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_1.type == "baidu"){
        if (typeof(channel_name.left_1.src) != "undefined" && channel_name.left_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_1.id+"\";</script><script src=\""+channel_name.left_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_1.type == "sougo"){
    }else if (channel_name.left_1.type == "taobao"){
    }
}


//正文下方
function left_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_2.isempty) != "undefined" && channel_name.left_2.isempty ==  true) return ;
    if (channel_name.left_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_2.type == "baidu"){
        if (typeof(channel_name.left_2.src) != "undefined" && channel_name.left_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_2.id+"\";</script><script src=\""+channel_name.left_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_2.type == "sougo"){
    }else if (channel_name.left_2.type == "taobao"){
    }
}

//正文下方 特殊渠道不允许分页上面有广告
function left_2_bk(){
    if(channel_name.left_2_bk.id == ""){
        $("#gg_item_bomttom_cnt-bk").hide();
        $("#dark-line-bk").hide();
        $("#ggPic_item_bomttom_cnt-bk").hide();
        return;
    }
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_2_bk.isempty) != "undefined" && channel_name.left_2_bk.isempty ==  true) return ;
    if (channel_name.left_2_bk.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_2_bk.type == "baidu"){
        if (typeof(channel_name.left_2_bk.src) != "undefined" && channel_name.left_2_bk.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_2_bk.id+"\";</script><script src=\""+channel_name.left_2_bk.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_2_bk.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_2_bk.type == "sougo"){
    }else if (channel_name.left_2_bk.type == "taobao"){
    }
}

//下一篇下方 1
function left_3_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_3_1.isempty) != "undefined" && channel_name.left_3_1.isempty ==  true) return ;
    if (channel_name.left_3_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_3_1.type == "baidu"){
        if (typeof(channel_name.left_3_1.src) != "undefined" && channel_name.left_3_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_3_1.id+"\";</script><script src=\""+channel_name.left_3_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_3_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_3_1.type == "sougo"){
    }else if (channel_name.left_3_1.type == "taobao"){
    }
}

//下一篇下方 2
function left_3_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_3_2.isempty) != "undefined" && channel_name.left_3_2.isempty ==  true) return ;
    if (channel_name.left_3_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_3_2.type == "baidu"){
        if (typeof(channel_name.left_3_2.src) != "undefined" && channel_name.left_3_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_3_2.id+"\";</script><script src=\""+channel_name.left_3_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_3_2.id,
                container: s,
                size: '710,100',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_3_2.type == "sougo"){
    }else if (channel_name.left_3_2.type == "taobao"){
    }
}

//相关推荐
function left_4(){
    document.writeln('<div id="hm_t_92103"></div>');
}

//新闻聚焦上内容推荐
function left_5(){
    document.writeln('<iframe frameborder="0" scrolling="no" src="/frames/xinwenjujiao.html" width="670" height="151"></iframe>');
}

//新闻聚焦下广告
function left_6(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_6.isempty) != "undefined" && channel_name.left_6.isempty ==  true) return ;
    if (channel_name.left_6.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_6.type == "baidu"){
        if (typeof(channel_name.left_6.src) != "undefined" && channel_name.left_6.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_6.id+"\";</script><script src=\""+channel_name.left_6.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_6.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_6.type == "sougo"){
    }else if (channel_name.left_6.type == "taobao"){
    }
}

//猜你喜欢 1
function left_7_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_7_1.isempty) != "undefined" && channel_name.left_7_1.isempty ==  true) return ;
    if (channel_name.left_7_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_7_1.type == "baidu"){
        if (typeof(channel_name.left_7_1.src) != "undefined" && channel_name.left_7_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_7_1.id+"\";</script><script src=\""+channel_name.left_7_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_7_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_7_1.type == "sougo"){
    }else if (channel_name.left_7_1.type == "taobao"){
    }
}

//猜你喜欢 1
function left_7_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_7_2.isempty) != "undefined" && channel_name.left_7_2.isempty ==  true) return ;
    if (channel_name.left_7_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_7_2.type == "baidu"){
        if (typeof(channel_name.left_7_2.src) != "undefined" && channel_name.left_7_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_7_2.id+"\";</script><script src=\""+channel_name.left_7_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_7_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_7_2.type == "sougo"){
    }else if (channel_name.left_7_2.type == "taobao"){
    }
}

//热门推荐下方 1
function left_8_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_8_1.isempty) != "undefined" && channel_name.left_8_1.isempty ==  true) return ;
    if (channel_name.left_8_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_8_1.type == "baidu"){
        if (typeof(channel_name.left_8_1.src) != "undefined" && channel_name.left_8_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_8_1.id+"\";</script><script src=\""+channel_name.left_8_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_8_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_8_1.type == "sougo"){
    }else if (channel_name.left_8_1.type == "taobao"){
    }
}

//热门推荐下方 2
function left_8_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_8_2.isempty) != "undefined" && channel_name.left_8_2.isempty ==  true) return ;
    if (channel_name.left_8_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_8_2.type == "baidu"){
        if (typeof(channel_name.left_8_2.src) != "undefined" && channel_name.left_8_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_8_2.id+"\";</script><script src=\""+channel_name.left_8_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_8_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_8_2.type == "sougo"){
    }else if (channel_name.left_8_2.type == "taobao"){
    }
}

//嵩恒_头条_新闻页面_评论上方360广告
function left_9(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.left_9.isempty) != "undefined" && channel_name.left_9.isempty ==  true) return ;
    if (channel_name.left_9.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.left_9.type == "baidu"){
        if (typeof(channel_name.left_9.src) != "undefined" && channel_name.left_9.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.left_9.id+"\";</script><script src=\""+channel_name.left_9.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.left_9.id,
                container: s,
                size: '670,60',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.left_9.type == "sougo"){
    }else if (channel_name.left_9.type == "taobao"){
    }
}


//右1
function right_1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_1.isempty) != "undefined" && channel_name.right_1.isempty ==  true) return ;
    if (channel_name.right_1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_1.type == "baidu"){
        if (typeof(channel_name.right_1.src) != "undefined" && channel_name.right_1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_1.id+"\";</script><script src=\""+channel_name.right_1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_1.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_1.type == "sougo"){
    }else if (channel_name.right_1.type == "taobao"){
    }
}

//右2
function right_2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_2.isempty) != "undefined" && channel_name.right_2.isempty ==  true) return ;
    if (channel_name.right_2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_2.type == "baidu"){
        if (typeof(channel_name.right_2.src) != "undefined" && channel_name.right_2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_2.id+"\";</script><script src=\""+channel_name.right_2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_2.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_2.type == "sougo"){
    }else if (channel_name.right_2.type == "taobao"){
    }
}

//右2下
function right_2_xia(){
    if(coo_name != '360dh'){
        $("#right_2_xia").hide();
        return ;
    }
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_2_xia.isempty) != "undefined" && channel_name.right_2_xia.isempty ==  true) return ;
    if (channel_name.right_2_xia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_2_xia.type == "baidu"){
        if (typeof(channel_name.right_2_xia.src) != "undefined" && channel_name.right_2_xia.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_2_xia.id+"\";</script><script src=\""+channel_name.right_2_xia.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_2_xia.id,
                container: s,
                size: '320,140',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_2_xia.type == "sougo"){
    }else if (channel_name.right_2_xia.type == "taobao"){
    }
}

//右3
function right_3(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_3.isempty) != "undefined" && channel_name.right_3.isempty ==  true) return ;
    if (channel_name.right_3.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_3.type == "baidu"){
        if (typeof(channel_name.right_3.src) != "undefined" && channel_name.right_3.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_3.id+"\";</script><script src=\""+channel_name.right_3.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_3.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_3.type == "sougo"){
    }else if (channel_name.right_3.type == "taobao"){
    }
}

//老版-奇闻轶事广告内容容器
function right_4(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_4.isempty) != "undefined" && channel_name.right_4.isempty ==  true) return ;
    if (channel_name.right_4.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_4.type == "baidu"){
        if (typeof(channel_name.right_4.src) != "undefined" && channel_name.right_4.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_4.id+"\";</script><script src=\""+channel_name.right_4.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_4.id,
                container: s,
                size: '320,280',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_4.type == "sougo"){
    }else if (channel_name.right_4.type == "taobao"){
    }
}

//新版-奇闻轶事广告内容容器
function right_4_new(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_4_new.isempty) != "undefined" && channel_name.right_4_new.isempty ==  true) return ;
    if (channel_name.right_4_new.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_4_new.type == "baidu"){
        if (typeof(channel_name.right_4_new.src) != "undefined" && channel_name.right_4_new.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_4_new.id+"\";</script><script src=\""+channel_name.right_4_new.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_4_new.id,
                container: s,
                size: '320,360',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_4_new.type == "sougo"){
    }else if (channel_name.right_4_new.type == "taobao"){
    }
}

//右5
function right_5(){
    /*if(coo_name == '360dh'){
        document.write('<script type="text/javascript" src="http://afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script> ' +
            '<script type="text/javascript">' +
            '_acM({aid:"mm_118281833_16154146_60800416",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"});</script>');
        return ;
    }*/
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_5.isempty) != "undefined" && channel_name.right_5.isempty ==  true) return ;
    if (channel_name.right_5.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_5.type == "baidu"){
        if (typeof(channel_name.right_5.src) != "undefined" && channel_name.right_5.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_5.id+"\";</script><script src=\""+channel_name.right_5.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_5.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_5.type == "sougo"){
    }else if (channel_name.right_5.type == "taobao"){
        document.writeln("<script charset=\"gbk\" src=\"http://p.tanx.com/ex?i=mm_"+channel_name.right_5.id+"\"></script>");
    }
}

//右6
function right_6(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_6.isempty) != "undefined" && channel_name.right_6.isempty ==  true) return ;
    if (channel_name.right_6.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_6.type == "baidu"){
        if (typeof(channel_name.right_6.src) != "undefined" && channel_name.right_6.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_6.id+"\";</script><script src=\""+channel_name.right_6.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_6.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_6.type == "sougo"){
    }else if (channel_name.right_6.type == "taobao"){
        document.writeln("<script charset=\"gbk\" src=\"http://p.tanx.com/ex?i=mm_"+channel_name.right_6.id+"\"></script>");
    }
}

//右7
function right_7(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_7.isempty) != "undefined" && channel_name.right_7.isempty ==  true) return ;
    if (channel_name.right_7.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_7.type == "baidu"){
        if (typeof(channel_name.right_7.src) != "undefined" && channel_name.right_7.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_7.id+"\";</script><script src=\""+channel_name.right_7.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_7.id,
                container: s,
                size: '300,250',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_7.type == "sougo"){
    }else if (channel_name.right_7.type == "taobao"){
    }
}

//右8
function right_8(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_8.isempty) != "undefined" && channel_name.right_8.isempty ==  true) return ;
    if (channel_name.right_8.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_8.type == "baidu"){
        if (typeof(channel_name.right_8.src) != "undefined" && channel_name.right_8.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_8.id+"\";</script><script src=\""+channel_name.right_8.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_8.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_8.type == "sougo"){
    }else if (channel_name.right_8.type == "taobao"){
    }
}

//右9
function right_9(){

    /*if(coo_name == '360dh'){
        document.write('<script type="text/javascript" src="http://afpmm.alicdn.com/g/mm/afp-cdn/JS/k.js"></script> ' +
            '<script type="text/javascript">' +
            '_acM({aid:"mm_118281833_16154146_60804437",format:1,mode:1,gid:1,serverbaseurl:"afpeng.alimama.com/"}); </script>');
        return ;
    }*/
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.right_9.isempty) != "undefined" && channel_name.right_9.isempty ==  true) return ;
    if (channel_name.right_9.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.right_9.type == "baidu"){
        if (typeof(channel_name.right_9.src) != "undefined" && channel_name.right_9.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.right_9.id+"\";</script><script src=\""+channel_name.right_9.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.right_9.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.right_9.type == "sougo"){
    }else if (channel_name.right_9.type == "taobao"){
    }
}

//热门推荐内部广告1
function hottj1(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hottj1.isempty) != "undefined" && channel_name.hottj1.isempty ==  true) return ;
    if (channel_name.hottj1.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hottj1.type == "baidu"){
        if (typeof(channel_name.hottj1.src) != "undefined" && channel_name.hottj1.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hottj1.id+"\";</script><script src=\""+channel_name.hottj1.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.hottj1.id,
                container: s,
                size: '680,100',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.hottj1.type == "sougo"){
    }else if (channel_name.hottj1.type == "taobao"){
    }
}

//热门推荐内部广告2
function hottj2(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.hottj2.isempty) != "undefined" && channel_name.hottj2.isempty ==  true) return ;
    if (channel_name.hottj2.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.hottj2.type == "baidu"){
        if (typeof(channel_name.hottj2.src) != "undefined" && channel_name.hottj2.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.hottj2.id+"\";</script><script src=\""+channel_name.hottj2.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.hottj2.id,
                container: s,
                size: '640,60',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.hottj2.type == "sougo"){
    }else if (channel_name.hottj2.type == "taobao"){
    }
}

//搜索推荐
function sou_suo_tui_jian(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.sou_suo_tui_jian.isempty) != "undefined" && channel_name.sou_suo_tui_jian.isempty ==  true) return ;
    if (channel_name.sou_suo_tui_jian.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.sou_suo_tui_jian.type == "baidu"){
        if (typeof(channel_name.sou_suo_tui_jian.src) != "undefined" && channel_name.sou_suo_tui_jian.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.sou_suo_tui_jian.id+"\";</script><script src=\""+channel_name.sou_suo_tui_jian.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.sou_suo_tui_jian.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.sou_suo_tui_jian.type == "sougo"){
    }else if (channel_name.sou_suo_tui_jian.type == "taobao"){
    }
}

//图+
function tujia(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.tujia.isempty) != "undefined" && channel_name.tujia.isempty ==  true) return ;
    if (channel_name.tujia.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.tujia.type == "baidu"){
        if (typeof(channel_name.tujia.src) != "undefined" && channel_name.tujia.src != "" ){
            if(coo_name == 'qid=2345mini'){
                document.writeln("<script>var baiduImagePlus = {noLogo:true,unionId:\'"+channel_name.tujia.id+"\',maxMiniAdCount:0,formList:[{formId:3}]};</script><script type=\"text/javascript\" src=\""+channel_name.tujia.src+"\"></script>");
            }else{
                document.writeln("<script>var baiduImagePlus = {noLogo:true,unionId:\'"+channel_name.tujia.id+"\',maxMiniAdCount:0,formList:[{formId:2},{formId:3},{formId:16}]}; </script><script src=\""+channel_name.tujia.src+"\"></script>");
            }
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.tujia.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.tujia.type == "sougo"){
    }else if (channel_name.tujia.type == "taobao"){
    }
}

//小编精选
function xiao_bian_jing_xuan(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.xiao_bian_jing_xuan.isempty) != "undefined" && channel_name.xiao_bian_jing_xuan.isempty ==  true) return ;
    if (channel_name.xiao_bian_jing_xuan.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.xiao_bian_jing_xuan.type == "baidu"){
        if (typeof(channel_name.xiao_bian_jing_xuan.src) != "undefined" && channel_name.xiao_bian_jing_xuan.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.xiao_bian_jing_xuan.id+"\";</script><script src=\""+channel_name.xiao_bian_jing_xuan.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.xiao_bian_jing_xuan.id,
                container: s,
                size: '670,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.xiao_bian_jing_xuan.type == "sougo"){
    }else if (channel_name.xiao_bian_jing_xuan.type == "taobao"){
    }
}

//右下悬浮
function you_xia_xuan_fu(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.you_xia_xuan_fu.isempty) != "undefined" && channel_name.you_xia_xuan_fu.isempty ==  true) return ;
    if (channel_name.you_xia_xuan_fu.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.you_xia_xuan_fu.type == "baidu"){
        if (typeof(channel_name.you_xia_xuan_fu.src) != "undefined" && channel_name.you_xia_xuan_fu.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.you_xia_xuan_fu.id+"\";</script><script src=\""+channel_name.you_xia_xuan_fu.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.you_xia_xuan_fu.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.you_xia_xuan_fu.type == "sougo"){
    }else if (channel_name.you_xia_xuan_fu.type == "taobao"){
    }
}

//侧栏悬浮
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
                size: '120,300',
                display: 'float'
            });
        }
    }else if (channel_name.ce_lan_xuan_fu.type == "sougo"){
    }else if (channel_name.ce_lan_xuan_fu.type == "taobao"){
    }
}

//左右折叠
function zuo_you_zhe_die(){
    var s = "_" + Math.random().toString(36).slice(2);
    if ( typeof (channel_name.zuo_you_zhe_die.isempty) != "undefined" && channel_name.zuo_you_zhe_die.isempty ==  true) return ;
    if (channel_name.zuo_you_zhe_die.jump == true && document.referrer.indexOf('eastday.com') == -1) return;
    if (channel_name.zuo_you_zhe_die.type == "baidu"){
        if (typeof(channel_name.zuo_you_zhe_die.src) != "undefined" && channel_name.zuo_you_zhe_die.src != "" ){
            document.writeln("<script type=\"text/javascript\"> " +
                "var cpro_id = \""+channel_name.zuo_you_zhe_die.id+"\";</script><script src=\""+channel_name.zuo_you_zhe_die.src+"\" type=\"text/javascript\">" +
                "</script>");
        }else{
            document.write('<div id="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: channel_name.zuo_you_zhe_die.id,
                container: s,
                size: '620,110',
                display: 'inlay-fix'
            });
        }
    }else if (channel_name.zuo_you_zhe_die.type == "sougo"){
    }else if (channel_name.zuo_you_zhe_die.type == "taobao"){
    }
}



//app二维码
function app_erweima(){
    document.writeln('<script type="text/javascript" src="/assets/js/resources/detail/eastBox.js" type="text/javascript"></script>');
}


//手机充值内页
function shouji_chongzhi(){
    /* document.writeln('<script type="text/javascript" src="/assets/js/resources/detail/phoneBox.js" type="text/javascript"></script>');*/
}

