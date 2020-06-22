// Complete the factorial function below.
function factorial(n) {
  let ans=1;
  if(n > 1){
    ans = n * factorial(n-1)
  }
  
  return ans;
}

console.log(factorial(5));
 