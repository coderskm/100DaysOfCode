function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let i = 0;
    let j = 0;
    let final = [];
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            final.push(left[i]);
            i++;
        }
        else {
            final.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        final.push(left[i]);
        i++;
    }
    while (j < right.length) {
      final.push(right[j]);
      j++;
    }
    return final;
}

let arr = mergeSort([3, 1, 2, 7, 5]);
console.log(arr)