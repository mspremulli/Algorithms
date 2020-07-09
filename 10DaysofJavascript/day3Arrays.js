/**
*   Return the second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  let secondmax = 0;

  //set max equal to the highest number
  for(let i = 0;i < nums.length; i++){
    //console.log(max);  
    if (nums[i] > max) max = nums[i];
  }

  //set secondmax = second highest number
  for(let i = 0; i < nums.length; i++){
    //console.log(max);
    
    if (nums[i] > secondmax && nums[i] < max) secondmax = nums[i];
  }
  return secondmax;
}

console.log(getSecondLargest([6,3,4,1,5]));



