console.log(typeof　a)
//下面的例子就是暂时死区　
// {
//     typeof b;
//     typeof c;
//     let b;
// }
// 暂时性死区，
// 在ｅｓ６中　参数被省略或值为ｕｎｄｅｆｉｎｅｄ　取参数默认值
// 参数省略　arguements.length为０　参数为ｕｎｄｅｆｉｎｅｄ　arguements.length为1
// 参数默认值
function foo(a){
    console.log(a+arguments[1])
}
foo(10,32)
foo(undefined,32)