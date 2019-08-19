var MyApp={};
MyApp.namesapce=function(name){
    var parts=name.split('.')
    var current=MyApp;
    for(var i in parts){
        if(!current[parts[i]]){
            current[parts[i]]={}
        }
        current=current[parts[i]]
    }
}
MyApp.namesapce('event');
MyApp.namesapce('dom.style')
console.log(MyApp)
//创建动态命名空间
var MyApp={
    event:{},
    dom:{
        style:{
            
        }
    }
}