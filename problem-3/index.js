(function () {
    /**
     * Brute force method
     * go left to right
     * currentWater = min(maxL, maxR) - currentHeight
     * 
     * max left and max right is calculated for each spot. 
     * efficiency is very poor.
    */
    // fails in LeetCode - Time limit exceeded.
    const bruteForce_getTotalTrappedRainWater = function (height) {
        let totalWater = 0;
        for (let i = 0; i < height.length; i++) {
            let leftP = i, maxL = 0, maxR = 0, rightP = i;
            while (leftP >= 0) {
                maxL = Math.max(height[leftP], maxL);
                leftP--;
            }
            while (rightP < height.length) {
                maxR = Math.max(height[rightP], maxR);
                rightP++;
            }
            const currentWater = Math.min(maxL, maxR) - height[i];
            if (currentWater > 0) {
                totalWater += currentWater;
            }
            // console.log(`maxL, maxR, currentHeight, currentWater, totalWater : ${maxL}, ${maxR}, ${height[i]}, ${currentWater}, ${totalWater}`);
        }
        return totalWater;
    }
    let height = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
    // let result = bruteForce_getTotalTrappedRainWater(height);
    // console.log(`bruteForce_getTotalTrappedRainWater(${height}) : ${result}`);

    const twoPointer_getTotalTrappedRainWater = function (height) {
        let leftP = 0, rightP = height.length - 1, maxL = height[leftP], maxR = height[rightP], totalWater = 0;
        // console.log(`leftP, rightP, maxL, maxR, totalWater : ${leftP}, ${rightP}, ${maxL}, ${maxR}, ${totalWater}`);
        while (leftP < rightP) {
            if (maxL <= maxR) {
                const currentPointer = leftP;
                const currentHeight = height[currentPointer];
                // console.log(`leftP, rightP, maxL, maxR, currentHeight : ${leftP}, ${rightP}, ${maxL}, ${maxR}, ${currentHeight}`);
                if (currentHeight < maxL) {
                    totalWater += (maxL - currentHeight);
                    // console.log(`totalWater: ${totalWater}`);
                    leftP++;
                }
                else {
                    maxL = currentHeight;
                    if(maxL <= maxR) {
                        leftP++;
                    }
                    else {
                        rightP--;
                    }
                }
                // console.log(`maxL, leftP : ${maxL}, ${leftP}`);
            }
            else {
                const currentPointer = rightP;
                const currentHeight = height[currentPointer];
                // console.log(`leftP, rightP, maxL, maxR, currentHeight : ${leftP}, ${rightP}, ${maxL}, ${maxR}, ${currentHeight}`);
                if (currentHeight < maxR) {
                    totalWater += (maxR - currentHeight);
                    // console.log(`totalWater: ${totalWater}`);
                    rightP--;
                }
                else {
                    maxR = currentHeight;
                    if(maxL <= maxR) {
                        leftP++;
                    }
                    else {
                        rightP--;
                    }
                }
                // console.log(`maxR, rightP : ${maxR}, ${rightP}`);
            }
        }
        return totalWater;
    }
    let result = twoPointer_getTotalTrappedRainWater(height);
    console.log(`twoPointer_getTotalTrappedRainWater(${height}) : ${result}`);
})();
