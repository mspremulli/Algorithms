const alternatingCharacters = (str) => {
  let deletionNum = 0,
      regex = str.match(/(\w)\1+/g) || [];
  // console.log(regex);
  regex.forEach(group => {
    deletionNum += group.length - 1;
  });
  return deletionNum;
}

console.log(alternatingCharacters('AAABBABBBBAB'));
console.log(alternatingCharacters('ABABAB'));
