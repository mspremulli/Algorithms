// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleMin = s - a,
      appleMax = t - a,
      orangeMin = s - b,
      orangeMax = t - b,
      numApples = 0,
      numOranges = 0;
      // console.log(orangeMax, orangeMin);
  for (let i = 0; i < apples.length; i++) {
      if(apples[i] >= appleMin && apples[i] <= appleMax) numApples++;
  }
  for (let i = 0; i < oranges.length; i++) {
    if(oranges[i] >= orangeMin && oranges[i] <= orangeMax) numOranges++;  
  }
  console.log(numApples);
  console.log(numOranges);
}

countApplesAndOranges(7, 10, 4, 12, [2,3,4,5], [-5,2,-5,-6]);