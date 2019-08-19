var CreateDiv=function(html){
    
        this.html=html;
        this.init();
}
CreateDiv.prototype.init=function(){
    // var div=document.createElement('div');
    // div.innerHTML=this.html;
    // document.body.appendChild(div);
}
var ProxySingletonCreateDiv=(function(){
    var instance;
    return function(html){
        if(!instance){
            return new CreateDiv(html)
        }
        return instance
    }
})()

//缓存代理实现单例模式
var a=new ProxySingletonCreateDiv('s1');
var b=new ProxySingletonCreateDiv('s2');
console.log(a===b)