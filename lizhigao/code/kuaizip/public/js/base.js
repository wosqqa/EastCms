/*
 * 一般所有页面都会引用该js
 * 1、对原声js扩展；
 * 2、js兼容问题解决方案；
 * 3、封装一些与页面元素无关的便于开发的方法，
 * 4、提供命名空间，降低命名冲突问题。
 * 一般由创建人维护，修改需谨慎。
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-22
 */
/**
 * 提供命名管理，管理全局变量。
 * 所有全局变量必须命名在GLOBAL里面的命名空间下，将变量冲突、覆盖问题降到最小。
 * @type {Object}
 */
var GLOBAL = {};
/**
 * 给创建命名空间提供一个统一接口
 * 调用方法：GLOBAL.namespace('Ie');这样便创建了一个ie的命名空间。
 * 创建完命名空间后，如果需要定义一个全局变量，方法如下：GLOBAL.Ie.isIe6;
 * 使用该变量的方法也是：GLOBAL.Ie.isIe6
 * @param str
 */
GLOBAL.namespace = function(str){
    var arr = str.split("."),o = GLOBAL;
    for(var i = (arr[0] == "GLOBAL") ? 1 : 0; i < arr.length; i++){
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};
// 定义命名空间
GLOBAL.namespace('Dom');
GLOBAL.namespace('Event');
GLOBAL.namespace('Js');
GLOBAL.namespace('Cookie');

/* DOM操作 */
GLOBAL.Dom = {
    /**
     * 透明度(兼容IE)
     * @param node DOM节点对象或DOM节点对象的id值
     * @param level 透明度值：0~100（如：20表示透明度为20%）
     */
    setOpacity: function(node, level){
        var nd = typeof node == 'string' ? document.getElementById(node) : node;
        if(document.all){   // IE
            nd.style.filter = 'alpha(opacity=' + level + ')';
        } else {            // FF
            nd.style.opacity = level / 100;
        }
    },
    /**
     * 阻止事件冒泡(兼容IE)
     * @param e 事件对象
     */
    stopPropagation: function(e){
        var ev = window.event || e;
        if(document.all){
            ev.cancelBubble = true;
        } else {
            ev.stopPropagation();
        }
    }
};
/* 事件操作 */
GLOBAL.Event = {
    /**
     * 获取event对象(兼容IE)
     * @param e event对象
     * @returns {Object|EventTarget}
     */
    getEventTarget: function(e){
        var ev = window.event || e;
        return ev.srcElement || ev.target;
    },

    /**
     * 获取鼠标在网页中的位置（兼容IE、FF）
     * @param evt  事件对象
     * @returns {{x: *, y: *}} 坐标位置对象
     */
    getMousePosition: function(evt){
        var xPos, yPos;
        evt = evt || window.event;
        if (evt.pageX) {
            xPos=evt.pageX;
            yPos=evt.pageY;
        } else {
            xPos=evt.clientX + document.body.scrollLeft - document.body.clientLeft;
            yPos=evt.clientY + document.body.scrollTop - document.body.clientTop;
        }
        return {x: xPos, y: yPos};

    },
    /**
     * 获取浏览器兼容的event对象
     * @param event
     * @returns {*} event对象
     */
    getEventCompat: function(event){
        var type = event.type;
        if (type == 'DOMMouseScroll' || type == 'mousewheel') {
            event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        }
        if (event.srcElement && !event.target) {
            event.target = event.srcElement;
        }
        if (!event.preventDefault && event.returnValue !== undefined) {
            event.preventDefault = function() {
                event.returnValue = false;
            };
        }
        /* ......其他一些兼容性处理 */
        return event;
    },
    /**
     * 添加事件方法
     * @param el        添加事件的dom元素对象
     * @param eventType 事件类型
     * @param fn        事件回调方法
     * @param capture
     */
    addEvent: function(el, type, fn, capture){
        var scope = this;
        if (window.addEventListener) {
            if (type === "mousewheel" && document.mozHidden !== undefined) {
                type = "DOMMouseScroll";
            }
            el.addEventListener(type, function(event) {
                fn.call(el, scope.getEventCompat(event));
            }, capture || false);
        } else if (window.attachEvent) {
            el.attachEvent("on" + type, function(event) {
                event = event || window.event;
                fn.call(el, scope.getEventCompat(event));
            });
        }
    },
    /**
     * 阻止事件冒泡（兼容）
     * @param event
     */
    stopBubble: function(event){
        if(event.stopPropagation){
            event.stopPropagation();//在基于firefox内核的浏览器中支持做法stopPropagation
        }else{
            event.cancelBubble=true;//基于ie的写法
        }
    }
};

/* 原声JavaScript扩展 */
GLOBAL.Js = {
    /**
     * 去空白
     * @param ostr 需处理的值
     * @returns {string|void|XML|*} 处理后的值
     */
    trim: function (ostr){
        return ostr.replace(/^\s+|\s+$/g,'');
    },
    isNumber: function (s){
        return !isNaN(s);
    },
    isString: function (s){
        return typeof s === 'string';
    },
    isBoolean: function (s){
        return typeof s === 'boolean';
    },
    isFunction: function (s){
        return typeof s === 'function';
    },
    isNull: function (s){
        return s === null;
    },
    isUndefined: function (s){
        return typeof s === 'undefined';
    },
    isEmpty: function (s){
        return /^\s*$/.test(s);
    },
    isBlank: function(s){
        return typeof s === null || typeof s === 'undefined' || s.length === 0 || /^\s*$/.test(s);
    },
    isArray: function (s){
        return s instanceof Array;
    }
};
/* cookie扩展 */
GLOBAL.Cookie = {
    /**
     * 设置cookie
     * @param name 名称
     * @param value 值
     * @param expires 有效时间（单位：小时）（可选）
     */
    set: function(name, value, expires){
        var expTimes = expires * 60 * 60 * 1000; // 毫秒
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + expTimes);
        var expString = expires ? ';expires=' + expDate.toUTCString() : '';
        var pathString = ';path=/';
        document.cookie = name + '=' + encodeURI(value) + expString + pathString;
    },
    /**
     * 读cookie
     * @param name
     */
    get: function(name){
        var cookieStr = ';' + document.cookie + ';';
        var index = cookieStr.indexOf(';' + name + '=');
        if(index != -1){
            var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
            return decodeURI(s.substring(0, s.indexOf(';')));
        } else {
            return null;
        }
    },
    /**
     * 删除cookie
     * @param name
     */
    del: function(name){
        var exp = new Date(new Date().getTime() - 1);
        var s = this.get(name);
        if(s != null) {
            document.cookie = name + '=' + s + ';expires=' + exp.toUTCString + ';path=/';
        }
    }
};
