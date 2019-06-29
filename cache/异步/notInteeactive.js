var res={};
function foo(results){
    res.foo=results;
}

function bar(results){
    res.bar=results;
}
foo(1);
console.log(res)
bar(2);
console.log(res)
//非交互的代码　互不影响　
//常见的情况是　并发的“进程”需要相互交流，

var res=[],
function response(data){
    res.push(data);

}
ajax("htt://some.url.1",response);
ajax("http://some.url.2",response)
//res数组不确定性就是一个静态条件的bug
//res[0]可能是url.1的结果　也可能是　url.2的结果
//-------------
//通过简单的协调来处理竞态太偶间的不确定性。
function response(data){
    if(data.url=="http://some.url.1"){
        res[0]=data
    }else if(data.url=="http://some.url.2"){
        res[1]=data;
    }
}