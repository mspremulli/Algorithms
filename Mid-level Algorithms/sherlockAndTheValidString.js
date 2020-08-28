const isValid = (initialString) => {
  let answer = "YES";

  //convert letters to numbers
  let initialNumbers = convertToASCII(initialString);
  
  //create count of each character
  let letterCounts = [];
  initialNumbers.forEach(num => {
    letterCounts[num] ? letterCounts[num]++ : letterCounts[num] = 1;
  });
  letterCounts = letterCounts.filter(num => num);

  //get the mode
  let mode = getMode(letterCounts);

  //check if the counts are off more than 1 time
  let countOff = 0;
  letterCounts.forEach(count => {
    if(count !== mode){
      countOff++;
      if((count > mode + 1 || count < mode - 1) && count !== 1){
        answer = "NO";
      }
    }
  });

  if(countOff > 1) answer = "NO";

  // console.log(letterCounts);
  // console.log(mode);
 
  return answer;
}

const convertToASCII = (letters) => {
  return letters.split('').map(letter => letter.charCodeAt(0) - 97);
}

const getMode = (input) => {
  let modeIndex = 0,
      mode = 0,
      modeArray = [];

  input.forEach(number => {
    (modeArray[number]) ?
    modeArray[number] = modeArray[number] + 1 :
    modeArray[number] = 1;
  });

  modeArray.forEach((i, index) => {
    if(i > modeIndex) {
      modeIndex = i;
      mode = index;
    }
  });
  
  return mode;
} 




console.log(isValid("abccz"),"YES");
console.log(isValid("aaabbbc"),"YES");
console.log(isValid("aaaabbcc"),"NO");
console.log(isValid("xxxaabbccrry"),"NO");
console.log(isValid("aabbcd"),"NO");