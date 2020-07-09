class Person {
  constructor(firstName, lastName, identification) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = identification;
  }
  
  printPerson() {
      console.log(
          "Name: " + this.lastName + ", " + this.firstName 
          + "\nID: " + this.idNumber
      )
  }
}

class Student extends Person {
  /*	
  *   Class Constructor
  *   
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  // Write your constructor here
  constructor(firstName, lastName, identification,scores){
      super()
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = identification;
      this.scores = scores
  }   
  /*	
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  // Write your method here
   calculate() {
  let sum =0;
  this.scores.forEach(e => {
    sum+=e
  });
  let avg = sum / this.scores.length
  let avgGrade;
  switch(true){
      case avg >= 90: avgGrade = 'O'
      break;
      case avg >= 80: avgGrade = 'E'
      break;
      case avg >= 70: avgGrade = 'A'
      break;
      case avg >= 55: avgGrade = 'P'
      break;
      case avg >= 40: avgGrade = 'D'
      break;
      default: avgGrade = 'T'
      
  }
  
  return avgGrade;
}
}
