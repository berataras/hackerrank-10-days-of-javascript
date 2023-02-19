// Arrays

function getSecondLargest(nums) {
    const sortedNums = nums.sort((a,b) => a-b).reverse();

    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] > sortedNums[i + 1]){
            return sortedNums[i + 1];
        }
    }
}
