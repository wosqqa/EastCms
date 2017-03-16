/**
 * Created by Administrator on 2016/5/19.
 */

if (typeof(channel_name) == "undefined"){
    document.writeln("<script type=\"text/javascript\"  src=\"/assets/js/resources/new_topic/default.js\"><\/script>");
}

//<!-- 嵩恒_头条_分页页面_顶部右侧 -->
function fenye_tuijian_top(){
    document.writeln('<script type="text/javascript">var cpro_id = "u2735389"; ' +
        '</script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_头条_分页页面_分页推荐1 -->
function fenye_hot_1(){
    document.writeln('<script type="text/javascript">var cpro_id = "u2735388"; ' +
        '</script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_头条_分页页面_分页推荐2 -->
function fenye_tuijian_1(){
    document.writeln('<script type="text/javascript">var cpro_id = "u2735388"; ' +
        '</script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}

//<!-- 嵩恒_头条_分页页面_分页推荐3-->
function fenye_hot_2(){
    document.writeln('<script type="text/javascript">var cpro_id = "u2735388"; ' +
        '</script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
}


//<!-- 嵩恒_头条_分页页面_分页推荐4 -->
function fenye_tuijian_2(){
    document.writeln('<script type="text/javascript">var cpro_id = "u2735388"; ' +
        '</script> <script type="text/javascript" src="http://cpro.baidustatic.com/cpro/ui/c.js"></script>');
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



