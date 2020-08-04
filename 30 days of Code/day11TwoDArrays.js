// Complete the hourglassSum function below.
const  hourglassSum = (arr) => {
  let highestSum = Number.MIN_VALUE,
      hourglassSum = 0,
      arrLength = arr[0].length - 2;
    //loop through each starting point for the hourglass
    for(let i = 0; i < arrLength; i++){
      for(let j = 0; j < arrLength; j++){
      //calculate the sum of the hourglass and update the maximum sum so far
      hourglassSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      highestSum = (hourglassSum > highestSum) ? hourglassSum: highestSum;
    }
  }
  return highestSum;
}

console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0]
 ,[0, 1, 0, 0, 0, 0]
 ,[1, 1, 1, 0, 0, 0]
 ,[0, 0, 2, 4, 4, 0]
 ,[0, 0, 0, 2, 0, 0]
 ,[0, 0, 1, 2, 4, 0]
]));
