/*
 * Complete the 'getMaxArea' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER w
 *  2. INTEGER h
 *  3. BOOLEAN_ARRAY boundaryType
 *  4. INTEGER_ARRAY boundaryDist
 */

const getMaxArea = (w, h, boundaryType, boundaryDist) => {
  let leftBorder = 0,
      rightBorder = w,
      topBorder = h,
      botBorder = 0,
      maxArea = [];
 for(let i = 0; i < boundaryType.length; i++){
    boundaryType[i] === false ? 
    (
      (topBorder - boundaryDist[i] > boundaryDist[i] - botBorder) ? 
      (botBorder = boundaryDist[i]):
      (topBorder = boundaryDist[i])
    ) : 
    
    (
      (rightBorder - boundaryDist[i] > boundaryDist[i] - leftBorder) ? 
      (leftBorder = boundaryDist[i]):
      (rightBorder = boundaryDist[i])
    )
  
    // console.log(leftBorder, rightBorder);
    maxArea.push((rightBorder - leftBorder) * (topBorder - botBorder));
  };
  return maxArea;
}

console.log(getMaxArea(4 ,3 , [true,true], [1,3]));
console.log(getMaxArea(2 ,2 , [false,true], [1,1]));