function Solution(str){
  //Write your code here
const ans = palindromeCheck(str) ? '' : ' not';

console.log(`The word, ${str}, is${ans} a palindrome.`);
 
}

//takes string returns true if its a palindrome
const palindromeCheck = (str) => {
  const stack =   str.split('');
  let queue = [];
  for(let i = 0; i < stack.length; i++) {

    queue.unshift(stack[i]);
  };
return stack.join('') === queue.join('');

}

Solution('racecar')

Solution('racecars')