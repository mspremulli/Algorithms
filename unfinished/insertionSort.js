function insertionSort(array) {
    // change code below this line
    let newArr =[];
    for(let i = 0; i<array.length; i++){
      newArr.push(array[i]);
      for(let j = newArr.length-1; j>0; j--){
        let temp = newArr[i];
        if(newArr[j] < array[i]){
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
      }
    }

    console.log(newArr);
    
    return newArr;
    // change code above this line
  }
  
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  