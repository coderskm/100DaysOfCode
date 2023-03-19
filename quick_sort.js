function pivotIndex(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIdx = pivotIndex(arr, start, end);
        quickSort(arr, start, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, end);
    }
    return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
