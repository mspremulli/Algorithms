function sumAll(arr) {
  let smaller = arr[0] > arr[1] ? arr[1] : arr[0];
  let larger = arr[0] > arr[1] ? arr[0] : arr[1];
  // let newArr = [smaller, larger];
  let sum = 0;

  for(let i = smaller; i <= larger; i++){
    sum = sum + i;
  }

  console.log(sum);
  return sum;
}

sumAll([1, 4]);
