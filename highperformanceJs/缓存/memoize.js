function memoize(fundamental,cache){
    let cache=cache||[];

    let shell=function(args){
        if(!cache.hasOwnProperty(args)){
            cache[args]=fundamental(args)
        }
        return cache[args]
    }
    return shell
}
//memoize 第一个参数,需要增加缓存功能的函数,第二个可选的缓存对象
