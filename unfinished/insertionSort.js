function insertionSort(array) {
    // change code below this line
    for(let i=0;i<array.length;i++){
      // console.log(i,array.length);
      let j=0;
      while(array[i] > array[j] && j< array.length){

        
        j++;
      }
      console.log(i,j)
      console.log(array.slice(0,j))
      console.log(array.slice(j,j+1))
      console.log(array.slice(j+1,array.length+1))
      
        //array = [...array.slice(0,j),array.slice(j,j+1),array.slice(j+1,array.length+1)].flat();
      //  console.log(array,i,j);
    }
    

     console.log(array);
    
    return array;
    // change code above this line
  }
  
  insertionSort([4, 2, 8, 345, 123]);
  