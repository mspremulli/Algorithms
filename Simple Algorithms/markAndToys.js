  // var to count toys
  // sort toyPrices array lowest to highest
  // loop thru toyPrices array until you get to budget but not going over budget
  // if next toy is within budget, buy it, else break
  // every time you buy a toy, keep track - variable
function maximumToys(toyPrices, budget) {
  let toyCount = 0;
  toyPrices = toyPrices.filter(price => budget > price );
  toyPrices.sort((a, b) => a - b);
  for(let i = 0; i < toyPrices.length; i++) {
    if (budget >= toyPrices[i]) {
      toyCount++;
      budget-= toyPrices[i];
    }
    else {
      break;
    }
  }
  return toyCount;
}
console.log(maximumToys([ 1, 12, 5, 111, 200, 1000, 10], 50))