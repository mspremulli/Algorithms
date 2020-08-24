const birthdayCakeCandles = (candles) => {
  let maxHeight = 0;
  let tallestCandles = 1;

  candles.forEach(candle => {
    if(candle === maxHeight){
      tallestCandles++;
    }
    else if(candle > maxHeight){
      tallestCandles = 1;
      maxHeight = candle;
    }
  });
  return tallestCandles;
}

console.log(birthdayCakeCandles([3,3,3,2,1,2,2,3]));