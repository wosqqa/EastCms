<?xml version="1.0" encoding="utf-8"?>
<urlset>
	<?php foreach ($news as $k=>$v) { ?>
	<url>

		<loc><?=$v['url']?></loc>
		<lastmod><?=$v['news_time']?></lastmod>
		<changefreq>daily</changefreq>

	</url>
	<?php } ?>
</urlset>