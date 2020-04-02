/**
 * @param {string[]} words
 * @return {number}
 * @peoblem 820. 单词的压缩编码
 */

function minimumLengthEncoding(words) {
   let newwords=paixu(words)
    let index=[0];
    let origin=[];origin.push(newwords[0])
    let length=0,cur=0;
    lentgh=origin.join().length;cur=length
    for(let i=1;i<newwords.length;i++){
        for(let j=origin.length;j>=1;j--){
            if(origin[j-1].endsWith(newwords[i])){
                console.log(origin[j-1])
                cur=cur-newwords[i].length
                index.push(cur)
                length=origin.join('').length+origin.length-1
                cur=origin.join('').length-1
                break
            }else{
                if(j-1==0){
                    cur=lentgh+1
                    origin.push(newwords[i])
                    length=origin.join( ).length+1
                    cur=length-1
                }
                else{
                    cur=cur-newwords[j].length-1
                    continue
                }
                
            }
        }

    }
    console.log(origin)
return origin.join('').length+origin.length
};
function paixu(words){
    for(let i=0;i<words.length;i++){
        for (j =0; j < words.length - 1 - i; j++) {
            if(words[j].length<words[j+1].length){
                var temp=words[j+1]
                words[j+1]=words[j]
                words[j]=temp
            }
        }
    }
    return words
}
// console.log(minimumLengthEncoding(['time','me','bell','me']))
console.log(minimumLengthEncoding(['time','bell','ell']))
// console.log(paixu(['me','time']))