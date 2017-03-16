<?php
/**
 * 拉取6\7月份rowkey 到 eastday_pc_news 表
 */

require __DIR__ . "/../Common/common.php";
use Lib\Core;
use Model\Eastday\Rowkey;
use Model\Eastday\eastdayPcNews;
use Io\Log;
$ymd =['160601','160701'];
$i = 0;
$j =0;
$detail_url = Core::config('detail');

foreach($ymd as $k=>$v){
    while(1) {
        if($v == '160601'){
            $ret = Rowkey::get_instance()->getDataBetweenYmd($v,'160631',$i * 100,100);
            $i++;
            if (!$ret || !is_array($ret)) break;
            foreach ($ret as $row){
                $data = getDetailInfo($detail_url,$row['rowkey']);
                $data['tablename'] = "1606";
                $result  =  eastdayPcNews::get_instance()->insert_qd($data);
                if($result){
                    error_log("insert eastday_Pc_News_{$data['tablename']} :".$row['rowkey']."\n",3,__APP_LOG_DIR.rtrim(basename(__FILE__),".php")."_".".log");
                }
            }

        }
        else{
            $ret = Rowkey::get_instance()->getDataBetweenYmd($v,'160731',$j * 100,100);
            $j++;
            if (!$ret || !is_array($ret)) break;
            foreach ($ret as $row){

                $data = getDetailInfo($detail_url,$row['rowkey']);
                $data['tablename'] = "1607";
                $result =  eastdayPcNews::get_instance()->insert_qd($data);
                if($result){
                    error_log("insert eastday_Pc_News_{$data['tablename']} :".$row['rowkey']."\n",3,__APP_LOG_DIR.rtrim(basename(__FILE__),".php")."_".".log");
                }
            }
        }
    }
}


function getDetailInfo($detail_url, $rowkey)
{
    list($type, $short_rowkey) = explode("_", $rowkey);
    if (!trim($short_rowkey)) return false;

    $detail_params = ['rowkey' => $short_rowkey];
    $detailArrayResponse = getJsonResponse($detail_url, $detail_params);
    if (!$detailArrayResponse || $detailArrayResponse['code'] != 200) {
        //201是接口获取no data
        if ($detailArrayResponse['code'] == 201) {
            Log::error('[Detail]build fail, ret:' . json_encode($detailArrayResponse));
            return false;
        }
        Log::error('[Detail]build fail, ret:' . json_encode($detailArrayResponse));
        return 404;
    }

    $detailArray = $detailArrayResponse['data'][0];
    $java_timestamp = $detailArray['crawlerts'];
    $uk = date('ymdHis', substr($java_timestamp, 0, 10)) . substr($java_timestamp, -3);

    $data['type'] = $type;
    $data['rowkey'] = $rowkey;
    $data['url'] = $uk . ".html";
    $data['topic'] = str_replace("\"","'",$detailArray['topic']) ;

    $data['news_time'] = date('Y-m-d H:i', substr($java_timestamp, 0, 10));
    $data['save_time'] = time();
    return $data;
}
