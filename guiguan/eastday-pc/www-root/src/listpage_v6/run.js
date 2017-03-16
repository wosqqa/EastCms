$(function(){
	var url_run='../../json/listpage/rank.json';//新闻排行
	special_reommend(url_run);
    /**
     * 特别推荐&公用&新闻排行
     * @param url
     */
    function special_reommend(url){
        $.getJSON(url,function(data){
            var _html='';
            var $section=$('#news_paixing');
            $.each(data.data,function(i,item){
                var ti = ++i;
                if(ti === 1){
                    _html += '<li class="special-item">' +
                        '<a class="active clearfix" href="' + item.url + '?xx=1" pdata="listpage|tbtj|' + (i-1) + '|0" title="' + item.topic + '" target="_blank">' +
                        '<span class="index i' + (ti - 1) + '"></span>' +
                        '<p class="fl img"><img src="' + item.img.replace("http://","//") + '" width="100" height="75" alt=""/></p>' +
                        '<p class="txt">' + item.topic + '</p>' +
                        '</a>' +
                        '</li>';
                } else {
                    _html += '<li class="special-item">' +
                        '<a class="clearfix" href="' + item.url + '?xx=1" pdata="listpage|tbtj|' + (i-1) + '|0" title="' + item.topic + '" target="_blank">' +
                        '<span class="index i' + (ti - 1) + '"></span>' +
                        '<p class="fl img"><img src="' + item.img.replace("http://","//") + '" width="100" height="75" alt=""/></p>' +
                        '<p class="txt">' + item.topic + '</p>' +
                        '</a>' +
                        '</li>';
                }
            });
            $section.html(_html);
            // 新闻排行效果
            var $specialLinks = $section.children('li');
            $specialLinks.hover(function(){
                $specialLinks.children('a').removeClass('active');
                $(this).children('a').addClass('active');
            });
        });
    }
    /**
     * 搜索框 和 新闻热词
     */
    (function(){
        var $search_head = $('#search_head');
        var $a_search = $search_head.siblings('a');
        var input=$search_head[0];
        $search_head.val(JS_SEARCH_WORD);
        var vfirst = $search_head.val();
        var firstUrl = $a_search.attr('href');
        $a_search.attr('href',firstUrl+'?kw='+encodeURI( vfirst ) );
        $search_head.focus(function(){
            if(this.value == vfirst){
                this.value = '';
            }
        });
        $search_head.blur(function(){
            if(this.value == ''){
                this.value = vfirst;
            }
            $a_search.attr('href',firstUrl+'?kw='+encodeURI( this.value ) );
        });   

        var $hotword = $('#hotword_header');
        $.getJSON('/json/search/hotword.json', function(data){
            var d = data.data;
            try {
                $hotword.empty();
                for(var i = 0; i < 4; i++){
                    if(i==0 || i== 2){
                        $hotword.append("<a href='http://s.eastday.com/?kw="+encodeURI(d[i])+"' target='_blank'><em></em>"+d[i]+"</a>");
                    }else{
                        $hotword.append("<a href='http://s.eastday.com/?kw="+encodeURI(d[i])+"' target='_blank'>"+d[i]+"</a>");
                    }
                }
            } catch (e){
                console.log('加载个性推荐数据出错：');
                console.error(e);
            }
        });         

    })();   

});