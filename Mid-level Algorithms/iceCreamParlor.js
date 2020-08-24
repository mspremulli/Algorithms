// Complete the whatFlavors function below.
function whatFlavors(prices, budget) {
  let countIndex = 0;
  let iceCreamIndex;
  let iceCreamCost;
  let iceCreamHashTable = [];
  //create hastable
  prices.forEach((price, index) => {
    if(iceCreamHashTable[price]) iceCreamHashTable[price].push(index + 1);
    else iceCreamHashTable[price] = [index + 1];
  });

  // remove the edge case where a single ice cream is chosen twice
  if(budget % 2 === 0 && iceCreamHashTable[budget / 2].length === 1){
   iceCreamHashTable.splice(budget / 2, 1, null);
  }

  //loop through the prices until a match is found
  while(prices.length > 0){
    //remove item being checked from the array
    iceCreamCost = prices.splice(0, 1)[0];
    iceCreamIndex = iceCreamHashTable[budget - iceCreamCost];
    countIndex++;
    if (iceCreamIndex){
       console.log(countIndex, iceCreamIndex[iceCreamIndex.length - 1]);
      return;
    }
  }
}

whatFlavors([2, 2, 4, 3], 4);
whatFlavors([45, 65, 56, 1, 5, 4, 3, 6], 5);
whatFlavors([4, 3, 2, 5, 7], 8);

