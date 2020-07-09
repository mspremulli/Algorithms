function mergeSort(array) {
    
  let merge1 = [],
      merge2 = [],
      answer = [];

//split the array in half
  if(array.length > 2){
    let pivot = Math.floor(array.length/2);
    merge1 = array.slice(0, pivot);
    merge2 = array.slice(pivot, array.length);
    //  console.log(merge1,merge2);
    
  }

  //if only 0-2 numbers in the array order them smallest to greatest
  else if(array.length == 2){
    return array[0] > array[1] ?  [array[1], array[0]]: array;
  }
  else{
    return array;
  }

 

    answer = merge(mergeSort(merge1),(mergeSort(merge2)));
    // console.log(answer);
  return answer;
  
   
}

function merge(merge1, merge2){
   //merge the items back together in order
  answer =[];
 while(merge2.length > 0 && merge2.length > 0){
  answer =  merge1[0] < merge2[0] ? (
    [...answer, merge1.splice(0,1)[0]]) : (
    [...answer, merge2.splice(0,1)[0]]
  );
 }
 answer = [answer,merge1].flat();
 answer = [answer,merge2].flat();

 return answer;

}



// console.log(mergeSort([ 234, 92]));

console.log(mergeSort([1, 42, 234, 92,34,523,534,32]));
  
  console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  