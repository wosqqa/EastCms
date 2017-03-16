var get_area = function () {
    $.ajax({
        type:'get',
        url:'http://position.dftoutiao.com/position/get',
        dataType:'jsonp',
        jsonp: 'jsonpcallback',
        timeout:6000,
        success:function(data){
            if (data.position){
                var cookietime = new Date();
                cookietime.setTime(cookietime.getTime() + ( 30*60 * 1000));//coockie保存10分钟
                $.cookie("minieastday_pro_id",data.position.pro_id,{expires:cookietime,path:'/',domain:'eastday.com'});
                $.cookie("error_position_p",data.position.cityname,{expires:cookietime,path:'/',domain:'eastday.com'});

                //非北京上海
            }
        }
    });
};

if (!$.cookie('minieastday_pro_id')){
    get_area();
}

$(function () {
    special_hover();
    special_360_hover();
    jump();
    jump2();
    /**
     * 特别推荐
     * @param url
     */
    function special_hover() {
        var $specialLinks = $("#special_more_item").children('li');
        $specialLinks.hover(function () {
            $specialLinks.children('a').removeClass('active');
            $(this).children('a').addClass('active');
        });
    }

    /**
     * 特别推荐 qid=360dh
     * @param url
     */
    function special_360_hover() {
        var $specialLinks = $("#special_more_item_360").children('li');
        $specialLinks.hover(function () {
            $specialLinks.children('a').removeClass('active');
            $(this).children('a').addClass('active');
        });
    }

    /**
     * 百度分享
     */
    (function () {
        // 百度分享配置
        window._bd_share_config = {
            common: {
                //bdText: "东方头条 - 你想看的新闻都在这。",  // 分享标题
                //bdDesc: "东方头条 - 你想看的新闻都在这。",  // 分享描述
                //bdUrl: "http://mini.eastday.com",             // 分享url
                //bdPic: '',                                    // 分享图片
                bdMiniList: ['tsina', 'qzone', 'weixin'],
                onBeforeClick: setShareConfig
            },
            share: {
                bdSize: 16
            }
        };
        // 分享js
        with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
        /**
         * 设置分享参数
         * @param {[type]} cmd    [description]
         * @param {[type]} config [description]
         */
        function setShareConfig(cmd, config) {
            var text_laiyu = '（来自：东方头条）';
            if (cmd == 'tsina') {
                text_laiyu = '（来自：@东方头条新闻）';
            }
            if (global_share_title) {
                config.bdText = global_share_title + text_laiyu;
            }
            if (global_share_url) {
                config.bdUrl = global_share_url;
            }
            if (global_share_img) {
                config.bdPic = global_share_img;
            }
            return config;
        }
    })();

    /**
     * 二维码 + 右侧固定功能实现
     */
    (function () {
        //二维码
        $('.icon_cnt_dtl').find('a').each(function () {
            var _this = $(this);
            _this.hover(function () {
                _this.children().show();
            }, function () {
                _this.children().hide();
            });
        });

        /* 右侧固定功能实现 start */
        setTimeout(function () {
            var $contentRight = $('.detail_right_cnt');
            // console.log($contentRight);
            var ot = $contentRight.offset().top,
                contentHeight = $contentRight.outerHeight(),
                ff = true;
            $(window).on('scroll', function (event) {
                event.preventDefault();
                var windowHeight = $(window).height();
                var body_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (contentHeight + ot + 180 <= windowHeight + body_scrollTop) {
                    if (ff) {
                        $contentRight.addClass('content-r-fixed');
                        ff = false;
                    }
                } else {
                    if (!ff) {
                        $contentRight.removeClass('content-r-fixed');
                        ff = true;
                    }
                }
                var windowWidth = $(window).width();
                if (windowWidth <= 1002) {
                    $contentRight.removeClass('content-r-fixed');
                }
            });
            $(window).on('resize', function (event) {
                event.preventDefault();
                var windowWidth = $(window).width();
                if (windowWidth <= 1002) {
                    $contentRight.removeClass('content-r-fixed');
                }
            });
            /* 右侧固定功能实现 end */
            //侧边栏二维码
            (function () {
                $(window).on('resize', function () {
                    var windWindth = $(window).width();
                    if (windWindth < 1230) {
                        $('.right_cod').fadeOut(600);
                    } else {
                        $('.right_cod').fadeIn(600);
                    }
                })
            })();
        }, 3000);
    })();

    /* 导航栏[更多]功能实现 */
    (function () {
        $('#J_more').hover(function () {
            $(this).addClass('active');
            $(this).children('.J-more-link').show();
        }, function () {
            $(this).removeClass('active');
            $(this).children('.J-more-link').hide();
        });

    })();
    // 新闻站内容报错
    (function(){
        var softtype = 'toutiao';//软件类别
        var softname = 'DFTT';//软件名
        // var commend_url = 'http://123.59.62.164/pcnewsoperate/pcgetreason';//测试地址请求举报原因数据接口
        // var report_url = 'http://123.59.62.164/pcnewsoperate/pcsubreason';//测试地址上报接口数据
        var commend_url = 'http://106.75.84.142/pcnewsoperate/pcgetreason';//线上地址请求举报原因数据接口
        var report_url = 'http://106.75.84.142/pcnewsoperate/pcsubreason';//线上地址上报接口数据
        $('body').on('click','.user_error span', function(){
            //请求举报原因数据接口
            $('body').append(
                '<div class="error_pop"><i></i></div>'+
                '<div class="mask_error"></div>'+
                '<div class="error_content">'+                
                '<div class="error_title"><h3>我要反馈</h3><i class="error_close"></i></div>'+
                    '<div class="proposal_content">'+
                        '<p class="proposal_tit">你要反馈的内容（可多选）：</p>'+
                        '<ul class="proposal_opt clearfix">'+
                            // '<li class="act">广告软文</li><li>广告软文</li><li>有错别字</li><li>广告软文</li><li>广告软文</li>'+
                            // '<li>格式错误</li><li>广告软文</li><li>广告软文</li><li>广告软文</li><li>广告软文</li>'+
                            // '<li>内容重复</li>'+
                        '</ul>'+
                        '<div class="proposal_textarea"><textarea class="proposal_textarea_val" placeholder="具体内容或其他反馈内容"></textarea><span class="textarea_value none">具体内容或其他反馈内容</span></div>'+
                        '<div class="proposal_phone"><input class="phone_input" placeholder="手机号" /><span>将有助于我们尽快解决你提出的问题，并及时与你沟通处理结果</span></div>'+
                    '</div>'+
                    '<div class="error_submit"><button disabled="disabled" class="error_button_a">提交</button><span></span></div>'+
                    '<div class="error_promt"></div>'+
                '</div>'        
            );
            //$('html').css('overflow-y','hidden');
            var type = 'mini';
            var parame = 'qid=' + global_wayPath + '&uid=' + global_uid + '&softtype=' + softtype + '&softname=' + softname + '&newstype=' + newstype + '&urlfrom=' + global_from + '&urlto=' + global_share_url + '&btype=' + global_btype + '&subtype=' + global_subtype + '&idx=' + global_idx_1 + '&ishot=' + global_ishot + '&ver=' + global_ver + '&os=' + global_os + '&browser=' + global_browser + '&type=' + type;
            $.ajax({
                type: 'get',
                url: commend_url + '?' + parame,
                dataType: 'jsonp',
                jsonp: 'jsonpcallback',
                success: function(data) {
                    if(data.stat == 1){
                        var d = data.data ? data.data : [];
                        for( var i = 0; i < d.length; i++){
                            if(i==d.length-1){
                               $(".proposal_opt").append(
                                    '<li class="last_check">'+d[i]+'</li>'
                                );
                               break;
                            }
                           $(".proposal_opt").append(
                                '<li>'+d[i]+'</li>'
                            );
                        }
                    }
                }
            });

        });

        function close_error(){//关闭弹框
            $('.mask_error').hide();
            $('.error_content').hide();
            //$('html').css('overflow-y','auto');
        }
        $('body').on('click','.error_close',function(){
            close_error();
        });
        //点击选择反馈的内容
        var flager_num = 0;
        $('body').on('click','.proposal_opt li',function(){
            if($(this).hasClass('act')){
                $(this).removeClass('act');
            }else{
                $(this).addClass('act');
            }
            //判断如果选到内容的话按钮变可点击状态
            var $btn = $(this).closest('.error_content').find('.error_button_a');
            var $propl = $(this).closest('.error_content').find('li');
            if(flager_num != 1){
                if($propl.hasClass('act')){
                    //console.log(1212);
                    $btn.addClass('disabled');
                    $btn.attr('disabled',false);
                }else{
                    $btn.attr('disabled',true);
                    $btn.removeClass('disabled');
                }
            }
        });
        //判断来源是否是二级页面
        if(global_btype == 'channel'){
            //console.log(121);
            if ($.cookie("errordata")) {
                //console.log(11);
                var pdata = $.cookie("errordata").split("|");
                pgnum = pdata[0] || 'null';//被操作新闻位于当前栏位第几页
                pgnewsidx = pdata[1] || 'null'//被操作新闻位于当前页第几条
                newsidx = pdata[2] || 'null';//被操作新闻位于当前栏位第几条
            }else {
                pgnum = 'null';
                pgnewsidx = 'null';
                newsidx = 'null';//没传参时的情况下
            }
        }else{//来源不是二级页面传空
            pgnum = 'null';
            pgnewsidx = 'null';
            newsidx = 'null';//没传参时的情况下
        }
        $('body').on('focus','.proposal_textarea_val',function(){
            $(this).closest('.error_content').find('.last_check').addClass('act');
            var $tops = $(this).closest('.error_content').find('li');
            var $btnacs = $(this).closest('.error_content').find('.error_button_a');
            if(flager_num != 1){
                if($tops.hasClass('act')){
                    //console.log(1212);
                    $btnacs.addClass('disabled');
                    $btnacs.attr('disabled',false);
                }else{
                    $btnacs.attr('disabled',true);
                    $btnacs.removeClass('disabled');
                }
            }
        });
        var error_detail = '';
        $('body').on('keyup','.proposal_textarea_val',function(){
            error_detail = $.trim($(this).val());//原因详情
            if (error_detail.length >= 200) {
               $('.error_promt').text('输入内容不能超过200个字符');
            }else{
                $('.error_promt').html('');
            }
        });
        //console.log(error_detail);
        if(error_detail == '' || error_detail == 'undefined'){
            error_detail = null;
        }
        //点击提交反馈的内容\
        $('body').on('click','.error_button_a',function(){
            $(this).attr('disabled',true);
            var $this = $(this);
            var error_reason = [];//报错原因
            //onsole.log(arr);
            error_detail = $.trim($(this).closest('.error_content').find('.proposal_textarea_val').val());
            if(error_detail.length >= 200){
                $(this).attr('disabled',false);
                return;
            }
            if ((new Date().getTime()) - $.cookie('last_comment_error') < 60000){//评论过快休息一会
                $('.error_promt').text('提交过快，休息一下吧！');
                $('.error_pop').removeClass('error_pop_succes').html('');
                $(this).attr('disabled',false);
                return;
            }

            var error_phpone = $.trim($(this).closest('.error_content').find('.phone_input').val());//手机号
            //console.log(error_phpone);
            if(error_phpone == '' || error_phpone == 'undefined'){
                error_phpone = null;
            }
            if(error_phpone != null){
                if (error_phpone.length !== 11 && !/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(error_phpone)) {
                    $('.error_promt').text('手机号码格式错误');
                    setTimeout(function() {
                        $('.error_promt').html('');
                    }, 1000);
                    $(this).attr('disabled',false);
                    return;
                }
            }else{
                $('.error_promt').html('');
            }
            $this.html('').removeClass('disabled');
            $this.next('span').show();
            flager_num = 1;
            for(var i = 0 ; i < $('li.act').length; i++){
                var k = $('li.act:eq('+i+')').text();
                error_reason.push(k);
            }
            // console.log(error_reason);
            error_reason = JSON.stringify(error_reason);

            var o=JSON.parse(error_reason);

            eval("error_reason = '"+JSON.stringify(o)+"';");

            //console.log(typeof(error_reason));
            //console.log(error_reason);
            if(!$.cookie('error_position_p')){
                get_area();
            }
            var error_position_p = $.cookie('error_position_p') || null;//地理位置
            $.ajax({
                type: 'get',
                url: report_url,
                timeout:30000, 
                data: {
                    qid: global_wayPath,
                    uid: global_uid,
                    softtype: softtype,
                    softname: softname,
                    newstype: newstype,
                    parenturl: global_from,
                    url: global_share_url,
                    pgnum: pgnum,
                    pgnewsidx: pgnewsidx,
                    newsidx: newsidx,
                    isrecommend: global_recommendtype,
                    recommendtype: newstype,
                    ishot: global_ishot,
                    ver: global_ver,
                    os: global_os,
                    browser_type: global_browser,
                    contact: error_phpone,
                    reason: encodeURI(error_reason),
                    detail: encodeURI(error_detail),
                    position: encodeURI(error_position_p)
                },
                dataType: 'jsonp',
                jsonp: 'jsonpcallback',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function(data) {
                    if(data.stat == 1){
                        $('.error_content').hide();
                        //$('.mask_error').hide();
                        $.cookie('last_comment_error', new Date().getTime());
                        $('.error_pop').addClass('error_pop_succes').html('<i></i>提交成功，感谢你的宝贵意见！');
                        setTimeout(function() {
                            $('.error_pop').removeClass('error_pop_succes').html('');
                            $('.proposal_opt li').removeClass('act');
                            $('.mask_error').hide();
                        }, 1000);
                        //清除记录页数cookie
                        $.removeCookie("errordata",{path:'/', domain:'eastday.com'});
                    }else{
                        $this.next('span').hide();
                        $this.text('提交').addClass('disabled');
                        $('.error_content').hide();
                        $('.error_pop').addClass('error_pop_fail').html('<i></i>提交失败！');
                        setTimeout(function() {
                            $('.error_pop').removeClass('error_pop_fail').html('');
                            $('.error_content').show();
                        }, 1000);
                    }
                },
                complete :function(){
                    flager_num = 0;
                },
                error: function(xmlHttpRequest, error){
                   // setTimeout(function() {
                        $this.text('提交').addClass('disabled');
                        $this.next('span').hide();
                        $('.error_content').hide();
                        $('.error_pop').addClass('error_pop_fail').html('<i></i>提交失败！');
                   // }, 1000);
                    setTimeout(function() {
                        $('.error_pop').removeClass('error_pop_fail').html('');
                        $('.error_content').show();
                        $this.attr('disabled',false);
                    }, 1000);
                }
            });
        });
    })();

});

function join_qqroom() {
    //末尾qq聊天室
    if ($("#for_qqchat_room").length == 1) {
        $.ajax({
            type: 'POST',
            url: 'http://softwords.dftoutiao.com/loadsoftwords/load',
            dataType: 'jsonp',
            data: {
                "url": global_share_url,
                "qid": coo_name,
                "plat": "pc",
                "uid": global_uid
            },
            jsonp: 'jsonpcallback',
            success: function (msg) {
                if (msg.stat == "1") {
                    $("#for_qqchat_room").append(msg.words);
                }
                $.ajax({
                    type: 'POST',
                    url: 'http://softwords.dftoutiao.com/loadsoftwords/pcload',
                    dataType: 'jsonp',
                    data: {
                        "url": global_share_url,
                        "qid": coo_name,
                        "plat": "pc",
                        "uid": global_uid
                    },
                    jsonp: 'jsonpcallback',
                    success: function (msg) {
                        if (msg.stat == "1") {
                            data = msg.news;
                            /*           var html = '<div class="hot_recommend_cnt clear-fix" id="ad_qq_root"> <div class="tjnewsright clear-fix"> <ul class="tjnewsrcontent"> <li> <div class="pic">' +
                             '<a href="' + data.url + '" target="_blank" title="' + data.topic + ' ">' +
                             '<img src="' + data.miniimg[0].src + '" alt=" ' + data.topic + '"></a>' +
                             '</div> <div class="text"> <h3>' +
                             '<a href="' + data.url + '" target="_blank" title="' + data.topic + ' ">' + data.topic + '</a></h3>' +
                             '<p class="source"> <i></i> <span>来源:' + data.source + '</span> </p> </div> </li> </ul> </div> </div>';*/
                            var html = '<div class="hot_recommend_cnt clear-fix" id="ad_qq_root"> <div class="tjnewsright clear-fix">' +
                                '<a href="' + data.url + '" target="_blank" title="' + data.topic + ' ">' +
                                '<img src="' + data.lbimg[0].src + '" alt=" ' + data.topic + '"></a>' +
                                '</div> </div>';
                            $("#for_qqchat_room").append(html);
                        }
                        $("#ad_qq_root").find('a').click(function () {
                            open_gg(data.url, data.adv_id, global_share_url);
                        })
                    }
                })
            }
        });
    }
}
function open_gg(gg_url, gg_id, clkfrom) {
    var qid = coo_name;
    if (!qid) {
        qid = 'null';
    }
    var uid = global_uid;
    os_type = 'null';
    browser_type = 'null';
    pixel = 'null';
    $.ajax({
        type: 'POST',
        url: 'http://toutiao.eastday.com/getwapdata/ad',
        dataType: 'jsonp',
        data: {
            "qid": qid,
            "uid": uid,
            "loginid": 'null',
            "softtype": 'DFTT',
            "softname": 'eastday_pcnews',
            "newstype": 'ad',
            "from": clkfrom,
            "to": gg_url,
            "os_type": os_type,
            "browser_type": browser_type,
            "pixel": pixel,
            "ime": "null",
            "fr_url": "null",
            "adv": gg_id
        },
        jsonp: 'jsonpcallback',
        success: function (msg) {
            // console.log(msg);
        }
    });
}

//分页页面分渠道跳转
var redirect_by_qid = function (text, uk) {
    document.write('<a target="_blank" href="/topic/index.html?uk=' + uk + '">' + text + '</a>' + "\n");
};
// 分页没有的话展示点击更多
var more_see = function (uk) {
    var nav = $('.pagination').find('a').length;
    if (('qid=dfmini' == coo_name || 'qid=dfmininew' == coo_name || 'dftt' == coo_name || 'f=dfmini' == coo_name) && nav === 0) {
        document.write('<div id="see_more" class="click_see"><a target="_blank" href="/topic/index.html?uk=' + uk + '">' + '点击查看更多' + '</a></div>' + "\n");
    }
};
//分渠道展示更多的军事或者猎奇的内容

var coo_name_show = function () {
    var unartify = $('#unartificial');
    var artify = $('#artificial');
    /*if('360dh' == coo_name){
     unartify.hide();
     artify.show();
     }else{
     unartify.show();
     artify.hide();
     }*/
    unartify.show();
    artify.hide();
};

var coo_name_focus = function () {
    var unartify = $('#news_focus_normal');
    var artify = $('#news_focus');
    /*if('360dh' == coo_name){
     unartify.hide();
     artify.show();
     }else{
     unartify.show();
     artify.hide();
     }*/
    unartify.show();
    artify.hide();
};

var img_pre_load = function () {
    $('img[data]').load(function () {
        var $this = $(this);
        var url = $this.attr('data');
        var src = $this.attr('src');
        if (url == '' || url == src) { //这里判断如果图片实际地址不存在或者已经加载不处理
            return;
        }
        var img = new Image();//实例化一个图片的对象
        img.src = url;//将要显示的图片加载进来
        if (img.complete) { //如果图片已经加载存在浏览器缓存中直接处理
            $this.attr('src', url);//将要显示的图片替换过来
            return;
        }
        img.onload = function () {//要显示的图片加载完成后做处理
            $this.attr('src', url);
        }
    });
};

//北京上海除外的其他省市，当渠道号为某些特定的渠道号时
//如果当前页为第一页，那么点击下一页或者第二页时，打开第二页并且原页面跳转到topic页面
var jump = function(){
    var minieastday_pro_id = $.cookie('minieastday_pro_id');
    if(minieastday_pro_id != 1  && minieastday_pro_id != 3){
        if(coo_name == 'qid=sgshouye'
            ||coo_name == 'qid=qqshouye' || coo_name == 'qid=qqshouyeyl'
            || coo_name == 'qid=360tiyu' || coo_name == 'qid=ludashibizi' || coo_name == 'qid=ludashi013'
            || coo_name == '114bg' || coo_name == 'qid=114laxinwen'
            || coo_name == 'qid=114lashlq' || coo_name == 'qid=114laty' ||  coo_name == 'qid=2345minitiyu' ||  coo_name == 'qid=114lq' || coo_name == 'qid=360dh'
            || coo_name == 'qid=2345mini' || coo_name == 'qid=2345minicaijing' || coo_name == 'qid=360sousuo' || coo_name == 'ay' || coo_name == 'qid=ayss'
            || coo_name == 'qid=ayyule' || coo_name == 'qid=ayshehui' || coo_name == 'qid=sgshouyett' || coo_name == 'qid=sgshouyejunshi' || coo_name == 'qid=sgshouyesh'
            || coo_name == 'qid=qqshouyeyl' || coo_name == 'qid=qqshouyett' || coo_name == 'qid=qqshouyejunshi' || coo_name == 'qid=qqshouyesh' || coo_name == 'qid=sgshouyeyl'){
            if($("a[class='cur']").text() == 1){
                $("a").click(function (){
                    var this_href = $(this).attr("href");
                    var arr = this_href.split("-");
                    if(arr.length >=2 && arr[1] == '2.html'){
                        var uk = arr[0];
                        $(this).attr("href","/topic/index.html?uk=" + uk);
                        window.open(this_href);
                    }
                });
            }
        }
    }
};

//qid=360sousuo 非北上地区，相关推荐，新闻聚焦，热门推荐三个栏目，第一次点击时，当前页跳转到topic，新开页面到目标页面。
var jump2 = function(){
    var minieastday_pro_id = $.cookie('minieastday_pro_id');
    if (!$.cookie("sh_jump2") && coo_name == 'qid=360sousuo'){
        if(minieastday_pro_id != 1  && minieastday_pro_id != 3){
            $(".recomend_content, .focus_img, .tjnewsrcontent").find("li").find("a").click(function () {
                var this_href = $(this).attr("href");
                var arr = this_href.split(".");
                var uk = arr[0].replace("/a/","");
                $.cookie("sh_jump2", 1, {expires:1});
                if(this_href.indexOf("/a/1") > -1){
                    window.location.href = "/topic/index.html?uk=" + uk;
                }else{
                    window.location.href = "/topic/index.html";
                }
            });
        }
    }
};


//根据渠道区分统计代码
var cnzz_code = function (){
    if(coo_name == 'qid=wpsmini'){
        document.write('<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id=\'cnzz_stat_icon_1260389985\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1260389985\' type=\'text/javascript\'%3E%3C/script%3E"));</script>');
    }
};

//接口调广告
function url_scroll(k,y){
    $('body').append('<iframe src="' + k + '" style="display: none;"></iframe><iframe src="' + y + '" style="display: none;"></iframe>');
}
//点击曝光
function url_click(m){
    $('.img_click_gg').on('click',function(){
        $('body').append('<iframe src="' + m + '" style="display: none;"></iframe>');
    })
}
var recommend_uid = function(){
    function gethash(s){
        var m;
        if(s.indexOf('?') > 0){
            var k = s.split('?')[1];
            m = k.length;
        }else{
            m = 0;
        }
        return m;
    }
    // var s = window.location.href;
    // console.log(gethash(s))
    var uid = function(){
        var d = (new Date() - 0);
        var s = window.location.href;
        var hash = gethash(s);
        uid = "" + d + hash + Math.random() + Math.random() + Math.random() + Math.random();
        uid = uid.replace(/\./g, "").substring(0, 32);
        return uid;
    }
    var ml = uid();
    var cookie_uid = function(){
        $.cookie('cookie_uid_ad', ml, {
                    expires: 30,
                    path: '/',
                    domain: 'eastday.com'
                });
        }
    if(!$.cookie('cookie_uid_ad')){
        uidm = ml;
    }else{
        uidm = $.cookie('cookie_uid_ad').ml;
    }
    return uidm;
}
var recommend_url = 'http://show.g.mediav.com/s',
recommend_type = 1,
recommend_of = 4,
recommend_newf= 1,
recommend_showid = 'd1EZLA',
recommend_adnum = 1,
//recommend_ref = 'eastday.com',
recommend_uid = recommend_uid(),
recommend_param = recommend_url+'?type='+recommend_type+'&of='+recommend_of+'&newf='+recommend_newf+'&showid='+recommend_showid+'&uid='+recommend_uid+'&impct='+recommend_adnum;

var gg360_1 = function () {
    $.ajax({
        type: 'post',
        url: recommend_param,
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var d = data.ads ? data.ads : [];
            for(var i = 0; i < d.length; i++){
                $('#recommend_ad_hot1').append(
                '<div class="pic">'+
                    '<a href="'+d[i].curl+'" target="_blank" title="'+d[i].title+'">'+
                        '<img class="img_click_gg"  src="'+d[i].img+'" alt="">'+
                    '</a>'+
                '</div>'+
                '<div class="text">'+
                    '<h3><a class="img_click_gg" href="'+d[i].curl+'" target="_blank" title="'+d[i].title+'">'+d[i].title+'</a></h3>'+
                    '<p class="content_so"><a class="img_click_gg" href="'+d[i].curl+'" target="_blank">'+d[i].desc+'</a></p>'+
                    '<p class="source"><span><a class="img_click_gg" href="'+d[i].curl+'" target="_blank">广告</a></span></p>'+
                '</div>')
                url_scroll(d[i].imptk[0],d[i].imptk[1]);
                url_click(d[i].clktk[0]);
            }
        }
    })
};
var gg360_2 = function () {
    $.ajax({
        type: 'post',
        url: recommend_param,
        dataType: 'jsonp',
        jsonp: 'jsonp',
        success: function(data) {
            var d = data.ads ? data.ads : [];
            for(var i = 0; i < d.length; i++){
                $('#recommend_ad_hot2').append(
                '<div class="pic">'+
                    '<a href="'+d[i].curl+'" target="_blank" title="'+d[i].title+'">'+
                        '<img class="img_click_gg"  src="'+d[i].img+'" alt="">'+
                    '</a>'+
                '</div>'+
                '<div class="text">'+
                    '<h3><a class="img_click_gg" href="'+d[i].curl+'" target="_blank" title="'+d[i].title+'">'+d[i].title+'</a></h3>'+
                    '<p class="content_so"><a class="img_click_gg" href="'+d[i].curl+'" target="_blank">'+d[i].desc+'</a></p>'+
                    '<p class="source"><span><a class="img_click_gg" href="'+d[i].curl+'" target="_blank">广告</a></span></p>'+
                '</div>')
                url_scroll(d[i].imptk[0],d[i].imptk[1]);
                url_click(d[i].clktk[0]);
            }
        }
    })
};

var ad_gg360_1 = function () {
    document.write('<script type="text/javascript">gg360_1();</script>')
};
var ad_gg360_2 = function () {
    document.write('<script type="text/javascript">gg360_2();</script>')
};


var below_title = function () {

    if(coo_name == 'qid=sgshouye' || coo_name == 'qid=sgshouyett' || coo_name == 'qid=sgshouyesh' || coo_name == 'qid=sgshouyejunshi' || coo_name == 'qid=sgshouyeyl'
    || coo_name == 'qid=qqshouye' || coo_name == 'qid=qqshouyett' || coo_name == 'qid=qqshouyesh' || coo_name == 'qid=qqshouyejunshi' || coo_name == 'qid=qqshouyeyl'){
        /*var page = 1;    //当前页面处于新闻的第几页
        var pathname = window.location.pathname;
        var pathArr = pathname.split("-");
        if(pathArr.length >= 2){
            page = parseInt(pathArr[1].split(".")[0]);
        }

        if(page == 1){
            // 放广告
            document.write('<script type="text/javascript">gg_below_title();</script>')
        }else{
            // 放推荐内容
            var i = page - (Math.floor((page + 1) / 3) * 3 - 2);
            document.writeln('<iframe frameborder="0" scrolling="no" src="http://mini.eastday.com/xwzbiaotixiafang/biaotixiafang'+i+'.html?' + coo_name + '" width="670" height="125"></iframe>');
        }*/
        document.write('<script type="text/javascript">gg_below_title();</script>')
    }else{
        document.write('<script type="text/javascript">left_1();</script>')
    }

};

var gg_below_title = function () {
    if(coo_name == 'qid=sgshouye' || coo_name == 'qid=sgshouyett' || coo_name == 'qid=sgshouyesh' || coo_name == 'qid=sgshouyejunshi' || coo_name == 'qid=sgshouyeyl'){
        //放搜狗广告
        document.write('<div class="fl"><scr' + 'ipt type="text/javascript">left_gg_below_title("sg");</scr' + 'ipt><scr' + 'ipt src="http://dup.baidustatic.com/js/ds.js"></scr' + 'ipt></div>');
        document.write('<div class="fl mt5"><scr' + 'ipt type="text/javascript">right_gg_below_title("sg");</scr' + 'ipt><scr' + 'ipt src="http://dup.baidustatic.com/js/ds.js"></scr' + 'ipt></div>');

    }else if (coo_name == 'qid=qqshouye' || coo_name == 'qid=qqshouyett' || coo_name == 'qid=qqshouyesh' || coo_name == 'qid=qqshouyejunshi' || coo_name == 'qid=qqshouyeyl'){
        //放qq广告
        document.write('<div class="fl"><scr' + 'ipt type="text/javascript">left_gg_below_title("qq");</scr' + 'ipt><scr' + 'ipt src="http://dup.baidustatic.com/js/ds.js"></scr' + 'ipt></div>');
        document.write('<div class="fl mt5"><scr' + 'ipt type="text/javascript">right_gg_below_title("qq");</scr' + 'ipt><scr' + 'ipt src="http://dup.baidustatic.com/js/ds.js"></scr' + 'ipt></div>');


    }else{
        //放常规广告，从后台读取
        document.write('<script type="text/javascript">left_1();</script>')
    }
};


function left_gg_below_title(qid) {
    var id;
    if(qid == 'sg'){
        id = '3018196';
    }else if(qid == 'qq'){
        id = '3018210';
    }
    var s = "_" + Math.random().toString(36).slice(2);
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: id,
        container: s,
        size: '340,125',
        display: 'inlay-fix'
    });
}

function right_gg_below_title(qid) {
    var id;
    if(qid == 'sg'){
        id = '3018237';
    }else if(qid == 'qq'){
        id = '3018243';
    }
    var s = "_" + Math.random().toString(36).slice(2);
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: id,
        container: s,
        size: '340,115',
        display: 'inlay-fix'
    });
}