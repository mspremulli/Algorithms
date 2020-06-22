//checks for leap year yet
function isLeapYear(year){
  if(Number.isInteger(year) && year >=0 ){
    let isLeapYear = (year % 4 === 0 && year % 100 !==0) || year % 400 === 0 ? true : false;
    let resultText = isLeapYear  ? "is" : "is not";
    console.log(`${year} ${resultText} a leap year.`);
    return isLeapYear;
    }
  console.error(`${year} is not a valid year.`)
 
}

isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2004);
isLeapYear(1600);
isLeapYear(1600.5);
isLeapYear("1600");