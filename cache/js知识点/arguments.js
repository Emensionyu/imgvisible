function foo(a){
   var a=43;
    console.log(arguments[0])
}
foo(2)
var obj={a:1}
foo(obj.a) // 对象的属性值
console.log(obj.a)
// foo()
// console.log(foo())
//参数默认值会导致argumnt变化。严格模式不会