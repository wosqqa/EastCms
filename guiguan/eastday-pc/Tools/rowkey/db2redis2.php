<?php
/**
 * 重新拉取某天的数据到正式rowkey队列重新拉取
 */
require __DIR__ . "/../../Common/common.php";
use Io\Redis;
use Model\Eastday\Rowkey;

//使用示例： php db2redis2.php 140106 160428   将会导出从 2014 年 1 月 6号 数据 到 2016 年 4月 28 日的数据  到redis

if($argc == 3){ //将给定区间日期数据导出到redis
    $ymd_start = $_SERVER['argv'][1] ;
    $ymd_end = $_SERVER['argv'][2] ;
    if(strlen($ymd_start) != 6 || strlen($ymd_end) != 6){
        echo "the length of the parms is invalid";
        exit();
    }
    $pos = 0;
    for($i=0;$i<6;$i++){
        if($ymd_start[$i] != $ymd_end[$i]){
            $pos = $i;
            break;
        }
    }
    switch ($pos){
        case 0: // 所属年份不一样
        case 1: // 所属年份不一样
            $first_year = substr($ymd_start,0,2);
            $second_year = substr($ymd_end,0,2);
            $first_month = substr($ymd_start,2,2);
            $second_month = substr($ymd_end,2,2);
            $first_day  =  substr($ymd_start,4,2);
            $second_day = substr($ymd_end,4,2);

            //导出首年 首月数据
            first_month_data($first_year,$first_month,$first_day);
            first_year_data($first_year,++$first_month);
            mid_year_data($first_year,$second_year);
            last_year_data($second_year,$second_month - 1);
            //导出最后一月数据
            last_month_data($second_year,$second_month,$second_day);
            break;
        case 2: // 所属月份不一样
        case 3:// 所属月份不一样
            $year = substr($ymd_start,0,2);
            $first_month = substr($ymd_start,2,2);
            $second_month = substr($ymd_end,2,2);
            $first_day  =  substr($ymd_start,4,2);
            $second_day = substr($ymd_end,4,2);

            //将首月数据导出

            if($first_month != $second_month){
                if(strlen($first_month) == 1){
                    $first_month = "0" .$first_month;
                }
//                echo $year.$first_month.$first_day."  ".$year.$first_month."31 \n";
                db2redis($year.$first_month.$first_day,$year.$first_month."31");
                $first_month ++;
//                echo $first_month;
            }

            //不在同一个月
            while($first_month != $second_month){
                if(strlen($first_month) == 1){
                    $first_month = "0" .$first_month;
                }
//                echo $year.$first_month."01"."   ".$year.$first_month."31\n";
                db2redis( $year.$first_month."01",$year.$first_month."31");
                $first_month ++;
            }
            if(strlen($first_month) == 1){
                $first_month = "0" .$first_month;
            }
            //导出最后一个月数据
//            echo  $year.$first_month."01" ."  ". $ymd_end;
            db2redis($year.$first_month."01",$ymd_end);
            break;
        case 4:// 所属天数不一样
        case 5:// 所属天数不一样  导出所在月数据
//            echo  $ymd_start."  ".$ymd_end;
            db2redis($ymd_start,$ymd_end);
            break;
    }
    exit();
}else{
    echo "无效参数";
    exit();
}


function db2redis($ymd_start,$ymd_end){
    $i = 0;
    $redis = Redis::getInstance();
    while(1) {
        $ret = Rowkey::get_instance()->getDataBetweenYmd($ymd_start,$ymd_end,$i * 100,100);
        $i++;
        if (!$ret || !is_array($ret)) break;
        foreach ($ret as $row){
            $ret = $redis->rPush("eastdaypc:detail:rowkeyfromdb",$row['rowkey']);
            error_log ("[".date("H:i:s")."]push rowkey:".$row['rowkey']." to db ret:".$ret."\n" , 3 , __APP_LOG_DIR.rtrim(basename(__FILE__),".php")."_".date('Y-m-d').".log");
        }
    }
}

/**
 * 导出首月数据
 *
 * @param string $year
 * @param string $first_month
 * @param string $second_month
 * @param string $first_day
 */
function first_month_data($year,$first_month,$first_day){
         //将首月数据导出
        if(strlen($first_month) == 1){
            $first_month = "0" .$first_month;
        }
//        echo $year.$first_month.$first_day."  ".$year.$first_month."31 \n";
        db2redis($year.$first_month.$first_day,$year.$first_month."31");
}

/**
 * 获取最后一月数据
 *
 * @param $year
 * @param $last_month
 * @param $last_day
 */
function last_month_data($year,$last_month,$last_day){
//    echo  $year.$last_month."01" ."  ". $year .$last_month .$last_day;
    db2redis($year.$last_month."01",$year .$last_month .$last_day);
}

/**
 * 第一年数据
 *
 * @param $year
 * @param $mouth
 */
function first_year_data($year,$mouth){
    //不在同一个月
    while($mouth != 13){
        if(strlen($mouth) == 1){
            $mouth = "0" .$mouth;
        }
//        echo $year.$mouth."01"."   ".$year.$mouth."31\n";
                db2redis($year.$mouth."01",$year.$mouth."31");
        $mouth ++;
    }
}

/**
 * 获取最后一年数据
 *
 * @param $year
 * @param $mouth
 */
function last_year_data($year,$mouth){
    $first_mouth = 1;
    if(strlen($year) == 1){
        $year = "0".$year;
    }
    while($first_mouth <= $mouth){
        if(strlen($first_mouth) == 1){
            $first_mouth = "0" .$first_mouth;
        }

//        echo $year.$first_mouth."01"."   ".$year.$first_mouth."31\n";
        db2redis($year.$first_mouth."01",$year.$first_mouth."31");
        $first_mouth++;
    }
}

//获得中间年份
function mid_year_data($first_year,$second_year){
    $first_year ++;
    while($first_year < $second_year){
        last_year_data($first_year,12);
        $first_year++;
    }
}