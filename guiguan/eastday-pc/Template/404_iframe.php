<html>
<head>
    <meta charset="utf-8"/>
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        body {
            width: 940px;
            font: 14px/2 "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53";
        }

        .ul_div1 {
            width: 400px;
            height: 380px;
            float: left;
        }

        .ul_div2 {
            width: 400px;
            height: 380px;
            float: right;
        }

        p.title {
            height: 22px;
            line-height: 22px;
            text-indent: 12px;
            border-left: 3px solid #ee4b4b;
            font-size: 18px;
            color: #444444;
            font-weight: bold;
            margin-bottom: 10px;
        }

        ul {
            list-style: none;
        }

        li {
            height: 34px;
            line-height: 34px;
            overflow: hidden;
        }

        li a {
            color: #666666;
            text-decoration: none;
        }

        li a:hover {
            color: #ee4b4b;
            text-decoration: underline;
        }

        li span {
            padding-right: 10px;
            font-size: 20px;
            font-style: italic;
            vertical-align: top;
            color: #666666;
        }

        li span.sp1,
        li span.sp2,
        li span.sp3 {
            color: #ee4b4b;
        }
    </style>
</head>
<body>

<?php
    $recommend_news = array_slice($top50Array,0,10);
    $rank = array_slice($top50Array,10,10);
?>

<div class="ul_div1">
    <p class="title">新闻推荐</p>
    <ul>
        <?php foreach ($recommend_news as $k=>$v ){ ?>
        <li>
            <span class="sp<?= $k+1 ?>"><?= $k+1 ?></span>
            <a target="_top" href="<?= \Lib\Core::config('cdn_path').$v['uniquekey'].'.html'?>"><?= $v['topic']?></a>
        </li>
        <?php }?>

    </ul>
</div>
<div class="ul_div2">
    <p class="title">热点排行</p>
    <ul>
        <?php foreach ($rank as $k=>$v ){ ?>
            <li>
                <span class="sp<?= $k+1 ?>"><?= $k+1 ?></span>
                <a target="_top" href="<?= \Lib\Core::config('cdn_path').$v['uniquekey'].'.html'?>"><?= $v['topic']?></a>
            </li>
        <?php }?>
    </ul>
</div>
</body>
</html>