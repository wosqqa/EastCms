/**
 * 登录检测
 * 1、前端判断是否登录，如果未登录，直接跳登录页面；如果已经登录，向后台请求数据。
 */
/* global define */
define(function(require){
	// 依赖js
	var EXPDAY = 6 / 24,	// 缓存过期时间6小时
		Cookies = require('cookie'),
		hasLogin = false,
		Global = require('app/common/Global'),
		userName = Global.Util.getQueryString('username');
		realName = Global.Util.getQueryString('realname');
	if(userName){
		Cookies.set('USER_NAME', userName, { expires: EXPDAY });
		Cookies.set('REAL_NAME', realName, { expires: EXPDAY });
    	Cookies.set('HAS_LOGIN', true, { expires: EXPDAY });
    	hasLogin = true;
	} else {
		//window.location.href = 'qqauth.html';
	}
    
	// 全局变量
//	var hasLogin = false,
//		userName = cookie.get('USER_NAME');
//	if(cookie.get('HAS_LOGIN') && userName){
//		hasLogin = true;
//	} else {
//		hasLogin = false;
//	}
	// console.log('当前登录用户::', userName);

	// 1、判断登录
//	if(!hasLogin){
//		window.parent.location.href = Global.Const.BASE_PATH + 'qqauth.html';
//	}
      
	return {
		hasLogin: hasLogin,
		userName: userName,
		realName: realName
	};
});