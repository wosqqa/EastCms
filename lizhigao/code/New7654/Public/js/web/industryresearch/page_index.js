/**
 * 供行业资讯首页使用
 * @author Created by lizhigao(lizhigao@021.com)
 * @date 2015-05-26
 */
$(function(){
    /* 行业研究-分页实现代码 */
    $('#J_irListHandler').jPages({
        containerID : 'J_irListContainer',  // 列表容器ul
        perPage : 5,   // 每页显示多少条
        //minHeight: false,   // 高度自适应，不需要设置最小高度就设置为false。
        first : '首页',
        previous : '上一页',
        next : '下一页',
        last : '最后一页'
    });
});