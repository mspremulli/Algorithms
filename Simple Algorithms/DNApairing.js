function pairElement(str) {
  let answer = str.split('').map(e =>{
    switch(e){
      case "A": return [e,'T'];
      case "T": return [e,'A'];
      case "G": return [e,'C'];
      default: return [e,'G'];
    }
  });
  return answer;
}

console.log(pairElement("GCG"));