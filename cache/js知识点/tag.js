foo:for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        if((i*j)>=3){
            console.log("stop")
            break foo;
        }
    }
}
// 标签语言
// foo 是for循环的标志
// ｂｒｅａｋ　提前终止
// 标签不能用双引号
//报错代码
//-------------
// var a=42,b
// c;
// 语法规定do ...while循环后必须带分号　代码快结尾不用带
// do {
// }while(a)
// a;