function processData(input) {
  // input = input.split('\n');
  //build phonebook
  let phoneBook = [];
  for(let i=1;i<=parseInt(input[0]);i++){
    let temp = input[i].trim().split(' ');
    phoneBook.push({name:temp[0], number:temp[1]})
    
  }

  //search through phonebook
  for(let i = parseInt(input[0])+1; i<input.length;i++){
    let ans = phoneBook.find(obj => {
        return(obj.name === input[i])
    });
    if(ans === undefined){
      console.log('Not found')
    }
    else{
      console.log(ans.name+'='+ans.number);
    }
    
  }

} 

processData([3,
 ' sam 99912222',
  'tom 11122222',
  'harry 12299933',
  'sam',
  'edward',
  'harry'])