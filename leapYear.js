//checks for leap year yet
function isLeapYear(year){
  let resultText = (year % 4 == 0 && year % 100 !=0) || year % 400 == 0  ? "is" : "is not";
  let isLeapYear = (year % 4 == 0 && year % 100 !=0) || year % 400 == 0 ? true : false;
  console.log(`${year} ${resultText} a leap year.`);
  return isLeapYear;
}

isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2004);
isLeapYear(1600);