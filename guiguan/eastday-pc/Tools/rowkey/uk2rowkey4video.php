<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/30
 * Time: 23:48
 */
require __DIR__ . "/../../Common/common.php";

$uk = $_SERVER['argv'][1];
$max_long = 9223372036854775807;
$dateStr = '20'.substr($uk,0,12);
$rdStr = substr($uk,15,6);
$cts = strtotime($dateStr).substr($uk,12,3);
$rowkey = ($max_long-($cts.$rdStr));
echo $rowkey;