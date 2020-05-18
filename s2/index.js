function num() {
    if (1 < 5) {
        num = function() {
            return 5
        }
    } else {
        num = function() {
            return 1
        }
    }
    debugger
    return num()
}
console.log(num())
console.log(num())