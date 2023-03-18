function replacement(arr) {
    let n = arr.length;
    for (let i = n - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = -1;
    return arr;
}

console.log(replacement([2, 3, 4, 5, 6]));