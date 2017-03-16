#! /bin/bash
arr=(nba cba bundesliga seriea tennis csl laliga premierleague chess tianjing golf volley badmin badmin snooker)
for var in ${arr[@]}
do
    /opt/php/bin/php /data/app/www/eastday-pc/HtmlBuilder/Channel/sportschannel.php $var
done