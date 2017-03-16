## PC端项目兼容文档

@(项目中网上搜到的bug)[css,js,问题,解决方案]

**整理文档的目的**：

-  **开发项目**： 整理bug、提交解决bug的效率，利于高效的工作；
-  **网上搜到**：了解更多的bug，提升自己的解决bug的能力；

-----------------

[TOC]

### CSS兼容IE6 IE7 IE8 IE9 Firefox的总结
``` css
#div{
     /*  一：*各种浏览器css hack兼容情况*/
     width:200px;
     height:200px;
     background: red;               /* 所有浏览器*/
     background: black!important;   /* 有ie7,ie8,ie9,firefox,chrome支持 */
     _background: yellow;           /* 只有ie6支持 */
     +background:yellow;            /* 只有ie6,ie7支持 */
     *+background:yellow;           /* 只有ie6,ie7支持 */
     *background:black;             /* 只有ie6,ie7支持 */
     background:yellow\9;           /* 有ie6,ie7,ie8,ie9支持 */
     background:black\0;            /* 有ie8,ie9支持 */
     div:nth-of-type(1)             /* 有ie9,firefox,chrome,Safari支持 */
 }
```
### 清除浮动

> 例：下面的代码结构和样式

``` html
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta charset="utf-8"/>
    <title>浮动bug</title>
</head>
<body>
    <div class="outer">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
    </div>
</body>
</html>
```
``` css
.outer{border: 1px solid #ccc;background: #fc9;color: #fff; margin: 50px auto;padding: 50px;}
.div1{width: 80px;height: 80px;background: red;float: left;}
.div2{width: 80px;height: 80px;background: blue;float: left;}
.div3{width: 80px;height: 80px;background: sienna;float: left;}
```
> 这里我没有给最外层的.outer 设置高度，但是我们知道如果它里面的元素不浮动的话，那么这个外层的高是会自动被撑开的。但是当内层元素浮动后，就出现了一下影响：

    （1）：背景不能显示 （2）：边框不能撑开 （3）：margin 设置值不能正确显示
#### 清除浮动的三种方法
方法一：添加新的元素 、应用 clear：both；

方法二：父级div定义 overflow: auto

方法三： :after 方法：（注意：作用于浮动元素的父亲）

还有其他的方法：如在浮动的div后面加空的div  clear:both;

兼容到ie6的清除浮动的代码：`class='clearfix'`
``` css
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
*html .clearfix{height:1%; zoom: 1;}
.clearfix{display:block; zoom: 1;}
```
#### 遮罩层在ie6下的兼容
主要目的为了`position： fixed` 在ie下的兼容；
``` css
div { 
    position: fixed; 
    z-index: 1000; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0; 
    filter:alpha(opacity=80); /* IE */ 
    -moz-opacity:0.8; /* Moz + FF */ 
    opacity: 0.8; 
    overflow: hidden; 
    background-color: #000; 
} 
*html { 
    background: url(*) fixed; /* loading图 */
} 
*html body { 
    margin: 0; 
    height: 100%; 
} 
/*IE6*/ 
*html div { 
position: absolute; 
left: expression(documentElement.scrollLeft + documentElement.clientWidth - this.offsetWidth); 
top: expression(documentElement.scrollTop + documentElement.clientHeight - this.offsetHeight); 
}
```
#### IE6下PNG图片背景透明的兼容处理办法
> 有的时候需要自己切一张背景透明的png格式的图片，这时候就会遇见一个问题 在ie6下这个背景图有个白色的边框。解决办法如下：

1. gif格式的图片替换png
`div { background:url(*.png); _background:url(*.gif);}`
2. DD_belatedPNG,解决IE6不支持PNG绝佳方案
DD_belatedPNG支持backgrond-position与background-repeat.这是其他js插件不具备的.同时DD_belatedPNG还支持a:hover属性,使用方法：
一. 下载 [DD_belatedPNG.js](http://dillerdesign.com/experiment/DD_belatedPNG/#download)
二. 在页面上引入，如下：
`<!--[if IE 6]><script src="DD_belatedPNG.js" mce_src="DD_belatedPNG.js"></script><script type="text/javascript">DD_belatedPNG.fix('.png_bg');</script> <![endif]-->`
三,其他方法：
把图片的背景色换成与放入dome的背景色一样。

#### IE6、IE7下input/textarea兼容

> input/textarea的外层是block形式的容器，这个外层容器同时拥有float和margin-left/rmargin-right属性时候，会在margin的一边产生双倍边距。

解决办法(2种)：
1. `在<div class=”input”></div>和input框之间插入 <span style=”width:0;overflow:hidden;display:inline-block;float:left;”>&nbsp;</span>`
2. `#div的css里面加上了清空css的代码：overflow:auto;_display:inline-block;`

#### 项目中广告放的位置兼容

> 广告放在容器里，广告语广告之间的间距  用padding,margin的时候。如果不同渠道下这个广告要下掉，但是另一个广告显示出来，并且又添加了个容器的时候。出现了个问题就是没放容器的dome站了高度。那是前面设置padding，margin的原因。解决办法：

`广告内部有个iframe标签，我们可以通过iframe设置padding值，不在父级标签上添加padding，注：iframe有的时候设置了行间样式，这时候要用到！important覆盖行间样式。`

#### h5的标签在ie9一下不支持

> 用于解决IE9以下版本浏览器对HTML5新增标签不识别，并导致CSS不起作用的问题。所以我们在使用过程中，想要让低版本的浏览器，即IE9以下的浏览器支持，那么这款html5shiv.js是一个非常好的选择！

`注：在页面中调用Html5.js文件必须添加在页面的head元素内，因为IE浏览器必须在元素解析前知道这个元素，所以这个js文件不能在页面底部调用。`

``` javascript
<!--[if lt IE 9]>
　　<script src="//cdn.bootcss.com/respond.js/1.4.2/respond.js"></script>
 　 <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->
```