// Complete the jumpingOnClouds function below.
//print minimum jumps to win game
//assume no impossible setups(consecutive 1s)
const jumpingOnClouds = (c) => {
  let minJumps = 0,
      i = 0;
  while(i < c.length - 1){
    minJumps++
    i = c[i + 2] === 1 ? i + 1 : i + 2;
    // console.log(i);
  }
  return minJumps;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0,1,0,0]));