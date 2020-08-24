// Print two space-seperated integers describing the respective numbers of times her best (highest) 
// score increased and her worst (lowest) score decreased
function breakingRecords(scores) {
  let highAndLow = [0, 0];
  let currentLowScore = scores[0],
      currentHighScore = scores[0];
  //loop through the scores
  //update low and high scores if larges or smallest
  //update counting array if score is broken

  scores.forEach(score => {
   if(score > currentHighScore){
      currentHighScore = score;
      highAndLow[0]++;
   }

   else if(score < currentLowScore){
     currentLowScore = score;
     highAndLow[1]++;
   }
  });

  return highAndLow;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));