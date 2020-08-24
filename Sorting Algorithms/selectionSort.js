function selectionSort(array) {
  let newArr = [];
    // change code below this line

    

     for(let i=0; i<array.length;){
        let max = 0
        let maxIndex = 0;
        for(let j = 0; j < array.length; j++){
          if(array[j] > max){
            max = array[j];
            maxIndex = j;
          }
        }
         newArr.unshift(array.splice(maxIndex,1)[0]);
       
    }

    console.log(newArr);
    
    return newArr;
    // change code above this line
  }
  
  
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  