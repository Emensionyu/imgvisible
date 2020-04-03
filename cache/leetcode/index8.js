/**
 * @param {string} str
 * @return {number}
 * @problem 字符串转数字
 */
var myAtoi = function(str) {
    let sum="";
    let newStr=str.trim()
    for(let i=0;i<newStr.length;i++){
        if((newStr[i]=="-"|| newStr[i]=='+') && i==0){
            sum=sum+newStr[i]
            continue
        }else if(!isNaN(Number(newStr[i])) &&  newStr[i]!==" "){
            sum+=newStr[i]
            continue
        }else{
            break
        }
    }
    if(Number(sum)>=2147483647){
        return 2147483647
    }else if(Number(sum)<=-2147483648){
        return -2147483648
    }else if(sum=='-'|| sum=="+"){
        return 0
    }else{
        return Number(sum)
    }
   
};
console.log(myAtoi("2147483648"))