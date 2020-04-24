/**
 * @param {number[]} height
 * @return {number}
 * @problem 接雨水
 */
var trap = function(height) {
    let heightArr=[];
    let len=height.length,sum=0,min=heightArr[0],leftadd=false,left=0,right=len-1;
    heightArr.push(min)
    while(left<right){
        if(height[left]==0){
            left++
        }else if(height[right]==0){
            right--
        }
        else  {
            if(height[left]<=min){
               left++
            } else if(height[right]<=min){
                right--
            }else{
                if(height[left]>height[right]){
                    min=height[right]
                    leftadd=false
                    heightArr.push(min)
                }else{
                    min=height[left]
                    leftadd=true
                    heightArr.push(min)
                }
                sum+=(right-left-1)*min
                for(let s=left+1;s<right;s++){
                    let lastmin=heightArr[heightArr.indexOf(min)-1]
                    if(height[s]<=lastmin){
                        sum=sum-lastmin
                    }else if(height[s]>=min){
                        sum=sum-min
                    }else{
                        sum=sum-height[s]
                    }
                }
                if(leftadd){
                    left++
                }else{
                    right--
                }
            }
        }
    }
    return sum
       
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([2,1,0,2]))
console.log(trap([5,5,1,7,1,1,5,2,7,6]))

// 双指针法