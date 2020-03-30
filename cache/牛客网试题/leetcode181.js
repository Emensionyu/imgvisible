var nums = [1,2,3,4,0]
var index = [0,1,2,3,0]
var target=[];
for (let i=0;i<index.length;i++){
    if(!target[index[i]]){
        target[index[i]]=nums[i]
    }else{
        if(index[i]!==0){
            target=(target.slice(0,index[i])).concat(nums[i]).concat(target.slice(index[i]))
        }else{
            target.unshift(nums[i])
        }
    }
   
}
console.log(target)