/*
* @Author: zhanhaitao(zhanhaitao@021.com)
* @Date:   2017-03-15 19:39:43
* @Last Modified time: 2017-03-28 09:37:01
*/

/*! Zepto 1.2.0 (generated with Zepto Builder) - zepto event ajax form ie fx data touch stack selector fx_methods detect deferred callbacks - zeptojs.com/license */
var Zepto=function(){function t(t){return null==t?String(t):H[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,i=S.type(t);return"function"!=i&&!n(t)&&("array"==i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t){return M.call(t,function(t){return null!=t})}function u(t){return t.length>0?S.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in Z?Z[t]:Z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[c(t)]?e:e+"px"}function h(t){var e,n;return D[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function p(t){return"children"in t?k.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function m(t,e,n){for(T in e)n&&(o(e[T])||K(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),K(e[T])&&!K(t[T])&&(t[T]=[]),m(t[T],e[T],n)):e[T]!==E&&(t[T]=e[T])}function v(t,e){return null==e?S(t):S(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",i=n&&n.baseVal!==E;return e===E?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var E,T,S,j,C,O,P=[],N=P.concat,M=P.filter,k=P.slice,A=window.document,D={},Z={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},F=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,q=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],W=["after","prepend","before","append"],I=A.createElement("table"),B=A.createElement("tr"),V={tr:A.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:B,th:B,"*":A.createElement("div")},X=/^[\w-]*$/,H={},U=H.toString,Y={},J=A.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return M.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,r,a;return $.test(t)&&(i=S(A.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(_,"<$1></$2>")),e===E&&(e=F.test(t)&&RegExp.$1),e in V||(e="*"),a=V[e],a.innerHTML=""+t,i=S.each(k.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=S(i),S.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return new d(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))i=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return S(n).find(t);i=Y.qsa(A,t)}else{if(e(t))return S(A).ready(t);if(Y.isZ(t))return t;if(K(t))i=s(t);else if(r(t))i=[t],t=null;else if(F.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return S(n).find(t);i=Y.qsa(A,t)}}return Y.Z(i,t)},S=function(t,e){return Y.init(t,e)},S.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=X.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:k.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=A.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=K,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},S.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},S.camelCase=C,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},S.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},S.grep=function(t,e){return M.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),S.fn={constructor:Y.Z,length:0,forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,splice:P.splice,indexOf:P.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e;return N.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(k.apply(this,arguments))},ready:function(t){if("complete"===A.readyState||"loading"!==A.readyState&&!A.documentElement.doScroll)setTimeout(function(){t(S)},0);else{var e=function(){A.removeEventListener("DOMContentLoaded",e,!1),window.removeEventListener("load",e,!1),t(S)};A.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)}return this},get:function(t){return t===E?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(M.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return S(O(this.concat(S(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?k.call(t):S(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return r(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:S(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?S(t).filter(function(){var t=this;return P.some.call(n,function(e){return S.contains(e,t)})}):1==this.length?S(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):S()},closest:function(t,e){var n=[],r="object"==typeof t&&S(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:Y.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(O(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return M.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=S(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=S(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)y(this,T,t[T]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=G[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(q,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=g(this,t,e,this.value)})):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(A.documentElement!==this[0]&&!S.contains(A.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0];if("string"==typeof e){if(!i)return;return i.style[C(e)]||getComputedStyle(i,"").getPropertyValue(e)}if(K(e)){if(!i)return;var r={},o=getComputedStyle(i,"");return S.each(e,function(t,e){r[e]=i.style[C(e)]||o.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(b(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=b(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||j.push(t)},this),j.length&&b(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return b(this,"");j=b(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),b(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=S(this),r=g(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,i.top+=parseFloat(S(e[0]).css("border-top-width"))||0,i.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!R.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(r){var o,a=this[0];return r===E?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=S(this),a.css(t,g(this,r,e,a[t]()))})}}),W.forEach(function(e,n){var i=n%2;S.fn[e]=function(){var e,r,o=S.map(arguments,function(n){var i=[];return e=t(n),"array"==e?(n.forEach(function(t){return t.nodeType!==E?i.push(t):S.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(Y.fragment(t)))}),i):"object"==e||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=S.contains(A.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return S(t).remove();r.insertBefore(t,e),s&&x(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},S.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),Y.Z.prototype=d.prototype=S.fn,Y.uniq=O,Y.deserializeValue=w,S.zepto=Y,S}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||b,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(t,e,n){if(n.dataFilter==l)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==T?"json":x.test(t)?"script":E.test(t)&&"xml")||"text"}function h(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=h(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function m(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?m(e,u,i,n):e.add(n,u)})}var v,g,y=+new Date,b=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,T="application/json",S="text/html",j=/^\s*$/,C=b.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+y++,l=b.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),b.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,r,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===u[v]&&(u[v]=t.ajaxSettings[v]);i(u),u.crossDomain||(n=b.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(r=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,r)),p(u);var m=u.dataType,y=/\?.+=\?/.test(u.url);if(y&&(m="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=m&&"jsonp"!=m)||(u.url=h(u.url,"_="+Date.now())),"jsonp"==m)return y||(u.url=h(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,d);var w,x=u.accepts[m],E={},T=function(t,e){E[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,O=u.xhr(),P=O.setRequestHeader;if(d&&d.promise(O),u.crossDomain||T("X-Requested-With","XMLHttpRequest"),T("Accept",x||"*/*"),(x=u.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),O.overrideMimeType&&O.overrideMimeType(x)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&T("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)T(g,u.headers[g]);if(O.setRequestHeader=T,O.onreadystatechange=function(){if(4==O.readyState){O.onreadystatechange=l,clearTimeout(w);var e,n=!1;if(O.status>=200&&O.status<300||304==O.status||0==O.status&&"file:"==S){if(m=m||f(u.mimeType||O.getResponseHeader("content-type")),"arraybuffer"==O.responseType||"blob"==O.responseType)e=O.response;else{e=O.responseText;try{e=c(e,m,u),"script"==m?(1,eval)(e):"xml"==m?e=O.responseXML:"json"==m&&(e=j.test(e)?null:t.parseJSON(e))}catch(i){n=i}if(n)return s(n,"parsererror",O,u,d)}a(e,O,u,d)}else s(O.statusText||null,O.status?"error":"abort",O,u,d)}},o(O,u)===!1)return O.abort(),s(null,"abort",O,u,d),O;var N="async"in u?u.async:!0;if(O.open(u.type,u.url,N,u.username,u.password),u.xhrFields)for(g in u.xhrFields)O[g]=u.xhrFields[g];for(g in E)P.apply(O,E[g]);return u.timeout>0&&(w=setTimeout(function(){O.onreadystatechange=l,O.abort(),s(null,"timeout",O,u,d)},u.timeout)),O.send(u.data?u.data:null),O},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var O=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(O(e)+"="+O(n))},m(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,a,s,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,i=!0,s=o||0,o=0,a=u.length,r=!0;u&&a>s;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var i=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),r?a=u.length:n&&(o=i,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(a>=i&&--a,s>=i&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||i&&!c||(e=e||[],e=[t,e.slice?e.slice():e],r?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}};return f}}(Zepto),function(t){function e(e,i){var u=e[s],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=a(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[a(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0 in this?e(this[0],i):void 0:this.each(function(){n(this,i,r)})},t.data=function(e,n,i){return t(e).data(n,i)},t.hasData=function(e){var n=e[s],i=n&&r[n];return i?!t.isEmptyObject(i):!1},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var s=t.isFunction(n[i])&&n[i];a[r[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,a=s?[n]:arguments;e[r[0]+"With"](i,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(i,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){r=s},i[1^t][2].disable,i[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(i){var r,o,a,s=n.call(arguments),u=s.length,c=0,l=1!==u||i&&t.isFunction(i.promise)?u:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(u>1)for(r=new Array(u),o=new Array(u),a=new Array(u);u>c;++c)s[c]&&t.isFunction(s[c].promise)?s[c].promise().done(h(c,a,s)).fail(f.reject).progress(h(c,o,r)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(Zepto),function(t){function e(t,e){var n=this.os={},i=this.browser={},r=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),u=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=/Win\d{2}|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=l&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),v=t.match(/(BlackBerry).*Version\/([\d.]+)/),g=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=t.match(/PlayBook/),w=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),x=t.match(/Firefox\/([\d.]+)/),E=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),T=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),S=!w&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),j=S||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(i.webkit=!!r)&&(i.version=r[1]),o&&(n.android=!0,n.version=o[2]),c&&!u&&(n.ios=n.iphone=!0,n.version=c[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),u&&(n.ios=n.ipod=!0,n.version=u[3]?u[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),l&&(n.webos=!0,n.version=l[2]),p&&(n.touchpad=!0),v&&(n.blackberry=!0,n.version=v[2]),g&&(n.bb10=!0,n.version=g[2]),y&&(n.rimtabletos=!0,n.version=y[2]),b&&(i.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(i.silk=!0,i.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(i.silk=!0),w&&(i.chrome=!0,i.version=w[1]),x&&(i.firefox=!0,i.version=x[1]),E&&(n.firefoxos=!0,n.version=E[1]),T&&(i.ie=!0,i.version=T[1]),j&&(a||n.ios||f)&&(i.safari=!0,n.ios||(i.version=j[1])),S&&(i.webview=!0),n.tablet=!!(s||b||o&&!t.match(/Mobile/)||x&&t.match(/Tablet/)||T&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||c||l||v||g||w&&t.match(/Android/)||w&&t.match(/CriOS\/([\d.]+)/)||x&&t.match(/Mobile/)||T&&t.match(/Touch/)))}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return w[t]||y&&b[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){if(n||!e.isDefaultPrevented){n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=E});try{e.timeStamp||(e.timeStamp=Date.now())}catch(i){}(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)}return e}function l(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(r===f||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){
var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},v=document.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};v.style.transform===e&&t.each(m,function(t,n){return v.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",y[a=d+"transition-property"]=y[s=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:r===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,v){var b,w,x,E={},T="",S=this,j=t.fx.transitionEnd,C=!1;if(r===e&&(r=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(r=0),"string"==typeof i)E[l]=i,E[f]=r+"s",E[p]=v+"s",E[h]=d||"linear",j=t.fx.animationEnd;else{w=[];for(b in i)g.test(b)?T+=b+"("+i[b]+") ":(E[b]=i[b],w.push(n(b)));T&&(E[o]=T,w.push(o)),r>0&&"object"==typeof i&&(E[a]=w.join(", "),E[s]=r+"s",E[c]=v+"s",E[u]=d||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,x)}else t(this).unbind(j,x);C=!0,t(this).css(y),m&&m.call(this)},r>0&&(this.bind(j,x),setTimeout(function(){C||x.call(S)},1e3*(r+v)+25)),this.size()&&this.get(0).clientLeft,this.css(E),0>=r&&setTimeout(function(){S.each(function(){x.call(this)})},0),this},v=null}(Zepto),function(t,e){function n(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function i(e,i,r,o){return n(e,i,0,r,function(){a.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?a.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t,n){try{return e(t,n)}catch(i){return null}}}}(),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=r(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return(!e||o(t,e))&&(!n||n.call(t,null,i)===t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,v,g,y=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(g=a(e,"down"))||o(e))&&(v=g?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in v.target?v.target:v.target.parentNode),s&&clearTimeout(s),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&g&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(g=a(t,"move"))||o(t))&&(v=g?t:t.touches[0],i(),h.x2=v.pageX,h.y2=v.pageY,y+=Math.abs(h.x1-h.x2),b+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(g=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2))),h={}},0):"last"in h&&(30>y&&30>b?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el&&h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=b=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);

try {
    if(!Array.prototype.contains){
        // 利用Array的原型prototype点出一个我想要封装的方法名contains 
        Array.prototype.contains = function (element) { 
            for (var i = 0; i < this.length; i++) { 
                //如果数组中某个元素和你想要测试的元素对象element相等，则证明数组中包含这个元素，返回true
                if (this[i] === element) {  
                    return true;
                }
            }
        };
    }
} catch (e) {
    console.error(e);
}

// forEach方法的兼容解决方法
try {
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this === null) {
          throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0; // jshint ignore:line
        if (typeof callback !== "function") {
          throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
          T = thisArg;
        }
        k = 0;
        while (k < len) {
          var kValue;
          if (k in O) {
            kValue = O[k];
            callback.call(T, kValue, k, O);
          }
          k++;
        }
      };
    }
} catch (e) {
    console.error(e);
}

/**
 * 提供命名管理，管理全局变量。
 * 所有全局变量必须命名在GLOBAL里面的命名空间下，将变量冲突、覆盖问题降到最小。
 * @type {{}}
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
    for(var i = (arr[0] === "GLOBAL") ? 1 : 0; i < arr.length; i++){
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};

GLOBAL.namespace('Util');
GLOBAL.namespace('Cookie');

//公用的工具方法
GLOBAL.Util = {
	/**
	 * browser的判断
	 * @return {[type]} [description]
	 */
	getBrowserType: function() {
	    var agent = navigator.userAgent.toLowerCase();
	    var browser_type = "";
	    if (agent.indexOf("msie") > 0) {
	        browser_type = "IE";
	    }
	    if (agent.indexOf("firefox") > 0) {
	        browser_type = "firefox";
	    }
	    if (agent.indexOf("chrome") > 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("360 aphone browser") < 0) {
	        browser_type = "chrome";
	    }
	    if (agent.indexOf("360 aphone browser") > 0 || agent.indexOf("qhbrowser") > 0) {
	        browser_type = "360";
	    }
	    if (agent.indexOf("ucbrowser") > 0) {
	        browser_type = "UC";
	    }
	    if (agent.indexOf("micromessenger") > 0) {
	        browser_type = "WeChat";
	    }
	    if ((agent.indexOf("mqqbrowser") > 0 || agent.indexOf("qq") > 0) && agent.indexOf("micromessenger") < 0) {
	        browser_type = "QQ";
	    }
	    if (agent.indexOf("miuibrowser") > 0) {
	        browser_type = "MIUI";
	    }
	    if (agent.indexOf("mb2345browser") > 0) {
	        browser_type = "2345";
	    }
	    if (agent.indexOf("sogoumobilebrowser") > 0) {
	        browser_type = "sogou";
	    }
	    if (agent.indexOf("liebaofast") > 0) {
	        browser_type = "liebao";
	    }
	    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0 && agent.indexOf("ucbrowser") < 0 && agent.indexOf("micromessenger") < 0 && agent.indexOf("mqqbrowser") < 0 && agent.indexOf("miuibrowser") < 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("sogoumobilebrowser") < 0 && agent.indexOf("liebaofast") < 0 && agent.indexOf("qhbrowser") < 0) {
	        browser_type = "safari";
	    }
	    return browser_type;
	},
    /**
     * OS的判断
     * @return {[type]} [description]
     */
    getOsType: function() {
        var agent = navigator.userAgent.toLowerCase();
        var os_type = "";
        if (/android/i.test(navigator.userAgent)) {
            var index = agent.indexOf("android");
            version = agent.substr(index + 8, 3);
            os_type = "Android " + version;
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            var index = agent.indexOf("os");
            version = agent.substr(index + 3, 3);
            os_type = "iOS " + version;
        }
        if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            os_type = "Linux";
        }
        if (/windows|win32/i.test(navigator.userAgent)) {
            os_type = "windows32";
        }
        if (/windows|win32/i.test(navigator.userAgent)) {
            os_type = "windows64";
        }
        return os_type;
    },
    /**
     * 获取url（排除url中参数）
     * @return {[type]} [description]
     */
    getUrlNoParams: function() {
        var locaUrl = window.location.href,
            endIndex = 0;
        if(locaUrl.indexOf("?") >= 0){
            endIndex = locaUrl.indexOf("?");
            return locaUrl.substring(0, endIndex);
        }
        if(locaUrl.indexOf("#") >= 0){
            endIndex = locaUrl.indexOf("#");
            return locaUrl.substring(0, endIndex);
        }
        return locaUrl;
    },
    
    createStyle: function(style, callback, element){
        if(style){
            var head = document.getElementsByTagName('head')[0],
                css = document.createElement('style');
            css.innerHTML =  style;
            if(element){
                element.appendChild(css);
            } else {
                head.appendChild(css);
            }
            //执行回调
            callback && callback();
        }
    },

    /**
     * 获取当前手机屏幕分辨率的高宽
     * @return {json} {w: xxx, h: xxx}
     */
    getPixel: function(){
        var width = window.screen.width;
        var height = window.screen.height;
        return {w: width, h: height};
    }
}

/* cookie扩展 */
GLOBAL.Cookie = {
    /**
     * 设置cookie
     * @param name 名称
     * @param value 值
     * @param expires 有效时间（单位：小时）（可选） 默认：24h
     */
    set: function(name, value, expires){
        var expTimes = expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000); // 毫秒
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + expTimes);
        var expString = expires ? '; expires=' + expDate.toUTCString() : '';
        var pathString = '; path=/';
        document.cookie = name + '=' + encodeURI(value) + expString + pathString;
    },
    /**
     * 读cookie
     * @param name
     */
    get: function(name){
        var cookieStr = '; ' + document.cookie + '; ';
        var index = cookieStr.indexOf('; ' + name + '=');
        if(index !== -1){
            var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
            return decodeURI(s.substring(0, s.indexOf('; ')));
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
        var s = this.read(name);
        if(s !== null) {
            document.cookie = name + '=' + s + '; expires=' + exp.toUTCString + '; path=/';
        }
    }
};

var module = (function(my){
	// 存储一系列初始化方法
    my.inits = my.inits || [];

    var $_dftt_teachertu_container = $('.dftt_teachertu'),
    	_dftt_adnum = $_dftt_teachertu_container.length,
    	curProvname = null,
    	positionUrl = 'https://position.dftoutiao.com/position/get',   // 获取用户位置
    	// dspUrl = 'http://106.75.73.203/dfdsp/dfwapadv';             // dsp广告测试接口
    	dspUrl = 'http://dfdsp.dftoutiao.com/dfdsp/dfwapadv';    // dsp广告正式接口

    /**
     * 加载wnwifi广告（wnwifi广告打底）
     * @return {[type]} [description]
     */
    function loadWifiGg(index){
        var params = 'qid='+ GLOBAL.Et.qid +''
            '&uid=' + GLOBAL.Et.uid + 
            '&cnurl=' + GLOBAL.Util.getUrlNoParams() + 
            '&pgtype='+ _dftt_teachertu_adposition +'';   // 列表页传list，详情页传detail
        $_dftt_teachertu_container.eq(index).append('<div class="wnwifigg-wrap"><iframe src="http://s.dftoutiao.com/wnwifi/wnwifi.html?' + params + '" frameborder="0" scrolling="no" width="100%" height="153"></iframe></div>');
    };

    /**
     * 加载百度打底广告
     */
    function loadBaiduGg(index){
    	var script = document.createElement('script');
    		script.type = 'text/javascript';
    		script.src = 'http://a1.liuxue86.com/wk3a1ecf94f3cbf638db1f23c5adf722f740e7855275e13eef.js';
    	$_dftt_teachertu_container.eq(index).append(script);
    };

    /**
     * 渲染三图广告
     * @param  {[type]} data 广告数据
     */
    function loadSanGg(data,index){
        $_dftt_teachertu_container.eq(index).append('<div class="gg-item">' +
                            '<a data-src="'+ data.url +'" class="gg_link" data-clickurl="'+ data.clickbackurl +'" data-isclickurl="'+ data.isclickbackurl +'">' +
                                '<div class="news-wrap clearfix">' +
                                    '<h3 class="news-title">'+ data.topic +'</h3>' +
                                    '<div class="imgs-wrap clearfix">' +
                                        '<div class="imgs fl"><img src="'+ data.miniimg[0].src +'" /></div>' +
                                        '<div class="imgs fl"><img src="'+ data.miniimg[1].src +'" /></div>' +
                                        '<div class="imgs fl"><img src="'+ data.miniimg[2].src +'" /></div>' +
                                    '</div>' +
                                    '<p class="tags clearfix">' +
                                        '<em class="tag tag-time fl">' +
                                            '<i class="tag tag-gg">广告</i>' +
                                        '</em>' +
                                        '<em class="tag tag-src fr">'+ data.source +'</em>' +
                                    '</p>' +
                                '</div>' +
                           ' </a>' +
                        '</div>');
       	if( Number(data.isshowbackurl) === 1 ){
       		var showUrlArr = data.showbackurl.split('@@');
       		for(var k = 0; k < showUrlArr.length; k++){
       			new Image().src = showUrlArr[k];
       		}
       	};
    };

    /**
     * 获取dsp广告
     */
    function getDsp(callback){
    	var pixel = GLOBAL.Util.getPixel();
    	$.ajax({
    		url: dspUrl,
            dataType: 'jsonp',
            jsonp: 'jsonpcallback',
    		data: {
                type: 'toutiao',
                qid: GLOBAL.Et.qid,
                uid: GLOBAL.Et.uid,
                pgnum: 1,
                adnum: _dftt_adnum,     // 广告数量
                adtype: 3,    // 1：大图 2：单图 3：三图
                os: GLOBAL.Util.getOsType() || 'null',
                softtype: 'news',
                softname: 'teachertu',
                newstype: 'ad',
                browser_type: GLOBAL.Util.getBrowserType() || 'null',
                pixel: pixel.w + '*' + pixel.h,
                fr_url: GLOBAL.Util.getUrlNoParams() || 'null',
                adposition: _dftt_teachertu_adposition  //广告位 由图老师控制 list || detail
            },
    		timeout: 3000,
    		success: function(res){
    			loadDsp(res,callback);
    		},
    		error: function(e){
    			console.error(e)
                loadDsp([],callback);
    		}
    	})
    };

    /**
     * 加载dsp广告
     * @param  {[type]} dspData 广告数据
     */
    function loadDsp(dspData,callback){
    	var data = (dspData && dspData.data) || null,
    		dlen = (data instanceof Array) ? data.length : 0,
    		dsp = {
    			pos0: null,
    			pos1: null,
    			pos2: null,
    			pos3: null
    		},
    		di = 0;
    	if(dlen){
    		for(di = 0;di < dlen;di++){
    			if(Number(data[di].idx) === 1){
    				dsp.pos0 = data[di];
    			}
    			if(Number(data[di].idx) === 2){
    				dsp.pos1 = data[di];
    			}
    			if(Number(data[di].idx) === 3){
    				dsp.pos2 = data[di];
    			}
    			if(Number(data[di].idx) === 4){
    				dsp.pos3 = data[di];
    			}
    		}

    		for(di = 0; di < $_dftt_teachertu_container.length; di++){
    			if(dsp['pos' + di]) {
    				loadSanGg(dsp['pos' + di], di)
    			} else {
    				callback && callback(di);
    			}
    		}
    	} else {
    		for(di = 0; di < $_dftt_teachertu_container.length; di++) {
    			callback && callback(di);
    		}
    	}
    }

    /**
     * 省过滤
     * @param  {[type]}   provArr 需过滤的省数组
     * @param  {Function} callback    回调方法
     * @return {[type]}               true：表示在过滤的省中；false：表示不在过滤的省中。
     */
    function filterProv(provArr, callback){
        if(curProvname){
            callback && callback(!!provArr.contains(curProvname));    // jshint ignore:line
        } else {
            $.ajax({
                url : positionUrl,
                dataType : 'jsonp',
                jsonp : 'jsonpcallback',
                success: function(res){
                    curProvname = (res.position ? res.position.provname : null);
                    callback && callback(!!provArr.contains(curProvname));    // jshint ignore:line
                },
                error: function(jqXHR,textStatus){
                    // 地理位置获取失败就认为是特殊城市
                    callback && callback(true); // jshint ignore:line
                    console.error(textStatus);
                }
            });
        }
    };

    my.inits.push(function(){
    	var osType = GLOBAL.Util.getOsType().toLowerCase(),
            os = osType.split(' ')[0];
        // ios用户
        if(os === 'ios'){
            getDsp(function(di){
            	loadBaiduGg(di);
            });
        // 安卓用户
        }else if(os === 'android'){
            getDsp(function(di){
            	filterProv(['北京','上海','广东','湖南'],function(isSpecialCity){
	                if(!isSpecialCity){
	                    loadWifiGg(di);
	                }else {
	                	loadBaiduGg(di);
	                }
	            })
            });
        }
    });

    return my;
})(module || {});

/* ==============================
    随着DOM生成执行的代码
 ================================ */
(function(){
    try {
        GLOBAL.namespace('Et');
        GLOBAL.Et.qid = 'teachertu';
        GLOBAL.Et.uid = GLOBAL.Cookie.get('user_id');
        if (!GLOBAL.Et.uid) {
            GLOBAL.Et.uid = (+new Date()) + Math.random().toString(10).substring(2, 6);
            GLOBAL.Cookie.set('user_id', GLOBAL.Et.uid, 8760);
        }
    } catch (e) { console.error(e); }

    // 广告样式
    try {
        GLOBAL.Util.createStyle('em,i{font-style: normal}.clearfix:after,.clearfix:before{content:"";display:table}.clearfix:after{clear:both;overflow:hidden}.clearfix{zoom:1}.fl{float:left;}.gg-item{padding:16px}.gg_link{display:block}.news-wrap{position:relative;}.news-wrap .news-title{font-size:17px;line-height:1.2em;overflow:hidden;width:100%;max-height:40px;margin-bottom:7px}.news-wrap .imgs{width:33%;margin-right:0.3%}.imgs:last-child{margin-right:0;}.news-wrap .imgs img{width:100%}.tags{margin-top:7px;color:#999;font-size:0}.tags .tag{display:inline-block;font-size:10px;line-height:12px;margin-right:5px}.tags .tag-gg{border:1px solid #ddd}.tags .tag-src{margin-right:0}.txt-wrap{position:relative;width:67%}.img-wrap{width:33%}.img-wrap img{width:100%}.txt-title{font-size:17px;line-height:1.2em;margin-right:12px;min-height:40px}')
    } catch (e) { console.error(e) }
}());

/* ==============================
    DOM生成后执行的代码
 ================================ */
$(function(){
    // 调用初始化方法
    module.inits.forEach(function(fn){
        if(typeof fn === 'function'){
            try {
                fn();
            } catch (e) {
                console.error(e);
            }
        }
    });

    // 注册点击日志事件
    $('body').on('click','.gg_link',function(){
    	var clickUrlArr = $(this).attr('data-clickurl').split('@@'),
    		isClickUrl = $(this).attr('data-isclickurl'),
    		href = $(this).attr('data-src'),
    		count = 0,
    		ggImg = null;
    	if( Number(isClickUrl) === 1 ){
    		for(var i = 0; i < clickUrlArr.length; i++){
    			ggImg = new Image();
    			ggImg.src = clickUrlArr[i];
    			ggImg.onerror = function(){
    				count++;
    				if(count === clickUrlArr.length){
    					window.location.href = href;
    				}
    			};
    			ggImg.onload = function(){
    				count++;
    				if(count === clickUrlArr.length){
    					window.location.href = href;
    				}
    			};
    		}
    	}else {
    		window.location.href = href;
    	}
    })
});