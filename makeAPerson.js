var Person = function(firstAndLast) {

    let full = firstAndLast;
    
    this.getFullName = function() {
     // console.log(full.split(" ")[0] + " "+ full.split(" ")[1]);
     return full.split(" ")[0] + " "+ full.split(" ")[1];
    }
    this.getFirstName = function(){
     // console.log(full.split(" ")[0]);
      return full.split(" ")[0];
    }
     this.getLastName = function(){
      // console.log(full.split(" ")[1]);
      return full.split(" ")[1];
    }
   
    this.setFirstName = function(name) {
      
      full = name + " " + full.split(" ")[1];
      //console.log(full);
    };
    this.setLastName = function(name) {
      full = full.split(" ")[0] +" " +name;
      //console.log(full);
    }
    this.setFullName = function(name) {
      full = name.split(" ")[0] + " "+ name.split(" ")[1];
    };
  
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  
  
  
  