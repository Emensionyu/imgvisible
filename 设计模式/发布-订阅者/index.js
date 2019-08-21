var s={};
s.clientList=[];
s.listen=function(fn){
    this.clientList.push(fn)
}
s.trigger=function(){
    for(let i=0;i<s.clientList.length;i++){
    s.clientList[i].apply(this,arguments)
    }
}
s.listen(function(price,squ){
    console.log('价格'+price);
    console.log('squ'+squ)
})
s.trigger(2000000,88)