//print first 10 multiple of an integer
const print10Multiples = (n) => {

  for(let i = 0; i < 10; i++) {
    console.log(`${n} x ${i+1} = ${n * (i+1)}`);
  }
}

print10Multiples(2);
