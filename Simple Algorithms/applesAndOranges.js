// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleMin = s - a,
      appleMax = t - a,
      orangeMin = s - b,
      orangeMax = t - b,
      numApples = 0,
      numOranges = 0;
      // console.log(orangeMax, orangeMin);

  apples.forEach(apple => {
    if(apple >= appleMin && apple <= appleMax) numApples++;
  });

  oranges.forEach(orange => {
    if(orange >= orangeMin && orange <= orangeMax) numOranges++; 
  });

  console.log(numApples);
  console.log(numOranges);
}

countApplesAndOranges(7, 10, 4, 12, [2,3,4,5], [-5,2,-5,-6]);