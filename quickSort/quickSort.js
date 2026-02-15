/**
* Leet code problem: 
* Implement Quick Sort algorithm to sort an array of integers in ascending order.
*/
const description = "Quick Sort algorithm to sort an array of integers in ascending order.";

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
module.exports = { description, quickSort };