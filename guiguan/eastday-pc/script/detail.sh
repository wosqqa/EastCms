#!/bin/bash
if [ $# != 1 ]
then
        echo -e "USAGE: $0 option [start | stop ]"
        exit 0;
fi

if [ $1 = "start" ]
then
        pidnum=`ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail.php"|grep -v grep|wc -l`
        if [ $pidnum -lt 1 ]
        then
                for((i=1;i<20;i++))
                do
                   (/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail.php >> /data/www/Log/detail/$(date +"%Y%m%d").log &)
                done
        fi
        pidnum2=`ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail_for_360.php"|grep -v grep|wc -l`
        if [ $pidnum2 -lt 1 ]
        then
                   (/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail_for_360.php > /dev/null 2>&1 &)
        fi
fi

if [ $1 = "stop" ]
then
        pidnum=`ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail.php"|grep -v grep|wc -l`
        if [ $pidnum -lt 1 ]
        then
                echo "no program killed."
        else
                for pid in `ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail.php"|grep -v grep|awk '{print $2}'`
                do
                        target_exe=`readlink /proc/$pid/exe | awk '{print $1}'`
                        #如果target_exe非空字符串
                        if [ -n "$target_exe" ]
                        then
                                        #发信号10安全退出
                                        kill -10 $pid
                        fi
                done
                sleep 1
                echo "program stoped."
        fi
        pidnum2=`ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail_for_360.php"|grep -v grep|wc -l`
        if [ $pidnum -lt 1 ]
        then
                echo "no detail_for_360 program killed."
        else
                for pid in `ps -ef|grep "/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Detail/detail_for_360.php"|grep -v grep|awk '{print $2}'`
                do
                        target_exe=`readlink /proc/$pid/exe | awk '{print $1}'`
                        #如果target_exe非空字符串
                        if [ -n "$target_exe" ]
                        then
                                        #发信号10安全退出
                                        kill -10 $pid
                        fi
                done
                sleep 1
                echo "detail_for_360 program stoped."
        fi
fi