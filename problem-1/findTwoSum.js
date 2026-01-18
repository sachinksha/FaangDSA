/**
 * LeetCode problem number: 1
 * Array Problem
 * Two Sum Problem
 * Given an array, find the indices that add up to the target value
 */
const description = "returns the index of elements that add to a target sum in a given array";
/**
 * Brute force method - O(n) = n2
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const bruteForceFindTwoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (numberToFind === nums[j]) {
                return [i, j];
            }

        }
    }
}
/**
 * Optimised solution, O(n) = n
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const optimizedFindTwoSum = function (nums, target) {
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
/**
 * Best solution O(n) = n
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const findTwoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const currentMapVal = map[nums[i]];
        if (currentMapVal >= 0) {
            return [currentMapVal, i];
        }
        else {
            const numberToFind = target - nums[i];
            map[numberToFind] = i;
        }
    }
}

module.exports = { description, bruteForceFindTwoSum, optimizedFindTwoSum, findTwoSum };
