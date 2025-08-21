(function () {
    const nums = [1, 3, 7, 9, 2];
    const target = 11;
    console.log(nums, " - ", target)
    const getTargetSumBruteForce = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let numberToFind = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (numberToFind === nums[j]) {
                    return [i, j];
                }

            }
        }
        return null;
    }
    console.log('result:', getTargetSumBruteForce(nums, target));
    console.log('result:', getTargetSumBruteForce([], target));
    console.log('result:', getTargetSumBruteForce([11], target));
    console.log('result:', getTargetSumBruteForce([1], target));
    console.log('result:', getTargetSumBruteForce([5, 6], target));
    console.log('O(n) = n2');

    const optimized_getTwoSum = function (nums, target) {
        // console.log(`optimized_getTwoSum ${nums}, target: ${target}`);
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            map[target - nums[i]] = i;
        }
        // console.log(`map: ${JSON.stringify(map, null, 2)}`)
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            // console.log(`i, value : ${i}, ${value}; maps[value]: ${map[value]}`);
            if (map[nums[i]] >= 0 && map[nums[i]] !== i) {
                // console.log(`returning [${i}, ${map[nums[i]]}]`);
                return [i, map[nums[i]]]
            }
        }
        return null;
    }
    console.log('result:', optimized_getTwoSum(nums, target));
    console.log('result:', optimized_getTwoSum([], target));
    console.log('result:', optimized_getTwoSum([11], target));
    console.log('result:', optimized_getTwoSum([1], target));
    console.log('result:', optimized_getTwoSum([5, 6], target));
    console.log('result:', optimized_getTwoSum([3, 2, 4], 6));
    console.log('O(n) = n');
})();
