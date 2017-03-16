/**
 * 首页脚本
 * @author created by lizhigao(lizhigao@021.com) on 2016-08-22
 */
/* global define */
/* global window */
define(function(require){
	// 依赖js
	var CheckLogin = require('app/common/CheckLogin'),	// 判断是否登录
		$ = require('jquery'),
		_ = require('lodash'),
		Global = require('app/common/Global'),
		Hash = require('app/common/Hash'),
		cookie = require('cookie'),
		template = require('template');
	require('bootstrap');
	require('jquery.nicescroll');

	// 初始化hash判断
	var hs = new Hash();
	hs.init();
	
	// 2、获取权限菜单
	var menuData = null,
		$leftSide = $('#J_left_side'),
		$leftMenu = $('#J_left_menu'),
		$navbar = $('#J_navbar'),
		$topNavList = $('#J_top_nav_list'),
		$currentField = $('#J_current_field'),
		// $content = $('#J_content'),
		// $ifr = $('#J_iframe'),
		// $leftSide = $('#J_left_side'),
		$mainContent = $('#J_main_content');
		$username = $('#J_username');
		$loginOut = $('#J_loginOut'); // 退出

	// 创建一个类，用来处理首页业务
	function Main(){
	}

	Main.prototype = {
		constructor: Main,
		// 初始化
		init: function(){
			var scope = this;
			try	{
				// 获取顶部、左侧菜单数据
				scope.getMenuData();
			} catch (e) {
				console.error('getMenuData has error: \n', e);
			}
			
			try	{
				// 窗口尺寸改变事件注册
				scope.registerResize();
			} catch (e) {
				console.error('registerResize has error: \n', e);
			}

			// try	{
				// 左侧菜单事件注册
				// scope.regLeftMenuEvent();
			// } catch (e) {
			// 	console.error('regLeftMenuEvent has error: \n', e);
			// }
			
			// 在移动端左边菜单取消fixed固定
			if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
				$('#J_navbar').css('position','absolute');   
			    $('#J_left_side').css('position','absolute');    
			} else {
			   
			}
			
			if(CheckLogin.hasLogin){
				$username.html(CheckLogin.userName);
				$loginOut.on('click', function(){
					scope.loginOutUser();
				});
			} else {
				scope.toLogin();
			}

		},

		/**
		 * 获取左侧菜单数据
		 */
		getMenuData: function(){
			var scope = this;
			$.ajax({
				url: Global.Const.BASE_URL + 'login/getauth',
				// url: '/src/data/leftmenu2.json',
				data: {
					username: CheckLogin.userName
				},
				// dataType: 'json',
				dataType: 'jsonp',
				jsonp: "callbackparam",
				success: function(data){
					// console.log('data::', data);
					// scope.generateLeftMenu(data);
					if(data.code === '1001'){ // 登录失败
						scope.toLogin();
					} else if(data.code === '200'){
						//$username.html(CheckLogin.userName);						
						menuData = data;
//						$loginOut.on('click',function(){
//							window.location.href = "login.html";
//						});
						try{
							scope.generateTopNav(data);
							// 目前是默认写死“嵩恒--公司收益”的菜单
							scope.generateLeftMenu(data.datalist[0].children[0]);
						} catch (e) {console.error(e);}
						try{
							scope.setCurrentField(data);
						} catch (e) {console.error(e);}
						
					}
				},
				error: function(){
					console.error(arguments);
				}
			});
		},

		/**
		 * 设置当前栏目
		 * @param {[type]} data [description]
		 */
		setCurrentField: function(data){
			var dl = data.datalist,
				child = null,
				i = 0;
			for (i = 0; i < dl.length; i++) {
				if(dl[i].checked) {
					child = dl.children;
					break;
				}
			}
			if(_.isArray(child)){
				for (i = 0; i < child.length; i++) {
					if(child[i].checked) {
						$currentField.text(child[i].cname);
						break;
					}
				}
			} else {
				try	{
					$currentField.text(dl[0].children[0].cname);
				} catch (e) {
					console.error(e);
				}
			}
		},

		/**
		 * 生成顶部菜单
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
		generateTopNav: function(data){
			var scope = this,
				html = template('top_nav', data);
			// console.log('顶部菜单::', data);
          	$topNavList.html(html);
          	try	{
				scope.regTopNavEvent();
			} catch (e) {
				console.error('regTopNavEvent has error: \n', e);
			}
		},

		/**
		 * 生成左侧菜单并注册点击事件
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
		generateLeftMenu: function(data){
			var scope = this,
				html = '',
				$iframe = $('#J_iframe');
			if(data){
				html = template('left_menu_root', data);
				$leftMenu.html(html);
			}
			setTimeout(function(){
				var $links = $leftMenu.find('a'),
					flag = true;
				scope.regLeftMenuLinksEvent($links);
				// 刷新url时，如果带了hash值，就对hash值做判断加载相应的页面。
				if(window.location.hash.substring(1)){
					$links.each(function(){
						var $this = $(this);
						if($this.attr('href') === window.location.hash){
							flag = false;
							$this.click();
							return;
						}
					});
					if(flag){
						scope.triggerCurrentLink($links);
						// });
						// 默认页面
						$iframe.attr('src', 'iframe/index.html?t=' + (+new Date()));
					} else {
						// hash对应的页面
						$iframe.attr('src', 'iframe/' + window.location.hash.substring(1) + '.html?t=' + (+new Date()));
					}
				} else {
					scope.triggerCurrentLink($links);

					// 默认页面
					// $iframe.attr('src', 'iframe/index.html?t=' + (+new Date()));
				}
			}, 0);
		},

		/**
		 * 激活左侧菜单的第一个菜单项
		 * @param  {[type]} $links 左侧菜单所有a链接
		 * @return {[type]}        [description]
		 */
		triggerCurrentLink: function($links){
			$links.each(function(){
				var $this = $(this);
				$this.trigger('click');
				if(!$this.hasClass('has-child')){
					location.href = location.protocol + '//' + location.port + location.host + location.pathname + $this.attr('href');
					return false;
				}
			});
		},

		/**
		 * 注册左侧菜单链接点击事件
		 * @return {[type]} [description]
		 */
		regLeftMenuLinksEvent: function($links){
			$links.on('click', function(){
				var $this = $(this);
				/*
					1、点击的a标签有active、有has-child类，删除active类
					2、点击的a标签有active、无has-child类，不做任何操作
					3、点击的a标签无active、有has-child类，给a标签添加active类（删除同级a标签的active类）
					4、点击的a标签无active、无has-child类，给a标签添加active类（删除无has-child类的a标签的active类）且改变iframe中url
				 */
				if(!$this.hasClass('active')){
					if($this.hasClass('has-child')){
						// 删除同级（有has-child类的）a标签的active类(暂时不做自动折叠处理)
						// var $siblings = $this.parent().siblings();
						// $siblings.each(function(){
						// 	var $a = $(this).children('a');
						// 	if($a.hasClass('has-child')){
						// 		$a.removeClass('active');
						// 	}
						// });
						if($this.hasClass('child-link')){
							$this.children('.iconfont').removeClass('icon-add').addClass('icon-jian');
						}
					} else {
						$links.each(function(){
							var $link = $(this);
							if(!$link.hasClass('has-child')){
								$link.removeClass('active');
							}
						});
					}
					// 给a标签添加active类
					$this.addClass('active');
				} else {
					if($this.hasClass('has-child')){
						$this.removeClass('active');
						if($this.hasClass('child-link')){
							$this.children('.iconfont').removeClass('icon-jian').addClass('icon-add');
						}
					} else {
						// 点击有类active的link
						var $iframe = $('#J_iframe');
						$iframe.attr('src', $iframe.attr('src'));
					}
				}


			});

			// 左侧菜单滚动条
			$leftSide.niceScroll({
				cursoropacitymin: 0,
				cursoropacitymax: 0.7,
				cursorwidth: "10px",
				cursorcolor:"#999"
			});
		},

		/**
		 * 注册左侧菜单点击事件
		 */
		regLeftMenuEvent: function(){
			$leftMenu.on('click', 'a', function(){
				var $links = $leftMenu.find('a'),
					$this = $(this);
				/*
					1、点击的a标签有active、有has-child类，删除active类
					2、点击的a标签有active、无has-child类，不做任何操作
					3、点击的a标签无active、有has-child类，给a标签添加active类（删除同级a标签的active类）
					4、点击的a标签无active、无has-child类，给a标签添加active类（删除无has-child类的a标签的active类）且改变iframe中url
				 */
				if(!$this.hasClass('active')){
					if($this.hasClass('has-child')){
						// 删除同级（有has-child类的）a标签的active类(暂时不做自动折叠处理)
						// var $siblings = $this.parent().siblings();
						// $siblings.each(function(){
						// 	var $a = $(this).children('a');
						// 	if($a.hasClass('has-child')){
						// 		$a.removeClass('active');
						// 	}
						// });
						if($this.hasClass('child-link')){
							$this.children('.iconfont').removeClass('icon-add').addClass('icon-jian');
						}
					} else {
						$links.each(function(){
							var $link = $(this);
							if(!$link.hasClass('has-child')){
								$link.removeClass('active');
							}
						});
					}
					// 给a标签添加active类
					$this.addClass('active');
				} else {
					if($this.hasClass('has-child')){
						$this.removeClass('active');
						if($this.hasClass('child-link')){
							$this.children('.iconfont').removeClass('icon-jian').addClass('icon-add');
						}
					}
				}


			});

			// 左侧菜单滚动条
			$leftSide.niceScroll({
				cursoropacitymin: 0,
				cursoropacitymax: 0.7,
				cursorwidth: "10px",
				cursorcolor:"#999"
			});
					
		},

		// 注册resize事件
		registerResize: function(){
			var // timer = null,
				$win = $(window);
			$win.on('resize', function(){
				// timer && clearTimeout(timer);	// jshint ignore:line
				// timer = setTimeout(function(){
					// console.log('resizing...');
					var contentHeight = $win.height() - $navbar.outerHeight() - 30;
					$leftSide.height(contentHeight);
					$mainContent.height(contentHeight);
				// }, 10);
			});
			$win.trigger('resize');
		},

		/**
		 * 注册顶部菜单事件
		 * @return {[type]} [description]
		 */
		regTopNavEvent: function(){
			var scope = this,
				$dropdownMenu = $topNavList.find('.dropdown-menu'),
				$dropdownToggle = $topNavList.find('.top-nav-item'),
				$dropdownLinks = $dropdownMenu.find('.menuitem');
			$dropdownLinks.on('click', function(){
				var $this = $(this),
					$ddMenu = $this.closest('.dropdown-menu'),
					i = $ddMenu.prev().attr('data-index'),
					j = $this.attr('data-index');
				$currentField.text($this.text());
				// 更新左侧菜单
				scope.generateLeftMenu(menuData.datalist[i].children[j]);
				$dropdownLinks.removeClass('active');
				$this.addClass('active');
				$dropdownToggle.removeClass('active');
				$ddMenu.parent().addClass('active');
			});
		},

		// 跳登录页面
		toLogin: function(){
			window.location.href = 'login.html';
		},
		
		// 用户退出登录
		loginOutUser: function(){
			var scope = this;
			$.ajax({
				url: Global.Const.BASE_URL + 'login/getauth',				
				dataType: 'jsonp',
				jsonp: "callbackparam",
				success: function(data){					
					if(data.code === '300'){ // 退出登录失败
						console.log('退出登录失败！');
					} else if(data.code === '200'){
						$username.html('');
						scope.toLogin();	
						Cookies.remove('HAS_LOGIN'); // 清除本地用户信息
						Cookies.remove('USER_NAME');
					}
				}
			});
		}
	};
				
	$(function(){
		var main = new Main();
		main.init();
	});
	

});


