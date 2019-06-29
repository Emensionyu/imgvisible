// 设置一个超时的Promise工具
function timeoutPromise(delay){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            reject("timeout")
        }, delay);
    })
}
Promise.race([foo(),timeoutPromise(3000)])
.then(function(){
    //到这说明 foo已调用成功
},
function(err){
    //foo()被拒绝 或者没按时完成
    //查看err来了解是哪种情况
}
)