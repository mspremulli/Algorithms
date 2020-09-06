function gradingStudents(grades) {
  for(let i = 0; i < grades.length; i++){
    let grade = grades[i];
    if(grade >= 38) {
      let lastNumber = grade % 10;
      if (lastNumber == 9 | lastNumber == 4) grades[i] = grade + 1;
      else if (lastNumber === 8 | lastNumber === 3) grades[i] = grade + 2;
    }
  };
  return grades;
}

console.log(gradingStudents([38,33,57,73]));