/**
 * 头像设置
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-31
 */
var C = {},
    $S = {},
    $jcrop_api = $.Jcrop('#target');
$(function () {
    var jcrop_api,
        boundx,
        boundy,
        $preview = $('#preview-pane'),
        $clip_upload = $("#target"),
        $clip_pic_hide = $("#target_hide"),
        $pic_url = $("#userPic"),
        original_w = $("#original_w"),
        original_h = $("#original_h"),
        $clip_submit = $("#clip_submit"), // 缓存提交按钮.
        $show_pic = $("#show_pic");

    var data = (new Date()).getTime();
    /* 200*200. */
//	$S.pcnt_200 = $preview.find(".h-pic-200");
//	$S.pimg_200 = $S.pcnt_200.children("img");
//	$S.xsize_200 = $S.pcnt_200.width();
//	$S.ysize_200 = $S.pcnt_200.height();
    /* 120*120. */
    $S.pcnt_120 = $preview.find(".h-pic-120");
    $S.pimg_120 = $S.pcnt_120.children("img");
    $S.xsize_120 = $S.pcnt_120.width();
    $S.ysize_120 = $S.pcnt_120.height();
//	/* 48*48. */
//	$S.pcnt_48 = $preview.find(".h-pic-48");
//	$S.pimg_48 = $S.pcnt_48.children("img");
//	$S.xsize_48 = $S.pcnt_48.width();
//	$S.ysize_48 = $S.pcnt_48.height();

    C.Xone = $("#coordX1");
    C.Yone = $("#coordY1");
    C.Xtwo = $("#coordX2");
    C.Ytwo = $("#coordY2");
    C.width = $("#picWidth");
    C.height = $("#picHeight");

    // 单人照片附件上传.
    setTimeout(function () {
        $("#localityUploadify").uploadify({
            'auto': true,     // false:选择文件后不直接上传，true选择文件后直接上传，默认是true
            'method': 'post', // 传递给服务器文件的方式，默认就是post
            'swf': '/Public/Js/uploadify/uploadify.swf',  // 控件中flash文件的地址，这个地址用相对地址和绝对地址都可以
            'uploader': '/upload/file',       // 后台服务的地址
            'scriptAccess': 'always',
            'fileTypeExts': '*.jpg;*.png',            // 选择的文件过滤类型，选择文件时可以只显示你选择的文件，如果不想做控制，则删除即可
            'height': '30',
            'width': '140',
            'buttonText': ' 本地上传',
            'debug': false, 	//开启或关闭debug模式
            'fileSizeLimit': '2048KB',
            'removeCompleted': false,
            'onSelect': function () {
                //$("#img_url").val("");

            },
            'onQueueComplete': function (queueData) {

                var h = queueData;

            },// 这里可以获取上传完成后所有上传队列里的信息
            'onSelectError': function (file, errorCode, errorMsg) {

            },
            'onUploadSuccess': function (fileObj, data, response) {

                var d = eval('(' + data + ')'),
                    r = response,
                    cancel = $('.cancel'),
                    $span_data = $('span.data');


                if (d.success) {

                    //cancel.hide();
                    $span_data.text("成功");

                    $pic_url.val(d.file);
                    $show_pic.hide();
                    $clip_upload.attr("src", d.file).show();
                    var _actual = getActualSize(d.file);

                }
            }
        });
    }, 10);

    // 图像裁剪API.

    function updatePreview(c) {

        var $file = $pic_url.val(),
            $jcrop_holder = $(".jcrop-holder"),
            $jcrop_tracker = $jcrop_holder.find(".jcrop-tracker"),
            $img = $jcrop_holder.find("img");

        //debugger;
        if (parseInt(c.w && boundx) > 0) {
            var rx_200 = $S.xsize_200 / c.w,
                ry_200 = $S.ysize_200 / c.h,
                rx_120 = $S.xsize_120 / c.w,
                ry_120 = $S.ysize_120 / c.h,
                rx_48 = $S.xsize_48 / c.w,
                ry_48 = $S.ysize_48 / c.h;

//			$S.pimg_200.attr("src",$file).css({
//				width: Math.round(rx_200 * boundx) + 'px',
//				height: Math.round(ry_200 * boundy) + 'px',
//				marginLeft: '-' + Math.round(rx_200 * c.x) + 'px',
//				marginTop: '-' + Math.round(ry_200 * c.y) + 'px'
//			});
            $S.pimg_120.attr("src", $file).css({
                width: Math.round(rx_120 * boundx) + 'px',
                height: Math.round(ry_120 * boundy) + 'px',
                marginLeft: '-' + Math.round(rx_120 * c.x) + 'px',
                marginTop: '-' + Math.round(ry_120 * c.y) + 'px'
            });
//			$S.pimg_48.attr("src",$file).css({
//				width: Math.round(rx_48 * boundx) + 'px',
//				height: Math.round(ry_48 * boundy) + 'px',
//				marginLeft: '-' + Math.round(rx_48 * c.x) + 'px',
//				marginTop: '-' + Math.round(ry_48 * c.y) + 'px'
//			});

            C.Xone.val(c.x);
            C.Yone.val(c.y);
            C.Xtwo.val(c.x2);
            C.Ytwo.val(c.y2);
            C.width.val(c.w);
            C.height.val(c.h);
        }
    };

    // 获取图片原始大小.

    function getActualSize(e) {

        var $original_size = new Image(); // 创建一个替身
        var $jcropholder = $(".jcrop-holder"),
            $clip_box = $(".clip-pic-box");

        $original_size.style.position = 'absolute';
        $original_size.style.visibility = 'hidden';
        $original_size.style.top = $original_size.style.left = '0px';
        $original_size.src = e;
        document.body.appendChild($original_size);

        /* 图片加载完成之后执行裁剪功能.*/

        $original_size.onload = function () {

            //alert(1);
            var img_width = $original_size.width, // 上传图片原始宽.
                img_height = $original_size.height, // 上传图片原始高.
                max_size = 300;

            if (img_width > img_height) {
                /*
                 * 当原始图片宽大于高度时，以宽300缩放，高度自适应.
                 *
                 */
                if (img_width > max_size) {

                    var equal_h = (max_size / img_width) * img_height;
                    //$clip_upload.width(max_size);
                    $clip_upload.css({"width": max_size, "height": equal_h}).addClass("w300");

                } else {
                    // 当宽和高都小于300时，不缩放.

                    $clip_upload.css({"width": img_width, "height": img_height}).removeClass("w300");
                }
            } else {
                /*
                 * 当原始图片高大于宽度时，以高300缩放，宽度自适应.
                 *
                 */
                if (img_height > max_size) {

                    var equal_w = (max_size / img_height) * img_width;

                    $clip_upload.css({"width": equal_w, "height": max_size}).removeClass("w300");
                } else {

                    $clip_upload.css({"width": img_width, "height": img_height}).removeClass("w300");
                }
            }

            //$jcrop_api.setImage(d.file); /*设定（或改变）图像.*/
            if ($jcropholder.length == 1) {
                $jcrop_api.destroy(); // 重新上传图片后销毁Jcorp.
                $jcropholder.remove();
            }

            boundx = $clip_upload.width(),
                boundy = $clip_upload.height();
            $clip_upload.Jcrop({
                onChange: updatePreview,
                onSelect: updatePreview,
                aspectRatio: 1 / 1,
                setSelect: [200, 200, 50, 50],
                minSize: [0, 0],
                maxSize: [300, 300]
            }, function () {
                // Use the API to get the real image size

                var bounds = this.getBounds();
                boundx = bounds[0];
                boundy = bounds[1];
                // Store the API in the jcrop_api variable
                jcrop_api = this;

                // Move the preview into the jcrop container for css positioning
                //$preview.appendTo(jcrop_api.ui.holder);
                /*
                 * 当裁剪图像高小于300时，让图像横向居中.
                 */

                if (boundy < 300) {

                    mt = (300 - boundy) / 2 + "px";

                    $clip_box.css({"height": boundy, "padding-top": mt, "padding-bottom": mt});
                } else {

                    $clip_box.css({"height": "300px", "padding-top": "0px", "padding-bottom": "0px"});
                }

                $original_size.parentNode.removeChild($original_size); // 移除替身.
                //jcrop_api.destroy();
                $clip_upload.trigger("click");
            });


        };
    }

    // 提交裁剪.

    $clip_submit.on("click", function () {

        var data = {

            clipX: C.Xone.val(),
            clipY: C.Yone.val(),
            width: C.width.val(),
            imgSrc: $pic_url.val()
        }
        var obj = this;
        $.ajax({
            type: "POST",
            url: USER_URL + "/upload/upload",
            data: data,
            dataType: "JSON",
            success: function (d) {
                if (d.file) {
                    //alert("设置成功");
                    $(obj).popupMeans({
                        popid: "#popupMessage", // 弹出框ID.
                        width: 400, // 弹出框宽.
                        height: 172, // 弹出框高.
                        shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
                        callback: function () {

                            var $messageMain = $("#popupMessage").find("[data-main]"),
                                _height = 172 - 81;

                            $messageMain.height(_height);
                            $("#popupMessage").find('.contents').html('<div style="text-align: center;margin-top:10px;">设置成功</div>');
                            $("#popupMessage").find('.submit-btn').click(function () {
                                if (d.success == 1) {
                                    $(this).attr({href: '/edit/index/type/1'});
                                } else {
                                    $(this).attr({href: ('/header/index/type/1?r=' + new Date().getTime())});
                                }

                            }).focus();
                        } // 弹出回调函数.
                    });
                    //location.href = "/edit/index/type/1";
                }

            }
        });

    });
});