function quickSort(array) {
    // change code below this line
  let answer = [],
      answer1 = [],
      answer2 = [];

  if (array.length > 2){
    let pivot = array[array.length-1];    
    answer2.push(pivot);
  
    for(let i = array.length-2; i >= 0 ; i--) {
      
      if(array[i] > pivot){
        answer2.push(array[i]);
      }
      else{
        answer1.unshift(array[i]);
      }
    }
  }

  else if (array.length == 2) {
    answer = array[0] < array[1] ? array : [array[1], array[0]];
    //console.log(answer);
    
    return answer;
  }
  else{
    //console.log(array);
    return array;
  }
  // console.log(answer1,answer2);
   answer = quickSort(answer1).concat(quickSort(answer2));
  // answer = (answer1).concat((answer2));

  console.log(answer);
  return answer;

}
  
  // test array:
   quickSort([154, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  //quickSort([5,1,3]);
  