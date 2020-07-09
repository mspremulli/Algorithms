/*
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of 2 to 5, print Not Weird
If  is even and in the inclusive range of 6 to 20, print Weird
If  is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.
*/

const isItWeird = (n) => {
  let isWeird = 'Not Weird'
  if((n % 2 === 1) || (n % 2 === 0 && n <= 20 && n >= 6)) isWeird = 'Weird'
  
  return isWeird;
}

console.log(isItWeird(4));