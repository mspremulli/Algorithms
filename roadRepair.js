function getMinCost(crew_id, job_id) {
  // Write your code here
  let minDistance =0;

  //sort each array
   job_id = quickSort(job_id);
   crew_id = quickSort(crew_id);

  //get the difference of each array number
  for(let i = 0; i < crew_id.length; i++) {
    minDistance += Math.abs(crew_id[i] - job_id[i]);
  }

  return minDistance;
}

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
  return answer;
}
else{
  return array;
}
 answer = quickSort(answer1).concat(quickSort(answer2));

return answer;

}

console.log(getMinCost([1,2,8,4,3],[2,5,4,3,6]));


