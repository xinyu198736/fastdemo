fastdemo
========
这是一个多重用途的环境

1.可以快速搭建nodejs的demo环境，不需要写任何nodejs代码即可搭建一个用来制作前端demo的环境，可以使用mustacheplus的include方法来引用子模块嵌套模板。

步骤：

```
git clone https://github.com/xinyu198736/fastdemo.git fastdemo 

然后在项目文件夹里执行：

npm install

安装完成后，修改config.js里的执行端口。

然后执行 node run.js

这样demo环境就绪啦。

之后只需要往/templates/demo/文件夹里添加html文件即可。

然后就可以在浏览器里用 localhost:端口/demo/***.html访问了，

最重要的是你可以使用mustacheplus的include语法来实现文件嵌套：

mustacheplus给mustache增加里两个include语法，详情见：https://github.com/xinyu198736/mustache-node-plus


```

2.这也是一个nodejs基础应用框架。

主要的基础是rainbowy 一个经过改进的rainbow实现，可以应对比较复杂的web应用架构。

其中 controllers 里面是整个应用的核心，你可以把所有的对外接口请求按照文件夹嵌套的格式写在这里，之后会被解析为对应的route。

具体可以见文档：https://github.com/xinyu198736/rainbow

filters文件夹 是一些过滤 例如用户检查 参数检查等，主要应用在controllers里面的某些route的前置检查。可重复引用，语法见上面的说明。

models 是数据结构定义，本建议基于sequelize来实现数据库操作的ORM，models里放置数据定义文件,见示例

functions 是功能封装，将所有的数据库操作二次封装于此，供各个controllers调用。

templates 是模板文件，里面可以放置多种模板，demo里放置mustache模板，其实就是普通的html。

lib 里面放置一些sdk等东东。

