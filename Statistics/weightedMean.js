function processData(numbers, weight) {
  let sum = 0,
      weightedSum = 0;
  numbers.forEach((number, index) => {
    sum += number * weight[index];
    weightedSum += weight[index];
  });
  let avg = sum / weightedSum;
  console.log(avg.toFixed(1));
}

processData([10, 40, 30, 50, 20],[ 1, 2, 3, 4, 5]);
