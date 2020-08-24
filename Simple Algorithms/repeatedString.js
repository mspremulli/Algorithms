// Complete the repeatedString function below.
function repeatedString(s, n) {
  let countA = 0;
  for(let i = 0; i < n; i++) {
   if(s[i % s.length] === 'a') countA++;
  }  
  return countA;
}

console.log(repeatedString('aba', 10));