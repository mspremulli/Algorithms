function riddle(arr) {
  let minValueDistance = [];
  //push initial values in array of objects
  arr.forEach(number => {
    minValueDistance.push({value: number, distance: -1})
  });
  //count distances and push into array of objects
  minValueDistance.forEach((item, index) => {
    let i = index,
        j = index;
    //count to the right
    while(item.value <= arr[i]){
      item.distance++;
      i++;
    }
    //count to the left
    while(item.value <= arr[j]){
      item.distance++;
      j--;
    }
  });
  // console.log(minValueDistance);
  //transfer object to a hash table
  let hashTable = [];
  minValueDistance.forEach(item => {
    hashTable[item.distance] = !hashTable[item.distance] ? item.value : Math.max(hashTable[item.distance],item.value);
  });
  //loop through window and add update the hashtable value until its a full array
  for(let i = arr.length; i > 0  ; i--){
    if(!hashTable[i] || hashTable[i] < hashTable[i + 1]) hashTable[i] = hashTable[i + 1];
  }
  hashTable.shift();
  return hashTable;
}

console.log(riddle([3, 5, 4, 7, 6, 2]));
console.log(riddle([6,3,5,1,12]));
console.log(riddle([789168277,694294362,532144299,20472621,316665904,59654039,685958445,925819184,371690486,285650353,522515445,624800694,396417773,467681822,964079876,355847868,424895284,50621903,728094833,535436067,221600465,832169804,641711594,518285605,235027997,904664230,223080251,337085579,5125280,448775176,831453463,550142629,822686012,555190916,911857735,144603739,751265137,274554418,450666269,984349810,716998518,949717950,313190920,600769443,140712186,218387168,416515873,194487510,149671312,241556542,575727819,873823206]));