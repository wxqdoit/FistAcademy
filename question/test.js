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
console.log(c == d, c === d)


const fun = () => {
}
const arr = new Array(1)
const arr1 = [undefined]
const obj = new Object({o1: 1, o2: 2})
console.log(fun, fun instanceof Object)
console.log(arr[0] == arr1[0], arr instanceof Object)
console.log(obj, obj instanceof Object)


let t = new Date()
let f = new Function()
console.log(typeof c, c instanceof Object)


const book = () => {
    const name = 'book1'
    const page = 125
    return {
        getBookName() {
            return name
        },
        getBookPage() {
            return page
        }
    }
}
const bo = book()
const name = bo.getBookName()
const page = bo.getBookPage()
console.log(name, page)


function Animal() {
    this.a = 1
}

Animal.prototype = {
    cat: () => {
        console.log('cat===')
    }
}

Animal.prototype.sayHello = function () {
    console.log('Hello');
};
let ani = new Animal()
console.log(Animal.prototype, Object.getPrototypeOf(ani))


function Cat() {
}

Cat.prototype = new Animal()

let cat = new Cat()
cat.cat()
console.log(cat.a)


function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    //继承了 SuperType

    SuperType.call(this);
}

var instance1 = new SubType();
console.log(instance1.colors);  //"red,blue,green,black"


function Parent() {
    this.name = 'p-';
    this.sayP = () => {
        console.log('p=====')
    }
}

Parent.prototype.sayHello = function () {
    console.log('Hello, I am ' + this.name);
};
Parent.prototype.eye = 2

function Child(age) {
    Parent.call(this); // 调用父类的构造函数
    this.age = age;
}

let prt = new Parent()
Child.prototype = prt
Child.prototype.constructor = Child

var child = new Child(25);
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
console.log(nu, ud === ud1)
console.log(nu === ud)


console.log(0x101)
console.log(0b101)
console.log(0o101)
console.log(9007199254740989, 9007199254740992222)

console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number('12ss'))
console.log(parseInt('12ss2'))

console.log(Intl.NumberFormat().format(12254.00))
console.log(12254.00.toLocaleString('en'))

let numb = 12254


let obj1 = {
    o1: 1,
    o2: 2,
}

let obj2 = obj1

console.log(obj1)
console.log(obj2)
obj1.o1 = 'change'
console.log(obj1)
console.log(obj2)


console.log(Math.random())


const EventUtil = {
    // 事件委托/代理：在父元素上监听特定的事件，而不是直接在每个子元素上添加事件监听器。通过这种方式，我们可以减少事件监听器的数量，提高性能，并且可以处理动态添加的子元素。
    // 事件冒泡

    addEvent(el, type, handler) {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false)
        }
        if (el.attachEvent) {
            el.attachEvent("on" + type, handler);
        }
    },
    removeEvent(el, type, handler) {
        if (el.addEventListener) {
            el.removeEventListener(type, handler, false)
        }
        if (el.attachEvent) {
            el.dettachEvent("on" + type, handler);
        }
    }

}


function deepCopy(object) {
    if (!object || typeof object !== "object") return object;

    let newObject = Array.isArray(object) ? [] : {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = deepCopy(object[key]);
        }
    }

    return newObject;
}

let obj11 = [1, 2, 3, new Parent()]
console.log(deepCopy(obj11))


function add(a, b) {
    return a + b;
}

console.log(~3)
console.log(~-0b00001010)

let object1 = {
    name: '111',
    age: '111'
};


class Vue {


    constructor(options) {
        this.data = options.data
        // this.observe(this.data,this)
        options.mounted()
    }

    observe(data, ctx) {

        Object.keys(data).forEach((value, index) => {

            Object.defineProperty(ctx, value, {
                get: function () {
                    return value
                },
                set: function (newValue) {

                    value = newValue
                }
            })
        })
    }


}

new Vue({
    data: {},
    mounted() {
        this.data = {
            name: '111',
            age: '111'
        }
        this.name = '1'
        console.log(this)
    }
})

const mySymbol = Symbol();
console.log(typeof mySymbol); // 输出 "symbol"

const mySymbolWithDescription = Symbol('This is a symbol');
console.log(mySymbolWithDescription.toString());

const age = Symbol('age')
let use = {
    name: 'john',
    [age]: 1,
    age: 12
}

console.log(use[age]);
console.log(use.age);
console.log(use[Object.getOwnPropertySymbols(use)[0]]);

Set.prototype._add = () => {
    let args = arguments || [];
    for (let i = 0; i < args.length; i++) {
        Set.add(args[i])
    }

}

class MySet extends Set {
    _add(...values) {
        values.forEach((i) => {
            this.add(i)
        })
    }
}

const mySet = new MySet();
mySet.add(1);
mySet.add(5);
mySet._add(1, 2, 3)


console.log(mySet);


async function sleep(ms) {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            resolve(undefined)
        }, ms)
    })
}


class MyPromise {

    constructor(fn) {
        this.stateObj = {
            PENDING: "pending",
            RESOLVED: "resolved",
            REJECTED: "rejected"
        }
        this.state = this.stateObj.PENDING;
        this.value = null;
        this.resolveCallback = [];
        this.rejectCallback = [];
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject.call(this,e);
        }
    }

    resolve(value) {
        console.log("value1",value)
        if (value instanceof MyPromise) {
            return value.then(this.resolve, this.reject);
        }
        setTimeout(()=>{
            if (this.state === this.stateObj.PENDING) {
                this.state = this.stateObj.RESOLVED;
                this.value = value;
                this.resolveCallback.forEach((callback) => {
                    callback(value)
                })
            }
        },0)
        console.log("value3",value)


    }

    reject(reason) {
        setTimeout(()=>{
            if (this.state === this.stateObj.PENDING) {
                this.state = this.stateObj.REJECTED;
                this.value = reason;
                this.rejectCallback.forEach((callback) => {
                    callback(reason)
                })
            }
        },0)

    }
    then(onResolved, onRejected){
        onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason


        if (this.state === this.stateObj.PENDING) {
            console.log('onResolved',onResolved)
            this.resolveCallback.push(onResolved);
            this.rejectCallback.push(onRejected);
        }
        if (this.state === this.stateObj.RESOLVED) {
            onResolved(this.value);
        }

        if (this.state === this.stateObj.REJECTED) {
            onRejected(this.value);
        }
    }
}


let promise = new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1111)
    },1000)
})

async function init() {
    console.log(await promise)
}

init()





class Event {
    constructor (){
        this.event = {};
        this.xhrEvent = [
            'onloadstart',
            'onprogress',
            'onabort',
            'ontimeout',
            'onerror',
            'onload',
            'onloadend',
            'onreadystatechange'
        ];
        this.recheEvents = [
            "fileStop",
            "fileResume",
            "fileCancel",
            "fileRestart",
            "fileRemove",
            "fileRemoveAll",
            "fileAppend",
            "fileCompleteAll",
            "fileProgress",
            "fileStatusChange",
            "fileError"
        ]
    }
    on(name,callback){
        if (this.detectEventType(name) && typeof callback === 'function') {
            if (!this.event[name]) {
                this.event[name] = [];
            }
            this.event[name].push(callback);
        }
    }

    /**
     * 事件触发器
     * @param name 事件名
     * @param info 信息？？？ 传入回调的，具体是作甚的还需要往下看
     */
    trigger(name, info) {
        if (this.event[name] && this.event[name].length) {
            for (let i = 0; i < this.event[name].length; i++) {
                this.event[name][i](info);
            }
        }
    }
    detectEventType(name) {
        if (this.recheEvents.indexOf(name) !== -1) {
            return 'recheEvents';
        } else if (this.xhrEvent.indexOf(name) !== -1) {
            return 'xhrEvent';
        }
        console.error(`Unknown event name: ${name}`);
        return null;
    }
}

let myevent = new Event()

let myInterVal = ()=>{
    let a = 0
    return  ()=>{
        myevent.on('onprogress',(res)=>{
            console.log('onprogress',res)
        })
        let inter = setInterval(()=>{
            myevent.trigger('onprogress',a)

            if(a>=4){

                clearInterval(inter)
            }else {
                a += 1
                console.log(a)
            }

        },1000)
    }
}
myInterVal()()

