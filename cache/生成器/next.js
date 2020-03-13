// function* foo(x){
//     var y=x*(yield)
//     return y;
// }
// var it=foo(6);
// var res1=it.next();
// console.log(res1)
// var res2=it.next(7);
// console.log(res2)
//第一个next不传值，因为他表示yield会给它什么纸 {value:undefined,done:false}
//第一个next仅仅是启动生成器 返回值是yield给的值undefined 传值默认会丢弃
//第一个next调用基本实在提一个问题 生成器*foo()要给我的而下一个值是什么，可以是yield返回的值

function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
const result = foo(0) // foo {<suspended>}
console.log(result.next());  // {value: 1, done: false}
console.log(result.next());  // {value: 2, done: false}
console.log(result.next());  // {value: 3, done: true}
console.log(result.next());  //{value: undefined, done: true}