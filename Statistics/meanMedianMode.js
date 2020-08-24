function processData(input) {
  //Enter your code here
  let mean = 0,
      modeIndex = 0,
      mode = 0,
      modeArray = [],
      sum = 0,
      length = input.length;
  
  input.forEach(number => {
    sum += number;
  });
  console.log(sum / length);
  input.sort((a,b) => a-b);
  // console.log(input);
  
  length % 2 === 1 ? 
  console.log(input[(length/2)]) :
  console.log((input[(length/2)] + input[(length/2) - 1]) / 2); 
  
  input.forEach(number => {
    (modeArray[number]) ?
    modeArray[number] = modeArray[number] + 1 :
    modeArray[number] = 1;
  });

  modeArray.forEach((i, index) => {
    if(i > modeIndex) {
      modeIndex = i;
      mode = index;
    }
  });
  
  console.log(mode);
} 

processData([64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060]);