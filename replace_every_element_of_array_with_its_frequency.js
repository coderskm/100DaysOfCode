function freqReplace(arr) {
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++){
        if (map.get(arr[i]) == null) map.set(arr[i], 1);
        else map.set(arr[i], map.get(arr[i]) + 1);
    }
    for (let i = 0; i < n; i++){
        arr[i] = map.get(arr[i]);
    }
    return arr;
}

console.log(freqReplace([12,34,12,1,7,2,1,12]))