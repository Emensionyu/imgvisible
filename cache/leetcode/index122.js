function findMinandMax(arr) {
  let minIndex = 0,
    maxIndex = 0,
    chazhi = 0;
    let i=0
  while (i <arr.length-1) {
    if (arr[i + 1] - arr[minIndex] > chazhi) {
      chazhi = arr[minIndex + 1] - arr[minIndex]
      maxIndex = i+1
      if(!minIndex){minIndex=i}
      i++
    } else {
      i++
      minIndex=i
    }
  }
  return [minIndex, maxIndex]

}
console.log(findMinandMax([7, 1, 5, 3, 6, 4]))
console.log(findMinandMax([7, 5, 3, 4]))

// 求数组中最大正序差值
prices=[7, 1, 5, 3, 6, 4]
// function maxProfit(prices) {
//   let sumIndex=findMinandMax(prices)
//   console.log(sumIndex)
//   let sum=0
//   while(sumIndex[0]!=sumIndex[1]){
//        sum=sum+prices[sumIndex[1]]-prices[sumIndex[0]]
//        console.log(sum)
//   prices.splice(sumIndex[0],1)
//   prices.splice(sumIndex[1]-1,1)
//   sumIndex=findMinandMax(prices)
//   console.log(prices)
//   console.log(sumIndex)
//   }
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))