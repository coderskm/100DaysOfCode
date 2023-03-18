function swap(a, b) {
  console.log("before swapping:- a =", a, "b =", b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("after swapping:- a =", a, "b =", b);
  return "";
}

swap(9, 19);
