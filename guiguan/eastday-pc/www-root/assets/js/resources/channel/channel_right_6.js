/**
 * Created by Administrator on 2016/3/23.
 */
try{
    if (typeof(coo_name) == "undefined" || coo_name == null) {
        coo_name = '';
    }
}catch(e){}
(function(){
    var s = "_" + Math.random().toString(36).slice(2);
    if (coo_name == 'qid=2345xiaohua') {
        var s_b_id = '2511684';
    }else if(coo_name == 'qid=sgshouyesex' && newstype == 'sex'){
        s_b_id = '2580696';
    }else if (coo_name == 'qid=kuaiyamini' || coo_name == 'qid=kuaiyamini3'){
        var s_b_id = '2689012';
    }else if (coo_name == 'qid=7654dh') {
        var s_b_id = '2841873';
    }else if (coo_name == 'qid=n52daohang') {
        var s_b_id = '2906071';
    }else if (coo_name == 'qid=7654dh01') {
        var s_b_id = '2912732';
    }else if (coo_name == 'qid=baidullqjoke') {
        var s_b_id = '3021926';
    }else if (coo_name == 'qid=9973dh') {
        var s_b_id = '3089124';
    }else if (coo_name == 'qid=jintiantoutiao') {
        var s_b_id = '3133281';
    }else{
        s_b_id = "2447088";
    }
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: s_b_id,
        container: s,
        size: '620,110',
        display: 'inlay-fix'
    });
})();