function bubbleSort(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < i; j++){
        if(array[j] > array[i]){
          [array[i], array[j]] = [array[j], array[i]];
          count++;
        }
      }
    }
  console.log(count);
  return array;
}
  
  console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  