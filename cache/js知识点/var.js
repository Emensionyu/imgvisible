var a = 1;
function foo() {
    a = 10;
    console.log(a);
    return;
    function a() {};
}
foo();
console.log(a);