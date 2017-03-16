#! /bin/bash
#生成滚动页，从20151217至20151223
arr=(shehui yule shishang junshi keji qiche tiyu caijing guonei guoji xiaohua lishi jiankang)
dateArr=(20151217 20151218 20151219 20151220 20151221 20151222 20151223 20151224 20151225 20151226 20151227 0151228 20151229 20151230 20151231 20160101 20160102 20160103 20160104 20160105 20160106 20160107 20160108 20160109 20160110 20160111 20160112 20160113)
for var in ${arr[@]}
do
    for var2 in ${dateArr[@]}
    do
        /opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Listpage/index.php $var $var2
    done
done