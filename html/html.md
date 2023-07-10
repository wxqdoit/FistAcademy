#### DOCTYPE

```html
<!DOCTYPE>
```

- 出现在html文件第一行
- 告诉浏览器解析器用标准模式解析文档，否则用兼容模式
- HTML5不是基于sgml的，不需要声明DTD
- SGML为html和xml提供了设计参考

```xml
<!DOCTYPE article [
  <!ELEMENT article (title, author, content)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT content (#PCDATA)>
]>
<article>
  <title>Example Article</title>
  <author>John Doe</author>
  <content>This is an example article.</content>
</article>

```

#### HTML标签

- 内联标签：只占据本身对应标签实际范围的空间
```html
    <span>inline</span>
    <a href="javascript:void(0)"></a>
    <input type="text">
    <<textarea name="" id="" cols="30" rows="10"></textarea>
```

- 块级标签：宽度占满
```html
    <div>block</div>
    <h2>h2</h2>
    <section></section>
    <fragment></fragment>
    <header></header>
    <aside></aside>
    <figure></figure>
    <nav></nav>
    
```

#### 浏览器的作用
- 渲染网页内容
- 执行脚本与交互
- 提供插件和扩展
- 提供导航与链接

#### 浏览器内核
- 渲染引擎与脚本引擎
- trident
- gecko
- presto
- webkit
- blink

#### 浏览器渲染原理
- 1、解析HTML，构建DOM树
- 2、解析css，理解DOM样式
- 3、构建渲染树，理解层级结构
- 4、布局回流，计算DOM大小
- 5、绘制界面
> 注意在渲染文档的时候遇到js会打断渲染进程，也就是说，js引擎的优先级更高，并且应该将js文件放在最后加载以提高首屛渲染速度


#### fouc与白屏问题

- 将css放在头部
- 将js放在尾部
- 减少请求数量
- 减少字节数量
- 优化加载顺序


#### 重绘与回流
- 重绘：只改变风格，不改变大小，比如颜色，字体，圆角
- 回流：改变尺寸大小，比如宽高、隐藏与显示
- 减少回流：批量修改样式，使用class，使用transform


#### html离线存储
```html

<!DOCTYPE HTML>
<html manifest = "cache.manifest">
...
</html>

```

```manifest
CACHE MANIFEST
# 版本号或注释行

CACHE:
file1.html
file2.css
file3.js
image1.jpg

NETWORK:
*

FALLBACK:
/error.html /offline.html
```

#### 浏览器本地存储
- localStorage 一直存在到主动删除 大 明文
- sessionStorage 一直存在到浏览器关闭 大 明文
- cookies 一直存在到设置的过期时间 小 加密


#### 前端性能优化
- 减少请求数量
- DNS缓存
- 懒加载，即用的时候再去拿
- 减小cookie
- 压缩资源比如gzip
- 异步加载