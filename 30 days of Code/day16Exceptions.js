const convertString = (str) => {
  const num = parseInt(str);
  return Number.isInteger(num) ? num : "Bad String"


}

console.log(convertString('5g'));
console.log(convertString('gg'));
