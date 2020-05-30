//sum the odd fib numbers
function sumFibs(num) {
  let sum = 0;
  let i = 0;
  let stop = 1;
  while(stop < num){
    stop = getFib(i);
    if(stop <= num && stop % 2 === 1) {
      // console.log(stop);
      sum = sum + stop;
    }
    i++;
  }
  return sum;
}


//get the current fibonocci number
function getFib(index) {

  if(index > 1){
    return(getFib(index-1) + getFib(index-2));
  }
  else return 1;

}


console.log(sumFibs(1000));
console.log(sumFibs(75025))
