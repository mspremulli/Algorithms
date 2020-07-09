const regexVar = (str) => {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  // ^([aeiou]) starts with a vowel
  // .*  any number of characters in the middle
  // \1$  ends with the same vowel it started with
  let re = /^([aeiou]).*\1$/;
  return re.test(str);
}

console.log(regexVar('adfga'));
console.log(regexVar('adfgo'));
console.log(regexVar('adfggg'));