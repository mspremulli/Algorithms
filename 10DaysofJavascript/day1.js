/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
  let area = length * width;
  // Write your code here
  
  return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
  return 2 * length + 2 * width;
  // Write your code here
  
}

console.log(getPerimeter(5,6));
console.log(getArea(3,4));

const getFactorial = (num) => {
  total = 1;
  while(num > 1){
    total = total * num;
    num--;
  }
  return total;
}

console.log(getFactorial(5));


const PI = Math.PI;
// Print the area of the circle:
const getCircleArea = (rad) => {
  return PI * rad * rad;
}

console.log(getCircleArea(2.6));
// Print the perimeter of the circle:
const getCirclePerimeter = (rad) => {
  return PI * 2 * rad;
}

console.log(getCirclePerimeter(2.6));