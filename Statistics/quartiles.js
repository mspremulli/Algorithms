function processData(input) {
  //Enter your code here
  // input = input.split(/\r?\n/);
  // input = input[1].split(' ');
  // input = input.map(num => parseInt(num)); 
  input = input.sort((a,b) => a-b)
  let q1, q2, q3, half;
  let length = input.length;
  // console.log(input);
  if(isOdd(length)){
      half = (length - 1)/2;
      q2 = input[half];
      q1 = input.splice(0,half);
      q3 = input.splice(1,half);
  }
  else {
      half = (length)/2;
      q2 = getMiddleOfArray(input);
      q1 = input.splice(0,half);
      q3 = input.splice(0,half);
  }

  
  // console.log(q1);
  // console.log(q2);
  // console.log(q3);

  q1 = getMiddleOfArray(q1);
  q3 = getMiddleOfArray(q3);

  console.log(q1);
  console.log(q2);
  console.log(q3);
} 

function isOdd(num){
  return num % 2 === 1;
}

function getMiddleOfArray(arr){
  let half;
  
  if(!isOdd(arr.length)){
      half = arr.length/2;
      return (arr[half] + arr[(half) - 1])/2;
  }
  else{
      half = (arr.length -1)/2
      return arr[half];
  }
}

processData([3, 7, 8, 5, 12, 14, 21, 13, 18])