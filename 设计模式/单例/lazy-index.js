var createDiv=function(){
    return 'div'
}
var createSingleDiv=getSingle(createDiv);

function getSingle(fn){
    var result;
    return function(){
        return result||(result=fn.apply(this,arguments))
    }
}
// document.onclick=function(){
    var Div=createSingleDiv()
    console.log(Div)
// }
