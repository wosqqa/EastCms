/**
 * 仅供7654流量平台 - 联盟公告页面使用
 * @dependencies jquery.min.js, jquery.jpages.min.js
 * @author lizhigao(lizhigao@021.com)
 * @date 2015-08-05
 */
$(function(){
	/* 分页 */
	$('#J_announcementListHolder').jPages({
		containerID : 'J_announcementList',  // 列表容器ul
	    perPage : 10,   // 每页显示多少条
	    first : '首页',
	    previous : '上一页',
	    delay: 0,
	    next : '下一页',
	    last : '最后一页'
	});
});


