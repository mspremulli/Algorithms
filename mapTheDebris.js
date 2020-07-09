function orbitalPeriod(arr) {
    let answer=[];
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
  
    for(let i = 0;i<arr.length;i++){
      let alt= arr[i].avgAlt+earthRadius;
  
      let op = Math.round(2*Math.PI * Math.sqrt(alt*alt*alt/GM));
      let item={
        name: arr[i].name,
        orbitalPeriod: op
      }
      
      answer.push(item);
      
      console.log(answer);
    }
  
    return answer;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  