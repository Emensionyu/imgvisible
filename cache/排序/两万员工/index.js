
let ages = [3,4,5,3];
function sortAges(ages){
    let timesOfAge=[],length=ages.length;

    for(let i=0;i<length;i++){
        if(!timesOfAge[ages[i]]){
            timesOfAge[ages[i]]=0
        }
        timesOfAge[ages[i]]++
    }
    console.log(timesOfAge)
    let index = 0;
	for(let i=0;i<100;i++)
	{
		let j = 0;
		while(j<timesOfAge[i])
		{
            ages[index] = i;
            index++
			j++;
		}
    }
    
}
console.log(ages)
sortAges(ages);
console.log(ages)
