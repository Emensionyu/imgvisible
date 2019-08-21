var event={
    clientList:[],
    listen:function(key,fn){
        if(!this.clientList[key]){
            this.clientList[key]=[]
        }
        this.clientList[key].push(fn)
    },
    trigger:function(){
        var key=Array.prototype.shift.call(arguments)
    fns=this.clientList[key]
    if(!fns||fns.length==0){
        return false
    }
    for(let i=0;i<s.clientList[key].length;i++){
         s.clientList[key][i].apply(this,arguments)
        }
    }
}
//定义一个installEvent函数，可以给所有对象动态安装发布-订阅功能
var installEvent=function(obj){
    for(var i in event){
        obj[i]=event[i]
    }
}

var s={};
installEvent(s);
s.listen('squaeMeter888',function(price){
    console.log('价格'+price)
})
s.listen('squaeMeter888',function(price){
    console.log('价格shi'+price)
})
s.trigger('squaeMeter888',2000)