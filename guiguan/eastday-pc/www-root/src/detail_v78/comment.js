(function() {
    //页面aid 带n的新闻不评论
    if (uk_for_tbtj.indexOf("n") >= 0) {
        $('#discuss_box').hide();
        return;
    };
    $('#discuss_box').append('<!-- 弹框 -->'+
                '<div class="pop_k pop_1 none"><i></i>验证成功</div>'+
                '<div class="pop_k pop_2 none"><i></i>评论成功</div>'+
                '<div class="pop_k pop_3 none"><i></i>评论失败</div>'+
                '<div class="pop_k pop_4 none"><i></i>你已点赞</div>'+
                '<!-- 手机验证弹框 -->'+
                '<div id="pop_pomt" class="none">'+
                    '<div class="mask_c"></div>'+
                    '<div class="pop_phone">'+
                        '<div class="phone_head"><span>手机验证</span><i id="close_pop"></i></div>'+
                        '<div class="form_box">'+
                            '<div class="form_phone">'+
                                '<input id="mobile_num" type="text" maxlength="11" placeholder="请输入手机号"/>'+
                            '</div>'+
                            '<div class="form_code">'+
                                '<input id="code_num" type="text" maxlength="6" placeholder="请输入验证码"/>'+
                                '<input type="button" class="code_g active" id="code_get" value="获取验证码"/>'+
                            '</div>'+
                            '<p class="promt"></p>'+
                            '<button id="form_bt" class="form_btn">立即登录</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- 评论 start -->'+
                '<div class="title_dis"><span class="title_dis_sp">网友评论</span><p class="comment_total" id="pinglun"><span id="total_num">0</span>条评论</p></div>'+

                '<div class="mt20">'+
                    '<div class="comment_t clearfix" id="comment_t">'+
                        '<div class="head_log" id="head_log_bg"><img src="/assets/images/head_log1.png"></div>'+
                        '<div class="comment_content">'+
                            '<div class="comment_text">'+
                                '<textarea class="textarea_te textarea_te_top" placeholder=""></textarea>'+
                                '<span class="phone_c">请手机<a id="vicatin_a" href="javascript:;">验证</a>后发表评论</span>'+
                            '</div>'+
                            '<div class="comment_btn">'+
                                '<button disabled id="comment_p">评论</button>'+
                                '<div class="btn_pop btn_pop_com"></div>'+
                            '</div>'+
                            '<div class="textarea_none"></div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="hot_dis clearfix"><span>热门评论</span></div>'+
                    '<ul class="comment_succue_host clearfix"></ul>'+
                    '<div class="new_dis clearfix"><span>最新评论</span></div>'+
                    '<ul class="comment_succue_d clearfix"></ul>'+
                    '<ul class="comment_succue clearfix"></ul>'+
                    '<div class="show_loading"><span></span></div>'+
                    '<div class="show_more"><span></span></div>'+
                    '<div class="comment_t clearfix comment-bottom-c" id="J_comment_bottom">'+
                        '<div class="head_log" id="head_log_bg"><img src="/assets/images/head_log1.png"></div>'+
                        '<div class="comment_content comment-bottom-content">'+
                            '<div class="comment_text" id="J_comment_text">'+
                                '<textarea class="textarea_te textarea-bottom-te" id="J_textarea_te" placeholder=""></textarea>'+
                                '<span class="phone_c">请手机<a id="vicatin_a" href="javascript:;">验证</a>后发表评论</span>'+
                            '</div>'+
                            '<div class="comment_btn comment-bottom-btn" id="J_comment_btn">'+
                                '<button disabled id="J_comment_p">评论</button>'+
                                '<div class="btn-pop-bottom btn_pop_com"></div>'+
                            '</div>'+
                            '<div class="textarea_none textarea-bottom-none"></div>'+
                        '</div>'+
                    '</div></div>'
                );
    function fiterScript(str) {
        return str.replace("script", "");
    }

    var mobile_num, //手机号
        code_num, //验证码
        userid, //用户id
        userpic, //用户昵称
        username, //用户头像
        ret,
        global_soft_type = 'toutiao_pc',
        global_soft_name = 'DFTT_PC',
        globalBlea = true,
        PAGE_COUNT = 10,
        PER_COUNT = 5,
        endKey, // 每页的最后一个评论rowkey
        rowkey = global_rowkey,
        url_now = global_share_url, //当前网址
        global_to = "http://" + window.location.host + window.location.pathname,
        phone_url = "http://plsms.dftoutiao.com",
        comment_url = "http://aboutcomment.dftoutiao.com";
    (function() {
        $.ajax({
            type: 'get',
            url: 'http://position.dftoutiao.com/position/get',
            dataType: 'jsonp',
            //async:false,
            jsonp: 'jsonpcallback',
            success: function(data) {
                var d = data.position ? data.position : [];
                //console.log(d);
                if (d.cityname == d.provname) {
                    ret = d.provname;
                } else {
                    ret = d.provname + d.cityname;
                }
            },
            complete: function() {
                var info = '{"user_name":"' + ret + '"}';
                $.cookie('userName', info, {
                    expires: 30,
                    path: '/',
                    domain: 'eastday.com'
                });
                //console.log(info)
            }
        })
    })();

    //用户头像
    user_pic = user_pic_p();

    //验证注册接口
    $('#code_get').click(function() {
        mobile_num = $.trim($('#mobile_num').val());
        //console.log(mobile_num);
        // 为空判断
        if (!mobile_num) {
            $('.promt').text('请输入手机号码');
            return;
        }
        // 非法手机号码判断
        if (mobile_num.length !== 11 && !/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(mobile_num)) {
            $('.promt').text('手机号码格式错误');
            return;
        }
        // 倒计时'
        var $this = $(this),
            timer = null,
            countdown = 60;
        $this.prop("disabled", true);
        $this.removeClass('active');
        $this.val("" + countdown + " 秒后重发");
        timer = setInterval(function() {
            countdown--;
            if (countdown === 0) {
                $this.prop("disabled", false);
                $this.addClass('active');
                $this.val("获取验证码");
                clearInterval(timer);
            } else {
                $this.val("" + countdown + " 秒后重发");
            }
        }, 1000);
        phone_pop(phone_url + '/sms/api/jsonp/v1.0/verificationcode?callbackparam=callbackparam&mobile=' + mobile_num);

        //console.log(mobile_num);

        function phone_pop(URL) {
            $.ajax({
                type: 'get',
                url: URL,
                dataType: 'jsonp',
                jsonpCallback: 'callbackparam',
                success: function(data) {
                    $('.promt').text('短信已发送到你的手机，请注意查收');
                    $('#code_num').focus();
                },
                complete: function() {

                }
            })
        }
    });

    //获取地理位置
    if (!$.cookie('userName')) {
        user_name = '匿名网友' + global_uid.substring(0, 10);
    } else {
        user_f = $.parseJSON($.cookie('userName')).user_name;
        if(typeof(user_f) == 'undefined'){
            user_f = '匿名网友';
        }
        user_name = user_f + global_uid.substring(0, 10);
        //console.log(user_name);
    }
    //注册接口
    function registerClick() {
        mobile_num = $.trim($('#mobile_num').val());
        code_num = $.trim($('#code_num').val());
        // 为空判断
        if (!mobile_num) {
            $('.promt').text('请输入手机号码');
            return;
        }
        // 非法手机号码判断
        if (mobile_num.length !== 11 && !/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(mobile_num)) {
            $('.promt').text('手机号码格式错误');
            return;
        }
        // 为空判断
        if (!code_num) {
            $('.promt').text('请输入验证码');
            return;
        }
        // 非法手机号码判断
        //console.log('code_num::', code_num);
        if (!/^\d{6}$/.test(code_num)) {
            $('.promt').text('验证码格式错误');
            return;
        }

        login_user(phone_url + '/sms/api/jsonp/v1.0/register?callbackparam=callbackparam&mobile=' + mobile_num + '&userid=' + global_uid + '&username=' + encodeURI(encodeURI(user_name)) + '&userpic=' + user_pic + '&verificationcode=' + code_num + '&url=' + url_now + '&rowkey=' + uk_for_tbtj)

        function login_user(URL) {
            $.ajax({
                type: 'get',
                url: URL,
                dataType: 'jsonp',
                jsonpCallback: 'callbackparam',
                success: function(data) {
                    
                    if (data && data.code != '200') {
                        $('.promt').text('验证码错误');
                        return;
                    }
                    //console.log(data);
                    //console.log(URL);
                    close_pop();
                    var d = data.data ? data.data : [];
                    //console.log(d);
                    userpic = d.userpic;
                    username = d.username;
                    userid = d.userid;
                    //console.log(username);
                    if (userpic == '') {
                        $('#head_log_bg img').attr('src', 'http://mini.eastday.com/assets/images/head_log1.png');
                        userpic = 'http://mini.eastday.com/assets/images/head_log1.png';
                    } else {
                        $('#head_log_bg img').attr('src', userpic);
                    }
                    $('.comment_btn').addClass('color_fo');
                    $('.comment_btn button').removeAttr("disabled");
                    $('.phone_c').addClass('none');
                    $('.pop_1').removeClass('none');
                    setTimeout(function() {
                        $('.pop_1').addClass('none');
                    }, 800)
                    $('.textarea_te').attr('placeholder', '请输入你的评论')
                    $('.textarea_te').blur(function() {
                        $('.phone_c').addClass('none');
                    });
                    var info = '{"user_name":"' + username + '","user_name_pic":"' + userpic + '","uid":"' + userid + '"}';
                    $.cookie('userNameCookie', info, {
                        expires: 30,
                        path: '/',
                        domain: 'eastday.com'
                    });
                    var info = '{"uid":"' + userid + '","softtype":"' + global_soft_type + '","softname":"' + global_soft_name + '"}';
                    $.cookie('mylist', info, {
                        expires: 3000,
                        path: '/',
                        domain: 'eastday.com'
                    });
                    $('.textarea_none').hide();
                },
                error: function() {},
                complete: function() {
                    //console.log(username);
                }
            })

        }
    };
    //点击按钮注册
    $('#form_bt').click(function() {
        registerClick();
    });
    //按下回车键键注册!
    $('#code_num').focus(function() {
        $(this).keydown(function(e) {
            var eCode = e.keyCode || e.which || e.charCode;
            if (eCode == 13) {
                registerClick();
            }
        });
    });
    //用户头像
    if (!$.cookie('userNameCookie')) {
        var userpic = user_pic_p();
        //console.log('aaa',userpic);
    } else {
        var userpic = $.parseJSON($.cookie('userNameCookie')).user_name_pic;
        if (userpic == '') {
            userpic = user_pic_p();
        }
    }

    //console.log($.cookie('userNameCookie'));
    //第二次进入调cookie
    if ($.cookie('userNameCookie')) {
        $('.comment_btn').addClass('color_fo');
        $('.comment_btn button').removeAttr("disabled");
        $('.phone_c').addClass('none');
        $('.textarea_te').attr('placeholder', '请输入你的评论')
        $('#head_log_bg img').attr('src', userpic);
        $('.textarea_te').blur(function() {
            $('.phone_c').addClass('none');
        });
    }
    if ($.cookie('userNameCookie')) {
        $('.comment_btn').addClass('color_fo');
        $('.comment_btn button').removeAttr("disabled");
        $('.phone_c').addClass('none');
        $('.textarea_te').attr('placeholder', '请输入你的评论')
        $('#head_log_bg img').attr('src', userpic);
        $('.textarea_te').blur(function() {
            $('.phone_c').addClass('none');
        });
        $('.textarea_none').hide();
    } else {
        $('.textarea_none').click(function() {
            vication();
        })
    }

    $('.comment_text textarea').focus(function() {
        focus_c(); //获取光标
    })

    function focus_c() {
        $('.comment_text .phone_c').addClass('none');
    }

    $('.comment_text textarea').blur(function() {
        blur_c(); //获取光标
    })

    function blur_c() {
        if (!($.cookie('userNameCookie'))) {
            $('.comment_text .phone_c').removeClass('none');
        }
    }

    function user_pic_p() {
        return 'http://mini.eastday.com/assets/images/head_log1.png';
    }

    $('#vicatin_a').click(function() {
        //点击验证弹框
        vication()
        //console.log(1212)
    })

    function vication() {
        $('#pop_pomt').removeClass('none');
        $('#mobile_num').focus();
    }

    $('#close_pop').click(function() {
        //关闭验证弹框
        close_pop()
    })

    function close_pop() {
        $('#pop_pomt').addClass('none')
    }
    //点击更多加载评论
    $('body').on('click', '.show_more span', function() {
        globalBlea = false;
        if (!$(this).hasClass('disabled')) {
            comment_uel(comment_url + '/comment/v2.1/comment/jsonp/getreview/' + uk_for_tbtj + '/' + endKey + '/' + PAGE_COUNT + '?idx=0&revnum=5&username=' + encodeURI(encodeURI(user_name)) + '&hotnum='+ PER_COUNT +'&commtype=1&callbackparam=callbackparam');
        }
    });
    //console.log(from);
    //取评论接口
    var getUrl = comment_url + '/comment/v2.1/comment/jsonp/getreview/' + uk_for_tbtj + '/0/' + PAGE_COUNT + '?idx=0&revnum=5&username=' + encodeURI(encodeURI(user_name)) + '&hotnum='+ PER_COUNT +'&commtype=1&callbackparam=callbackparam';
    comment_uel(getUrl);
    function comment_uel(URL) {
        $('.show_loading').show();
        $('.show_more').hide();
        $.ajax({
            type: 'get',
            url: URL,
            data: {
                qid: global_wayPath || 'null',
                uid: global_uid || 'null',
                loginid: "null",
                softtype: global_soft_type || 'null',
                softname: global_soft_name || 'null',
                newstype: newstype || 'null',
                from: global_from || 'null',
                to: global_to || 'null',
                os_type: global_os || 'null',
                browser_type: global_browser || 'null',
                pixel: 'null',
                ime: 'null',
                idx: 0,
                ishot: 1,
                fr_url: global_fr_url || 'null',
                ver: 'null',
                appqid: 'null',
                ttloginid: 'null',
                apptypeid: 'null',
                appver: 'null',
                recommendtype: 0,
                ispush: 0,
                deviceid: 'null',
                userpic: userpic || 'null',
                userid: global_uid || 'null'
            },
            dataType: 'jsonp',
            jsonpCallback: 'callbackparam',
            success: function(data) {
                $('.show_loading').hide();
                
                $('.show_more').show();
                if ((data && data.data == '') || typeof(data.data) == 'undefined') {
                    //$('.new_dis').hide();
                    $('.show_more span').addClass('disabled').html('已经没有更多评论了！');
                }else{
                    $('.show_loading').hide();
                    $('.new_dis').show();
                    endKey = data.endkey; // 
                    //console.log('dddd::',data);
                    var d = data.data ? data.data : [];
                    // endKey 为空，表示评论已经全部加载完成。d.length
                    if (d.length < PAGE_COUNT || parseInt(data.totalrev) == 10) {
                        //console.log('changsi',data.totalrev)
                        $('.show_more span').addClass('disabled').html('已经没有更多评论了！');
                    } else {
                        $('.show_more span').removeClass('disabled').html('点击查看更多');
                    }
                    $('.new_dis').show();
                    var recommendData = [];
                    for (var i = 0; i < d.length; i++) {
                        recommendData.push({
                            userpic: d[i].userpic,
                            username: d[i].username,
                            time: getSpecialTimeStr(d[i].date),
                            ding: d[i].ding,
                            ck: d[i].ck,
                            rowkey: d[i].rowkey,
                            content: d[i].content,
                            reviews: d[i].reviews
                        });
                    }
                    //console.log(recommendData[i].content);
                    for (var i = 0; i < recommendData.length; i++) {
                        loadRecData(recommendData[i], i, d[i].rowkey);
                        test(recommendData[i].reviews, d[i].rowkey, d[i].rev);

                    }
                    $('#head_log_bg').children('img').attr('src', userpic);

                    //评论信息
                    function loadRecData(d, i, rk) {
                        $('#total_num').text(data.totalrev);
                        $('#conment_tole_in').text(data.totalrev);
                        $("#conment_tole_in").show();
                        if(parseInt(d.ding) >= 10000){
                            d.ding = '1w';

                        }
                        var num = parseInt(d.ding);
                        if(num >= 10000){
                            d.ding = '1w';
                            if(num >= 11000){
                                var s = num/10000 + '';
                                var str = s.substring(0,s.indexOf(".") + 2);
                                d.ding = str + 'w';
                                if(num >= 9990000){
                                    d.ding = 999 + '+w';
                                }
                            }
                        };
                        $(".comment_succue").append('<li class="li_d clearfix">' +
                            '<div class="head_img"><img class="img_h" src="' + d.userpic + '"></div>' +
                            '<div class="comment_m" data-rowkey="' + d.rowkey + '" data-ck="' + d.ck + '">' +
                            '<div class="comment_succue_top clearfix">' +
                            '<p class="fl"><span class="comment_name">' + d.username + '</span><span class="comment_time">' + d.time + '</span></p>' +
                            '<p class="fr"><span class="num_l active iebug">+1</span><span class="user_like fl"><i>' + d.ding + '</i></span><span class="user_replay">回复</span></p></div>' +
                            '<p class="comment_succue_p">' + fiterScript(d.content) + '</p>' +
                            '<ul class="replay_kt" style="display: none">' +
                            '<li class="clearfix ">' +
                            '<div class="replay_text">' +
                            '<textarea placeholder="请输入内容"></textarea>' +
                            '<div class="comment_sm"><span class="btn_pop_r"></span><button class="J-reply">回复</button></div>' +
                            '</div>' +
                            '</li></ul>' +
                            '<ul class="replay_c reply' + rk + '">' +
                            '</ul>' +
                            '</div><div class="person_m person_m' + rk + '"></div></li>'
                        )
                    }
                    function test(reviews, rk, rev) {
                        if(reviews && reviews == '' || typeof(reviews) == 'undefined'){
                        }else{
                            if(reviews.length > 5){
                                reviews.length = 5;
                            }
                            if (rev > PER_COUNT) {
                                $('.person_m' + rk).html('查看更多回复');
                                $('.person_m' + rk).addClass('sign_icon');
                            };
                            //console.log('dd',121)
                            for (var i = 0; i < reviews.length; i++) {
                                if (typeof(reviews) == "undefined" || reviews.length == 0) {
                                    return;
                                } else {
                                    $('.comment_succue .reply' + rk).append('<li class="replay_te" data-ck="' + reviews[i].ck + '">' +
                                        '<div class="head_app_img"><img src="' + reviews[i].userpic + '"/></div>' +
                                        '<div class="replay_te_l clearfix">' +
                                        '<div class="comment_succue_s clearfix">' +
                                        '<p class="fl"><span class="db"><span class="comment_s">' + reviews[i].username + '</span></span><span class="comment_time">' + getSpecialTimeStr(reviews[i].date) + '</span></p>' +
                                        '</div>' +
                                        '<p class="mg10">' + fiterScript(reviews[i].content) + '</p>' +
                                        '<ul class="replay_kf" style="display: none">' +
                                        '<li class="clearfix ">' +
                                        '<div class="replay_text">' +
                                        '<textarea placeholder="请输入内容"></textarea>' +
                                        '<div class="comment_sk"><button>回复</button></div>' +
                                        '</div>' +
                                        '</li></ul>' +
                                        '</div>' +
                                        '</li>'
                                    )
                                    // test(reviews[0].reviews);
                                }
                            };
                        }
                    }
                }
                //data.isBan == 0可评论回复状态
                if(globalBlea == true){
                    $('#J_comment_bottom').hide();
                    if ((data && data.hotsdata == '') || typeof(data.hotsdata) == 'undefined') {
                        $('.comment_succue_host').remove();
                    }else{
                        var k = data.hotsdata;
                        $('.hot_dis').show();
                        //console.log('有评论',1212)
                        for(var i = 0; i < k.length; i++){
                            var num = parseInt(k[i].ding);
                            if(num >= 10000){
                                k[i].ding = '1w';
                                if(num >= 11000){
                                    var s = num/10000 + '';
                                    var str = s.substring(0,s.indexOf(".") + 2);
                                    k[i].ding = str + 'w';
                                    if(num >= 9990000){
                                        k[i].ding = 999 + '+w';
                                    }
                                }
                            };
                            var cm;
                            if(i == k.length-1){
                                cm = 'sd';
                            }else{
                                cm = '';
                            }
                            $('.comment_succue_host').append('<li class="li_d'+cm+' clearfix">' +
                                '<div class="head_img"><img class="img_h" src="' + k[i].userpic + '"></div>' +
                                '<div class="comment_m" data-rowkey="' + k[i].rowkey + '" data-ck="' + k[i].ck + '">' +
                                '<div class="comment_succue_top clearfix">' +
                                '<p class="fl"><span class="comment_name">' + k[i].username + '</span><span class="comment_time">' + getSpecialTimeStr(k[i].date) + '</span></p>' +
                                '<p class="fr"><span class="num_l active iebug">+1</span><span class="user_like fl"><i>' + k[i].ding + '</i></span><span class="user_replay">回复</span></p></div>' +
                                '<p class="comment_succue_p">' + fiterScript(k[i].content) + '</p>' +
                                '<ul class="replay_kt" style="display: none">' +
                                '<li class="clearfix ">' +
                                '<div class="replay_text">' +
                                '<textarea placeholder="请输入内容"></textarea>' +
                                '<div class="comment_sm"><span class="btn_pop_r"></span><button class="J-reply">回复</button></div>' +
                                '</div>' +
                                '</li></ul>' +
                                '<ul class="replay_c reply' + k[i].rowkey + '">' +
                                '</ul>' +
                                '</div><div class="person_m person_m' + k[i].rowkey + '"></div></li>'
                            )
                             
                            replacePers(k[i].reviews, k[i].rowkey, k[i].rev);
                        }
                        function replacePers(reviews,rk,rev){
                        if(reviews && reviews == '' || typeof(reviews) == 'undefined'){
                            }else{
                                if(reviews.length > 5){
                                    reviews.length = 5;
                                }
                                if (rev > PER_COUNT) {
                                    $('.person_m' + rk).html('查看更多回复');
                                    $('.person_m' + rk).addClass('sign_icon')
                                };
                                for (var i = 0; i < reviews.length; i++) {
                                    if (typeof(reviews) == "undefined" || reviews.length == 0) {
                                        return;
                                    } else {
                                        $('.comment_succue_host .reply' + rk).append('<li class="replay_te" data-ck="' + reviews[i].ck + '">' +
                                            '<div class="head_app_img"><img src="' + reviews[i].userpic + '"/></div>' +
                                            '<div class="replay_te_l clearfix">' +
                                            '<div class="comment_succue_s clearfix">' +
                                            '<p class="fl"><span class="db"><span class="comment_s">' + reviews[i].username + '</span></span><span class="comment_time">' + getSpecialTimeStr(reviews[i].date) + '</span></p>' +
                                            '</div>' +
                                            '<p class="mg10">' + fiterScript(reviews[i].content) + '</p>' +
                                            '<ul class="replay_kf" style="display: none">' +
                                            '<li class="clearfix ">' +
                                            '<div class="replay_text">' +
                                            '<textarea placeholder="请输入内容"></textarea>' +
                                            '<div class="user_replay"><button>回复</button></div>' +
                                            '</div>' +
                                            '</li></ul>' +
                                            '</div>' +
                                            '</li>'
                                        );
                                        // test(reviews[0].reviews);
                                    }
                                }
                            }
                        }
                    }
                }else{
                    $('#J_comment_bottom').show();
                }
                //不可评论可回复
                commentOrReplay(data);    
            }
        })
    }
    //判断没有评论弹框
    $('.discuss-wrap').click(function(){
        $this = $(this);
        if($(".discuss_box_show").length != 0 ){
            $('.detail_left_cnt').addClass('J-bdsharebuttonbox-com');
            $('.pop_comment_n').show();
            $this.attr('href','javascript:;');
            setTimeout(function(){
                $('.pop_comment_n').hide();
            },800)
        }

    });
    //判断是否显示评论和回复
    function commentOrReplay(data){
        //isBan == 1不对文章进行评论，可对评论回复
        if(data.isban === 1 || data.isblack === 1){
            hideComment();
        //isBan == 2不对文章进行评论，不可对评论回复
        }else if(data.isban === 2){
            //关闭评论
            hideComment();
            $('.user_replay').text('');
            $('#discuss_box').find('.replay_kt').html('');
        }

        function hideComment(){
            //若无评论则不显示任何评论
            if(data.totalrev === 0 || data.totalrev === 'undefined' || (data && data.data == '') || typeof(data.data) == 'undefined'){
                $('#discuss_box').html('');
                $('#discuss-wrap').html('');
                $('#discuss_box').addClass('discuss_box_show')
                // $('.detail_left_cnt').addClass('J-bdsharebuttonbox-com');
                // $('.pop_comment_n').show();
                return;
            }
            //去掉评论框
            $('#comment_t').html('');
            //去掉底部评论框
            $('#J_comment_bottom').html('');
        }
    }


    //对文章评论接口
    function replayArticle(k) {
        //console.log("212");
        var $this = k;
        var centent_text = $.trim($this.closest('.comment_content').find('.textarea_te').val());
        var btn_pop_top = $this.next();
        // console.log(btn_pop_top);
        if ((new Date().getTime()) - $.cookie('last_comment_' + $.parseJSON($.cookie('userNameCookie')).uid) < 10000) {
            //console.log('1212');
            btn_pop_top.show().text('评论过快，休息一下吧！');
            return;
        }

        if (centent_text.length >= 400) {
            btn_pop_top.text('输入内容不能超过400个字符');
        } else if (centent_text.length == 0) {
            btn_pop_top.text('输入内容不能为空');
        } else if (centent_text.length < 400) {
            //console.log(centent_text);
            comment_article(comment_url + '/comment/v1/comment/jsonp/put/article')
            $this.closest('.comment_content').find('.textarea_te').attr("value", "");
            $this.closest('.comment_content').find('.phone_c').css('display', 'none');

            function comment_article(URL) {
                $.ajax({
                    type: 'get',
                    url: URL,
                    data: {
                        aid: uk_for_tbtj,
                        rowkey: uk_for_tbtj,
                        content: encodeURI(centent_text),
                        ding: 0,
                        rev: 0,
                        userid: $.parseJSON($.cookie('userNameCookie')).uid,
                        userpic: userpic,
                        username: encodeURI($.parseJSON($.cookie('userNameCookie')).user_name),
                        callbackparam: 'jsonpcallback',
                        qid: global_wayPath || 'null',
                        uid: global_uid || 'null',
                        loginid: "null",
                        softtype: global_soft_type || 'null',
                        softname: global_soft_name || 'null',
                        newstype: newstype || 'null',
                        from: global_from || 'null',
                        to: global_to || 'null',
                        os_type: global_os || 'null',
                        browser_type: global_browser || 'null',
                        pixel: 'null',
                        ime: 'null',
                        idx: 0,
                        ishot: 1,
                        fr_url: global_fr_url || 'null',
                        ver: 'null',
                        appqid: 'null',
                        ttloginid: 'null',
                        apptypeid: 'null',
                        appver: 'null',
                        recommendtype: 0,
                        ispush: 0,
                        deviceid: 'null'
                    },
                    dataType: 'jsonp',
                    //contentType:"application/x-www-form-urlencoded;charset=UTF-8",
                    jsonpCallback: 'jsonpcallback',
                    success: function(data) {
                        
                        if (data && data.code != '200') {
                            $('.pop_3').removeClass('none');
                            setTimeout(function() {
                                $('.pop_3').addClass('none');
                            }, 800);
                            return;
                        };
                        var tatleNum = $("#total_num").text();
                        $("#total_num").text(parseInt(tatleNum) + 1);
                        var tatleNumIn = $("#conment_tole_in").text();
                        $("#conment_tole_in").text(parseInt(tatleNumIn) + 1);

                        var d = data.comment ? data.comment : [];
                        //console.log(d);
                        //console.log(URL);
                        userpic = d.userpic;
                        username = d.username;
                        time = getSpecialTimeStr(d.date);
                        ding = d.ding;
                        content = d.content;
                        rev = d.rev;
                        rowkey = d.rowkey;
                        ck = d.ck;
                        $('.pop_2').removeClass('none');
                        setTimeout(function() {
                            $('.pop_2').addClass('none');
                        }, 800);
                        $('.btn_pop').hide();

                        $.cookie('last_comment_' + $.parseJSON($.cookie('userNameCookie')).uid, new Date().getTime());
                        //console.log(content.length);
                        if (content.length != 0) {

                            $('.new_dis').after('<ul class="comment_succue_d clearfix" id="J_comment_d"><li class="li_d clearfix">' +
                                '<div class="head_img"><img class="img_h" src="' + userpic + '"></div>' +
                                '<div class="comment_m" data-rowkey="' + rowkey + '" data-ck="' + ck + '">' +
                                '<div class="comment_succue_top clearfix">' +
                                '<p class="fl"><span class="comment_name">' + username + '</span><span class="comment_time">' + time + '</span></p>' +
                                '<p class="fr"><span class="num_l active iebug">+1</span><span class="user_like fl"><i>' + ding + '</i></span><span class="user_replay">回复</span></p></div>' +
                                '<p class="comment_succue_p">' + fiterScript(content) + '</p>' +
                                '<ul class="replay_kt" style="display: none">' +
                                '<li class="clearfix ">' +
                                '<div class="replay_text">' +
                                '<textarea placeholder="请输入内容"></textarea>' +
                                '<div class="comment_sm"><button class="J-reply">回复</button><span class="btn_pop_r"></span></div>' +
                                '</div>' +
                                '</li></ul>' +
                                '</div></li></ul>'
                            )
                        }
                    },
                    complete: function() {
                        //console.log(rowkey);
                        // var info = '{"rowkey_y":"' + rowkey + '"}';
                        //$.cookie('rowKey',info,{expires:30,path:'/',domain:'eastday.com'});                        
                    }
                });
            }
        }
        //console.log(nufs);
    }

    $('#comment_p').click(function() {
        replayArticle($(this));
    });
    //按下ctrl + 回车键键评论!
    $('.textarea_te_top').focus(function() {
        $('.btn_pop').show().text('按下ctrl + enter键也可发表评论!');
        $(this).keydown(function(e) {
            var eCode = e.keyCode || e.which || e.charCode;
            if (e.ctrlKey && e.keyCode == 13) {
                replayArticle($('#comment_p'));
            }
        });
    });

    $('.textarea_te_top').blur(function() {
        $('.btn_pop').hide();
    });

    $('#J_comment_p').click(function() {
        replayArticle($(this));
    });

    $('#J_textarea_te').focus(function() {
        $(this).removeClass('textarea-bottom-te');
        $('.comment-bottom-content').animate({
            'height': '120px'
        },500);
        var wait=setInterval(function(){  
            $('.btn-pop-bottom').show().text('按下ctrl + enter键也可发表评论!');
            $('#J_comment_btn').removeClass('comment-bottom-btn');
                clearInterval(wait);  
        },500);
        $(this).keydown(function(e) {
            var eCode = e.keyCode || e.which || e.charCode;
            if (e.ctrlKey && e.keyCode == 13) {
                replayArticle($('#J_comment_p'));
            }
        });
    });
    function blur_text_place() {
        $('#J_textarea_te').addClass('textarea-bottom-te');
        $('.btn-pop-bottom').hide();
        $('#J_comment_btn').addClass('comment-bottom-btn');
        $('.comment-bottom-content').animate({
            'height': '46px'
        },500);
    };

    $(document).click(function(e){

        var idValue = $(e.target).attr("id");  //获取当前点击区域对象的id值
        var classValue = $(e.target).attr("class");  //获取当前点击区域对象的class值
        //var isFocus=$("#J_textarea_te").is(":focus"); 
        if(idValue == "J_comment_btn" || idValue == "J_comment_p" || idValue == "head_log_bg" || idValue == "J_textarea_te" || idValue == "J_comment_bottom" || idValue == "J_comment_text" || classValue == "btn-pop-bottom") {   //不在该dateLabel点击区域内
        }else{
            blur_text_place();
        }
     })

    //对人评论接口
    $('body').on('click', '.user_replay', function() {
        //console.log('aaaaaaaaaaa');
        if (!$.cookie('userNameCookie')) {
            vication();
            return;
        };
        var $allTextarea = $(this).closest('#discuss_box').find('.replay_kt'),
            $commentTextarea = $(this).closest('.comment_m').find('.replay_kt');
        $allTextarea.hide();
        $commentTextarea.show();
        $commentTextarea.find('textarea').focus();
    });

    $('body').on('click', '.J-reply', function() {
        var $this = $(this),
            rowkey = $this.closest('.comment_m').attr('data-rowkey'),
            ck = $this.closest('.comment_m').attr('data-ck'),
            ding = $this.closest('.comment_m').find('.user_like i').text(),
            butTextarea = $this.closest('.replay_text').children('textarea'),
            content = $.trim(butTextarea.val());

        if ((new Date().getTime()) - $.cookie('last_comment_' + $.parseJSON($.cookie('userNameCookie')).uid) < 10000) {
            $('.btn_pop_r').show().text('评论过快，休息一下吧！');
            return;
        }

        if (content.length >= 400) {
            $('.btn_pop_r').text("输入内容不能超过400个字符")
        } else if (content.length == 0) {
            $('.btn_pop_r').text("输入内容不能为空")
        } else if (content.length < 400) {
            $.ajax({
                type: 'get',
                url: comment_url + '/comment/v1/comment/jsonp/put/person',
                data: {
                    aid: uk_for_tbtj,
                    rowkey: rowkey,
                    reviewto: ck,
                    content: encodeURI(content),
                    ding: ding,
                    rev: 0,
                    userid: $.parseJSON($.cookie('userNameCookie')).uid,
                    username: encodeURI($.parseJSON($.cookie('userNameCookie')).user_name || user_name),
                    userpic: $.parseJSON($.cookie('userNameCookie')).user_name_pic || user_pic_p(),
                    callbackparam: 'jsonpcallback',
                    qid: global_wayPath || 'null',
                    uid: global_uid || 'null',
                    loginid: "null",
                    softtype: global_soft_type || 'null',
                    softname: global_soft_name || 'null',
                    newstype: newstype || 'null',
                    from: global_from || 'null',
                    to: global_to || 'null',
                    os_type: global_os || 'null',
                    browser_type: global_browser || 'null',
                    pixel: 'null',
                    ime: 'null',
                    idx: 0,
                    ishot: 1,
                    fr_url: global_fr_url || 'null',
                    ver: 'null',
                    appqid: 'null',
                    ttloginid: 'null',
                    apptypeid: 'null',
                    appver: 'null',
                    recommendtype: 0,
                    ispush: 0,
                    deviceid: 'null'
                },
                dataType: 'jsonp',
                jsonpCallback: 'jsonpcallback',
                success: function(data) {
                    
                    if (data && data.code != '200') {
                        $('.pop_3').removeClass('none');
                        setTimeout(function() {
                            $('.pop_3').addClass('none');
                        }, 800);
                        return;
                    };
                    var tatleNum = $("#total_num").text();
                    $("#total_num").text(parseInt(tatleNum) + 1);
                    
                    var tatleNumIn = $("#conment_tole_in").text();
                    $("#conment_tole_in").text(parseInt(tatleNumIn) + 1);

                    $this.closest('.replay_kt').hide();
                    $this.closest('.replay_kt').find('textarea').val('');
                    var d = data.comment ? data.comment : [];
                    //console.log('d::', d);
                    //console.log(URL);
                    userpic = d.userpic;
                    username_new = d.username;
                    time = getSpecialTimeStr(d.date);
                    ding = d.ding;
                    content = d.content;
                    $.cookie('last_comment_' + $.parseJSON($.cookie('userNameCookie')).uid, new Date().getTime());
                    $this.closest('.replay_kt').after('<li class="replay_te" >' +
                        '<div class="head_app_img"><img src="' + userpic + '"/></div>' +
                        '<div class="replay_te_l clearfix">' +
                        '<div class="comment_succue_s clearfix">' +
                        '<p class="fl"><span class="db"><span class="comment_s">' + username_new + '</span></span><span class="comment_t">' + time + '</span></p>' +
                        '</div>' +
                        '<p class="mg10">' + fiterScript(content) + '</p>' +
                        '<ul class="replay_kf" style="display: none">' +
                        '<li class="clearfix ">' +
                        '<div class="replay_text">' +
                        '<textarea placeholder="请输入内容"></textarea>' +
                        '<div class="comment_sk"><button>回复</button><span class="btn_pop_r"></span></div>' +
                        '</div>' +
                        '</li></ul>' +
                        '</div>' +
                        '</li>');
                }
            });
        }
    });

    //获取更多对人的评论 接口
    $('body').on('click', '.person_m', function() {
        var $this = $(this),
            $comment = $this.siblings('.comment_m'),
            $lastReplyLi = $comment.children('.replay_c').children('.replay_te').last(),
            rk = $comment.attr('data-rowkey'),
            ck = $lastReplyLi.attr('data-ck'),
            nameCookie = $.cookie('userNameCookie'),
            uname = nameCookie ? encodeURI($.parseJSON(nameCookie).user_name) : 'null',
            upic = nameCookie ? encodeURI($.parseJSON(nameCookie).user_name_pic) : 'null',
            uid = nameCookie ? encodeURI($.parseJSON(nameCookie).uid) : 'null';
        // console.log('rk::', rk);
        // console.log('ck::', ck);
        if (!upic) {
            upic = user_pic_p();
        }
        $.ajax({
            type: 'get',
            url: comment_url + '/comment/v2/comment/jsonp/getreview/' + rk + '/' + ck + '/' + PER_COUNT + '?idx=0&username=' + uname + '&userpic=' + upic + '&userid=' + uid,
            data: {
                callbackparam: 'jsonpcallback',
                qid: global_wayPath || 'null',
                uid: global_uid || 'null',
                loginid: "null",
                softtype: global_soft_type || 'null',
                softname: global_soft_name || 'null',
                newstype: newstype || 'null',
                from: global_from || 'null',
                to: global_to || 'null',
                os_type: global_os || 'null',
                browser_type: global_browser || 'null',
                pixel: 'null',
                ime: 'null',
                idx: 0,
                ishot: 1,
                fr_url: global_fr_url || 'null',
                ver: 'null',
                appqid: 'null',
                ttloginid: 'null',
                apptypeid: 'null',
                appver: 'null',
                recommendtype: 0,
                ispush: 0,
                deviceid: 'null'
            },
            dataType: 'jsonp',
            jsonpCallback: 'jsonpcallback',
            success: function(data) {
                
                //console.log('data::', data);
                // return;
                var d = data.data;
                if (d.length < PER_COUNT) {
                    $this.html('');
                };
                //console.log('data---', d);
                var recommendData = [];
                for (var i = d.length - 1; i >= 0; i--) {
                    recommendData.push({
                        userpic: d[i].userpic,
                        username: d[i].username,
                        ck: d[i].ck,
                        time: getSpecialTimeStr(d[i].date),
                        content: d[i].content,
                    });
                }
                for (var i = 0; i < recommendData.length; i++) {
                    loadRecData(recommendData[i], i);
                }

                function loadRecData(d, i) {
                    // console.log('data---', d);
                    $lastReplyLi.after('<li class="replay_te" data-ck="' + d.ck + '">' +
                        '<div class="head_app_img"><img src="' + d.userpic + '"/></div>' +
                        '<div class="replay_te_l clearfix">' +
                        '<div class="comment_succue_s clearfix">' +
                        '<p class="fl"><span class="db"><span class="comment_s">' + d.username + '</span></span><span class="comment_t">' + d.time + '</span></p>' +
                        '</div>' +
                        '<p class="mg10">' + fiterScript(d.content) + '</p>' +
                        '<ul class="replay_kf" style="display: none">' +
                        '<li class="clearfix ">' +
                        '<div class="replay_text">' +
                        '<textarea placeholder="请输入内容"></textarea>' +
                        '<div class="comment_sk"><button>回复</button><span class="btn_pop_r"></span></div>' +
                        '</div>' +
                        '</li></ul>' +
                        '</div>' +
                        '</li>');
                }
            }
        });

    });
    //点赞的接口
    $('body').on('click', '.user_like', function() {
        var $this = $(this);
        if ($this.hasClass('active')) {
            return;
        }
        $this.addClass('active');
        var rowkey = $this.closest('.comment_m').attr('data-rowkey'),
            ck = $this.closest('.comment_m').attr('data-ck'),
            ding = $this.children('i').text(),
            nameCookie = $.cookie('userNameCookie'),
            uname = nameCookie ? encodeURI($.parseJSON(nameCookie).user_name) : 'null',
            upic = nameCookie ? encodeURI($.parseJSON(nameCookie).user_name_pic) : 'null',
            uid = nameCookie ? encodeURI($.parseJSON(nameCookie).uid) : 'null',
            content = $this.closest('.comment_m').children('.comment_succue_p').text();

        if (!upic) {
            upic = user_pic_p();
        }
        rowkey_d(rowkey, ding, 0, ck);

        function rowkey_d(k, h, m, n) {
            $.ajax({
                type: 'get',
                url: comment_url + '/comment/v1/comment/jsonp/ding',
                data: {
                    aid: uk_for_tbtj,
                    rowkey: k,
                    reviewto: n,
                    content: encodeURI(content),
                    ding: h,
                    rev: m,
                    userid: uid,
                    username: uname,
                    userpic: upic,
                    callbackparam: 'jsonpcallback',
                    qid: global_wayPath || 'null',
                    uid: global_uid || 'null',
                    loginid: "null",
                    softtype: global_soft_type || 'null',
                    softname: global_soft_name || 'null',
                    newstype: newstype || 'null',
                    from: global_from || 'null',
                    to: global_to || 'null',
                    os_type: global_os || 'null',
                    browser_type: global_browser || 'null',
                    pixel: 'null',
                    ime: 'null',
                    idx: 0,
                    ishot: 1,
                    fr_url: global_fr_url || 'null',
                    ver: 'null',
                    appqid: 'null',
                    ttloginid: 'null',
                    apptypeid: 'null',
                    appver: 'null',
                    recommendtype: 0,
                    ispush: 0,
                    deviceid: 'null'
                },
                dataType: 'jsonp',
                jsonpCallback: 'jsonpcallback',
                success: function(data) {

                    $this.prev('.num_l').removeClass('active');
                    $this.children('i').text(parseInt($this.children('i').text()) + 1);
                    $this.closest('.li_d').append('<div class="pop_k pop_4"><i></i>你已点赞</div>')
                    setTimeout(function() {
                        $('.pop_4').hide();
                    }, 800);
                },
                complete: function() {}
            })
        }
    });
})();

var docmini = window.document, inputmini = docmini.createElement('input');
 
if( typeof inputmini['placeholder'] == 'undefined' ) // 如果不支持placeholder属性
{
    $('input').each(function( ele )
    {
 
        var me = $(this);
 
        var ph = me.attr('placeholder');
 
        if( ph && !me.val() )
        {
            me.val(ph).css('color', '#999').css('line-height', me.css('height'));
        }
 
        me.on('focus', function()
        {
            if( me.val() === ph)
            {
                me.val(null).css('color', '');
            }
 
        }).on('blur', function()
        {
            if( !me.val() )
            {
                me.val(ph).css('color', '#999').css('line-height', me.css('height'));
            }
        });
    });
}
