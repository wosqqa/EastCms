/**
 * 监听hash值的变化
 */
/* global define */
/* global window */
define(function(require) {
    // 依赖js
    var $ = require('jquery');

    // 全局变量
    // var hashToPathConfig = {
    //         "#songheng/shouyi/zhengtishouyi": "songheng/shouyi/zhengtishouyi.html"
    //     };
    var $ifr = $('#J_iframe');

    function Hash() {

    }

    Hash.prototype = {
        /**
         * 初始化
         */
        init: function() {
            var scope = this;
            scope.regHashChange();
        },

        /**
         * hashchange事件注册
         * @return {[type]} [description]
         */
        regHashChange: function() {
            $(window).on('hashchange', function(e) {
                // console.log(e);
                // console.log('oldURL==', e.originalEvent.oldURL);
                // console.log('oldURL==', e.originalEvent.newURL);
                // console.log('hash::', window.location.hash);
                var ifrSrc = '';
                if (window.location.hash) {
                    ifrSrc = 'iframe/' + window.location.hash.substring(1) + '.html?t=' + (+new Date());
                } else {
                    ifrSrc = 'iframe/index.html?t=' + (+new Date());
                    // ifrSrc = 'iframe/songheng/shouyi/zhengtishouyi.html';
                }
                $ifr.attr('src', ifrSrc);
            });
            // $(window).trigger('hashchange');
        }


    };

    return Hash;
});
