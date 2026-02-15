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

const quickSortInPlace = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSortInPlace(arr, left, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, right);
    }
    return arr;
}

const partition = (arr, left, right) => {
    const pivotValue = arr[right];
    let partitionIndex = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
            [arr[partitionIndex], arr[j]] = [arr[j], arr[partitionIndex]];
            partitionIndex++;
        }
    }
    [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];
    return partitionIndex;
}

module.exports = { description, quickSort, quickSortInPlace };