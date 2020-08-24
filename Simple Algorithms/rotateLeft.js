// Complete the rotLeft function below.
//rotate and array to the left a given number of times
function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0,d)];
}

console.log(rotLeft([1,2,3,4,5],2));