function processData(input) {
  let inputarr = input.split('\n');
  for(let i=1;i<inputarr.length;i++){
    printLetter(inputarr[i]);
  }
} 

const printLetter = (input) => {
  let inputArr = input.split('');
  let even = [],
    odd = [];
  for(let i = 0; i < inputArr.length; i++){
    if(i % 2 === 0) even.push(inputArr[i]);
    else odd.push(inputArr[i]);
  }
  console.log(even.join(''), odd.join(''));

}

processData('Hacker');