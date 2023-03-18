function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
            if (arr[min] > arr[j]) min = j;
        }
        if (min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}

console.log(selectionSort([3,1,2,7,5]))