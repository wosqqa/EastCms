<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/30
 * Time: 23:48
 */
require __DIR__ . "/../../Common/common.php";

$uk = $_SERVER['argv'][1];
$type = $_SERVER['argv'][2];
$max_long = 9223372036854775807;
$type_number = \Lib\Core::config('channel_map')[$type];
$dateStr = substr($uk,0,12);
$cts = strtotime('20'.$dateStr).substr($uk,-3);
$rowkey = $type_number.'_'.($max_long-$cts);
echo $rowkey;