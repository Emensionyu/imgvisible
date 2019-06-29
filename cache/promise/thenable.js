// if(p!==null&&(typeof p==='object'||typeof p==='function')&&typeof p.then==='function'){
//     //这是一个thenable
// }else{
//     // 不是thenable
// }

var o={ then:function(){}}
var v=Object.create(o);
v.someStuff="cool";
v.otherStuff="not cool";
console.log(v.hasOwnProperty("then"))
// 不能以有满足thenable条件的对象识别Promise的方案 因为then可能被
// Object.prototype.then=function(){}
// Array.prototype.then=function(){}
// 重写
promise
//调用回调过早
//调用回调过晚
// 调用回调次数过多或过少
// 未能传递所需的环境和参数
// 吞掉可能出现的错误和异常

