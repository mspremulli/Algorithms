// K number of allowed important losses
// L[i] array of luck values
// T[i] array of importance(0 or 1)

const luckBalance = (k, contests) => {
  let maxPossibleLuck = 0;
  let importantContests = [];

  //loop through contests and decide if each one is won or loss
  contests.forEach(contest => {
    //assume loss and add luck balance for zero
    if(contest[1] === 0){
      maxPossibleLuck += contest[0];
    }
    //create new array of 1 values
    else{
      importantContests.push(contest[0]);
    }
  });
  
  //sort the new array from highest to lowest
  importantContests.sort(function(a,b){return b-a});

  //loop through new array from highest to lowest
  //subtract first k values, add the rest
    importantContests.forEach((contest,index )=> {
      
    if(index < k){
      maxPossibleLuck += contest;
    }
    else{
      maxPossibleLuck -= contest;
    }
  });
  return maxPossibleLuck;
}

console.log(luckBalance(3, [[5,1], [2,1],[1,1], [8,1], [10,0],[5,0]]));
console.log(luckBalance(5, [[13,1], [10,1],[9,1], [8,1], [13,1],[12,1],[18,1],[13,1]]));

