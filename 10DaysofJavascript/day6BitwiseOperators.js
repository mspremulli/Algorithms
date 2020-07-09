//return maximum possible bitwise for 2 integers n and k
function getMaxLessThanK(n, k) {
  let maxBitwise = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      maxBitwise = ((a & b) < k && (a & b) > maxBitwise) ? (a & b) : maxBitwise;
    }
  }
  return maxBitwise;
}

console.log(getMaxLessThanK(6, 4));