function bonAppetit(bill, item, charged) {
  bill.splice(item,1);
  let actualCharge = splitCost(bill);
  if (actualCharge === charged) return "Bon Appetit";
  else return charged - actualCharge;
}

function splitCost(arr){
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum / 2;
}

console.log(bonAppetit([3, 10, 2, 9], 1 ,7));