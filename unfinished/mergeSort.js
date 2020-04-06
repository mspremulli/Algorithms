function mergeSort(array) {
    // change code below this line
  let answer1 = [],
      answer2 = [],
      answer = [];

  if(array.length > 2){
    let pivot = Math.floor(array.length/2),
    answer1 = array.slice(0, pivot);
    answer2 = array.slice(pivot+1, array.length);
    
  }

  else if(array.length == 2){
    return array[0] > array[1] ?  [array[1], array[0]]: array;
  }
  else{
    return array;
  }

  answer = mergeSort(answer1).concat(mergeSort(answer2));
  console.log(answer);
  return answer;
  
   
}


  
 

  
  mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  