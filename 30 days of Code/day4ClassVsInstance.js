
function Person(initialAge){
  // Add some more code to run some checks on initialAge
  
   if(initialAge > 0){
       age = initialAge
   } 
   else{
       age = 0
       console.log("Age is not valid, setting age to 0.");
   }
      
   
this.amIOld = function(){
 // Do some computations in here and print out the correct statement to the console
 let response = "You are old.";
 if(age < 13) response =  "You are young."
 if(age < 18 && age >=13) response = "You are a teenager."

  
  console.log(response);
};
 this.yearPasses = function(){
  // Increment the age of the person in here
 age++
 };
}