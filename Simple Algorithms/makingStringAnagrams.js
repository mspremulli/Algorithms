function makeAnagram(a, b) {
  a = hashtableForLetters(a);
  b = hashtableForLetters(b);

  let countRemoved = 0;
  for(let i = 0; i < 26; i++) {
    countRemoved += Math.abs(a[i] - b[i]);
  }
  return countRemoved;
}

const convertToASCII = (letters) => {
  return letters.split('').map(letter => letter.charCodeAt(0) - 97);
}

const hashtableForLetters = (letters) => {
  let initialNumbers = convertToASCII(letters);

  let letterCounts = new Array(26).fill(0,0,26);

  initialNumbers.forEach(num => {
    letterCounts[num] ? letterCounts[num]++ : letterCounts[num] = 1;
  });
  return letterCounts;
}

console.log(makeAnagram('abc', 'dgfc'));