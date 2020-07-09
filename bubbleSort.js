
/*
Instructions: Write a function bubbleSort which takes an array of integers as input and returns an 
array of these integers in sorted order from least to greatest.
Note:We are calling this function from behind the scenes; the test array we are using is commented out in 
the editor. Try logging array to see your sorting algorithm in action!

 */

function bubbleSort(array) {
    // change code below this line
    for(let i=0;i<array.length;i++){
      for(let j=0;j<i;j++){
        if(array[j] > array[i]){
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }

      }
    }

  console.log(array);
    return array;
    // change code above this line
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  