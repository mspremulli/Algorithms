// Complete the angryProfessor function below.
const angryProfessor = (threshold, studentArrivalArray) => {
  let numberofStudentsOnTime = 0;

  studentArrivalArray.forEach(student => {
    if(student <= 0) numberofStudentsOnTime++;
  });
  // console.log(numberofStudentsOnTime, threshold);

  if(numberofStudentsOnTime >= threshold) return 'NO';
  return 'YES';
}

console.log(angryProfessor(3, [1,0,-3,-4]));
console.log(angryProfessor(2, [1,0,3,4]));