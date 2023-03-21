function reverseString(str) {
  let revStr = [...str];
  return revStr.reverse().join("");
}

console.log(reverseString("try"));
