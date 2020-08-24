// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  let minAbsoluteDifference = Number.MAX_VALUE;
 
  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length - 1; i++){
    minAbsoluteDifference = Math.min(minAbsoluteDifference, Math.abs(arr[i] - arr[i + 1]));
  }
  return minAbsoluteDifference;
}

console.log(minimumAbsoluteDifference([-3, 1 , 71, 68, 17]));