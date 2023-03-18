function linearSearch(arr, x) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        if (arr[i] === x) return `${x} present at index ${i}`;
    }
    return "not present";
}

console.log(linearSearch([3,1,2,7,5],3))