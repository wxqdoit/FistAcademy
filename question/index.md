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





