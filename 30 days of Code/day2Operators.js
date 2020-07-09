// Complete the solve function below.
//Print the total meal cost, where is the rounded integer result of the entire bill ( with added tax and tip).
//This doesnt tip off the post tax amount, even though you really should
function solve(meal_cost, tip_percent, tax_percent) {
  console.log(Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100)));

}

solve(12,20,8);