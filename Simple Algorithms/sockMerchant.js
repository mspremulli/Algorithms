// Complete the sockMerchant function below.
//how many pairs of each color sock
function sockMerchant(n, ar) {
  //create storage array for all possible 100 colors
  let colors = [],
      pairs = 0;
  for(let i = 0; i <= 100; i++){
    colors.push(0);
  }

//add socks to the color array
  ar.forEach(sock => {
    colors[sock]++;
  });
  // console.log(colors);

  //count the pairs
  colors.forEach(color => {
    pairs += Math.floor(color/2);
  });
  return pairs;
}

console.log(sockMerchant(7,[1,1,2,3,2,3,2]));