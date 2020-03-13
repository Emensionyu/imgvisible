var value = 1;
function foo(v) {
    v = 2;
    // console.log(arguments[0])
    console.log(v); //2
}
foo(value);
console.log(value) // 1