function foo(){
    setTimeout(() => {
        console.log("定时器执行了")
        it.next(4)    //响应数据恢复定时器 暂停的yield表达式这季节接受到了这个值
        //随着生成器代码的秩序，这个值付给变量text
        //隐藏在背后的 foo内的运行可以完全异步
    }, 2000);
}
function *main(){
    try{
        var text=yield foo();

        console.log(text);
    }
    catch(err){
        console.log(err);
    }
}
var it=main();
it.next()
// it.next()