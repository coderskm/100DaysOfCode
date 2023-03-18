function copy(n, arr) {
    let copyArr = [];
    for (let i = 0; i < n; i++){
        copyArr.push(arr[i]);
    }
    return copyArr;
}

console.log(copy(6, [12, 23, 31, 89, 100, 200]));