<?xml version="1.0" encoding="utf-8"?>
<newslist>
	<?php foreach($data as $d){ ?>
		<news>
			<id><?=$d['id']?></id>
			<action>0</action>
			<type><?=$d['type']?></type>
			<url><?='http://mini.eastday.com'.$d['url']?></url>
			<title><![CDATA[<?=$d['topic']?>]]></title>
			<shortTitle></shortTitle>
			<picUrl><?=$d['img']?></picUrl>
			<picDesc><![CDATA[<?=$d['topic']?>]]></picDesc>
			<videoLen></videoLen>
			<videoDesc></videoDesc>
			<videoCap></videoCap>
			<digest></digest>
			<content><![CDATA[<?=$d['zw']?>]]></content>
			<keywords></keywords>
			<category><![CDATA[<?=$d['category']?>]]></category>
			<source><![CDATA[东方头条]]></source>
			<origin><![CDATA[<?=$d['source']?>]]></origin>
			<eventLoc></eventLoc>
			<pubTime><?=$d['time']?></pubTime>
			<posId></posId>
		</news>
	<?php } ?>
</newslist>