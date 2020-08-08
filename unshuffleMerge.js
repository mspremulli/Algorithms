//epic: find the permutation that would come first in the dictionary

//output: lexicographically smallest staring string
function reverseShuffleMerge(s) {
  let newString = [];

  //create array of true/false values for each letter
  let letterChecker = [];
  for (let x = 0; x < 26; x++) {
    letterChecker.push(false);
  }

  //split half of the letters into a new array in alphabetical order
  //the letter pushed should be identical to the ones not pushed
  for (let x = 0; x < s.length; x++) {
    const charCode = s[x].charCodeAt() - 97;

    if (!letterChecker[charCode]) {
      //push letter into new array with insertion sort to create an ordered array
      newString.push(s[x]);
    }
    letterChecker[charCode] = !letterChecker[charCode];
  }
 
  let regular = [...newString];
  let reverse = newString.reverse();
  console.log(regular);
  console.log(reverse);


  //check if the new string can be merged with its reverse to create the orignal string

  //if it can't adjust the new string to be in slightly less lexographical order, then try again
  
}
reverseShuffleMerge("eggegg");
reverseShuffleMerge("aeiouuoiea");
reverseShuffleMerge("abcdefgabcdefg");
