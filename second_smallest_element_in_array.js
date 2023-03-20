function secondLargest(arr) {
  let smallest = Number.MAX_VALUE;
  let sSmallest = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;
      smallest = arr[i];
    } else {
      if (arr[i] < sSmallest && arr[i] > smallest) {
        sSmallest = arr[i];
      }
    }
  }
  return `second smallest element in given array is ${sSmallest}`;
}

console.log(secondLargest([3, 1, 2, 6, 7, 4, 9, 5]));
