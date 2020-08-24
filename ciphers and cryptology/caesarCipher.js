//returns a string shifted n letters per caesar cipher rules
const caesar = (str, n) => {
  str = str.split('');

 for(let i =0;i<str.length;i++){
   if(str[i].charCodeAt(0) + n <= 122){

     str[i] = String.fromCharCode(str[i].charCodeAt(0) +n);
   }
   else{
    str[i] = String.fromCharCode(str[i].charCodeAt(0) + n - 26);
   }
 }
    
  return str.join('');
}
