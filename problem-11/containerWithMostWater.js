/**
 * Leet code problem: 11
 * Shifting pointers problem
 * Get max area between two lines:
 * Given array of values that stand for vertical lines on a graph. 
 * Consider if these lines were to form a container then get maximum area
 * formed by any two lines.
 */
const description = "get area between two lines / container with most water";

const getContainerWithMostWater = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(right>left) {
        let leftValue = height[left];
        let rightValue = height[right];
        const currentArea = Math.min(leftValue, rightValue) * Math.abs(right - left);
        if(currentArea > maxArea) {
            maxArea = currentArea;
        }
        if(leftValue < rightValue) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}

module.exports = {description, getContainerWithMostWater};
