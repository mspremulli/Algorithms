const migratoryBirds = (arr) => {
  let countBirdTypes = [0,0,0,0,0],
      countBirdType = 0,
      maxId = 0;

  //build counting array
  arr.forEach(bird => {
    countBirdTypes[bird-1]++;
  });
  // console.log(countBirdTypes);
  
  //find max number in array
  for(let i = 0; i < countBirdTypes.length; i++){
    if(countBirdTypes[i] > countBirdType) {
      countBirdType = countBirdTypes[i];
      maxId = i + 1;
    }
  }

  return maxId;
}

console.log(migratoryBirds([1,2,3,4,2,2,5,5]));


