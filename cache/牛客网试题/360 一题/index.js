function calc(arr){
    var dp=[...Array(arr.length+1)].map(x=>Array(arr.length+1).fill(-1)),
    sums=[0]
    console.log(dp)

    for(var i=1;i<=arr.length;i++) 
    sums[i]=sums[i-1]+arr[i-1]
    var a=maxOf(0,arr.length-1),b=sums[i-1]-a
    return a+" "+b
    
    function maxOf(x,y){
      if(dp[x][y]==-1){
        if(x==y-1) dp[x][y]=Math.max(arr[x],arr[y])
        else{
          var a=maxOf(x,y-1),b=maxOf(x+1,y),sum=sums[y+1]-sums[x]
          dp[x][y]=Math.max(sum-a,sum-b)
        }
      }
      return dp[x][y]
    }
  }
console.log(calc([140, 649, 340, 982, 105, 86, 56, 610, 340, 879]))