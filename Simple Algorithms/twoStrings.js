 // Complete the twoStrings function below.
function twoStrings(s1, s2) {
  s1 = [... new Set(s1.split('').sort())];
  s2 = [... new Set(s2.split('').sort())];
  // console.log(s1,s2);
  let answer = "NO";
  s1.forEach(e1 => {
    s2.forEach(e2 => {
      if(e1 === e2) answer = "YES"
    });
  });
  return answer;
}

console.log(twoStrings('hello','world'));
console.log(twoStrings('hi','world'));
