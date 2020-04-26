// 同步的 sleep
function sleep(seconds){
    var start = new Date()
    while(new Date() - start < seconds * 1000){
    }
    return
}
console.log(1)   
sleep(3)        //3秒内要不断重复做一些无意义的工作才能保证js运行按顺序
console.log('wake up')
console.log(2)

// 同步：等待结果