function foo(){
    var i=0;
    return function (){
        console.log(i++)
    }
}
var f1=foo()
var f2=foo()
f1()
f1()
f2()