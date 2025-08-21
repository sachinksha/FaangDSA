(function() {
    const nums = [1, 3, 7, 9, 2];
    const target = 11;
    console.log(nums, " - ", target)
    const getTargetSumBruteForce = function(nums, target) {
        for(let i=0; i < nums.length; i++) {
            let numberToFind = target - nums[i];
            for (let j = i+1; j < nums.length; j++) {
                if(numberToFind === nums[j]){
                    return [i,j];
                }
                
            }
        }
        return null;
    }
    console.log('result:', getTargetSumBruteForce(nums, target));
    console.log('result:', getTargetSumBruteForce([], target));
    console.log('result:', getTargetSumBruteForce([11], target));
    console.log('result:', getTargetSumBruteForce([1], target));
    console.log('result:', getTargetSumBruteForce([5,6], target));
})();
