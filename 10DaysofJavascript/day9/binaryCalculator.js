let display = '';

//creates a new button
createButton = (btnObj) => {
  let btn = document.createElement('button');
  btn.innerText = btnObj.text;
  btn.className = btnObj.class;
  btn.onclick = btnObj.onclick;
  return btn;
}

//create button div
let btns = document.createElement('div');
btns.className = 'btns';
btns.id = 'btns';

//create displaybox
let res = document.createElement('div');
res.id = 'res';

//create buttons 
let btn1 = createButton({text:'1', class:'btnNum button', onclick:() => addToDisplay('1')});
let btn0 = createButton({text:'0', class:'btnNum button', onclick:() => addToDisplay('0')});
let btnClear = createButton({text:'C', class:'btnSym button', onclick:() => clearDisplay()});
let btnEquals = createButton({text:'=', class:'btnSym button', onclick:() => evaluate()});
let btnPlus = createButton({text:'+', class:'btnOperation button', onclick:() => addToDisplay('+')});
let btnMinus = createButton({text:'-', class:'btnOperation button', onclick:() => addToDisplay('-')});
let btnMult = createButton({text:'*', class:'btnOperation button', onclick:() => addToDisplay('*')});
let btnDivide = createButton({text:'/', class:'btnOperation button', onclick:() => addToDisplay('/')});

//append buttons to DOM
document.body.appendChild(res);
document.body.appendChild(btns);
document.getElementById('btns').appendChild(btn0);
document.getElementById('btns').appendChild(btn1);
document.getElementById('btns').appendChild(btnClear);
document.getElementById('btns').appendChild(btnEquals);
document.getElementById('btns').appendChild(btnPlus);
document.getElementById('btns').appendChild(btnMinus);
document.getElementById('btns').appendChild(btnMult);
document.getElementById('btns').appendChild(btnDivide);


addToDisplay = (text) => {
  display += text;
  res.innerHTML = display;
}


clearDisplay = () => {
  display = '';
  res.innerHTML = display;
}


evaluate = () => {
  let operators = display.split(/\d/).filter(e => e !== '');
  let nums = display.split(/[^0-9]/);
  console.log(operators, nums);

  //should always have 1 more num than operator
  //we'll ignore additional operands
  let answer = doMath(nums[0], nums[1], operators[0]);
  let i = 1;
  while(i < operators.length){
    answer = doMath(answer, nums[i + 1], operators[i])
    i++;
  }

  //update the display
  display = answer;
  res.innerHTML = display;
}

//returns a string of the value of 2 evaluated numbers
doMath = (a, b, symbol) => {
  switch(symbol){
    case '+':
      return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    case'-':
      return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
    case'*':
      return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
    case'/':
      return Math.round(parseInt(a, 2) / parseInt(b, 2)).toString(2);
    default:
      console.error('invalid symbol');
      return 0;
  }
}