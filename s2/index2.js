// 重复判断使用的函数第二次调用，使用惰性载入
num = function() {
    if (1 < 5) {
        debugger
        return function() {
            return 5
        }
    } else {
        return function() {
            return 1
        }
    }
}()
console.log(num())
console.log(num())
console.log(num())