function *foo(){
    var r1=yield axios.get("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/")
    var r1=yield axios.get("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/")
    var r3=yield axios.post("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/upload")
    console.log(r3);  
}
run(foo);
// 区别 p1 p2 并发执行 哪一个完成都无所谓，因为promise 会按照需要在决议状态保持人一场实践。
function *foo(){
    var p1=axios.get("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/")
    var p2=axios.get("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/")
    var r1=yield p1;
    var r2=yield p2;


    var r3=yield axios.post("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/upload")
    console.log(r3);  
}
run(foo);

