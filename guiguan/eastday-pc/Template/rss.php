<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/xsl" href="/assets/css/rss_xml_style.css"?>
<rss version="2.0">
    <channel>
        <title>东方头条</title>
        <image>
            <title>东方头条网</title>
            <link>http://mini.eastday.com</link>
            <url>http://mini.eastday.com/assets/images/logo.png</url>
        </image>
        <description>东方头条网 东方网 旗下《东方头条》是一款会自动学习的资讯软件,它会分析你的兴趣爱好,为你推荐喜欢的内容,并且越用越懂你.就要你好看,东方头条新闻网!</description>
        <link>http://mini.eastday.com</link>
        <generator>mini.eastday.com</generator>
        <?php foreach($data as $v) {?>
        <item>
            <title><?=$v['topic']?></title>
            <link>http://mini.eastday.com<?=$v['url']?>?qid=rss</link>
            <author>mini.eastday.com</author>
            <category/>
            <pubDate><?=$v['time']?></pubDate>
            <comments/>
            <description><?=$v['zw']?></description>
        </item>
        <?php }?>
    </channel>
</rss>