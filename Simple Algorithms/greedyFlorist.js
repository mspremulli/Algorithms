function getMinimumCost(numberOfFriends, flowerCosts) {
  let mult,
      sum = 0;
  flowerCosts.sort((a,b) => b-a);
  
  for(let i = 0; i < flowerCosts.length; i++){
    mult = 1 + Math.floor(i/numberOfFriends);
    sum += flowerCosts[i] * mult;
  }
  return sum;
}


console.log(getMinimumCost(3,[2,5,6,8,11,14]));
