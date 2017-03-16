<?php
use Io\Log;
use Util\WcsFileUploader;
use Util\WcsFileManager;
use Lib\Core;
use Model\Eastday\UploadFailRecord;

function getJsonResponse($url,$data_fields=[],$method = 'GET'){
    try{
        Log::info("{$method} URL:".$url." with params ".http_build_query($data_fields));
        $key = strtolower($method) == 'get' ? 'query':'form_params';
        $client = new GuzzleHttp\Client(['base_uri'=>$url,'connect_timeout' => 3.14,'timeout'=>30.0]);
        $option = [];
        $option[$key] = $data_fields;
        $response  = $client->request($method,$url,$option);
        Log::info( "response: StatusCode:".$response ->getStatusCode());
        $body = $response->getBody()->getContents();
        if (!$body){
            Log::error( "reponse body is empty");
            return false;
        }
        $result = json_decode($body,true);
        if (!$result){
            Log::error( "reponse body json decode  faild");
            return false;
        }
        return $result;
    }catch (Exception $e) {
        Log::error($e->getMessage());
    }
    return false;
}


/**
 * @param $mainArray  mainjson接口返回的数据
 * @param $type       要获取的频道
 * @param $length     需要的长度
 */
function getJsonDataByChannel($url,$type){
    Log::info("[Index] start to get json of $type");
    $begin_time = time();
    $conf  = \Lib\Core::config('index_json')[$type.'_json'];
    $out_put_path = $conf[0];

    $typeId =  \Lib\Core::config('channel_map')[$type];
    $params = ['typeid'=>$typeId,'ispc'=>0,'limitnum'=>50];
    $response = getJsonResponse($url, $params);
    if (!$response) {
        Log::error('fail to get type json data');
        return false;
    }
    if(!$response['data']){
        Log::info('the data array is empty, exit');
        return false;
    }
    $data = $response['data'];
    foreach ($data as $k=>$v){
        if(mb_strwidth($v['topic']) / 2 < 10){
            unset($data[$k]);
        }
    }
    if(count($response['data']) < $conf[2]){
        Log::info('the data array is less than '.$conf[2].', exit');
        return false;
    }
    $data = array_slice($data, 0, $conf[2]);
    $data = filterArray($data);
    return $data;
}


/**
 * @param $mainArray  mainjson接口返回的数据
 * @param $type       要获取的频道
 * @param $length     需要的长度
 */
function getSportsJsonDataByChannel($url,$type){
    Log::info("[Index] start to get json of $type");
    $minnum  = \Lib\Core::config('tiyu_index_count')[$type];
    $typeId =  \Lib\Core::config('tiyu_map')[$type];
    $params = ['typeid'=>$typeId,'ispc'=>0,'limitnum'=>$minnum];
    $response = getJsonResponse($url, $params);
    if (!$response) {
        Log::error('fail to get type json data');
        return false;
    }
    if(!$response['data']){
        Log::info('the data array is empty, exit');
        return false;
    }
    if(count($response['data']) <$minnum){
        Log::info('the data array is less than '.$minnum.', exit');
        return false;
    }
    $data = $response['data'];
    $data = filterArray($data);
    return $data;
}

function filterArray($arr){
    $newArray = [];
    foreach($arr as $item){
        $data = [];
        $data['topic'] = $item['topic'];
        $data['url'] = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html';
        $data['source'] = $item['source'];
        $data['year'] = substr($item['uniquekey'],0,2);
        $data['month'] = substr($item['uniquekey'],2,2);
        $data['day'] = substr($item['uniquekey'],4,2);
        $data['hour'] = substr($item['uniquekey'],6,2);
        $data['minute'] = substr($item['uniquekey'],8,2);

        $imglunbname = $item['llunb'][0];
        $imglunbname['name'] = str_replace("http://","//",$imglunbname['imgsrc']);
        unset($imglunbname['imgsrc']);
        $data['imglunbname'] = $imglunbname;

        $imgmininame = $item['lmini'][0];
        $imgmininame['name'] = str_replace("http://","//",$imgmininame['imgsrc']);
        unset($imgmininame['imgsrc']);
        $data['imgmininame'] = $imgmininame;
        $newArray[] = $data;
    }
    return $newArray;
}


function getJsonDataInDetail($top50Array,$array_from,$len,$conf_key,$type){
    Log::info("[Detail] start to get $type from top50");
    $begin_time = time();
    $arr = array_slice($top50Array,$array_from,$len);
    $result = [];
    foreach($arr as $item){
        $data = new stdClass();
        $data->topic = $item['topic'];
        $data->url = \Lib\Core::config('cdn_path').$item['uniquekey'].'.html';
        $data->img = $item['lmini'][0]['imgsrc'];
        $result[] = $data;
    }
    $json_out_put = ['data'=>$result];
    $conf  = \Lib\Core::config($conf_key);

    $out_put_path = $conf[$type];
    $ret = file_put_contents($out_put_path,json_encode($json_out_put));
    $end_time = time();
    Log::info("[Detail] complete get $type : from top50, out_put_path: $out_put_path, ret: $ret, use: $end_time-$begin_time");

    //上传到cdn
    //上传cdn
    $prefix = Core::config('cdn_prefix')[$conf_key];
    _upload($out_put_path, $prefix);
}


/**
 * @param $fileName
 * @param $localFile
 * @return string   成功返回true，失败返回失败原因
 * 上传到CDN（只有在环境为online时才执行）
 */
function upload_to_cdn($localFile, $cdnFile){
    if(__SDK_ENV == 'online'){
        $cdn_conf = Core::config('cdn');
        $bucketName = $cdn_conf['bucketName'];
        $returnBody = $cdn_conf['returnBody'];
        Log::info('start upload to cdn, localFile:'.$localFile.',cdnFile:'.$cdnFile.',bucketName:'.$bucketName);
        $start_time = explode(' ', microtime())[1].explode(' ', microtime())[0]*1000;
        $ret = WcsFileUploader::upload($bucketName,$cdnFile,$localFile,$returnBody);
        $end_time = explode(' ', microtime())[1].explode(' ', microtime())[0]*1000;
        $retArr = json_decode($ret,true);
        $result = $retArr['code'] == '200'? true : false;
        if($result){
            Log::info(sprintf('complete upload to cdn, result:%d, ret:%s, use:%d ms',$result,$ret,$end_time-$start_time));
            return true;
        }else{
            Log::error(sprintf('complete upload to cdn, result:%d, ret:%s, use:%d ms',$result,$ret,$end_time-$start_time));
            return $ret;
        }
    }
    return 'env is not online';
}


function delete_from_cdn($fileKey){
    if(__SDK_ENV == 'online'){
        $cdn_conf = Core::config('cdn');
        $bucketName = $cdn_conf['bucketName'];
        Log::info('start delete from cdn, bucketName:'.$bucketName.',filename:'.$fileKey);
        $start_time = time();
        $ret = WcsFileManager::delete($bucketName,$fileKey);
        $end_time = time();
        $retArr = json_decode($ret,true);
        $result = $retArr['code'] == '200'? true : false;
        if($result){
            Log::info(sprintf('complete delete from cdn, result:%d, ret:%s, use:%d ms',$result,$ret,$end_time-$start_time));
            return true;
        }else{
            Log::error(sprintf('complete delete from cdn, result:%d, ret:%s, use:%d ms',$result,$ret,$end_time-$start_time));
            return $ret;
        }
    }
    return 'env is not online';
}

/**
 * @param $out_put_path
 * $out_put_path 本地文件名
 * $forced = true 强制上传
 * return  true or false
 */
function _upload($out_put_path,$prefix,$forced=false,$rowkey=null)
{

    if (__SDK_ENV == 'test' || __SDK_ENV == 'dev') {
        return true;
    }

    if (!defined("CDN_UPLOAD") || CDN_UPLOAD == false) {
        if(!$forced) return false;
    }
    $localFile = $out_put_path;
    $cdnFile = $prefix.basename($localFile);
    $ufile_result = \Util\UcloudFileUploader::uploadcdn($localFile, $cdnFile);
    if(!$ufile_result){
        Log::error('ufile upload failed, cdnfile:'.$cdnFile);
    }
    $result = upload_to_cdn($localFile,$cdnFile);
    if($result !== true){
        //若上传失败，将记录存入upload_fail_record
        $type = ($rowkey==null) ? 0 : 1;
        $now = time();
        $params = [
            'type'=>$type,
            'local_path'=>$localFile,
            'cdn_path'=>$cdnFile,
            'fail_time'=>$now,
            'fail_reason'=>$result,
            'current_status'=>0,
            'update_time'=>$now,
            'upload_times'=>1,
            'rowkey'=>$rowkey
        ];
        Log::info('start to save upload fail record, params:'.json_encode($params));
        $insert_result = UploadFailRecord::get_instance()->insert($params);
        if(!$insert_result){
            Log::error('fail to save upload fail record, params:'.json_encode($params));
        }else{
            Log::info('complete to save upload fail record, params:'.json_encode($params));
        }
        return false;
    }
    return $result;
}


function update_flag($detail_page_name,$rowkey){

    if (__SDK_ENV == 'test') {
        return true;
    }

    $update_flag_url = Core::config("update_news_flag_url");
    $update_flag_params = ['rowkey'=>$rowkey,'site'=>'pc'];
    Log::info("[Detail] start update news flag, rowkey: $rowkey, page_name: $detail_page_name");
    $ret = getJsonResponse($update_flag_url,$update_flag_params,'POST');
    if(!$ret || $ret['code'] != '200'){
        $update_result =  false;
    }else{
        $update_result = true;
    }
    if($update_result){
        Log::info("[Detail] complete update news flag, rowkey: $rowkey, page_name: $detail_page_name, result: $update_result, ret: ".json_encode($ret));
    }else{
        Log::error("[Detail] complete update news flag, rowkey: $rowkey, page_name: $detail_page_name, result: $update_result, ret: ".json_encode($ret));
    }
    return $update_result;
}


function isImgNews($url){
    if(!strpos($url,"miniimg.eastday.com")){
        return false;
    }
    return true;
}

function getPageName($j, $d, $type, $hasDate=''){
    $page_name = '';
    if($hasDate){
        if($j<10){
            $page_name = $type."-".substr($hasDate,0,6)."0{$j}".".html";
        }else{
            $page_name = $type."-".substr($hasDate,0,6).$j.".html";
        }
    }else{
        $hasDate = date("Ymd");
        if($j == $d && substr($hasDate,0,6) == date("Ym")){
            $page_name = $type.".html";
        }else{
            if($j<10){
                $page_name = $type."-".substr($hasDate,0,6)."0{$j}".".html";
            }else{
                $page_name = $type."-".substr($hasDate,0,6).$j.".html";
            }
        }
    }
    return $page_name;
}

function getStyleClass($j, $minDate,$d ){
    $class = '';
    if($j<10){
        $date_to_compare = date("Ym0").$j;
    }else{
        $date_to_compare = date("Ym").$j;
    }
    if($date_to_compare < $minDate){
        $class = "calendar-not-display";
    }else{
        if($d == $j){
            $class = "calendar-current";
        }else if($j > $d){
            $class = "calendar-future";
        }else if($j < $d){
            $class = "calendar-normal";
        }
    }
    return $class;
}