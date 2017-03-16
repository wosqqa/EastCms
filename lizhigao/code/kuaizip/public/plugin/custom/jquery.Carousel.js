;(function(factory){
	if(typeof define === 'function' && define.amd){
		/* AMD模式 */
		define(['jquery'], factory);
	} else {
		/* 全局模式 */
		factory(jQuery);
	}
})(function($){
	var pluginName = 'Carousel',
		prevFlag = false,
		nextFlag = false,
		clickFlag = true,
		defaults = {
			prevHandler: '',
			nextHandler: '',
			listHandler: '',	// jQuery对象数组
			items: 1,
			targetUl: '.zg-carousel',
			speed: 'normal',
			interval: 3000,
			height: 'auto',
			autoPlay: true,
			callback: null,		// 回调
			gap: 10
		};

	function Carousel(element, options){
		this._marginLeft = 0;		// ul左边距
		this._carouselWidth = 0;	// ul报错曾宽度
		this._name = pluginName;	// 插件名称
		this._defaults = defaults;	// 默认设置参数
		this._scrollWidth = 0;		// 轮播每次滚动宽度
		this._$targetUl = null;		// ul对象
		this._totalPageNums = 0;	// 总页数
		this._currentPageIndex = 0;	// 当前页索引
		this._timer = null;

		this.element = element;		// 调用该插件的DOM对象即ul包裹层对象
		this.settings = $.extend({}, defaults, options);	// 配置参数
		this.$prevHandler = $(this.settings.prevHandler);	// 上一页按钮对象
		this.$nextHandler = $(this.settings.nextHandler);	// 下一页按钮对象
		this.init();	// 初始化
	}

	Carousel.prototype = {
		/**
		 * 初始化方法
		 * @return {[type]} [description]
		 */
		init: function(){
			var scope = this,
				$ele = $(scope.element),				// ul包裹层
				$ul = $ele.children(scope.settings.targetUl),	// ul对象
				$lis = $ul.children('li');				// 所有li对象
			// 初始化样式
			$ele.css({
				'position': 'relative',
				'overflow': 'hidden'
			});
			$ul.css({
				'overflow': 'hidden',
				'margin': '0',
				'padding': '0',
				'listStyle': 'none'
			});
			$lis.css({
				'float': 'left',
				'height': scope.settings.height
			});

			scope.resizeUl();

			scope.checkMl();
			// 注册事件
			scope.registerEvents();

			if(scope.settings.autoPlay){
				scope.startInterval();
				$ul.on('mouseover', function(){
					scope.stopInterval();
				}).on('mouseout', function(){
					scope.startInterval();
				});
			}
			/* 延迟执行 */
			var rsTimer;
			$(window).off('.carousel').on('resize.carousel', function(){
				scope.stopInterval();
				clearTimeout(rsTimer);
				rsTimer = setTimeout(function(){
					scope.resizeUl();
					scope.showPage(0);
					scope._callback(0);
				}, 500);
			});
			return this;
		},

		resizeUl: function(){
			var scope = this,
				items = parseInt(scope.settings.items, 10),		// 每屏显示的li个数
				gap = parseInt(scope.settings.gap, 10),			// li之间的间隙
				$ele = $(scope.element),						// ul包裹层
				caWidth = $ele.width(),							// 包裹层宽度（可视宽度）
				$ul = $ele.children(scope.settings.targetUl),	// ul对象
				$lis = $ul.children('li'),						// 所有li对象
				liNum = $lis.length,							// li总个数
				ulWidth = 0;									// 用于存储ul总宽度
			// 储存ul对象
			scope._$targetUl = $ul;
			// 计算出总页数
			scope._totalPageNums = Math.ceil(liNum / items);
			// 保存轮播可视宽度
			scope._carouselWidth = caWidth;
			// 存储轮播滚动宽度
			scope._scrollWidth = scope.settings.items == 1 ? scope._carouselWidth : scope._carouselWidth + gap;
			// 计算ul的宽度
			if(items == 1){
				$lis.width(caWidth);
				ulWidth = caWidth * liNum;
			} else {
				var liWidth = (caWidth - (items - 1) * gap) / items;
				$lis.css({
					width: liWidth,
					marginRight: gap
				});
				ulWidth = (liWidth + gap) * liNum;
			}
			// 设置ul宽度
			$ul.width(ulWidth);
			return this;
		},

		/**
		 * 事件注册
		 * @return {[type]}     [description]
		 */
		registerEvents: function(){
			var scope = this;
			if(scope.$prevHandler){
				scope.$prevHandler.on('click.carousel', function(){
					if(prevFlag && clickFlag){
						scope.prevPage();
					}
				});
			}
			if(scope.$nextHandler){
				scope.$nextHandler.on('click.carousel', function(){
					if(nextFlag && clickFlag){
						scope.nextPage();
					}
				});
			}
			return this;
		},
		/**
		 * 开始自动播放
		 * @return {[type]} [description]
		 */
		startInterval: function(){
			var scope = this;
			scope.stopInterval();
			this._timer = setInterval(function(){
				if(nextFlag && clickFlag){
					scope.nextPage();
				} else if(clickFlag) {
					scope.nextPage('last');
				}
			}, scope.settings.interval);
			return this;
		},
		/**
		 * 停止自动播放
		 * @return {[type]} [description]
		 */
		stopInterval: function(){
			if(this._timer){
				clearInterval(this._timer);
				this._timer = null;
			}
			return this;
		},
		/**
		 * 前一页
		 * @return {[type]} [description]
		 */
		prevPage: function(){
			var scope = this;
			clickFlag = false;
			scope.stopInterval();
			scope._$targetUl.stop(false, true).animate({
				marginLeft: '+=' + scope._scrollWidth
			}, scope.settings.speed, function(){
				scope.setMl();
				scope.checkMl();
				clickFlag = true;
				if(scope.settings.autoPlay){
					scope.startInterval();
				}
				scope._currentPageIndex--;
				scope._callback(scope._currentPageIndex);
			});
			return this;
		},
		/**
		 * 下一页
		 * @param  {[type]} last [description]
		 * @return {[type]}      [description]
		 */
		nextPage: function(last){
			var scope = this;
			clickFlag = false;
			scope.stopInterval();
			if(last != 'last'){
				scope._$targetUl.stop(false, true).animate({
					marginLeft: '-=' + scope._scrollWidth
				}, scope.settings.speed, function(){
					scope.setMl();
					scope.checkMl();
					clickFlag = true;
					if(scope.settings.autoPlay){
						scope.startInterval();
					}
					scope._currentPageIndex++;
					scope._callback(scope._currentPageIndex);
				});
			} else {
				scope._$targetUl.animate({
					marginLeft: 0
				}, 'fast', function(){
					scope.setMl();
					scope.checkMl();
					clickFlag = true;
					if(scope.settings.autoPlay){
						scope.startInterval();
					}
					scope._currentPageIndex = 0;
					scope._callback(scope._currentPageIndex);
				});
			}
			return this;
		},
		/**
		 * 显示指定页
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		showPage: function(index){
			var scope = this,
				tempScrollWidth = parseInt(scope._scrollWidth * index, 10);
			clickFlag = false;
			scope.stopInterval();
			scope._$targetUl.stop().animate({
				marginLeft: -tempScrollWidth
			}, scope.settings.speed, function(){
				scope.setMl();
				scope.checkMl();
				clickFlag = true;
				if(scope.settings.autoPlay){
					scope.startInterval();
				}
				scope._currentPageIndex = index;
			});
		},
		/**
		 * 回调函数的封装
		 * @return {[type]} [description]
		 */
		_callback: function(index){
			var scope = this;
			if(scope.settings.callback && typeof scope.settings.callback == 'function'){
				scope.settings.callback(index);
			}
		},
		/**
		 * 设置ul对象的margin-left值
		 */
		setMl: function(){
			var scope = this;
			var ml = scope._$targetUl.css('margin-left');
			ml = ml.substring(0, ml.length - 2);
			this._marginLeft = parseInt(ml, 10);
		},
		/**
		 * 检查是否到底了第一页或最后一页
		 * @return {[type]} [description]
		 */
		checkMl: function(){
			var scope = this,
				ulWidth = scope._$targetUl.width(),
				ml = scope._marginLeft;
			if(ml >= 0){
				scope.$prevHandler.hide();
				prevFlag = false;
			} else {
				scope.$prevHandler.show().css({
					'cursor': 'pointer'
				});
				prevFlag = true;
			}
			if(ml <= scope._scrollWidth - ulWidth){
				scope.$nextHandler.hide();
				nextFlag = false;
			} else {
				scope.$nextHandler.show().css({
					'cursor': 'pointer'
				});
				nextFlag = true;
			}
		}

	};

	$.fn[pluginName] = function(options){
		var c = null;
		this.each(function(){
			c = new Carousel(this, options);
		});
		return c;
	};

	return {
		Carousel: Carousel
	};
});