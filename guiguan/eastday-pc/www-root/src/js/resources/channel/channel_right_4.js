try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function(){
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=2345xiaohua') {
        var s_b_id = '2511715';
    }else if(coo_name == 'qid=sgshouyesex' && newstype == 'sex'){
        s_b_id = '2580692';
    }else if (coo_name == 'qid=kuaiyamini' || coo_name == 'qid=kuaiyamini3'){
        var s_b_id = '2688957';
    }else{
        s_b_id = "2447086";
    }
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: s_b_id,
        container: s,
        size: '620,110',
        display: 'inlay-fix'
    });
})();