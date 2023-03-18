function product(n, arr) {
    if (n === 1) return arr[0];
    let prod = 1;
    for (let i = 0; i < n; i++){
        prod *= arr[i];
    }
    return prod;
}

console.log(product(2,[1,2]))