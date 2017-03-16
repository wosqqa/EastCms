/*
 * 网站共用简易弹出方法.
 * @author Jack.li.
 * @date 2014.6.03.
*/
;(function($){
	$.fn.extend({
		popupMeans: function(elem) {
			/* 配置参数.*/
			$.extend({
				popid: "#popup", // 弹出框ID.
				width: 400, // 弹出框宽.
				height: 300, // 弹出框高.
				shade: true, // 弹出遮罩层, true为有遮罩层，false为没有遮罩层.
				callback: null // 弹出回调函数.			
			},elem);
			var self = $(this), // 缓存弹出按钮自身.
				doc = document, // 缓存document.
				win = window,
				body = $("body"), // 缓存body.
				$popupMassage = $(elem.popid), // 缓存弹出框.
				$hd = $popupMassage.find("[data-head]"), // 缓存弹出框头部.
				$bd = $popupMassage.find("[data-body]"), // 缓存弹出框内容部分.
				$cloneBtn = $popupMassage.find("[data-close]"), // 缓存关闭按钮.
				$hidetop = $(doc).scrollTop(); //  被卷去网页高度.
				/**
				 * 计算获得当前信息窗口坐标.
				 * @return {x,y}(json).
				 */
			var getCoord = function() {
					//debugger;
					x = $(win).width() / 2 - elem.width / 2;  //更新信息X轴坐标.
					y = $(win).height() / 2 - elem.height / 2;  //更新信息Y轴坐标.
					return {x:x,y:y};			
				},
				/* 获取浏览器版本.*/ 
				getBrowserInfo = function() {
					var agent = navigator.userAgent.toLowerCase(),
						regStr_ie = /msie [\d.]+;/gi ,
						regStr_ff = /firefox\/[\d.]+/gi,
						regStr_chrome = /chrome\/[\d.]+/gi,
						regStr_saf = /safari\/[\d.]+/gi ;
					//IE
					if(agent.indexOf("msie") > 0){
						
						return agent.match(regStr_ie) ;
					}

					//firefox
					if(agent.indexOf("firefox") > 0){
						return agent.match(regStr_ff) ;
					}
					//Chrome
					if(agent.indexOf("chrome") > 0){
						return agent.match(regStr_chrome) ;
					}

					//Safari
					if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0){
						return agent.match(regStr_saf) ;
					}

				};
				
				/**
				 * 打开一个窗口方法.
				 */
				openMassage = function() {
					var browser = getBrowserInfo(),
						verinfo = (browser+"").replace(/[^0-9.]/ig,""),
						coord = getCoord(), // 更新信息窗口位置.
						$top,$display;
					
					if(verinfo == "6.0"){
						$top = $hidetop+coord.y;
					}else {
						$top = coord.y;

					}
					// 判断是否需要遮罩层.
					if(elem.shade == true){
						/* 创建遮罩层. */
						var shade = "<div id='popShade' class='pop-shade upgrade_hint'></div>";
						/* 遮罩层添加到body. */
						$(shade).appendTo(body); 
						var $shadeid = $("#popShade");
						/* 初始化遮罩层. */
						if($shadeid.length > 0){
							$shadeid.css({
								"width":$(doc).width(),
								"height":$(doc).height(),
								"opacity":0,
								"display":"block"
							});
							
							/* 进行遮罩层展示动画. */
							$shadeid.fadeTo("fast", .45, function() {
								/* 进行信息窗口显示动画. */
								$popupMassage
									.css({"width":elem.width,"height":elem.height,"left":coord.x, "top":$top, "opacity":0, "display":"block"})
									.animate({"opacity":1}, "slow");
							});
							
							return self.each(function() {
								
								self.bind("callback",elem.callback); // 回调函数.
								self.trigger("callback");
							});
						}
					}else {
						
						/* 进行信息窗口显示动画. */
						$popupMassage
							.css({"width":elem.width,"height":elem.height,"left":coord.x, "top":$top, "opacity":0, "display":"block"})
							.animate({"opacity":1}, "slow");
						
						return self.each(function() {	
							
							self.bind("callback",elem.callback); // 回调函数.
							self.trigger("callback");
						});
					}				
				},

				/**
				 * 关闭当前窗口方法.
				 */
				closeMassage = function() {

					var coord = getCoord(),  //更新信息窗口位置.
						$massageShade = $("#popShade"); // 是否有遮罩层.
					if($massageShade.length > 0){
						$popupMassage
							.animate({"top":coord.y, "opacity":0}, "slow", function() {
								$(this).css("display", "none");
								$massageShade.fadeOut("fast");
							});

						return true;
					}else {
						$popupMassage
							.animate({"top":coord.y, "opacity":0}, "slow", function() {
								$(this).css("display", "none");								
							});
						return true;
					}
				};

			$cloneBtn.one("click", closeMassage);  //委托关闭按钮事件.
			
			return openMassage();
		},
		/**
		 * 网站共用弹出框登录提交. 
		 */
		popLogin: function(options) {
			/* 配置参数. */
			$.extend({
				popupid: "", // 弹出框ID.				
				jsonp: false, // 是否跨域提交.
				url: null, // 提交地址.
				callback: null // 回调函数.
			},options);
			
			var $popupMassage = $(options.popupid), // 缓存弹出框.
				$userinput = $popupMassage.find("[data-name]"), // 缓存输入框.
				$username = $popupMassage.find("[data-user]"), // 用户名.
				$password = $popupMassage.find("[data-password]"), // 密码.
				$submitbtn = $popupMassage.find("[data-submit]"), // 缓存提交按钮.
				_url = options.url, // 缓存提交地址.
				$clonebtn = $popupMassage.find("[data-close]"), // 缓存关闭按钮.
				_label = $popupMassage.find("[data-label]");
			/**
			 * 获取焦点和失去焦点事件.
			 */
			$userinput.focus(function() {
				
				var $label = $(this).parents("li").find("[data-label]"), // 输入框提示.
					$errorMassage = $(this).parents("li").find("[data-error]"); // 缓存错误信息.
				$label.hide();
				$errorMassage.hide();
			}).blur(function() {
				var val = $(this).val(),
					$label = $(this).parents("li").find("[data-label]"), // 输入框提示.
					$errorMassage = $(this).parents("li").find("[error-message]"); // 缓存错误信息.
				if(val == ""){
					$label.show();				
				}
			});
			_label.on("click",function() {
			
				$(this).parents("li").find("input").focus();
			
			});
			$submitbtn.on("click",function() {
				var userdata = {
						username:$username.val(),
						password:$password.val()
					},
					nameError = $username.parents("li").find("[data-error]"),
					passwordError = $password.parents("li").find("[data-error]");
				if(options.jsonp == false) {
                    userdata = {
                        username:$username.val(),
                        password:$password.val(),
                        submit : 1
                    }
					if(userdata.username == ""){
						
						nameError.show().text("请输入用户名");
						return false;
					}
					if(userdata.password == ""){
					
						passwordError.show().text("请输入密码");
						return false;
					
					}
					$.ajax({
						url: _url,
						type: "GET",
						dataType: "json",
						data: userdata,
						success:function(data) {
							//debugger;
							var error = data.status,
								msg = data.info;
							
							if(error == "login_password_error"){
							
								passwordError.show().text(msg);
							}
							if(error == "login_user_not_exist"){
								
								nameError.show().text(msg);
							}
							if(error == "ok") {
							
								location.reload(); // 刷新当前页面.
							}
						}
					});		
				}else {
					$.ajax({
						url: _url,
						type: "GET",
						dataType: "jsonp", //jsonp跨域提交
						data: userdata,
						jsonp:"callback",		
						success:function(data) {
							//登录失败返回
							var dataError = data.msg,
								dataSuccess = data.success;			
							if(dataError != "" && dataError != "密码不正确！"){
					
								$username.parents("li").find("[data-error]").show().text(dataError);
							}else if(dataError == "密码不正确！") {
								console.log($password.parents("li").find("[data-error]").length);
								$password.parents("li").find("[data-error]").show().text(dataError);
							}
							if(dataSuccess == true){
								$username.parents("li").find("[data-error]").hide();
								// 委托关闭事件.
								$clonebtn.trigger("click");	
								location.reload(); // 刷新当前页面.
							}
						},
						error: function() {
							alert("登录失败");
						}
					});	
					
					return false;
				}
			});
			return this;
		}
	});
})(jQuery);