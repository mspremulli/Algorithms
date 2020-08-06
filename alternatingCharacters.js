const alternatingCharacters = (str) => {
  let deletionNum = 0;
      regex = str.match((/(\w)\1+/g));
  regex = regex === null ? [] : regex;
  regex.forEach(letter => {
    deletionNum += letter.length - 1;
  });
  return deletionNum;
}

console.log(alternatingCharacters('AAABBABAB'));
console.log(alternatingCharacters('ABABAB'));
