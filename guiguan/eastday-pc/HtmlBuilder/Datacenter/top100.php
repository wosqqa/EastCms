<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/9/5
 * Time: 11:42
 */
require __DIR__ . "/../../Common/common.php";
use Io\Log;
use Lib\Core;

$top50Url = Core::config('top50');
$params = ['ispc'=>0];
$top50JsonObject = getJsonResponse($top50Url,$params);
if (!$top50JsonObject) {
	Log::error('datacenter_top100 | fail to get top50 data');
	exit();
}
if (!$top50JsonObject['data']) {
	Log::error('datacenter_top100 | the data array is empty,exit');
	exit();
}
$data = $top50JsonObject['data'];
$data = array_slice($data,0,100);
$urls = [];
foreach ($data as $k=>$v){
	$urls[] = "http://mini.eastday.com/a/".$v['uniquekey'].'.html';
}
$file = fopen("top100.csv","w");
fputcsv($file, $urls, "\n") ;
fclose($file);
send();

function send(){
	$mail = new PHPMailer();
	$mail->CharSet='UTF-8';
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.exmail.qq.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'monitor@021.com';                 // SMTP username
	$mail->Password = 'mt!@#123qaz';                     // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('monitor@021.com', '东方头条pc');
	$mail->addAddress('huangyuxin@021.com', 'huangyuxin');     // Add a recipient
	$mail->addAddress('xuqing@021.com', 'xuqing');
	//$mail->addReplyTo('monitor@021.com', 'monitor');

    $mail->addAttachment('top100.csv', 'top100.csv');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	//$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = '东方头条pc端 top100新闻';
	$mail->Body    = sprintf("hi，附件中是 %s 东方头条pc端top100新闻，请注意查收", date("Y年m月d日"));
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
}