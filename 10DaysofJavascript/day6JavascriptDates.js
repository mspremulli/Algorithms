//return the day of the week for a given date in MM/DD/YYYY format
const getDayName = (dateString) => {
  let names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //console.log(new Date(dateString).getDay());
  return names[new Date(dateString).getDay()];
}

console.log(getDayName('11/10/2010'));
console.log(getDayName('6/11/2020'));