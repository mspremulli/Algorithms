Calculator = {

  power(n, p){
   
   if(n >= 0 && p >= 0) return Math.pow(n, p);
 
   else  return 'n and p should be non-negative';
       
  }
 }

console.log(Calculator.power(5,-3));
console.log(Calculator.power(5,3));