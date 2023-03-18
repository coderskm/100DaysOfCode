function difference(n, arr) {
    let diff = Math.abs(arr[0] - arr[n - 1]);
    return diff;
}

console.log(difference(6, [12, 3, 5, 4, 98, 100]));