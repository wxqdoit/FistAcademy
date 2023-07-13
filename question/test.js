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
console.log(c == d,c === d)



const fun = ()=>{}
const arr = new Array(1)
const arr1 = [undefined]
const obj = new Object({o1:1,o2:2})
console.log( fun,fun instanceof Object)
console.log(arr[0]==arr1[0],arr instanceof Object)
console.log(obj,obj instanceof Object)


let t = new Date()
let f = new Function()
console.log(typeof c,c instanceof Object)



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
const bo = book()
const name = bo.getBookName()
const page = bo.getBookPage()
console.log(name,page)


function Animal (){
    this.a = 1
}
Animal.prototype = {
    cat:()=>{
        console.log('cat===')
    }
}

Animal.prototype.sayHello = function() {
    console.log('Hello');
};
let ani = new Animal()
console.log(Animal.prototype,Object.getPrototypeOf(ani))


function Cat (){
}

Cat.prototype = new Animal()

let cat = new Cat()
cat.cat()
console.log(cat.a)


function SuperType(){
    this.colors = ["red", "blue", "green"];
}

function SubType(){
    //继承了 SuperType

    SuperType.call(this);
}

var instance1 = new SubType();
console.log(instance1.colors);  //"red,blue,green,black"


function Parent() {
    this.name = 'p-';
    this.sayP = ()=>{
        console.log('p=====')
    }
}

Parent.prototype.sayHello = function() {
    console.log('Hello, I am ' + this.name);
};
Parent.prototype.eye = 2

function Child( age) {
    Parent.call(this); // 调用父类的构造函数
    this.age = age;
}
let prt = new Parent()
Child.prototype = prt
Child.prototype.constructor = Child

var child = new Child( 25);
prt.constructor = Parent

child.sayP(); // 报错
child.sayHello(); // 报错
console.log(Child.constructor);
console.log(Child.prototype);
console.log(Child.prototype.constructor);
console.log(child.constructor);
console.log(child.constructor.prototype);
console.log(prt.constructor);


console.log('--------------------------')


const nu = null //必须显示赋值，表示这个变量是空值，没有引用任何值
let ud // 不用显示赋值，表示这个变量被申明了但没有赋值
let ud1 = undefined //原始值
console.log(nu,ud === ud1)
console.log(nu === ud )


console.log(0x101)
console.log(0b101)
console.log(0o101)
console.log(9007199254740989,9007199254740992222)

console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number('12ss'))
console.log(parseInt('12ss2'))

console.log(Intl.NumberFormat().format(12254.00))
console.log(12254.00.toLocaleString('en'))

let numb = 12254
console.log(numb && numb.replace(/(?!^)(?=(\d{3})+\.)/g, ","))




