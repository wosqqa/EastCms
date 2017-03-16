/**
 * 弹窗插件jquery.zgwindow.js
 * 初始化：$('...').zgwindow({...});
 * 支持jquery插件调用方法，支持AMD模块化调用
 * @version v1.0
 * @author lizhigao
 * @date 2015-09-19
 */
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD模式 */
        define(['jquery'], factory);
    } else {
        /* 全局模式 */
        factory(jQuery, window);
    }
})(function($, window) {
    // 插件名称
    var PLUGIN_NAME = 'zgwindow',
        // 默认配置参数
        defaults = {
            width: 400,         // 弹窗宽度
            height: 200,        // 弹窗高度
            title: '信息',      // 弹窗标题
            content: '',        // 弹窗内容
            hideHeader: false,  // 隐藏弹窗头部
            hideFooter: false,  // 隐藏弹窗尾部
            okBtnText: '确定',  // 确定按钮文字
            cancelBtnText: '',  // 取消按钮文字(为空则不显示取消按钮)
            shade: true,            // 遮罩
            // position: 'center',     // 窗口位置(top-left, top, top-right, left, cetner, right, bottom-left, bottom, bottom-right 供八个位置)
            okBtnClick: null,       // 确定按钮点击事件
            closeBtnClick: null     // 关闭和取消按钮点击事件
        };

    var isIe = !!window.ActiveXObject,
        isIe6 = !!window.ActiveXObject && !window.XMLHttpRequest;

    /**
     * 获取浏览器可视宽度
     * @return {[type]} [description]
     */
    function getClientWidth(){
        var width = window.innerWidth 
        if(typeof width != 'number'){ 
            if(window.document.compatMode == 'CSS1Compat'){ 
                width = window.document.documentElement.clientWidth; 
            }else{ 
                width = window.document.body.clientWidth; 
            }
        }
        return width;
    }
    /**
     * 获取浏览器可视宽度
     * @return {[type]} [description]
     */
    function getClientHeight(){
        var height = window.innerHeight; 
        if(typeof height != 'number'){ 
            if(window.document.compatMode == 'CSS1Compat'){ 
                height = window.document.documentElement.clientHeight; 
            }else{ 
                height = window.document.body.clientHeight; 
            }
        }
        return height;
    }

    // 创建一个弹窗对象
    function ZgWindow(element, options){
        // 插件名
        this._name = PLUGIN_NAME;
        // 默认配置参数
        this._defaults = defaults;
        // 配置参数
        this.settings = $.extend(true, {}, defaults, options);
        // window对象
        this.$element = $(element);
        // 遮罩对象
        this.$shade = $('<div class="zg-window-shade"></div>');
        // 保存element中的内容
        this.content = this.$element.html();
    }

    ZgWindow.prototype = {
        constructor: ZgWindow,
        /**
         * 初始化窗口
         * @return this
         */
        init: function(){
            // 清空弹窗内容
            this.$element.html('');
            var scope = this,
                $windowHeader = $('<div class="zg-window-header">' + this.settings.title + '</div>'),
                $windowBody = $('<div class="zg-window-body">' + (this.settings.content ? this.settings.content : this.content) + '</div>'),
                $windowfooter = $('<div class="zg-window-footer"><button class="zg-window-btn-ok" type="button">' + this.settings.okBtnText + '</button></div>'),
                $close = $('<span class="zg-window-close"><a href="javascript:;">x</a></span>');
            this.$element.css({
                'width': this.settings.width,
                'height': this.settings.height,
                'margin-left': -(this.settings.width / 2),
                'margin-top': -(this.settings.height / 2)
            });
            if(isIe6){
                this.$element.css('marginTop', ($(window).height() - this.settings.height) / 2);
            }
            // 添加阴影
            if(this.settings.shade === true){
                this.$element.before(this.$shade);
            }

            // 添加标题
            if(this.settings.hideHeader !== true){
                this.$element.append($windowHeader);
            } else {
                // 防止和关闭按钮重叠
                $windowBody.css('padding', '14px 40px 14px 20px');
            }
            // 添加内容
            this.$element.append($windowBody);
            // 添加关闭按钮
            this.$element.append($close);
            // 添加footer
            if(this.settings.hideFooter !== true){
                if(this.settings.cancelBtnText){
                    $windowfooter.append('<button class="zg-window-btn-cancel" type="button">' + this.settings.cancelBtnText + '</button>');
                }
                this.$element.append($windowfooter);
            }
            // 先显示再计算高度，因为对于display:none的元素是无法获取其实际宽高的。
            this.show();
            // 设置内容的高度(40为windowBody的padding值)
            var pd = this.settings.hideHeader === true ? 28 : 40;
            $windowBody.height(this.settings.height - $windowHeader.outerHeight(true) - $windowfooter.outerHeight(true) - pd);  
            // 关闭事件
            this.$element.on('click.zgwindow', '.zg-window-close,.zg-window-btn-cancel', function(){
                if(typeof scope.settings.closeBtnClick == 'function'){
                    scope.settings.closeBtnClick.call(scope);
                }
                scope.destructor();
            });
            // 确定事件
            this.$element.on('click.zgwindow', '.zg-window-btn-ok', function(){
                if(typeof scope.settings.okBtnClick == 'function'){
                    scope.settings.okBtnClick.call(scope);
                }
            });
        },
        show: function(){
            this.$shade.show();
            this.$element.show();
            if(isIe6){
                this.$shade.css({
                    'height': window.document.body.scrollHeight > $(window).height() ? window.document.body.scrollHeight + 'px' : $(window).height() + 'px' 
                });
            }
        },
        hide: function(){
            this.$shade.hide();
            this.$element.hide();
        },
        fadeIn: function(){
            this.$shade.fadeIn();
            this.$element.fadeIn();
        },
        fadeOut: function(){
            this.$shade.fadeOut();
            this.$element.fadeOut();
        },
        destructor: function(){
            this.hide();
            this.$element.data(PLUGIN_NAME, null);
            this.$element.off('.zgwindow');
            this.$element.html(this.content).removeAttr('style');
            this.$shade.remove();
        }
    };

    /**
     * 初始化插件
     * @param  {String|Object} option String: 作为方法/事件调用，Object: 插件初始化。
     * @param  {Object} param  参数
     * @return {Object}        
     */
    $.fn[PLUGIN_NAME] = function(option, param) {
        var value, args = [];
        // 将参数arguments存储到args数组中
        Array.prototype.push.apply(args, arguments);
        // 存储返回的值，方便插件返回。 此时this是jquery对象
        var $elements = this.each(function() {
            // this为DOM对象
            var $this = $(this),    
                // 获取插件对象，如果存在。
                obj = $this.data(PLUGIN_NAME), 
                // 获取option参数,存储到options中
                options = typeof option == 'object' && option;
            /*
                1、插件已经初始化(为什么要插件已经初始化？（个人理解）：必须先初始化插件，才能调用其中的方法。
                如果没有初始化插件就想调用方法，obj将是null，插件将不会有任何操作。此判断可优化。
                因为：第一次如果这样调用：$('...').zgwindow('init', {...})将不被支持，只能这样调用：$('...').zgwindow({...}));
                2、判断第一个参数option是否是string类型，
                3、判断该option是否是插件的一个方法。
             */
            if (obj && typeof option === 'string' && obj[option]) {
                // 删除数组中第一个值（方法名），其余值将作为方法的参数。
                args.shift();
                // 调用option方法并返回相应的返回值给value。
                value = obj[option].apply(obj, args);
            } else {
                /*
                    1、未初始化（即第一次调用时）
                    2、option不是string类型
                    3、无其他参数，即param为空
                 */
                if (!obj && typeof option !== 'string' && !param) {
                    $this.data(PLUGIN_NAME, (obj = new ZgWindow(this, options)));
                    // 调用初始化方法。也可以放到构造方法中去调用init方法。
                    obj.init();
                }
            }
        });
        return typeof value !== 'undefined' ? value : $elements;
    };

    return ZgWindow;
});
