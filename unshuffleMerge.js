//epic: find the permutation that would come first in the dictionary

//output: lexicographically smallest staring string
function reverseShuffleMerge(s) {
  //create an object of how many of each letter are in the string
  let letterCount = [];
  
 //create array of true/false values for each letter
 let letterChecker = [];
 for (let x = 0; x < 26; x++) {
   letterChecker.push(true);
 }

  //loop through the given string and count each letters
  //split half of the letters into a new array in alphabetical order
  //the letter pushed should be identical to the ones not pushed
  //the total count of the letters should be half of the orignal string
  s.split('').forEach(letter => {
    //if letter is in add 1 to counter
    if(letterCount.filter(obj => obj.char === letter).length > 0 ) {
      if(letterChecker[letter.charCodeAt() - 97]){
        letterCount.filter(obj => {if(obj.char === letter) obj.count++});
        letterChecker[letter.charCodeAt() - 97] = false;
      }
      else{letterChecker[letter.charCodeAt() - 97] = true};
    }
    //if letter is not in add it and set count to 1
    else {
      //push letter into new array with insertion sort to create an ordered array of objects
      let i = 0;
      while(i < letterCount.length && letter > letterCount[i].char) {
        i++;
      }
      letterCount.splice(i, 0, {char: letter, count: 1});
      letterChecker[letter.charCodeAt() - 97] = false;
    }
  });

  console.log(letterCount);
} 

reverseShuffleMerge("eggegg");
reverseShuffleMerge("aeiouuoiea");
reverseShuffleMerge("abcdefgabcdefg");
reverseShuffleMerge("cceeccaaccaabddddb");
