function join_qqroom(){1==$("#for_qqchat_room").length&&$.ajax({type:"POST",url:"http://softwords.dftoutiao.com/loadsoftwords/load",dataType:"jsonp",data:{url:global_share_url,qid:coo_name,plat:"pc",uid:global_uid},jsonp:"jsonpcallback",success:function(e){"1"==e.stat&&$("#for_qqchat_room").append(e.words),$.ajax({type:"POST",url:"http://softwords.dftoutiao.com/loadsoftwords/pcload",dataType:"jsonp",data:{url:global_share_url,qid:coo_name,plat:"pc",uid:global_uid},jsonp:"jsonpcallback",success:function(e){if("1"==e.stat){data=e.news;var o='<div class="hot_recommend_cnt clear-fix" id="ad_qq_root"> <div class="tjnewsright clear-fix"><a href="'+data.url+'" target="_blank" title="'+data.topic+' "><img src="'+data.lbimg[0].src+'" alt=" '+data.topic+'"></a></div> </div>';$("#for_qqchat_room").append(o)}$("#ad_qq_root").find("a").click(function(){open_gg(data.url,data.adv_id,global_share_url)})}})}})}function open_gg(e,o,t){var i=coo_name;i||(i="null");var a=global_uid;os_type="null",browser_type="null",pixel="null",$.ajax({type:"POST",url:"http://toutiao.eastday.com/getwapdata/ad",dataType:"jsonp",data:{qid:i,uid:a,loginid:"null",softtype:"DFTT",softname:"eastday_pcnews",newstype:"ad",from:t,to:e,os_type:os_type,browser_type:browser_type,pixel:pixel,ime:"null",fr_url:"null",adv:o},jsonp:"jsonpcallback",success:function(e){}})}function url_scroll(e,o){$("body").append('<iframe src="'+e+'" style="display: none;"></iframe><iframe src="'+o+'" style="display: none;"></iframe>')}function url_click(e){$(".img_click_gg").on("click",function(){$("body").append('<iframe src="'+e+'" style="display: none;"></iframe>')})}function left_gg_below_title(e){var o;"sg"==e?o="3018196":"qq"==e&&(o="3018210");var t="_"+Math.random().toString(36).slice(2);document.write('<div id="'+t+'"></div>'),(window.slotbydup=window.slotbydup||[]).push({id:o,container:t,size:"340,125",display:"inlay-fix"})}function right_gg_below_title(e){var o;"sg"==e?o="3018237":"qq"==e&&(o="3018243");var t="_"+Math.random().toString(36).slice(2);document.write('<div id="'+t+'"></div>'),(window.slotbydup=window.slotbydup||[]).push({id:o,container:t,size:"340,115",display:"inlay-fix"})}var get_area=function(){$.ajax({type:"get",url:"http://position.dftoutiao.com/position/get",dataType:"jsonp",jsonp:"jsonpcallback",timeout:6e3,success:function(e){if(e.position){var o=new Date;o.setTime(o.getTime()+18e5),$.cookie("minieastday_pro_id",e.position.pro_id,{expires:o,path:"/",domain:"eastday.com"}),$.cookie("error_position_p",e.position.cityname,{expires:o,path:"/",domain:"eastday.com"})}}})};$.cookie("minieastday_pro_id")||get_area(),$(function(){function special_hover(){var e=$("#special_more_item").children("li");e.hover(function(){e.children("a").removeClass("active"),$(this).children("a").addClass("active")})}function special_360_hover(){var e=$("#special_more_item_360").children("li");e.hover(function(){e.children("a").removeClass("active"),$(this).children("a").addClass("active")})}special_hover(),special_360_hover(),jump(),jump2(),function(){function setShareConfig(e,o){var t="（来自：东方头条）";return"tsina"==e&&(t="（来自：@东方头条新闻）"),global_share_title&&(o.bdText=global_share_title+t),global_share_url&&(o.bdUrl=global_share_url),global_share_img&&(o.bdPic=global_share_img),o}with(window._bd_share_config={common:{bdMiniList:["tsina","qzone","weixin"],onBeforeClick:setShareConfig},share:{bdSize:16}},document)(0)[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion="+~(-new Date/36e5)]}(),function(){$(".icon_cnt_dtl").find("a").each(function(){var e=$(this);e.hover(function(){e.children().show()},function(){e.children().hide()})}),setTimeout(function(){var e=$(".detail_right_cnt"),o=e.offset().top,t=e.outerHeight(),i=!0;$(window).on("scroll",function(a){a.preventDefault();var r=$(window).height(),s=document.documentElement.scrollTop||document.body.scrollTop;t+o+180<=r+s?i&&(e.addClass("content-r-fixed"),i=!1):i||(e.removeClass("content-r-fixed"),i=!0);var n=$(window).width();n<=1002&&e.removeClass("content-r-fixed")}),$(window).on("resize",function(o){o.preventDefault();var t=$(window).width();t<=1002&&e.removeClass("content-r-fixed")}),function(){$(window).on("resize",function(){var e=$(window).width();e<1230?$(".right_cod").fadeOut(600):$(".right_cod").fadeIn(600)})}()},3e3)}(),function(){$("#J_more").hover(function(){$(this).addClass("active"),$(this).children(".J-more-link").show()},function(){$(this).removeClass("active"),$(this).children(".J-more-link").hide()})}(),function(){function close_error(){$(".mask_error").hide(),$(".error_content").hide()}var softtype="toutiao",softname="DFTT",commend_url="http://106.75.84.142/pcnewsoperate/pcgetreason",report_url="http://106.75.84.142/pcnewsoperate/pcsubreason";$("body").on("click",".user_error span",function(){$("body").append('<div class="error_pop"><i></i></div><div class="mask_error"></div><div class="error_content"><div class="error_title"><h3>我要反馈</h3><i class="error_close"></i></div><div class="proposal_content"><p class="proposal_tit">你要反馈的内容（可多选）：</p><ul class="proposal_opt clearfix"></ul><div class="proposal_textarea"><textarea class="proposal_textarea_val" placeholder="具体内容或其他反馈内容"></textarea><span class="textarea_value none">具体内容或其他反馈内容</span></div><div class="proposal_phone"><input class="phone_input" placeholder="手机号" /><span>将有助于我们尽快解决你提出的问题，并及时与你沟通处理结果</span></div></div><div class="error_submit"><button disabled="disabled" class="error_button_a">提交</button><span></span></div><div class="error_promt"></div></div>');var e="mini",o="qid="+global_wayPath+"&uid="+global_uid+"&softtype="+softtype+"&softname="+softname+"&newstype="+newstype+"&urlfrom="+global_from+"&urlto="+global_share_url+"&btype="+global_btype+"&subtype="+global_subtype+"&idx="+global_idx_1+"&ishot="+global_ishot+"&ver="+global_ver+"&os="+global_os+"&browser="+global_browser+"&type="+e;$.ajax({type:"get",url:commend_url+"?"+o,dataType:"jsonp",jsonp:"jsonpcallback",success:function(e){if(1==e.stat)for(var o=e.data?e.data:[],t=0;t<o.length;t++){if(t==o.length-1){$(".proposal_opt").append('<li class="last_check">'+o[t]+"</li>");break}$(".proposal_opt").append("<li>"+o[t]+"</li>")}}})}),$("body").on("click",".error_close",function(){close_error()});var flager_num=0;if($("body").on("click",".proposal_opt li",function(){$(this).hasClass("act")?$(this).removeClass("act"):$(this).addClass("act");var e=$(this).closest(".error_content").find(".error_button_a"),o=$(this).closest(".error_content").find("li");1!=flager_num&&(o.hasClass("act")?(e.addClass("disabled"),e.attr("disabled",!1)):(e.attr("disabled",!0),e.removeClass("disabled")))}),"channel"==global_btype)if($.cookie("errordata")){var pdata=$.cookie("errordata").split("|");pgnum=pdata[0]||"null",pgnewsidx=pdata[1]||"null",newsidx=pdata[2]||"null"}else pgnum="null",pgnewsidx="null",newsidx="null";else pgnum="null",pgnewsidx="null",newsidx="null";$("body").on("focus",".proposal_textarea_val",function(){$(this).closest(".error_content").find(".last_check").addClass("act");var e=$(this).closest(".error_content").find("li"),o=$(this).closest(".error_content").find(".error_button_a");1!=flager_num&&(e.hasClass("act")?(o.addClass("disabled"),o.attr("disabled",!1)):(o.attr("disabled",!0),o.removeClass("disabled")))});var error_detail="";$("body").on("keyup",".proposal_textarea_val",function(){error_detail=$.trim($(this).val()),error_detail.length>=200?$(".error_promt").text("输入内容不能超过200个字符"):$(".error_promt").html("")}),""!=error_detail&&"undefined"!=error_detail||(error_detail=null),$("body").on("click",".error_button_a",function(){$(this).attr("disabled",!0);var $this=$(this),error_reason=[];if(error_detail=$.trim($(this).closest(".error_content").find(".proposal_textarea_val").val()),error_detail.length>=200)return void $(this).attr("disabled",!1);if((new Date).getTime()-$.cookie("last_comment_error")<6e4)return $(".error_promt").text("提交过快，休息一下吧！"),$(".error_pop").removeClass("error_pop_succes").html(""),void $(this).attr("disabled",!1);var error_phpone=$.trim($(this).closest(".error_content").find(".phone_input").val());if(""!=error_phpone&&"undefined"!=error_phpone||(error_phpone=null),null!=error_phpone){if(11!==error_phpone.length&&!/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(error_phpone))return $(".error_promt").text("手机号码格式错误"),setTimeout(function(){$(".error_promt").html("")},1e3),void $(this).attr("disabled",!1)}else $(".error_promt").html("");$this.html("").removeClass("disabled"),$this.next("span").show(),flager_num=1;for(var i=0;i<$("li.act").length;i++){var k=$("li.act:eq("+i+")").text();error_reason.push(k)}error_reason=JSON.stringify(error_reason);var o=JSON.parse(error_reason);eval("error_reason = '"+JSON.stringify(o)+"';"),$.cookie("error_position_p")||get_area();var error_position_p=$.cookie("error_position_p")||null;$.ajax({type:"get",url:report_url,timeout:3e4,data:{qid:global_wayPath,uid:global_uid,softtype:softtype,softname:softname,newstype:newstype,parenturl:global_from,url:global_share_url,pgnum:pgnum,pgnewsidx:pgnewsidx,newsidx:newsidx,isrecommend:global_recommendtype,recommendtype:newstype,ishot:global_ishot,ver:global_ver,os:global_os,browser_type:global_browser,contact:error_phpone,reason:encodeURI(error_reason),detail:encodeURI(error_detail),position:encodeURI(error_position_p)},dataType:"jsonp",jsonp:"jsonpcallback",contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(e){1==e.stat?($(".error_content").hide(),$.cookie("last_comment_error",(new Date).getTime()),$(".error_pop").addClass("error_pop_succes").html("<i></i>提交成功，感谢你的宝贵意见！"),setTimeout(function(){$(".error_pop").removeClass("error_pop_succes").html(""),$(".proposal_opt li").removeClass("act"),$(".mask_error").hide()},1e3),$.removeCookie("errordata",{path:"/",domain:"eastday.com"})):($this.next("span").hide(),$this.text("提交").addClass("disabled"),$(".error_content").hide(),$(".error_pop").addClass("error_pop_fail").html("<i></i>提交失败！"),setTimeout(function(){$(".error_pop").removeClass("error_pop_fail").html(""),$(".error_content").show()},1e3))},complete:function(){flager_num=0},error:function(e,o){$this.text("提交").addClass("disabled"),$this.next("span").hide(),$(".error_content").hide(),$(".error_pop").addClass("error_pop_fail").html("<i></i>提交失败！"),setTimeout(function(){$(".error_pop").removeClass("error_pop_fail").html(""),$(".error_content").show(),$this.attr("disabled",!1)},1e3)}})})}()});var redirect_by_qid=function(e,o){document.write('<a target="_blank" href="/topic/index.html?uk='+o+'">'+e+"</a>\n")},more_see=function(e){var o=$(".pagination").find("a").length;"qid=dfmini"!=coo_name&&"qid=dfmininew"!=coo_name&&"dftt"!=coo_name&&"f=dfmini"!=coo_name||0!==o||document.write('<div id="see_more" class="click_see"><a target="_blank" href="/topic/index.html?uk='+e+'">点击查看更多</a></div>\n')},coo_name_show=function(){var e=$("#unartificial"),o=$("#artificial");e.show(),o.hide()},coo_name_focus=function(){var e=$("#news_focus_normal"),o=$("#news_focus");e.show(),o.hide()},img_pre_load=function(){$("img[data]").load(function(){var e=$(this),o=e.attr("data"),t=e.attr("src");if(""!=o&&o!=t){var i=new Image;return i.src=o,i.complete?void e.attr("src",o):void(i.onload=function(){e.attr("src",o)})}})},jump=function(){var e=$.cookie("minieastday_pro_id");1!=e&&3!=e&&("qid=sgshouye"!=coo_name&&"qid=qqshouye"!=coo_name&&"qid=qqshouyeyl"!=coo_name&&"qid=360tiyu"!=coo_name&&"qid=ludashibizi"!=coo_name&&"qid=ludashi013"!=coo_name&&"114bg"!=coo_name&&"qid=114laxinwen"!=coo_name&&"qid=114lashlq"!=coo_name&&"qid=114laty"!=coo_name&&"qid=2345minitiyu"!=coo_name&&"qid=114lq"!=coo_name&&"qid=360dh"!=coo_name&&"qid=2345mini"!=coo_name&&"qid=2345minicaijing"!=coo_name&&"qid=360sousuo"!=coo_name&&"ay"!=coo_name&&"qid=ayss"!=coo_name&&"qid=ayyule"!=coo_name&&"qid=ayshehui"!=coo_name&&"qid=sgshouyett"!=coo_name&&"qid=sgshouyejunshi"!=coo_name&&"qid=sgshouyesh"!=coo_name&&"qid=qqshouyeyl"!=coo_name&&"qid=qqshouyett"!=coo_name&&"qid=qqshouyejunshi"!=coo_name&&"qid=qqshouyesh"!=coo_name&&"qid=sgshouyeyl"!=coo_name||1==$("a[class='cur']").text()&&$("a").click(function(){var e=$(this).attr("href"),o=e.split("-");if(o.length>=2&&"2.html"==o[1]){var t=o[0];$(this).attr("href","/topic/index.html?uk="+t),window.open(e)}}))},jump2=function(){var e=$.cookie("minieastday_pro_id");$.cookie("sh_jump2")||"qid=360sousuo"!=coo_name||1!=e&&3!=e&&$(".recomend_content, .focus_img, .tjnewsrcontent").find("li").find("a").click(function(){var e=$(this).attr("href"),o=e.split("."),t=o[0].replace("/a/","");$.cookie("sh_jump2",1,{expires:1}),e.indexOf("/a/1")>-1?window.location.href="/topic/index.html?uk="+t:window.location.href="/topic/index.html"})},cnzz_code=function(){"qid=wpsmini"==coo_name&&document.write('<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id=\'cnzz_stat_icon_1260389985\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1260389985\' type=\'text/javascript\'%3E%3C/script%3E"));</script>')},recommend_uid=function(){function e(e){var o;if(e.indexOf("?")>0){var t=e.split("?")[1];o=t.length}else o=0;return o}var o=function(){var t=new Date-0,i=window.location.href,a=e(i);return o=""+t+a+Math.random()+Math.random()+Math.random()+Math.random(),o=o.replace(/\./g,"").substring(0,32)},t=o();return $.cookie("cookie_uid_ad")?uidm=$.cookie("cookie_uid_ad").ml:uidm=t,uidm},recommend_url="http://show.g.mediav.com/s",recommend_type=1,recommend_of=4,recommend_newf=1,recommend_showid="d1EZLA",recommend_adnum=1,recommend_uid=recommend_uid(),recommend_param=recommend_url+"?type="+recommend_type+"&of="+recommend_of+"&newf="+recommend_newf+"&showid="+recommend_showid+"&uid="+recommend_uid+"&impct="+recommend_adnum,gg360_1=function(){$.ajax({type:"post",url:recommend_param,dataType:"jsonp",jsonp:"jsonp",success:function(e){for(var o=e.ads?e.ads:[],t=0;t<o.length;t++)$("#recommend_ad_hot1").append('<div class="pic"><a href="'+o[t].curl+'" target="_blank" title="'+o[t].title+'"><img class="img_click_gg"  src="'+o[t].img+'" alt=""></a></div><div class="text"><h3><a class="img_click_gg" href="'+o[t].curl+'" target="_blank" title="'+o[t].title+'">'+o[t].title+'</a></h3><p class="content_so"><a class="img_click_gg" href="'+o[t].curl+'" target="_blank">'+o[t].desc+'</a></p><p class="source"><span><a class="img_click_gg" href="'+o[t].curl+'" target="_blank">广告</a></span></p></div>'),url_scroll(o[t].imptk[0],o[t].imptk[1]),url_click(o[t].clktk[0])}})},gg360_2=function(){$.ajax({type:"post",url:recommend_param,dataType:"jsonp",jsonp:"jsonp",success:function(e){for(var o=e.ads?e.ads:[],t=0;t<o.length;t++)$("#recommend_ad_hot2").append('<div class="pic"><a href="'+o[t].curl+'" target="_blank" title="'+o[t].title+'"><img class="img_click_gg"  src="'+o[t].img+'" alt=""></a></div><div class="text"><h3><a class="img_click_gg" href="'+o[t].curl+'" target="_blank" title="'+o[t].title+'">'+o[t].title+'</a></h3><p class="content_so"><a class="img_click_gg" href="'+o[t].curl+'" target="_blank">'+o[t].desc+'</a></p><p class="source"><span><a class="img_click_gg" href="'+o[t].curl+'" target="_blank">广告</a></span></p></div>'),url_scroll(o[t].imptk[0],o[t].imptk[1]),url_click(o[t].clktk[0])}})},ad_gg360_1=function(){document.write('<script type="text/javascript">gg360_1();</script>')},ad_gg360_2=function(){document.write('<script type="text/javascript">gg360_2();</script>')},below_title=function(){"qid=sgshouye"==coo_name||"qid=sgshouyett"==coo_name||"qid=sgshouyesh"==coo_name||"qid=sgshouyejunshi"==coo_name||"qid=sgshouyeyl"==coo_name||"qid=qqshouye"==coo_name||"qid=qqshouyett"==coo_name||"qid=qqshouyesh"==coo_name||"qid=qqshouyejunshi"==coo_name||"qid=qqshouyeyl"==coo_name?document.write('<script type="text/javascript">gg_below_title();</script>'):document.write('<script type="text/javascript">left_1();</script>')},gg_below_title=function(){"qid=sgshouye"==coo_name||"qid=sgshouyett"==coo_name||"qid=sgshouyesh"==coo_name||"qid=sgshouyejunshi"==coo_name||"qid=sgshouyeyl"==coo_name?(document.write('<div class="fl"><script type="text/javascript">left_gg_below_title("sg");</script><script src="http://dup.baidustatic.com/js/ds.js"></script></div>'),document.write('<div class="fl mt5"><script type="text/javascript">right_gg_below_title("sg");</script><script src="http://dup.baidustatic.com/js/ds.js"></script></div>')):"qid=qqshouye"==coo_name||"qid=qqshouyett"==coo_name||"qid=qqshouyesh"==coo_name||"qid=qqshouyejunshi"==coo_name||"qid=qqshouyeyl"==coo_name?(document.write('<div class="fl"><script type="text/javascript">left_gg_below_title("qq");</script><script src="http://dup.baidustatic.com/js/ds.js"></script></div>'),document.write('<div class="fl mt5"><script type="text/javascript">right_gg_below_title("qq");</script><script src="http://dup.baidustatic.com/js/ds.js"></script></div>')):document.write('<script type="text/javascript">left_1();</script>')};