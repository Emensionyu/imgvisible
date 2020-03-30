var n=5
var likes=[1,2,3,3,5]
var q=3
var rangeColumn=[[1,2,1],[2,4,5],[3,5,3]]
// for (let i=0;i<q;i++){
//     rangeColumn.push[readline().split(' ')]
// }
var res=[]

function num(range){
    let newLikes=likes.slice()
    while(range[0]>newLikes[0]){
        newLikes.shift()
    }
    while(range[1]<newLikes[newLikes.length-1]){
        newLikes.pop()
    }
    let num=0;
    for(let i=0;i<newLikes.length;i++){
        if(newLikes[i]==range[2]){
            num++
        }
    }
    return num
}
for(let i=0;i<q;i++){
    res.push(num(rangeColumn[i]))
}
console.log(res.join('\n'))