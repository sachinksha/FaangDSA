(function() {
    const getMaxAreaOfWater = function(height) {
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
    let height = [4, 8, 1, 2, 3, 9];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
    height = [1,7,2,0,1,3];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
    height = [1,7,2,8,1,6];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
    height = [7,1,2,3,9];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
    height = [6,9,3,4,5,8];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
    height = [1,8,8,2,9,4];
    console.log(`getMaxAreaOfWater for ${height}: ${getMaxAreaOfWater(height)}`);
})();
