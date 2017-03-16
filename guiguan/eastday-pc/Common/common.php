<?php
require __DIR__."/version.php";
define("__APP_PATH",dirname(__DIR__).'/');
define("__COMMON_PATH",__APP_PATH."Common/");
define("__PATH_APP_CONF",__APP_PATH."Config/");
define("__TEMPLATE_DIR",__APP_PATH."Template/"); //模板目录
//网站目录
define("__WWW_ASSETS","/assets/");
define("__WWW_CSS","/assets/css/");
define("__WWW_JS","/assets/js/");
define("__WWW_IMG","/assets/images/");
//内嵌页
define("__WWW_QD_ASSET","/assets/qd_assets/");

define("__WWW_CSS_V1","/assets/v1/css/");
define("__WWW_JS_V1","/assets/v1/js/");
define("__WWW_IMG_V1","/assets/v1/images/");

define("__DETAIL_SOURCE",'/assets/detail_v'.DETAIL_VERISON_NUM."/");
define("__LISTPAGE_SOURCE",'/assets/listpage_v'.LISTPAGE_VERISON_NUM."/");

require __DIR__."/../../phpsdk/Sdk.php";

if (__SDK_ENV == "online" || __SDK_ENV == "test"){
    define("__WWW_ROOT",'/data/www/eastday/');
    define("__APP_LOG_DIR",'/data/www/Log/');
}else{
    define("__WWW_ROOT",__APP_PATH."www-root/");
    define("__APP_LOG_DIR",__APP_PATH."Log/");
}
define("__WWW_ROOT_JSON",__WWW_ROOT."json/");
//开启log
\Io\Log::setMask(LOG_PRI_ALL);
\Io\Log::attach(new \Io\LogObserver\LogFile(__APP_LOG_DIR));
require __COMMON_PATH ."function.php";





