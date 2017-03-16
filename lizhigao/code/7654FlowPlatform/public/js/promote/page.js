/**
 * 仅供7654流量平台 - 推广业绩页使用
 * @dependencies jquery.min.js,jquery.jpages.min.js
 * @author lizhigao(lizhigao@021.com)
 * @date 2015-08-05
 */
$(function(){
	// echarts配置(引入echarts.js文件就获得了一个AMD环境)
	require.config({
	    paths: {
	        echarts: '../../public/plugin/echarts'
	    }
	});
	require([
	    'echarts',
	    'echarts/chart/line',
	    'echarts/chart/bar'
	], function(ec) {
	    var myChart = ec.init(document.getElementById('J_promote_echart'), 'macarons');
	    $.getJSON('../../public/data/users.json', function(data, status){
	        // console.log('data: ', data);
	        // console.log('status: ', status);
	        var chartList = data.chartList,
	            chartTitle = data.chartTitle,
	            chartSubTitle = data.chartSubTitle,
	            categories = data.categories.reverse(),
	            legendData = [],
	            seriesArr = [];
	        for(var i = 0; i < chartList.length; i++){
	            legendData.push(chartList[i].title);
	            seriesArr.push({
	                name: chartList[i].title,
	                type: 'line',
	                data: chartList[i].data.reverse()
	            });
	        }
	        var option = {
	            grid: {
	                // x2: 120,
	                // y2: 80
	            },
	            // 标题
	            // title: {
	            //     x: 'left',
	            //     text: chartTitle,
	            //     subtext: chartSubTitle
	            // },
	            // 图例
	            legend: {
	                // x: 'right',
	                // y: 'center',
	                // orient: 'vertical',
	                data: legendData
	            },
	            // 提示框
	            tooltip: {
	                trigger: 'axis' // 默认：item  可选：'axis'
	            },
	            // X坐标
	            xAxis: {
	                type: 'category',
	                boundaryGap: false, // false: 两端不留空白
	                data: categories
	            },
	            // y坐标
	            yAxis: {
	                type: 'value'
	            },
	            // 数据
	            series: seriesArr
	        };

	        myChart.setOption(option);

	    });
	    
	});

	// 选择日期
	$('#J_rangeDateForm').on('focus', '#J_startDate, #J_endDate, #J_submit', function(event) {
		// 自动跳转到自定义查询时间
		$('#customDate').prop('checked', true).siblings('input').removeAttr('checked');
	});



	// 分页
	$('#J_promoteStatisticsHolder').jPages({
		containerID: 'J_promoteStatistics',
		perPage: 7,	// 每页显示5条
		first: '首页',
		previous: '上一页',
		next: '下一页',
		last: '最后一页',
		delay: 0	// 同时显示
	});

	/* 让IE支持html5的placeholder属性 */
	$('input, textarea').placeholder();
});
