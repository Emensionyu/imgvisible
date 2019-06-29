// import { listenerCount } from "cluster";

function foo(x){
    return listenerCount;

}
var evt=foo(42);
evt.on("completion",function(){
    //可以进行下一步了
})
evt.on("error",function(){
    //
})
Bar(evt)
baz(evt);
//evt 对象就是分离的关注点之间一个中立的第三方协商机制
// bar baz不需要牵扯到 foo()的调用细节。
// foo() 不需要知道或关注bar()和baz()是否存在。或者是否在当代foo()完成的通知

// 基于promise的方法中，foo（）创建并返回一个Promise实例。然后promise传递给
//baz( ) bar()