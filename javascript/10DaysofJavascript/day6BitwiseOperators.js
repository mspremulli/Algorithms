
function getMaxLessThanK(n, k) {
  let max = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      //console.log(a, b, a & b);
      max = ((a & b) < k && (a & b) > max) ? (a & b) : max;
    }
  }
  return max;
}

console.log(getMaxLessThanK(6, 4));