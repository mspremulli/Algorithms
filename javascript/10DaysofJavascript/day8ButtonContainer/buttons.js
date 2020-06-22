createButton = (btnObj) => {
  let btn = document.createElement('button');
  btn.innerText = btnObj.text;
  btn.className = btnObj.class;
  btn.onclick = btnObj.onclick;
  return btn;
}

const rotate = () => {
  let _ = btn1.innerHTML;
  btn1.innerHTML = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML;
  btn7.innerHTML = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML;
  btn9.innerHTML = btn6.innerHTML;
  btn6.innerHTML = btn3.innerHTML;
  btn3.innerHTML = btn2.innerHTML;
  btn2.innerHTML = _;
}


//create all the buttons
let btn1 = createButton({text:'1', class:'btn'}),
    btn2 = createButton({text:'2', class:'btn'}),
    btn3 = createButton({text:'3', class:'btn'}),
    btn4 = createButton({text:'4', class:'btn'}),
    btn5 = createButton({text:'5', class:'btn', onclick:rotate}),
    btn6 = createButton({text:'6', class:'btn'}),
    btn7 = createButton({text:'7', class:'btn'}),
    btn8 = createButton({text:'8', class:'btn'}),
    btn9 = createButton({text:'9', class:'btn'});
    
    

//create button div
let btns = document.createElement('div');
btns.className = 'btns';
btns.id = 'btns';

document.body.appendChild(btns);
document.getElementById('btns').appendChild(btn1);
document.getElementById('btns').appendChild(btn2);
document.getElementById('btns').appendChild(btn3);
document.getElementById('btns').appendChild(btn4);
document.getElementById('btns').appendChild(btn5);
document.getElementById('btns').appendChild(btn6);
document.getElementById('btns').appendChild(btn7);
document.getElementById('btns').appendChild(btn8);
document.getElementById('btns').appendChild(btn9);

