### 面试题目

#### 数据类型
```javascript
//基本数据类型：number string null undefined boolean
//存储在栈中
const a = 1
const b = "string"
const c = null
const d = undefined
const e = true
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

//引用数据类型：object array function 
//存储在堆中
const fun = ()=>{}
const arr = new Array(1)
const arr1 = [undefined]
const obj = new Object({o1:1,o2:2})
console.log( fun,fun instanceof Object)
console.log(arr[0]==arr1[0],arr instanceof Object)
console.log(obj,obj instanceof Object)
```

#### 闭包的原理及应用
```javascript
//闭包是指函数内部也可以访问外部函数的作用域

const book = ()=>{
    const name = 'book1'
    const page = 125
    return{
        getBookName(){
            return name
        },
        getBookPage(){
            return page
        }
    }
}
const b = book()
const name = b.getBookName()
const page = b.getBookPage()
console.log(name,page)


//作用：创建工厂，创建私有变量

```



#### 原型链及this
```javascript
const animal = ()=>{
    
}
console.log(animal.prototype)


```


#### js实现继承的方式
```javascript
//


//原型继承 能继承继承父类的属性方法，父类原型上的属性方法
function Cat (){
    
}

Cat.prototype = new Animal()

let cat = new Cat()
cat.cat()

//构造函数继承，能继承父类的属性方法，父类圆形上的鹅属性，但是无法基础父类原型上的方法
function Parent(name) {
    this.name = name;
    this.sayP = ()=>{
        console.log('p=====')
    }
}

Parent.prototype.sayHello = function() {
    console.log('Hello, I am ' + this.name);
};

function Child(name, age) {
    Parent.call(this, name); // 调用父类的构造函数
    this.age = age;
}

var child = new Child('John', 25);
child.sayHello(); // 输出: "Hello, I am John"
console.log(child.age); // 报错


```

#### apply、call和bind的区别
```javascript

//三者都会改变方法的this指向，都会指向传递的第一个参数

//apply,以数组的形式传递参数
//call,必须列出每一个参数
//bind,不会立即执行函数，而是创一个新的函数
function sayHello(message) {
    console.log(message + ', ' + this.name);
}

var person = {
    name: 'John'
};

sayHello.call(person, 'Hello'); // 输出: "Hello, John"
sayHello.apply(person, ['Hello']); // 输出: "Hello, John"
var sayHelloToPerson = sayHello.bind(person);
sayHelloToPerson('Hello'); // 输出: "Hello, John"
```

#### 堆栈的区别和联系


#### undefined与null的区别
```javascript

const nu = null //必须显示赋值，表示这个变量是空值，没有引用任何值
let ud // 不用显示赋值，表示这个变量被申明了但没有赋值
let ud1 = undefined //原始值
console.log(nu,ud === ud1)
console.log(nu === ud )


```


#### 生拷贝与浅拷贝
```javascript
let obj1 = {
    o1:1,
    o2:2,
}

let obj2 = obj1

console.log(obj1)
console.log(obj2)
obj1.o1 = 'change'
console.log(obj1)
console.log(obj2)
/***
 * 
 { o1: 1, o2: 2 }
 { o1: 1, o2: 2 }
 { o1: 'change', o2: 2 }
 { o1: 'change', o2: 2 }
 */

```


#### 正则表达式
#### 排序算法


#### 随机数生成
```javascript

console.log(Math.random())

```

#### 事件
> 事件委托/代理：在文档对象模型中，可以通过给父级节点设置监听事件，从而捕获指定的子元素，减少代码冗余，提高效率

> 默认行为是事件冒泡的方式

> 事件捕获true：指的是在多级节点中，事件的传递或触发顺序是从外到里。

> 事件冒泡false：指的是在多级节点中，事件的传递或触发顺序是从里到外。

> 第三个参数决定事件机制：`true`  `false`


#### 手写一个ajax
```javascript
let url = '/'
let xhr = new XMLHttpRequest()
xhr.open(url,true)
xhr.onreadystatechange = (status)=>{
    
}
xhr.responseType = "json"
xhr.onerror = (err)=>{
    
}
xhr.setRequestHeader('')
xhr.send()
```

#### 简要阐述一下浏览器缓存

> 强缓存：强缓存策略允许用户在缓存资源有效的时候直接使用资源而无需向服务器发起请求，只需要在http头部中设置Expires或Cache-Control

> 协商缓存：Last-Modified和Etag组合使用判读服务器资源有没有更新过，如果没有修改返回304状态码，浏览器直接到缓存中拿资源

> 只有在开启强缓存的条件下，协商缓存才有意义


#### sync和async
```javascript
//sync 同步，阻塞，执行代币需要等待，
//async 异步，不会阻塞，继续往下执行，当消息返回通知进程处理
```

#### 同源策略与跨域

同源（协议，主机，端口完全一致）
js，dom，ajax只能在同源情况下进行操作

#### 模块化
简单来说，一个函数负责一个功能，在实际开发中，业务量大的情况下，为了代码的复用，
通常将一些特定的功能组成一个模块，对外提供接口使用，同时还不会污染全局环境，也可以保护内部变量

#### js模块化规范
```javascript
//CommonJs规范，主要用于nodejs服务端，使用require函数引入模块

// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
    add,
    subtract
};

// main.js
const math = require('./math.js');
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2


//ES6（ecma2015）规范,在浏览器端，使用export import导出导入模块

//此外还有cmd amd规范

```

#### 垃圾回收
> 在js中都是


#### 节流与防抖？
闭包加定时器实现

```javascript

let onscroll = (handler,delay)=>{
    let timer = null
    return ()=>{
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(handler,delay)
    }
}
let hander = ()=>{
    console.log(123)
}
window.addEventListener('scroll',onscroll(hander,1000),false)

```

#### webpack工具 gulp工具

#### XSS与CSRF攻击。sql注入

> XSS 跨站脚本攻击，在网站注入恶意脚本代码，进入数据库没有转义或过滤，导致用户浏览器执行该代码，然后盗取用户信息

> CSRF 跨站请求攻击，攻击者诱导用户跳转到b网站，并且在b网站上带上了用户在a网站的登陆信息发送饿了攻击请求。同源策略，token验证，双重cookie验证，samesite验证

> sql注入，改变sql语句的执行意义，从而攻击数据库，过滤验证参数， 限制权限，