// Complete the hourglassSum function below.
const  hourglassSum = (arr) => {
  let highestSum = -99999999
  let hourglassSum = 0;

    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
      hourglassSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      // console.log(hourglassSum);
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
