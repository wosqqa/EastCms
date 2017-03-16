#! /bin/bash
#把某天的数据重新塞到redis rowkey队列中，重新生成详情页 高危操作[default|ymd]
/opt/php/bin/php /data/app/www/eastday-pc/Tools/rowkey/db2redis.php
#从备份rowkey的redis队列pop数据到db
/opt/php/bin/php /data/app/www/eastday-pc/Tools/rowkey/redis2db.php