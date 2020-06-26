// Complete the countingValleys function below.
const countingValleys = (n, s) => {
  let  altitude = 0,
      numValley = 0,
      inValley = false;
  s = s.split('');
  s.forEach(step => {
    altitude = step ==='U' ? altitude + 1 : altitude - 1
    numValley = inValley && altitude >= 0 ? numValley + 1 : numValley;
    inValley = altitude < 0 ? true : false;
  });
  return numValley;
}

console.log(countingValleys(8,'UDDDUDUU'));
