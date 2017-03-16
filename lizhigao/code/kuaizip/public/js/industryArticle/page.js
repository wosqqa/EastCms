/**
 * 快压 - “行业文章” 引用js文件
 * @dependencies jquery
 * @created by lizhigao(lizhigao@021.com)
 * @date 2015-08-26
 */
$(function(){
    /**
     * 变量定义区
     */
    var $text = $('#J_ia_list').find('p').children('span');

    /**
     * 截取的一段指定长度的文字
     */
    $text.each(function(){
        var $this = $(this);
        $this.html($this.html().substr(0, 110) + '...');
    });

    /**
     * 文章列表分页
     */
    $('#J_ia_list_holder').jPages({
        containerID: 'J_ia_list',
        perPage : 4,   // 每页显示多少条
        //animation: 'fadeInLeftBig',
        minHeight: false,
        first : '首页',
        previous : '上一页',
        next : '下一页',
        last : '最后一页'
    });
});