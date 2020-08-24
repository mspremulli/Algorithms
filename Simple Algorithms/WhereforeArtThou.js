function whatIsInAName(collection, source) {
  let arr = [];
  collection.forEach(e=> {
      
    let keys = Object.keys(source);
    let values = Object.values(source);
    let testPassed = true;

    for(let i=0; i < keys.length && testPassed; i++){
        // console.log( values[i], e[keys[i]]);
      if(!(e.hasOwnProperty(keys[i]) && values[i] === e[keys[i]])){
          testPassed = false;
      }
    }  
      if (testPassed){arr.push(e)} 
  });
  console.log(arr);
  
  return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });