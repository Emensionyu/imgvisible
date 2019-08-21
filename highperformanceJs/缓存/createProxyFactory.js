var createProxyFactory=function(fn){
    var cache={}
    var args=Array.prototype.join(arguments)
    // 缓存的键 参数的字符串化。
    return function(){
        if(args in cache){
            return cache[args]
        }
        return cache[args]=fn.apply(this,arguments)
    }
}
//计算乘积
var mult=function(){
    var a=1;
    for(let i=0;i<arguments.length;i++){
       a=a*arguments[i]
    }
    return a
}
// console.log(mult(1,2,3))
//走缓存代理 缓存函数返回的是一个函数。
var proxyMult=createProxyFactory(mult)
console.log(proxyMult(3,4,5))