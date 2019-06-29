var a=1,
b=2;
function *foo(){
    a++;
    yield;
    b=b*a;
    a=(yield b)+3;
}
function *bar(){
    b--;
    yield;
    a=(yield 8)+b;
    b=a*(yield 2)
}

function step(gen){
    var it=gen();
    var last;
    return function(){
        last=it.next(last).value
    }
}
var s1=step(foo);
var s2=step(bar);
s2();
s2();
s1()
s1();
s2()
s2();


s1()

console.log(a,b)