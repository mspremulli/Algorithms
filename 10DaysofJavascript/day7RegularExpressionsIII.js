const regexVar = (str) => {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  let re = /\d+/g;
  return str.match(re);
}


console.log(regexVar('adh3haf45th3rfh3'));
