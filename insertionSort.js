function insertionSort(array) {
    // loop through each item in the array
    for(let i=0;i<array.length;i++){
      let j=0;
        //find the spot where it should fit in
      while(array[i] > array[j] && j < array.length){

        j++;
      }

      // make an array of three parts:
      //  everything before the current spot
      //  the current Number
      //  everything after the current spot
      array = [...array.slice(0,j),array.splice(i,1),array.slice(j,array.length+1)].flat();
     
    }
  
     console.log(array);

    return array;

  }
  
  insertionSort([4, 2, 8, 345, 123]);
  