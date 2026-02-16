
const description = `Binary search algo implementation. Here the input array is sorted in ascending order. 
The function returns the index of the target if found, otherwise returns -1.`;

const binarySearch = (arr, left = 0, right = arr.length-1, target) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}

//Secondary search using linear search for the range of indices of given target
const binarySearchRange = (arr, target) => {
    let targetIndex = binarySearch(arr, 0, arr.length-1,target);
    if(targetIndex === -1)
        return [-1, -1];
    let left, right;
    let i = targetIndex;
    while(i>=0 && arr[i] === target){
        left = i;
        i--;
    }
    i = targetIndex;
    while(i < arr.length && arr[i] === target){
        right = i;
        i++;
    }
    return [left, right];
}

// Secondary search using binary search for the range of indices of given target
const binarySearchRangeByInices = (arr, left = 0, right = arr.length-1, target) =>  {
    if(!arr.length) {
        return [-1, -1];
    }
    const firstPos = binarySearch(arr, left, right, target);
    if(firstPos === -1) {
        return [-1, -1];
    }
    let leftPos, rightPos;
    let nextLeft = firstPos;
    while(nextLeft !== -1) {
        leftPos = nextLeft;
        nextLeft = binarySearch(arr, 0, nextLeft - 1, target);
    }
    let nextRight = firstPos;
    while(nextRight !== -1) {
        rightPos = nextRight;
        nextRight = binarySearch(arr, nextRight + 1, arr.length - 1, target);
    }
    return [leftPos, rightPos];
}
module.exports = { description, binarySearch, binarySearchRange, binarySearchRangeByInices };