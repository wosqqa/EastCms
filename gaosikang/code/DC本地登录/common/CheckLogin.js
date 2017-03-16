/**
 * 登录检测
 * 1、前端判断是否登录，如果未登录，直接跳登录页面；如果已经登录，向后台请求数据。
 */
/* global define */
define(function(require){
	// 依赖js
	var cookie = require('cookie'),
		Global = require('app/common/Global');
	// 全局变量
	var hasLogin = false,
		userName = cookie.get('USER_NAME');
	if(cookie.get('HAS_LOGIN') && userName){
		hasLogin = true;
	} else {
		hasLogin = false;
	}
	// console.log('当前登录用户::', userName);

	/*// 1、判断登录
	if(!hasLogin){
		window.parent.location.href = Global.Const.BASE_PATH + 'login.html';
	}*/
      
	return {
		hasLogin: hasLogin,
		userName: userName
	};
});