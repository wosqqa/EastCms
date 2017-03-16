/*
 * 7654通用js，一般是供通用模板调用。
 * @author created by lizhigao（lizhigao@021.com）
 * @date 2015-05-22
 */
$(function(){
    /* 全局变量定义区 - start */
    // 定义一个命名空间Ie
    GLOBAL.namespace('Ie');
    // 定义一个全局变量
    GLOBAL.Ie.isIe = !!window.ActiveXObject;
    GLOBAL.Ie.isIe6 = !!window.ActiveXObject && !window.XMLHttpRequest;
    GLOBAL.Ie.isIe8 = !!window.ActiveXObject && !!document.documentMode;
    /* 全局变量定义区 - end */

    /* 公用左侧菜单 start */
    $('#userCenter_sidebarMenu').foldMenu({
        time: 300
    });
    /* 公用左侧菜单 end */

    /* 公用提示鼠标悬停提示(必须将icon中添加一个J-question-icon的类) */
    $('.J-question-icon').poshytip({
        className: 'tip-yellowsimple',
        showTimeout: 1,
        alignTo: 'target',
        alignX: 'center',
        offsetY: 5,
        allowTipHover: true
    });

});