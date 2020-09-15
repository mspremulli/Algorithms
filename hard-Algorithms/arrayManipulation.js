function arrayManipulation(n, queries) {
  let hashQuery = new Array(n).fill(0);
  queries.forEach(arr => {
    for(let i = arr[0]; i <= arr[1];i++){
     hashQuery[i-1] += arr[2];
    }
  });
// console.log(hashQuery);
return Math.max(...hashQuery);
}


console.log(arrayManipulation(5, [
  [1, 2, 100],
  [2, 5, 100],
  [ 3, 4, 100]
] ));

git
console.log(arrayManipulation(4, [
  [2, 3, 603],
  [1, 1, 286],
  [4, 4, 882]
] ));




