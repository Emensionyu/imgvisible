let n=9
let array=[1,1,2,1,1,2,1,0,1]
function judge(array){
    var count=1
    var res=0
    var cur=0;
    for(i=0;i<n;i++){
        if(array[i]==0){
            cur=0
            continue
        }
        cur+=count;
        if(array[i]==2){
            count*=2
        }
        res+=cur/count
    }
    return res
}
console.log(judge(array))