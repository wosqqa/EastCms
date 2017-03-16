### 项目介绍

1. 我负责的项目有[新闻站](mini.eastday.com),[图片站](miniimg.eastday.com)(可以从新闻站接口进),[军事站](mil.eastday.com)(可以从新闻站接口进),[猎奇站](www.lieqinews.com),mini站(360壁纸,快压,输入法等)如[mini004](mini.eastday.com/mini/mini004)。
2. 新闻站的日志上传到git上。
3. 用到代码管理工具是git。注册个git账号，先生成个本地仓库，git clone （本地仓库的地址）然后git remote add phpteam (项目的地址)。就可以提交拉取项目的代码了。编辑器主要用的是sublime、webstorm。前端的代码规范在[码云](http://git.oschina.net/)里，注册账号加入组织就可看到。
4. 目前只有新闻站的需求迭代多一点，其他站都是在维护中。新闻站主要是一些前端的页面制作，和一些动态效果，数据的交互。目前新闻站要兼容到ie6,因为ie6,7用户量较少，只需要功能兼容，内容能看。其他不做太多要求。

### 环境搭建
- 环境用的是wampserver,可以再网上下载最新版本[wampserver安装流程](http://jingyan.baidu.com/article/2d5afd69efe9cf85a3e28e54.html)。
- 环境搭建好，打开项目页面流程：
`C:\WINDOWS\system32\drivers\etc\hosts在中间增加`
`D:\wamp\Apache2\conf\extra\httpd-vhosts.conf`
`<VirtualHost *:80>`
    `DocumentRoot "D:\wamp\www\mini"//自己的项目目录`
    `ServerName mode.mini.com  //根据自己的需要命名`
`</VirtualHost> `

-  左键wanp,  config files\httpd.conf, 查找vhost 三次,把Include conf/extra/httpd-vhosts.conf 这句话前面的#去掉,然后关闭所有浏览器,重启wamp,然后输入(mode.eastday.com)就可以在本地打开页面了

### 主要功能
- 新闻站的主要功能是头条新闻的展示，新闻是编辑编辑的新闻，我们主要是负责页面的正常展示，页面的动态交互，日志的传参。页面大部分是用php做的。

### 项目目录介绍
- (../images/motion.png)
- 上面图片上是新闻站的目录结构。首先在www-root下面建个文件夹命名为a,在Htmlbuilder下找到相应的文件夹。输入命令php detail.php 有的时候生成不了,可以问php的同事。
- 页面的模板在template。平时在www-root下面开发需要改模板的话跟php的同事沟通一下。
- 详情页面在a目录下，其他页面在www-root的根目录下，样式在assets目录下css文件夹下，js在assets目录下js文件夹下，图片在images文件夹下。

### 项目统计规则
- 在guiguan/doc目录下