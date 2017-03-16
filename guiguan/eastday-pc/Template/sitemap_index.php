<?xml version="1.0" encoding="utf-8"?>
<sitemapindex>
	<?php foreach ($sitemaps as $k=>$v) { ?>
		<sitemap>
			<loc>http://mini.eastday.com/<?=$v?></loc>
			<lastmod><?=date('Y-m-d')?></lastmod>
		</sitemap>
	<?php } ?>
</sitemapindex>