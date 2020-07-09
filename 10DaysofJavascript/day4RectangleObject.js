/*
 * Complete the Rectangle function
 */
const Rectangle = (length, width) => {
  let area = length * width;
  let perimeter = 2 * (length + width);
  return {length, width, perimeter, area};

}

console.log(Rectangle(4,7));

