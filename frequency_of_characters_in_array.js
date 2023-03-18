function frequency(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " "||arr[i]==="") continue;
    else if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }
  return obj;
}

console.log(frequency(['t','e','s','t','']));
