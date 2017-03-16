# 东方头条
东方头条-东方网旗下《东方头条》是一款会自动学习的资讯软件,为你推荐最新的新闻资讯。

## 业务功能说明
东方头条PC主要包括`首页`、`频道页`、`搜索页`、`新闻详情页`、`滚动栏目`、`视频栏目`、`军事栏目`、`猎奇栏目`、`图片栏目`这8个页面模板，其中`搜索页`、`视频栏目`、`图片栏目`、`军事栏目`、`猎奇栏目`是独立出来的项目。

### 首页
首页主要分为三部分`顶部logo（右侧搜索页入口）`、`中间新闻频道导航`和`底部新闻信息流`。目前线上总共19个频道，其中`视频`、`图片`、`军事`、`猎奇`这四个频道为独立出来的新闻信息流。

#### 频道页
频道页主要分为四部分`顶部闻频道导航`、`中间新闻频道导航（右侧搜索页入口）`和`底部分滚动加载的信息流`。

#### 详情页
详情页主要分为四部分`顶部闻频道导航`、`中间新闻频道导航（右侧搜索页入口）`、`正文内容`和`底部分类的信息流`。其中`正文内容`由人工编辑的新闻、人工编辑拼接的新闻和非人工编辑的新闻。

### 搜索页
搜索页主要分为三部分`顶部logo（右侧搜索页入口）`、`中间新闻频道导航`和`底部搜索出的信息流`。

### 滚动页
搜索页主要分为三部分`顶部logo（右侧搜索页入口）`、`中间新闻频道导航`和`底部日期信息流`。

## 项目架构
### 技术说明
1、使用[jquery](http://jquery.com/)库来对DOM操作、事件绑定以及ajax请求等；
2、使用[html5shiv.js](http://www.bootcdn.cn/html5shiv/)、[respond.min.js](https://www.drupal.org)插件来解决h5的标签在ie9以下浏览器的兼容；
3、使用[juery.cookie.js](http://plugins.jquery.com/cookie/)来解决浏览器端数据缓存问题；
4、项目中还引入了一个js工具库[lodash.js](https://lodash.com/)，为开发提供必要的函数方法提升开发效率；
4、使用[gulp](http://www.gulpjs.com.cn/)对项目代码压缩。

### 项目结构说明
* `www-root/src`目录为源代码文件目录，里面包含项目所有未作任何处理的资源文件，此目录主要用于开发。
* `www-root/assets`目录为压缩代码之后的文件目录，里面包含该项目所有处理后的资源文件，此目录主要用于发布上线。
* `/src`与`/assets`目录里面的目录结构是一一对应关系（代码压缩处理详情，请查看根目录下[gulpfile.js](./gulpfile.js)）文件。

```
eastday-pc/www-root　　
├── assets/　　项目发布目录（压缩后的代码）
│　　├── css/
│　　├── js/
│　　└── images/
│　　
└── src/　　项目开发目录（源代码）
　　├── css/　　css样式文件目录
　　│　　├── 404_error.css　404页面的样式
　　│　　├── 404_reset.css　404页面的样式
　　│　　├── channel.css  频道页的样式　　
　　│　　├── common.css  公共的样式　　
　　│　　├── index.css　　首页的公共样式
　　│　　├── common.css　　项目公共模块的样式（同一个项目不同页面使用）
　　│　　├── page_index_v*.css　首页样式加的版本号（解决上线之后缓存的问题）
　　│　　├── page_search.css　　搜索页面的样式
　　│　　├── page_sports_op.css　频道专题栏目的样式
　　│　　├── page_topic.css　　推荐的页面样式
　　│　　└── detail_v*/　　详情页加版本号（解决上线之后缓存的问题）
　　│　　  　 ├── comment.css　 评论的样式
　　│　　　　 └── detail.css　　详情页的样式│　　
　　├── listpage_v*/　　滚动页加版本号（解决上线之后缓存的问题）
　　│　　　   ├── common.css　滚动页的基础样式
　　│　　　　 └── run.css　　滚动页的样式
　　├── js/　　js脚本文件目录
　　│　　├── resources/　　资源文件
　　│　　├── channel.js　　二级页面的js
　　│　　├── device.js　　判断手机打开页面跳转到h5的页面
　　│　　├── global.js   日志
　　│　　├── hostpot.js  推荐新闻    
　　│　　├── html5shiv.js h5的标签在ie9以下的兼容插件    
　　│　　├── index.js  首页的js    
　　│　　├── jquery.cookie.js cookie的插件
　　│　　├── jquery.min.js　　js库
　　│　　├── page_search.js　 搜索页面的js
　　│　　├── page_topic　　最后一页推荐的新闻
　　│　　└── response.min.js　　h5的标签在ie9以下的兼容插件
　　├── detail_v*/　　滚动页加版本号（解决上线之后缓存的问题）
　　│　　│　　├── comment.js　评论功能的js
　　│　　│　　└── transformtime.js　时间样式的插件
　　│　　└── scrollLoading.js　 图片预加载的插件
　　├── images/　　图片文件目录（用于存放项目用到的所有图片）
　　│　　├── xxx.png
　　│　　└── xxx.png　
　　├── a/　　详情页目录
　　│　　└── *.html  详情页
　　├── guonei.html 二级页面（国内）　
　　└── index.html　　首页
```