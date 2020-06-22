function getGrade(score) {
  let grade;
  // Write your code here
  if(score<=30 && score > 25) grade ="A"
  else if(score <= 25 && score > 20) grade ="B"
  else if(score <= 20 && score > 15) grade ="C"
  else if(score <= 15 && score > 10) grade ="D"
  else if(score <= 10 && score > 5) grade ="E"
  else if(score <= 10 && score >= 0) grade ="F"
  return grade;
}

console.log(getGrade(22));

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
      case'aeiou'.includes(s[0]): {letter='A'; break;}
      case'bcdfg'.includes(s[0]): {letter='B'; break;}
      case'hjklm'.includes(s[0]): {letter='C'; break;}
      case'npqrstvyxz'.includes(s[0]): {letter='D'; break;}
      
  }
  return letter;
}

console.log(getLetter('k'));


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * 
 * or i='e' or i='i' or i='o' or i='u')
 */
function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
      if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') {
          console.log(s[i])
      }
  }

   for (let i = 0; i < s.length; i++) {
      if(s[i]!='a' && s[i]!='e' && s[i]!='i' && s[i]!='o' && s[i]!='u') {
          console.log(s[i])
      }
      
  }
}

vowelsAndConsonants('javascriptloops');