const minimumSwaps = (arr) => {
  let minSwaps = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== i + 1){
      arr = swapTwo(arr, arr[i] - 1, i);
      minSwaps++;
      i = Math.min(arr[i] - 1, i);
    }
  }
  return minSwaps;

}

//swaps 2 indexes in an array and return the array
const swapTwo = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

console.log(minimumSwaps([1, 4, 5, 2, 3, 6, 7]));
console.log(minimumSwaps([2, 3, 4, 1, 5]));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));

