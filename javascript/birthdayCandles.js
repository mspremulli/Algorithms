const birthdayCakeCandles = (candles) => {
  let maxHeight = 0;
  let tallestCandles = 1;
  for(let i = 0; i < candles.length; i++){
      if(candles[i] === maxHeight){
          tallestCandles++;
      }
      else if(candles[i] > maxHeight){
          tallestCandles = 1;
          maxHeight = candles[i];
      }
       
  }
  return tallestCandles;

}

console.log(birthdayCakeCandles([3,3,3,2,1,2,2,3]));