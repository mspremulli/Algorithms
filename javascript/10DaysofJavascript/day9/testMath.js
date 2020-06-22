doMath = (a, b, symbol) => {
  switch(symbol){
    case '+':
      return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    case'-':
      return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
    case'*':
      return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
    case'/':
      return Math.round(parseInt(a, 2) / parseInt(b, 2)).toString(2);
    default:
      console.error('invalid symbol');
      return 0;
  }
}

console.log(doMath(10101010, 11001100,'+'));
console.log(doMath(10101010, 11001100,'-'));
console.log(doMath(10101010, 11001100,'*'));
console.log(doMath(10101010, 11001100,'/'));