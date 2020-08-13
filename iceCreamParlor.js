// Complete the whatFlavors function below.
function whatFlavors(costs, budget) {
  //create hastable
  let iceCreamHashTable = [];
  costs.forEach((cost, index) => {
    if(iceCreamHashTable[cost]) iceCreamHashTable[cost].push(index + 1);
    else iceCreamHashTable[cost] = [index + 1];
  });
  // console.log(iceCreamHashTable);

  let countIndex = 0;
  let iceCreamIndex;
  while(costs.length > 0){
    //remove item being checked from the array
    let iceCreamCost = costs.splice(0, 1);
    // console.log(iceCreamHashTable[iceCreamCost[0]].length);
    if(!(iceCreamCost[0] === budget/2 && iceCreamHashTable[iceCreamCost[0]].length < 2)){
      iceCreamIndex = iceCreamHashTable[budget - iceCreamCost];
    }
    countIndex++;
    if (iceCreamIndex){
      console.log(countIndex, iceCreamIndex[iceCreamIndex.length - 1]);
      return;
    }
  }
}

// whatFlavors([2, 2, 4, 3], 4);
// whatFlavors([45, 65, 56, 1, 5, 4, 3, 6], 5);
whatFlavors([4, 3, 2, 5, 7], 8);

