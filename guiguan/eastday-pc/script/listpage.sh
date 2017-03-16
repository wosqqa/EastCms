#! /bin/bash
arr=(shehui yule shishang junshi keji qiche tiyu caijing guonei guoji xiaohua lishi jiankang youxi xingzuo jiaju)
for var in ${arr[@]}
do
    if [ $# == 1 ] ; then
        /opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Listpage/index.php $var $1
    else
        /opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Listpage/index.php $var
    fi
done
