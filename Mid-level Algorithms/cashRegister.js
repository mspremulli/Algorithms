function checkCashRegister(price, cash, cashInDrawer) {
  let change = Number.parseFloat(cash-price);
  let totalCash = 0;
  let cashOnHand = [];
  let cashInBox = [
    {denomination: 'PENNY', amount: 0.01 },
    {denomination: 'NICKEL', amount: 0.05 },
    {denomination: 'DIME', amount: 0.1 },
    {denomination: 'QUARTER', amount: 0.25 },
    {denomination: 'ONE', amount: 1 },
    {denomination: 'FIVE', amount: 5 },
    {denomination: 'TEN', amount: 10 },
    {denomination: 'TWENTY', amount: 20 },
    {denomination: 'HUNDRED', amount: 100 },
  ]
  
  // get the number of each denomination in the cash drawer
  for(let i = 0; i < cashInDrawer.length; i++){
   cashOnHand.push(Math.round(cashInDrawer[i][1] / cashInBox[i].amount));
   totalCash = totalCash + cashInDrawer[i][1];
  }
  

  //initialize the returned object
  let obj={
    status:'',
    change:[]
  }

  // console.log(totalCash,change)
  if(change==totalCash){
    obj.status ='CLOSED';
    obj.change = cashInDrawer;
  }

  else if (change > Number.parseInt(totalCash)){
    obj.status = 'INSUFFICIENT_FUNDS';
  }
  
  else{
    obj.status = 'OPEN';
    let i = cashInBox.length-1;
    let changeRecive = [0,0,0,0,0,0,0,0,0];
     while(i >= 0){
       while(change >= cashInBox[i].amount && cashOnHand[i] > 0){
        cashOnHand[i]--;
        change = change - cashInBox[i].amount;
        changeRecive[i]++;
        change = Math.round(change * 100) / 100;
         //console.log(cashInBox[i],cashOnHand[i],changeRecive[i],change)
       }
       if(changeRecive[i] > 0){
        obj.change.push([cashInBox[i].denomination, changeRecive[i] * cashInBox[i].amount]);
       }
      //console.log(cashInBox[i].denom,cashOnHand[i])

       i--;
     }
     if(change !== 0){
      obj.status = 'INSUFFICIENT_FUNDS';
      obj.change = [];
     }
  }
 
 
  console.log(obj);
  return obj;
}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])