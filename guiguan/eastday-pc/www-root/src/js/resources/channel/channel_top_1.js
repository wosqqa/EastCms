try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function(){
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=360dh' || '360dh' == coo_name) {
        var s_b_id = '2358673';
    } else if (coo_name == 'qid=2345shouye') {
        var s_b_id = '1128170';
    } else if (coo_name == 'qid=jsdbmini') {
        var s_b_id = '2406510';
    } else if (coo_name == 'qid=2345xiaohua') {
        var s_b_id = '2511722';
    } else if (coo_name == 'qid=kuaiyamini' || coo_name == 'qid=kuaiyamini3'){
        var s_b_id = '2688947';
    }else if (coo_name == 'qid=7654dh') {
        var s_b_id = '2841896';
    }else if (coo_name == 'qid=baidullqjoke') {
        var s_b_id = '3021910';
    }else {
        var s_b_id = '1109402';
    }
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: s_b_id,
        container: s,
        size: '620,110',
        display: 'inlay-fix'
    });
})();