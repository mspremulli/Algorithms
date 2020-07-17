// M 1000
// D 500
// C 100
// L 50
// X 10
// V 5
// I 1
function convertToRoman(num) {
  let arrayOfDigits = num.toString().split('');
  
  let romanNumeral = "";

  arrayOfDigits.forEach((value, digitPlace) => {
    romanNumeral = romanNumeral + convertSingle(arrayOfDigits.length - digitPlace, parseInt(value));
  });

  console.log(num, romanNumeral);
  return romanNumeral;
}
    
    function convertSingle(digitPlace, value){
        let answer = '';
        let small, medium, large;
       
        if(digitPlace == 4){
          for(let i=0; i < value ;i++){
              answer += 'M';
          }
        }
        if(digitPlace < 4){
          if(digitPlace == 3){
            small = 'C'
            medium = 'D'
            large = 'M'
          }
          else if(digitPlace == 2){
            small = 'X'
            medium = 'L'
            large = 'C'
        }
  
          else if(digitPlace == 1){
            small = 'I'
            medium = 'V'
            large = 'X'
          }
          
          if(value <= 3){
            for(let i=0; i < value; i++){
              answer = answer + small;
            }
        }
          else if(value==4) {answer = small + medium}
          
          else if(value >= 5 && value <= 8){
            answer = medium;
            for(let i=5; i < value; i++){
              answer = answer + small;
            }
          }
          else if(value==9) {answer = small + large}
          
    
        }
        return answer;
    }
    
    

    convertToRoman(36);
    
    
    