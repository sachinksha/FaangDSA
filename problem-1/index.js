/**
 * Array Problem
 * Two Sum Problem
 * Given an array, find the indices that add up to the target value
 */
(function () {
    const nums = [1, 3, 7, 9, 2];
    const target = 11;
    console.log(nums, " - ", target)
    /**
     * 
     * @param {number[]} nums 
     * @param {number} target 
     * @returns {number[]}
     */
    const getTargetSumBruteForce = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let numberToFind = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (numberToFind === nums[j]) {
                    return [i, j];
                }

            }
        }
    }
    // console.log('result:', getTargetSumBruteForce(nums, target));
    // console.log('result:', getTargetSumBruteForce([], target));
    // console.log('result:', getTargetSumBruteForce([11], target));
    // console.log('result:', getTargetSumBruteForce([1], target));
    // console.log('result:', getTargetSumBruteForce([5, 6], target));
    // console.log('O(n) = n2');

    /**
     * 
     * @param {number[]} nums 
     * @param {number} target 
     * @returns {number[]}
     */
    const optimized_getTwoSum = function (nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            map[target - nums[i]] = i;
        }
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            if (map[nums[i]] >= 0 && map[nums[i]] !== i) {
                return [i, map[nums[i]]]
            }
        }
    }
    // console.log('result:', optimized_getTwoSum(nums, target));
    // console.log('result:', optimized_getTwoSum([], target));
    // console.log('result:', optimized_getTwoSum([11], target));
    // console.log('result:', optimized_getTwoSum([1], target));
    // console.log('result:', optimized_getTwoSum([5, 6], target));
    // console.log('result:', optimized_getTwoSum([3, 2, 4], 6));
    // console.log('O(n) = n');


    /**
     * 
     * @param {number[]} nums 
     * @param {number} target 
     * @returns {number[]}
     */
    const master_getTwoSum = function (nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            const currentMapVal = map[nums[i]];
            if(currentMapVal >=0){
                return [currentMapVal, i];
            }
            else {
                const numberToFind = target - nums[i];
                map[numberToFind] = i;
            }
        }
    }
    console.log('result:', master_getTwoSum(nums, target));
    console.log('result:', master_getTwoSum([], target));
    console.log('result:', master_getTwoSum([11], target));
    console.log('result:', master_getTwoSum([1], target));
    console.log('result:', master_getTwoSum([5, 6], target));
    console.log('result:', master_getTwoSum([3, 2, 4], 6));
    console.log('O(n) = n');
})();
