function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        let swap = false;
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j + 1] < arr[j]) {
                swap = true;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([3,1,2,7,5]));