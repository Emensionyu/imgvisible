var a="hello world";
var b=10;
switch(true){
    case (a||b==10):
    //永远执行不到这
    default:
    console.log("PPP");
}