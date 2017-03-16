/**
 * 全局公用脚本
 * @author 
 * 		created by lizhigao<lizhigao@021.com> on 2016-09-12
 */
/* global define */
define(function(require) {
    var $ = require('jquery');
    /**
     * 提供命名管理，管理全局变量。
     * 所有全局变量必须命名在GLOBAL里面的命名空间下，将变量冲突、覆盖问题降到最小。
     * @type {{}}
     */
    var Global = {};
    /**
     * 给创建命名空间提供一个统一接口
     * 调用方法：Global.namespace('Ie');这样便创建了一个ie的命名空间。
     * 创建完命名空间后，如果需要定义一个全局变量，方法如下：Global.Ie.isIe6;
     * 使用该变量的方法也是：Global.Ie.isIe6
     * @param str
     */
    Global.namespace = function(str) {
        var arr = str.split("."),
            o = Global;
        for (var i = (arr[0] === "Global") ? 1 : 0; i < arr.length; i++) {
            o[arr[i]] = o[arr[i]] || {};
            o = o[arr[i]];
        }
    };

    Global.namespace('Const');
    Global.namespace('Util');
    Global.namespace('Ajax');
    // 全局常量
    Global.Const = {
    	BASE_URL: 'http://report.021.com/datacenter/',
    	BASE_PATH: '/' // 默认src/为根目录
    };
    // 工具方法
    Global.Util = {
        /**
         * 格式化金额
         * @param  {[type]} s [description]
         * @return {[type]}   [description]
         */
        formatMoney: function(s) {
            s = '' + s;
            if (/[^0-9\.]/.test(s)) {
                return "invalid value";
            }
            s = s.replace(/^(\d*)$/, "$1.");
            s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
            s = s.replace(".", ",");
            var re = /(\d)(\d{3},)/;
            while (re.test(s)){
                s = s.replace(re, "$1,$2");
            }
            s = s.replace(/,(\d\d)$/, ".$1");
            return "￥" + s.replace(/^\./, "0.");
        },
        /**
	     * 获取url中参数的值
	     * @param  {[type]} name 参数名
	     * @return {[type]}      参数值
	     */
	    getQueryString: function(name){
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return decodeURI(r[2]);
	        return null;
	    }
    };
    // 请求方法
    Global.Ajax = {
    	/**
    	 * ajax jsonp跨域请求
    	 * @param  {[type]} options 
    	 * {
    	 * 		url: '',
    	 * 		data: '',
    	 * 		timeout: '',
    	 * 		success: '',
    	 * 		error: '',
    	 * 		complete: ''
    	 * }
    	 */
    	jsonpRequest: function(options) {
	        $.ajax({
	            url: Global.Const.BASE_URL + options.url,
	            data: options.data,
	            timeout: options.timeout,
	            dataType: 'jsonp',
	            jsonp: "callbackparam",
                beforeSend: options.beforeSend,
	            success: options.success,
	            error: options.error,
	            complete: options.complete
	        });
	    },
	    
	    /**
    	 * ajax请求（默认json）
    	 * @param  {[type]} options 
    	 * {
    	 * 		url: '',
    	 * 		type: '',
    	 * 		data: '',
    	 * 		timeout: '',
    	 * 		dataType: '',
    	 * 		success: '',
    	 * 		error: '',
    	 * 		complete: ''
    	 * }
    	 */
	    request: function(options) {
	        $.ajax({
	            url: Global.Const.BASE_URL + options.url,
	            type: options.type || 'GET',
	            data: options.data,
	            timeout: options.timeout,
                beforeSend: options.beforeSend,
	            dataType: options.dataType || 'json',
	            success: options.success,
	            error: options.error,
	            complete: options.complete
	        });
	    }
    };

    // css效果
    Global.Css = {
        /**
         * 添加loading动画效果
         */
        addLoading: function() {
            $('body').append('<div class="shadePlan" id="shadePlan">' +
                                '<div class="pacmen">' +
                                '<div></div>' +
                                '<div></div>' +
                                '<div></div>' +
                                '<div></div>' +
                                '<div></div>' +
                                '<div class="load-txt">loading . . .</div>' +
                            '</div>' +
                        '</div>');
        },

        /**
         * 清除loading动画效果
         */
        removeLoading: function(elements) {
            $('body').children('#shadePlan').remove();
        }

    };
    return Global;
    
});
