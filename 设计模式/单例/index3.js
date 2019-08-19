var CreateDiv=(function(){
    var instance;
    var CreateDiv=function(html){
        if(instance){
            return instance;
        }
        this.html=html;
        this.init();
        return instance=this;
    }
    CreateDiv.prototype.init=function(){
        // var div=document.createElement('div');
        // div.innerHTML=this.html;
        // document.body.appendChild(div);
    }
    return CreateDiv;
})()
var a=new CreateDiv('s1');
var b=new CreateDiv('s2');
console.log(a===b)
// 把instance封装起来，使用了匿名函数和闭包
//createDiv 创建对象和执行初始化init方法，第二是保证只有一个对象。