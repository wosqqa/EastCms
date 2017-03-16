/**
 * 此js文件供“下载软件”栏目使用
 * @author created by lizhigao（lizhigao@021.com）
 * @date 2015-05-26
 */
$(function(){
    /* 推广资源类别导航栏 start */
    var $checkedFlag = $('.product-choice-checked-flag');
    var initLeft,initWidth;
    var type = 'all';
    if(type != 'undefined'){
        if(type == 0){
            initLeft = $('[data-choice=all]').position().left + 20;
            initWidth = $('[data-choice=all]').outerWidth();
            $('.product-choice li').removeClass('checked');
            $('[data-choice=all]').addClass('checked');
        } else {
            initLeft = $('[data-choice=' + type + ']').position().left + 20;
            initWidth = $('[data-choice=' + type + ']').outerWidth();
            $('[data-choice=all]').removeClass('checked');
            $('[data-choice=' + type + ']').addClass('checked').siblings().removeClass('checked');
        }
    } else {
        initLeft = $('.product-choice span.show-all').position().left + 20;
        initWidth = $('.product-choice span.show-all').outerWidth();
    }

    $checkedFlag.css({'left': initLeft, 'width': initWidth});
    $('.product-choice span.show-all,.product-choice li').on('mouseover', function(){
        $checkedFlag.stop();
        // IE6浏览器得到的this.offsetLeft的值和谷歌浏览器得到的值不同，所以改用兼容方案：$(this).position().left。
        $checkedFlag.animate({'left': $(this).position().left + 20,'width': $(this).outerWidth()}, 300);
    }).on('mouseout', function(){
        $checkedFlag.stop();
        $checkedFlag.animate({'left': initLeft, 'width': initWidth}, 300);
    }).on('click', function(e){
        initLeft = $(this).position().left + 20;
        initWidth = $(this).outerWidth();
        $('.product-choice span.show-all,.product-choice li').removeClass('checked');
        $(this).addClass('checked');
        //window.location.href = "http://www.7654.com/promote/index/type/"+$(this).data('choice');
    });
    /* 推广资源类别导航栏 end */

    /* 定制个性化激活码 start */
    $('#personalityActivationCode').click(function(){
        var	$title = $("#customizePopupMessage .p-title"),
            $main = $("#customizePopupMessage .popupMain");
        $('#customizePopupMessage').popupMeans({
            popid: "#customizePopupMessage", // 弹出框ID.
            width: 500, // 弹出框宽.
            height: 300, // 弹出框高.
            shade: false, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
            callback: function () {
                var str = "<p style='line-height:20px;margin:12px;color:#666;font-size:12px;text-align:left;' >定制专属个性激活码是为了方便技术员在邀请过程中使用简单、易记的邀请工具进行邀请，提高邀请成功率。专属个性激活码不影响原激活码的使用；定制成功后，专属个性激活码和原有激活码均可用于邀请技术员。</p>";
                str += "<li style='list-style-type: none;margin: 15px;'><div style='text-align:right;float:left;height:60px;_line-height:30px;font-size:14px;color:#666;'>专属个性激活码：</div>";
                str += "<div style='float:left;width:358px'><textarea style='_padding:0;float:left;width:260px;height:48px;border:1px solid #eee;overflow:hidden\9;padding:5px;resize: none;' id='customizeCode' data-copy='copy'></textarea>";
                str += "<div style='width: 228px;'><p style='font-size: 12px;color: red;margin: 0;text-align: left;display:none;' id='show-msg'></p></div>";
                str += "<div style='margin-top:10px;_margin-top:0;_margin-left:2px;_height:20px;_line-height:20px;color:#aaa;font-size:12px;text-align:left;float:left;'>1-8位字母或数字组成，不区分大小写，定制后不可修改</div></div></li>";
                $title.text("定制激活码");
                $main.html(str).height("200");
                $('#customizePopupMessage #customizeCode').focus();
                /*$("#customizeSubmit").click(function () {
                    alert('TO DO...');
                    return false;
                });*/
            } // 弹出回调函数.
        });
    });
    //定制专属个性激活码
    $('#customizeSubmit').on('click',function(){
        var user_id = "{$userid}";
        var custom_idcode = $('#customizePopupMessage #customizeCode').val();
        var img_html = "<img style='vertical-align:middle;padding:5px;' src='/Public/Images/warnning.png' />";
        if(user_id == ''){
            $('#customizePopupMessage #show-msg').html(img_html+'请登录').fadeIn();
            return false;
        }
        else if(custom_idcode == ''){
            $('#customizePopupMessage #show-msg').html(img_html+'请输入专属个性激活码').fadeIn();
            return false;
        }
        var reg = /^[0-9a-zA-Z]{1,8}$/;
        if(!reg.test(custom_idcode)){
            $('#customizePopupMessage #show-msg').html(img_html+'定制的激活码不符合规则哦').fadeIn();
            return false;
        }
        $.ajax({
            url: "{$Think.USER_URL}"+'/User/custom_idcode',
            type: "GET",
            data: {
                user_id : user_id,
                custom_idcode : custom_idcode
            },
            dataType: "jsonp",
            success: function( data ) {
                if(data.state == 0){
                    $('#customizePopupMessage #show-msg').html(img_html+data.msg).fadeIn();
                }else{
                    window.location.reload();
                }
            }
        });
    });
    /* 定制个性化激活码 end */

    /* 复制事件 start */
    $('.copyBtn').zclip({
        path: '../../../Public/js/plugin/zclip/ZeroClipboard.swf',
        copy: function(){
            return $(this).prev().val();
        },
        afterCopy: function(){
            $(this).css('background-color', '#b5b5b5');
            $(this).prev().css('border-color', '#b5b5b5');
            //var w = $(this).outerWidth();
            var h = $(this).outerHeight();
            var position = $(this).offset();
            var $p;
            if($('.copySuccessTips').length > 0){
                $p = $('.copySuccessTips');
            } else {
                $p = $('<p class="copySuccessTips">复制成功</p>');
            }
            $p.appendTo('body');
            $p.css({
                'display': 'none',
                'color': 'red',
                'background-color': 'white',
                'position': 'absolute',
                'z-index': 999,
                'top': position.top + 2,
                'left': position.left - 60
            });
            $p.fadeIn();
            setTimeout(function(){
                $p.fadeOut();
            }, 1000);
        }
    });
    /* 复制事件 end */

});