const quickSort = require("./quickSort");
/**
* Leet code problem: 
* Use Quick Sort algorithm to find the largest Kth element in an array of integers.
*/
const description = "Quick Sort algorithm to find the largest Kth element in an array of integers.";

const getKthLargest = (arr, k ) => {
    const sorted = quickSort.quickSort(arr);
    return sorted[sorted.length - k];
}
module.exports = { description, getKthLargest };