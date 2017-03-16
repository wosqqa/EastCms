<?php
define('CDN_UPLOAD',false);
return [

    //内容接口配置
//    'top50'=>'http://180.150.177.191/newsf/top50',
	'top20'=>'http://120.132.85.154/eastdayminisitetop/top/gettop20.do',
	//个性推荐
	'personal'=>'http://120.132.85.154/eastdayminisitetop/top/getalltop50.do',
    'top50'=>'http://120.132.85.154/eastdayminisitetop/top/gettop50.do',

    'type'=>'http://120.132.85.154/CMS/scan/scan.do',
    'main'=>'http://123.59.52.57/json/mainjson',
    'hotimg'=>'http://123.59.52.57/json/picjson',
	//搜索热词接口
		'hotword' => 'http://minisearch.dftoutiao.com/hotwords/hot',

	'detail'=>'http://123.59.47.113/detail_eastdaypc.php',
	"update_news_flag_url" => "http://123.59.46.112/EastdayMiniInterf/update",
    //"listpage_url"=>"http://192.168.1.87:8181/jsonV2/RollingNews",
	//"listpage_url"=>"http://120.132.85.154/jsonV2/RollingNews",
		"listpage_url"=>"http://120.132.85.154/jsonV2/RollingNewsNew",
    //频道页实时接口
	'channel_list_url'=>'//ttpc.dftoutiao.com/jsonpc/refresh',
	'channel_list_next_url'=>'//ttpc.dftoutiao.com/jsonpc/next',

    // 图片服务器域名
    'img_domain'=>'http://ddtest.w.wcsapi.biz.matocloud.com/',
	//专题页面今日热点和小编推荐
	'special_toutiao_url' => 'http://newsapi2.dfshurufa.com/Public/Uploads/xinwenzhanzt/xinwenzhanzt.json',

	'cdn'=>[
		'ak'=>'639b75c4bef593e8c6c78c6575c240bf5d5ad29d',
		'sk'=>'58b2df93fa55c3019bf59b7b09cbf2baad4eb2b4',
		'bucketName'=>'mini',
		'returnBody'=>'bucket=$(bucket)&key=$(key)&fname=$(fname)&url=$(url)&hash=$(hash)'
	]
];
