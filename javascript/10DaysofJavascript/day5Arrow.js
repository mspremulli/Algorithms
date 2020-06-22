/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
  return nums.map(i => {
    if(i % 2 === 0) return i*2
    else return i*3
  });
};

console.log(modifyArray([1,2,3,4,5]));