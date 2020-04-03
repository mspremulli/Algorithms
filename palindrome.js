/*
What type of data am I working with
Strings
What type of data structure is my input data and output data
input is a single string. output is a boolean
Will I need to use any loops? What kind of loop/s?
I will need to loop over the characters in he string. a For loop should work
Can this problem be applied to a real life situation, how would I solve it IRL
pattern matching has various uses. I supposed a palindrome could be relevent in some kind of bioinformatics protien structure
Do I need more variables to solve this problem? what kind? how many?
I'll need an empty array to put the characters in my string into, and a boolean to return true or false at the end
Give at least one more way to solve the problem (even if it is inefficient)

Write the solution out in pseudocode
//first remove all whitespace and symbols while building an array
new Array= arr;
palindrome=true;
for(character in string){
  if char!=\d or char!=\D{
    arr.push(character)
  }
}

//compare the first and last characters. then the 2nd and 2nd to last ect... 
//if any pairs do not match, return false, else return true
for (item in arr)
  if(arr[item]!=arr[length-item]){
    palendrome=false
  }

  return palindrome
 */

function palindrome(str) {
    let isPalindrome=true;
    let strNumbersLetters=[];
    
    //remove symbols and whitespaces
    for(let i=0;i<str.length;i++){
      if(/[a-z]|[0-9]/i.test(str.charAt(i))){
        strNumbersLetters.push(str.charAt(i).toLowerCase());
      }
    }
    
    //check if first and last are equal
    for(let i=0;i<=Math.floor(strNumbersLetters.length/2);i++){
    
      if(strNumbersLetters[i]!=strNumbersLetters[strNumbersLetters.length-i-1]){
        isPalindrome=false;
      }
    }
        console.log(isPalindrome);
      return isPalindrome;
    }
    palindrome("eye");
    palindrome("eyje");