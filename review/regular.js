
let reg = new RegExp(/[a-z][0-9]/g)
let abc = 'abcsdhabcA111'.match(reg)
console.log(abc)

new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)
new RegExp(/1[3-9]\d{9}/)


// / / 表示斜杠包裹整个表达式：/表达式/
// \w+ \w表示以字母数字下划线,+表示重复面
// ([-+.]\w+)* 括号表示将括号里的表达式分组，[]表示匹配[]里面的任何字符


let arr = [6, 4, 1, 8, 2, 11, 23];
console.log(...arr)