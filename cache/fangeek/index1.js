function dog(name) {
    this.name = name
}
dog.prototype.getName = function() {
    return this.name
}
dog.prototype.setName = function(n) {
    this.name = n
}
let dd = new dog('哈巴狗')
    // dd.setName('哈哈哈')
console.log(dd.getName())