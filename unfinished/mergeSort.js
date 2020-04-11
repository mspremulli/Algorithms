function mergeSort(array) {
    // change code below this line
  let merge1 = [],
      merge2 = [],
      answer = [];

  if(array.length > 2){
    let pivot = Math.floor(array.length/2);
    merge1 = array.slice(0, pivot);
    merge2 = array.slice(pivot, array.length);
    //  console.log(merge1,merge2);
    
  }

  else if(array.length == 2){
    return array[0] > array[1] ?  [array[1], array[0]]: array;
  }
  else{
    return array;
  }

   answer = mergeSort(merge1).concat(mergeSort(merge2));
  // console.log(answer);
  return answer;
  
   
}


  
 
// console.log(mergeSort([1 ]));

// console.log(mergeSort([ 234, 92]));

console.log(mergeSort([1, 42, 234, 92,34,523,534,32]));
  
 console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  