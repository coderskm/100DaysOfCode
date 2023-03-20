function secondLargest(arr) {
    let largest = Number.MIN_VALUE;
    let sLargest = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        }
        else {
            if (arr[i]>sLargest&&arr[i]<largest) {
                sLargest = arr[i];
            }
        }
    }
    return `second largest element in given array is ${sLargest}`;

}

console.log(secondLargest([3, 1, 2, 6, 7, 4, 9, 5]));