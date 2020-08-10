//epic: find the permutation that would come first in the dictionary

//output: lexicographically smallest staring string
function reverseShuffleMerge(s) {
  let newString = [],
      reversedString = [],
      orignalString = s.split('');

  //create an object of how many of each letter are in the string
  let letterCount = [];
  // for(let i = 0; i < 26; i++){
  //   letterCount.push({letter: String.fromCharCode(i+97), count: 0})
  // }
  
  //loop through the given string and count each letters
  s.split('').forEach(letter => {
    //if letter is in add 1 to counter
    if(letterCount.filter(obj => obj.char === letter).length > 0) {
     letterCount.filter(obj => {if(obj.char === letter) obj.count++});
    }
    //if letter is not in add it and set count to 1
    else {
      letterCount.push({char: letter, count:1});
    }
  });


  console.log(letterCount);






  //create array of true/false values for each letter
  let letterChecker = [];
  for (let x = 0; x < 26; x++) {
    letterChecker.push(false);
  }

  //split half of the letters into a new array in alphabetical order
  //the letter pushed should be identical to the ones not pushed
  //build reverse of the string too
  orignalString.forEach(letter => {
      
  
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
  
  // console.log(newString);
  // console.log(reversedString);


  //check if the new string can be merged with its reverse to create the orignal string
  //  console.log(canBeMerged(orignalString, newString, reversedString));

  //if it can't adjust the new string to be in slightly less lexographical order, then try again
  
}

const canBeMerged = (orignalString, newString, reversedString) => {
  let passed = true;
  for(let i = 0; i < orignalString.length; i++){
    console.log(orignalString[i], newString[0], reversedString[0], passed);
      if(orignalString[i] === newString[0]){
        newString.splice(0,1);
      }
      else if(orignalString[i] === reversedString[0]){
        reversedString.splice(0,1);
      }
      else{ 
        passed = false
        break;
      };
    };
  // console.log(passed);
  return passed;
}

reverseShuffleMerge("eggegg");
reverseShuffleMerge("aeiouuoiea");
reverseShuffleMerge("abcdefgabcdefg");
reverseShuffleMerge("cceeccaaccaabddddb");
