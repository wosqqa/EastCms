#! /bin/bash
if [ $# != 1 ]
then
        echo -e "USAGE: $0 option [rowkey | cdninfo ]"
        exit 0;
fi
if [ $1 = "rowkey" ]
then
        arr=(1512 1601 1602 1603 1604 1605 1606 1607 1608 1609 1610 1611 1612)
        for var in ${arr[@]}
        do
            sql="CREATE TABLE rowkey_$var (
                  id int(11) NOT NULL AUTO_INCREMENT,
                  rowkey char(24) NOT NULL COMMENT 'rowkey',
                  ymd int(6) NOT NULL COMMENT '日期',
                  ctime int(11) NOT NULL COMMENT '插入时间',
                  status tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态冗余',
                  PRIMARY KEY (id),
                  UNIQUE KEY rowkey (rowkey) USING BTREE,
                  KEY ymd (ymd)
                ) ENGINE=InnoDB AUTO_INCREMENT=1237 DEFAULT CHARSET=utf8"
            mysql -h10.10.156.193 -ueastday_pc -p1q2w3##WQ!@#8d eastday_pc -e "${sql}"
            #mysql -h172.18.254.12 -uphpdev -piQ2w3e4r5t!! eastday_pc -e "${sql}"
        done
fi

if [ $1 = "cdninfo" ]
then
    arr=(1512 1601 1602 1603 1604 1605 1606 1607 1608 1609 1610 1611 1612)
    for var in ${arr[@]}
    do
        sql="CREATE TABLE upload_fail_record_$var (
              id int(11) NOT NULL AUTO_INCREMENT,
              type tinyint(1) NOT NULL COMMENT '1表示详情页，0表示其他类型',
              local_path varchar(150) NOT NULL COMMENT '本地文件的路径',
              cdn_path varchar(150) NOT NULL COMMENT '上传到cdn的路径',
              fail_time int(10) NOT NULL COMMENT '上传失败的时间',
              fail_reason varchar(255) NOT NULL DEFAULT '' COMMENT '上传失败的原因',
              current_status tinyint(1) NOT NULL DEFAULT '0' COMMENT '0没有成功，1已经上传',
              update_time int(10) NOT NULL COMMENT '更新的时间',
              upload_times tinyint(3) NOT NULL DEFAULT '1' COMMENT '总上传次数',
              rowkey char(24) DEFAULT NULL COMMENT '上传失败的详情页对应的rowkey',
              PRIMARY KEY (id),
              KEY rowkey (rowkey)
            ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8"
        mysql -h10.10.156.193 -ueastday_pc -p1q2w3##WQ!@#8d eastday_pc -e "${sql}"
        #mysql -h172.18.254.12 -uphpdev -piQ2w3e4r5t!! eastday_pc -e "${sql}"
    done
fi
