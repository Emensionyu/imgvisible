//A
setTimeout(() => {
    c
}, 1000);
//B
// 执行A，然后设定一个1000ms的定时器 在执行B，然后定时到时后执行C
//回调改写成顺序的形式，函数挑来跳去
//回调中的某一个失败了，它里面所包含的回调不会执行。不利于维护和更新。
//回调表达异步不美观。
