/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(str) {
  
  try {
    console.log(str.split("").reverse().join(""));
  }

  catch {
    console.error("could not reverse the string")
    console.log(str);
  }
  
}

reverseString('hellowworld');
reverseString(54);


