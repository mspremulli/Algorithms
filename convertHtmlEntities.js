function convertHTML(str) {
  const arr =  str.split("")
  .map(e => {
    switch(e){
      case '&': 
        return '&amp;'
      case  '<' :
        return  "&lt;"
      case  '>' :
        return  "&gt;"
      case  '"' :
        return  "&quot;"
      case  "'":
        return  "&apos;"
      default: 
        return e
    }
  })
  .join('');

  console.log(arr);
  return arr;
}

convertHTML("Dolce & Gabbana");



// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
//  in a string to their corresponding HTML entities.

// & &amp; 
// < &lt;
// > &gt;
// " &quot;
// ' &apos;