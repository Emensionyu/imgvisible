function foo(a){
    a=43;
    console.log(arguments[0])
}
console.log(foo(2))
console.log(foo())
//参数默认值会导致argumnt变化。严格模式不会