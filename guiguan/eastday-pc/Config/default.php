<?php

return [
    //生成目录配置
    //首页js
    'index_json'=>[
        'toutiao_json'=>__WWW_ROOT_JSON."index/toutiao.json",
        'guonei_json'=>[__WWW_ROOT_JSON."index/guonei.json","国内","22"],
        'guoji_json'=>[__WWW_ROOT_JSON."index/guoji.json","国际","27"],
        'tupian_json'=>__WWW_ROOT_JSON."index/tupian.json",
        'shehui_json'=>[__WWW_ROOT_JSON."index/shehui.json","社会","34"],
        'yule_json'=>[__WWW_ROOT_JSON."index/yule.json","娱乐","27"],
        'shishang_json'=>[__WWW_ROOT_JSON."index/shishang.json","时尚","27"],
        'junshi_json'=>[__WWW_ROOT_JSON."index/junshi.json","军事","27"],
        'keji_json'=>[__WWW_ROOT_JSON."index/keji.json","科技","28"],
        'qiche_json'=>[__WWW_ROOT_JSON."index/qiche.json","笑话","27"],
        'tiyu_json'=>[__WWW_ROOT_JSON."index/tiyu.json","体育","27"],
        'caijing_json'=>[__WWW_ROOT_JSON."index/caijing.json","财经","27"],
        'img_json'=>__WWW_ROOT_JSON."index/img.json",
        'personal_json'=>__WWW_ROOT_JSON."index/personal.json"
    ],

    'friend_url' => 'http://friendlinks.dfshurufa.com/api/friendlinks',
    //快讯json
    'kuaixun_json' => __WWW_ROOT_JSON.'kuaixun/kuaixun_%s.json',
    //渠道快讯json
    'qd_kuaixun_json' => __WWW_ROOT_JSON.'kuaixun/qd_kuaixun.json',
    //频道页json
    'channel_json'=>[
        //24小时排行
        'rank_json'=>__WWW_ROOT_JSON."channel/24rank_%s.json",
        //新闻热图
        'img_json'=>__WWW_ROOT_JSON."channel/img.json",
        //今日热点
        'hot_daily_json'=>__WWW_ROOT_JSON."channel/hot_daily.json",
        //轮播
        'lunbo_json'=>__WWW_ROOT_JSON."channel/lunbo_%s.json",

    ],
    'topic_json'=>[
        //24小时排行
        'top_json'=>__WWW_ROOT_JSON."topic/top.json",
    ],

    //详情页json
    'detail_json'=>[
        'jingxuan_json'=>__WWW_ROOT_JSON."detail/jingxuan.json",
        'hot_daily_json'=>__WWW_ROOT_JSON."detail/hot_daily.json",
        'special_recommend_json'=>__WWW_ROOT_JSON."detail/special_recommend.json",
        'hot_recommend_json'=>__WWW_ROOT_JSON."detail/hot_recommend_%s.json"
    ],

    //滚动页
    'listpage_json'=>[
        'rank_json'=>__WWW_ROOT_JSON."listpage/rank.json"
    ],

    //搜索结果页
    'search_json'=>[
        'hotword_json'=>__WWW_ROOT_JSON."search/hotword.json",
        'tuijian_json'=>__WWW_ROOT_JSON."search/tuijian.json",
        'hot_daily_json'=>__WWW_ROOT_JSON."search/hot_daily.json",
    ],

    //@todo 正式环境是 替换成正式的
    'index_path'=>__WWW_ROOT.'index.html',
    'index_uc_path'=>__WWW_ROOT.'index_uc.html',
    'index_dn1234_path'=>__WWW_ROOT.'index_dn1234.html',
    'search_path'=>__WWW_ROOT.'/search/index.html',
    'topic_path'=>__WWW_ROOT.'/topic/index.html',
    'topic_path2'=>__WWW_ROOT.'/topic/index2.html',
    'special_path'=>__WWW_ROOT.'/topic/special.html',

    'channel_path'=>[
        'guonei'=>__WWW_ROOT.'mainland.html',
        'guoji'=>__WWW_ROOT.'world.html',
        'shehui'=>__WWW_ROOT.'society.html',
        'yule'=>__WWW_ROOT.'ent.html',
        'shishang'=>__WWW_ROOT.'fashion.html',
        'junshi'=>__WWW_ROOT.'mil.html',
        'keji'=>__WWW_ROOT.'tech.html',
        'qiche'=>__WWW_ROOT.'auto.html',
        'tiyu'=>__WWW_ROOT.'tiyu.html',
        'caijing'=>__WWW_ROOT.'finance.html',
        'xiaohua'=>__WWW_ROOT.'joke.html',
        'jiankang'=>__WWW_ROOT.'health.html',
        'lishi'=>__WWW_ROOT.'history.html',
        'youxi'=>__WWW_ROOT.'games.html',
        'xingzuo'=>__WWW_ROOT.'astro.html',
        'jiaju'=>__WWW_ROOT.'home.html',
        'sports_op' => __WWW_ROOT . 'aoyun.html',
        'sports_sgop' => __WWW_ROOT . 'sougouayh/toutiao.html',//搜过奥运



        //体育二级频道
        'nba'=>__WWW_ROOT.'nba.html',
        'cba'=>__WWW_ROOT.'cba.html',
        'bundesliga'=>__WWW_ROOT.'bundesliga.html',
        'seriea'=>__WWW_ROOT.'seriea.html',
        'csl'=>__WWW_ROOT.'csl.html',
        'laliga'=>__WWW_ROOT.'laliga.html',
        'premierleague'=>__WWW_ROOT.'premierleague.html',
        'chess'=>__WWW_ROOT.'chess.html',
        'golf'=>__WWW_ROOT.'golf.html',
        'tennis'=>__WWW_ROOT.'tennis.html',
        'badmin'=>__WWW_ROOT.'badmin.html',
        'snooker'=>__WWW_ROOT.'snooker.html',
        'volley'=>__WWW_ROOT.'volley.html',
        'tianjing'=>__WWW_ROOT.'tianjing.html',
        'sports'=>__WWW_ROOT.'sports.html',
    ],

    'detail_path'=>__WWW_ROOT."a/",
    'listpage_path'=>__WWW_ROOT.'listpage/',
    'cdn_path'=>"/a/",
    'cdn_detail_prefix'=>'a/',

    //meta里面 keywords description配置
    'seo' => include 'seo.php',

    'channel_map'=>[
        'xinwen'=>'0001',
        'yule'=>'0002',
        'shehui'=>'0003',
        'caijing'=>'0004',
        'junshi'=>'0005',
        'tiyu'=>'0006',
        'youxi'=>'0007',
        'keji'=>'0008',
        //'nvxing'=>'0009',
        'guonei'=>'0010',
        'guoji'=>'0011',
        'qiche'=>'0012',
        'jiaoyu'=>'0013',
        'fangchan'=>'0014',
        'shishang'=>'0015',
        'weikandian'=>'0016',
        'xiaohua'=>'0017',
        'lishi'=>'0018',
        'jiankang'=>'0019',
        'xingzuo'=>'0020',
        'jiaju'=>'0021',
        'ziran'=>'0023',
        'qinggan'=>'0024'
	    ],

    //最后的日期对应滚动页里面日历插件的最小日期
    'type_map'=>[
        'yule'=>['娱乐','ent','20151217'],
        'shehui'=>['社会','society','20151217'],
        'caijing'=>['财经','finance','20151217'],
        'junshi'=>['军事','mil','20151217'],
        'tiyu'=>['体育','sports','20151217'],
        'keji'=>['科技','tech','20151217'],
        'guonei'=>['国内','mainland','20151217'],
        'guoji'=>['国际','world','20151217'],
        'qiche'=>['汽车','auto','20151217'],
        'shishang'=>['时尚','fashion','20151217'],
        'xiaohua'=>['笑话','joke','20151217'],
        'lishi'=>['人文','history','20160101'],
        'jiankang'=>['健康','health','20160101'],
        'weikandian'=>['新闻',''],
        'xinwen'=>['新闻',''],
        'youxi'=>['游戏','games','20160120'],
        'jiaoyu'=>['教育',''],
        'fangchan'=>['房产',''],
        'xingzuo'=>['星座','astro','20160126'],
        'jiaju'=>['家居','home','20160126'],
        'ziran'=>['自然',''],
        'qinggan'=>['情感','']
        ],

    //频道页没链接的频道
    'not_link_channel' =>['weikandian','xinwen','jiaoyu','fangchan','ziran','qinggan'],

    //首页不显示的模块
    'not_display_in_index'=>['xiaohua', 'lishi', 'jiankang','weikandian','xinwen','youxi','jiaoyu','fangchan','xingzuo','jiaju','ziran','qinggan'],

    //cdn前缀
    'cdn_prefix'=>[
        'detail'=>'a/',
        'channel'=>'',
        'listpage'=>'listpage/',
        'index_json'=>'json/index/',
        'channel_json'=>'json/channel/',
        'detail_json'=>'json/detail/',
        'listpage_json'=>'json/listpage/',
        'kuaixun_json'=>'json/kuaixun/',
        'search_json'=>'json/search/',
        'frames'=>'frames/',
        'search'=>'search/',
        'topic'=>'topic/',
        'topic_json'=>'json/topic/'
    ],
    //不显示频道幻灯片
    'pic_nodisplay' => ['jiankang','lishi','xiaohua','qiche','shishang','youxi','xingzuo','jiaju','tiyu'],

    //渠道内嵌页body颜色
    'bodyColor' => [
        'uc' => '#fbfbfb',
        'dn1234' => '',
    ],

    //领导人列表
    'leaders' => ['习近平','习主席','习大大','彭丽媛','彭麻麻','李克强'],


    'rmtj_arr' => [
        "guonei"=>"国内",
        "junshi"=>"军事",
        "yule"=>"娱乐",
        "guoji"=>"国际",
        "shehui"=>"社会",
        "caijing"=>"财经",
        "qiche"=>"汽车",
        "xiaohua"=>"笑话"
    ],

    'tiyu_map' => [
        'nba' => '5009',
        'cba' => '5010',
        'bundesliga' => '5011',
        'seriea' => '5012',
        'tennis' => '5013',
        'csl' => '5014',
        'laliga' => '5015',
        'premierleague' => '5016',
        'chess' => '5017',
        'tianjing' => '5018',
        'golf' => '5019',
        'volley' => '5020',
        'badmin' => '5021',
        'snooker' => '5022',
        'tiyu'=>'0006'
    ],
    'tiyu_type_map'=>[
        'nba'=>['NBA','nba'],
        'cba'=>['CBA','cba'],
        'bundesliga'=>['德甲','bundesliga'],
        'seriea'=>['意甲','seriea'],
        'csl'=>['中超','csl'],
        'laliga'=>['西甲','laliga'],
        'premierleague'=>['英超','premierleague'],
        'chess'=>['棋牌','chess'],
        'golf'=>['高尔夫','golf'],
        'tennis'=>['网球','tennis'],
        'badmin'=>['羽毛球','badmin'],
        'snooker'=>['台球','snooker'],
        'volley'=>['排球','volley'],
        'tianjing'=>['田径','tianjing']
    ],
    'tiyu_index_count'=>[
        'nba' => 22,
        'cba' =>19,
        'bundesliga' => 5,
        'seriea' => 7,
        'tennis' =>6,
        'csl' => 20,
        'laliga' => 5,
        'premierleague' =>4,
        'chess' => 27,
        'tianjing' => 27,
        'golf' => 6,
        'volley' =>6,
        'badmin' => 6,
        'snooker' => 27,
        'tiyu'=>12
    ]
];