function binarySearch(arr, x) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (x < arr[mid]) end = mid - 1;
      else if (x > arr[mid]) start = mid + 1;
      else return `${x} present at index ${mid}`;
    }
  return "not present";
}

console.log(binarySearch([1, 2, 3, 5, 7], 4));
