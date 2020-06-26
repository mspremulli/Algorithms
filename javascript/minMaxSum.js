// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr = arr.sort();
  let sum = 0;
   
  arr.forEach(element => {
    sum += element
  });
  // console.log(sum,arr);

  let arrMin = sum - arr[4];
  let arrMax = sum - arr[0];
  console.log(`${arrMin} ${arrMax}`);

}

miniMaxSum([3,5,1,7,8]);
