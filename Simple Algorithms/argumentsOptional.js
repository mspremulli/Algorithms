function addTogether(first,second){
   
    if(typeof(first) == 'number' && typeof(second) == 'number'){
      console.log(first +second)
      return first + second;
    }

    else if(second != undefined && typeof(second) != 'number'){
      console.log(undefined)
      return undefined
    }

    else if(typeof(first) != 'number'){
      console.log(undefined)
      return undefined;
    }
    else {
      return(second) => {
        if(typeof(second) == 'number'){
          console.log(first+ second)
          return(first + second)  
        }   
        else{
          return undefined
        }
      }
    }    

}



 addTogether(2,3);
 addTogether(2)(3);
 addTogether("http://bit.ly/IqT6zt");
 addTogether(2, "3");
 addTogether(2)([3]);
