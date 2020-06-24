/*
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function findSubstring(s, k) {
  let maxNumVowels = 0,
      maxVowles = '';
  // Write your code here
  let regEx = /[aeiou]/g;
  let vowelCount;
  if(!s.match(regEx)){
    return 'Not found!'
  }

  for(let i = 0; i <= s.length-k; i++) {
    let subString = s.slice(i, k+i);    
  
    let stringArray = subString.match(regEx) ;
    if(stringArray){
      vowelCount = stringArray.length;
    }

    maxVowles = maxNumVowels < vowelCount ?  subString : maxVowles;
    maxNumVowels = maxNumVowels <= vowelCount ? vowelCount : maxNumVowels;

  }
 
  return maxVowles;
}

console.log(findSubstring('azerdii',5));
console.log(findSubstring('qwdftr',5));
console.log(findSubstring('eiuaooo',4));

