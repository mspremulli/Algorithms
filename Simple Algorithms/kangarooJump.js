function kangaroo(x1, v1, x2, v2) {
  let numberOfJumps = (x1 - x2)/(v2 - v1);
  return numberOfJumps >= 0 && Number.isInteger(numberOfJumps) ? "YES" : "NO";
}

console.log(kangaroo(0,3,4,2));
console.log(kangaroo(3,4,7,2));
console.log(kangaroo(1,3,2,5));
console.log(kangaroo(0,2,5,3));