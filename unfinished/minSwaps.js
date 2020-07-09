// Complete the minimumSwaps function below.

const minimumSwaps = (arr) => {
  let minSwaps = arr.length - 1,
  unsorted = [...arr],
  sorted = arr.sort();
  // console.log(unsorted,sorted);
  
  for(let i = 0; i < arr.length; i++) {
    if(unsorted[i] === sorted[i] ) minSwaps--;
    let index = unsorted[i]
    if(unsorted[unsorted[i] - 1] === unsorted[i]){
      console.log(unsorted[i], unsorted[unsorted[i - 1]]);
    }
  }

  return minSwaps;

}

//swaps 2 indexes in an array and return the array
const swap2 = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}


console.log(minimumSwaps([1,4,5,2,3,6,7]));
