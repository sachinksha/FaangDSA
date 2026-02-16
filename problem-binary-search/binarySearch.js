
const description = `Binary search algo implementation. Here the input array is sorted in ascending order. 
The function returns the index of the target if found, otherwise returns -1.`;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
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

module.exports = { description, binarySearch };