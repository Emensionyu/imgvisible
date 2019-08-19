function memfactorial(n){
    if(!memfactorial.cache){
        memfactorial.cache={
            '0':0,
            '1':1
        }
    }
    if(!memfactorial.cache.hasOwnProperty(n)){
        memfactorial.cache[n]=n*memfactorial(n-1)
    }
    return memfactorial.cache[n]
}
console.log(memfactorial(5))
console.log(memfactorial(4))
console.log(memfactorial(3))

//缓存
