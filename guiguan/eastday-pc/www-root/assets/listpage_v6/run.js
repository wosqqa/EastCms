$(function(){function a(a){$.getJSON(a,function(a){var t="",e=$("#news_paixing");$.each(a.data,function(a,e){var i=++a;t+=1===i?'<li class="special-item"><a class="active clearfix" href="'+e.url+'?xx=1" pdata="listpage|tbtj|'+(a-1)+'|0" title="'+e.topic+'" target="_blank"><span class="index i'+(i-1)+'"></span><p class="fl img"><img src="'+e.img.replace("http://","//")+'" width="100" height="75" alt=""/></p><p class="txt">'+e.topic+"</p></a></li>":'<li class="special-item"><a class="clearfix" href="'+e.url+'?xx=1" pdata="listpage|tbtj|'+(a-1)+'|0" title="'+e.topic+'" target="_blank"><span class="index i'+(i-1)+'"></span><p class="fl img"><img src="'+e.img.replace("http://","//")+'" width="100" height="75" alt=""/></p><p class="txt">'+e.topic+"</p></a></li>"}),e.html(t);var i=e.children("li");i.hover(function(){i.children("a").removeClass("active"),$(this).children("a").addClass("active")})})}var t="../../json/listpage/rank.json";a(t),function(){var a=$("#search_head"),t=a.siblings("a");a[0];a.val(JS_SEARCH_WORD);var e=a.val(),i=t.attr("href");t.attr("href",i+"?kw="+encodeURI(e)),a.focus(function(){this.value==e&&(this.value="")}),a.blur(function(){""==this.value&&(this.value=e),t.attr("href",i+"?kw="+encodeURI(this.value))});var s=$("#hotword_header");$.getJSON("/json/search/hotword.json",function(a){var t=a.data;try{s.empty();for(var e=0;e<4;e++)0==e||2==e?s.append("<a href='http://s.eastday.com/?kw="+encodeURI(t[e])+"' target='_blank'><em></em>"+t[e]+"</a>"):s.append("<a href='http://s.eastday.com/?kw="+encodeURI(t[e])+"' target='_blank'>"+t[e]+"</a>")}catch(a){console.log("加载个性推荐数据出错："),console.error(a)}})}()});