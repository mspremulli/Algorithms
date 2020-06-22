const countOnes = (n) => {
  let bin = n.toString(2),
      regex = bin.match(/1+/g),
      count = 0;
  regex.forEach(e => {
    count = e.length > count ? e.length : count;
  });

  console.log(count);
  
}

countOnes(26527)