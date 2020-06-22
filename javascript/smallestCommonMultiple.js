
function smallestCommons(arr) {
    //make an array of numbers to use
    let array =[];
    if(arr[0]>arr[1]){
      let temp = arr[0];
      arr[0]=arr[1];
      arr[1]=temp;
    }
    for(let i=arr[0];i<=arr[1];i++){
      array.push(i);
    }
    
    //initialize the lcm and keep increasing its number by 1 until every number is divisible
    let mult=false;
    let lcm=arr[1];
     while (mult==false){
        lcm++;
        let check=true;
        let i=0;
        //loop through each item in array to check if they are divisors of the test LCM
        while(i<array.length && check){
          if(lcm % array[i] !== 0){
            check=false;
          }
          i++;
        }
    
        if(check){
          mult=true;
        }
      
     }
    
      console.log(lcm);
      return lcm;
    }
    
    smallestCommons([1,5]);
    