function palindrome(str) {
  let isPalindrome = true;
  let strNumbersLetters = [];
  
  //remove symbols and whitespaces
  for(let i = 0; i < str.length; i++){
    if(/[a-z]|[0-9]/i.test(str.charAt(i))){
      strNumbersLetters.push(str.charAt(i).toLowerCase());
    }
  }
  
  //check if first and last are equal
  for(let i = 0; i <= Math.floor(strNumbersLetters.length / 2); i++){
    if(strNumbersLetters[i] != strNumbersLetters[strNumbersLetters.length - i - 1]){
      isPalindrome=false;
    }
  }
  return isPalindrome;
}
console.log(palindrome("eye"));
console.log(palindrome("eyje"));