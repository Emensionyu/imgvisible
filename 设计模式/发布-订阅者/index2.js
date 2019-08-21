var s={};
s.clientList={};
s.listen=function(key,fn){
    if(!this.clientList[key]){
        this.clientList[key]=[]
    }
    this.clientList[key].push(fn)
}
s.trigger=function(){
    var key=Array.prototype.shift.call(arguments)
    fns=this.clientList[key]
    if(!fns||fns.length==0){
        return false
    }
    for(let i=0;i<s.clientList[key].length;i++){
    s.clientList[key][i].apply(this,arguments)
    }
}
s.listen('squarMeter',function(price){
    console.log('价格'+price)
})
s.trigger('squarMeter',88)