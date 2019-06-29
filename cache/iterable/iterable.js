//迭代器，包含一个可以在值上迭代的迭代器的对象。
//从一个iterable中提取迭代器的方法是，iterable 必须支持返回一个函数。函数名
//Symblo.iterator
var a=[12,34,4,9];
let it=a[Symbol.iterator]();
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

// [Symbol.iterator]:function(){
//     return this
// }