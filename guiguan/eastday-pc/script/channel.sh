#! /bin/bash
arr=(shehui yule shishang junshi keji qiche tiyu caijing guonei guoji xiaohua lishi jiankang youxi xingzuo jiaju)
for var in ${arr[@]}
do
    /opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Channel/channel.php $var
done
#/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Channel/channel_hot_json.php hotimg
#/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Channel/channel_hot_json.php hotnews
#/opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Channel/channel_top_json.php
