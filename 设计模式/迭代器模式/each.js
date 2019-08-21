// 中止迭代器
var each=function(array,callback){
    for(let i=0;i<array.length;i++){
        if(callback(i,array[i])===false){
            break;
        }
    }
}

each([1,2,3,4,5],function(i,n){
    if(n>3){
        return false
    }
    console.log(n)
})

// [1,2,3,4,5].forEach(item=>{
//     console.log(item)
// })