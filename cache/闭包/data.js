

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

// console.log(new Date, i);
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

// console.log(new Date, i);
const tasks = []; // 这里存放异步操作的 Promise
const output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
// Promise.all(tasks).then((data) => {
//     console.log(JSON.stringify(data)+"data")
//     setTimeout(() => {
        // console.log(new Date, i);
//     }, 1000);
// });
//调用then等待这个promise
//promise 封装了以来时间的状态。等待底层值的完成或拒绝。
// ----------------
// 闭包是指那些能够访问自由变量的函数。
// 当我们了解了具体的执行过程后，我们知道 f 执行上下文维护了一个作用域链：

// fContext = {
//     Scope: [AO, checkscopeContext.AO, globalContext.VO],
// }
// 对的，就是因为这个作用域链，f 函数依然可以读取到 checkscopeContext.AO 的值，说明当 f 函数引用了 checkscopeContext.AO 中的值的时候，即使 checkscopeContext 被销毁了，但是 JavaScript 依然会让 checkscopeContext.AO 活在内存中，f 函数依然可以通过 f 函数的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。

// 所以，让我们再看一遍实践角度上闭包的定义：

// 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
// 在代码中引用了自由变量

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();