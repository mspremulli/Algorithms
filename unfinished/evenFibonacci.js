//By considering the terms in the Fibonacci sequence whose values do not exceed n
//, find the sum of the even-valued terms.

function fiboEvenSum(n) {
    // You can do it!
  let i = 0,
      sum = 0;
  while(getFib(i) <= n){
    let current = getFib(i)
    sum = current % 2 === 0 ? sum + current : sum;
    i++
  }
  console.log(sum);
}

//get the current fibonocci number
function getFib(index) {

  if(index > 1){
    return(getFib(index-1) + getFib(index-2));
  }
  else return 1;

}
  
  fiboEvenSum(10);
  fiboEvenSum(5);
  