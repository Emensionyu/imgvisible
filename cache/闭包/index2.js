// var a = 1;
function b() {
    var a = 2;
    function c() {
        console.log(a);   
    }   
    return c;
}
// var this;
var obj={a:1}
var c=b()
c()