/**
 * 我要提问栏目专用
 * @author created by lizhigao(lizhigao@021.com)
 * @date 2015-05-27
 */
$(function(){
    /* 问题列表-分页实现代码 */
    $('#J_questionsListHandler').jPages({
        containerID : 'J_questionsList',  // 列表容器ul
        perPage : 5,   // 每页显示多少条
        //minHeight: false,   // 高度自适应，不需要设置最小高度就设置为false。
        first : '首页',
        previous : '上一页',
        next : '下一页',
        last : '最后一页'
    });
    /* 我要提问 - 已登录 分页显示我的提问 */
    $('#J_askQuestionTableHandler').jPages({
        containerID : 'J_askQuestionTableList',  // 列表容器ul
        perPage : 3,   // 每页显示多少条
        first : '首页',
        previous : '上一页',
        next : '下一页',
        last : '最后一页'
    });

});