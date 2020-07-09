
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
const getCount = (objects) => {
  let count = 0;
  for(let i = 0; i < objects.length; i++) {
      if(objects[i].x === objects[i].y) count = count + 1;    
  }
  return count;
}

console.log(getCount([{x:1, y:1}, {x:3, y:4}, {x:5, y:7}, {x:7, y:7}]));

