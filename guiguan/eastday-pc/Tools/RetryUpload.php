<?php
/**
 * Created by PhpStorm.
 * User: leooo.
 * Date: 2015/12/18
 * Time: 15:29
 */

require __DIR__ . "/../Common/common.php";
use Model\Eastday\UploadFailRecord;
use Lib\Core;


$sql = 'select * from `upload_fail_record_1512`  where `current_status` = ?';
$params = [0];
$ret = UploadFailRecord::get_instance()->query_with_prepare($sql,$params);

foreach ($ret as $item) {
	$type = $item['type'];
	$fail_time = $item['fail_time'];
	$local_path = $item['local_path'];
	$cdn_path = $item['cdn_path'];

	if($type == 1){
		//详情页
		$rowkey = $item['rowkey'];
		$update_result = update_flag(basename($local_path),$rowkey);
	}else{
		$cdn_prefix = Core::config('cdn_prefix');
		$prefix = dirname($cdn_path).'/';
		if($prefix == $cdn_prefix['listpage']){
			$now = time();
			if(($now - $fail_time < 15 * 60) && (1 == 1)){
				upload_to_cdn($local_path, $cdn_path);
			}
		}else{

		}
	}
}