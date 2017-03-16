try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=360dh' || '360dh' == coo_name) {
        var s_b_id = '2358673';
    } else if (coo_name == 'qid=2345shouye') {
        var s_b_id = '1128170';
    } else if (coo_name == 'qid=jsdbmini') {
        var s_b_id = '2340867';
    } else {
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