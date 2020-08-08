//epic: find the permutation that would come first in the dictionary

//output: lexicographically smallest staring string
function reverseShuffleMerge(s) {
  let newString = [],
      reversedString = [];

  //create array of true/false values for each letter
  let letterChecker = [];
  for (let x = 0; x < 26; x++) {
    letterChecker.push(false);
  }

  //split half of the letters into a new array in alphabetical order
  //the letter pushed should be identical to the ones not pushed
  //build reverse of the string too
  s.split('').forEach(letter => {
      
  
    const charCode = letter.charCodeAt() - 97;

    if (!letterChecker[charCode]) {
      //push letter into new array with insertion sort to create an ordered array
      
      //if new string is empty or if the letter goes at end put it there
      if(newString.length === 0 || letter >= newString[newString.length - 1]){
        newString.push(letter);
        reversedString.unshift(letter);
      }
      //else look through the array and put it in its proper place
      else{
        let i = 0;
        while(i < newString.length && letter > newString[i]) {
          i++;
        }
        reversedString.splice(reversedString.length - i, 0, letter);
        newString.splice(i, 0, letter);
      }
    }
    letterChecker[charCode] = !letterChecker[charCode];
  })
  
  console.log(newString);
  console.log(reversedString);


  //check if the new string can be merged with its reverse to create the orignal string

  //if it can't adjust the new string to be in slightly less lexographical order, then try again
  
}
reverseShuffleMerge("eggegg");
reverseShuffleMerge("aeiouuoiea");
reverseShuffleMerge("abcdefgabcdefg");
reverseShuffleMerge("cceeccaaccaabddddb");
