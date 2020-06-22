const regexVar = (str) => {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */


  // (Mr|Mrs|Ms|Dr|Er) must start with one of these letters, case sensitive
  // \.  escape for the character .
  // \w+ ends with 1 ore more letters
  let re = /(Mr|Mrs|Ms|Dr|Er)\.\w+/;

  return re.test(str);
}


console.log(regexVar('Mr.mike'));
console.log(regexVar('Dr.fgaerhge'));
console.log(regexVar('msdfe'));