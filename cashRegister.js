function checkCashRegister(price, cash, cid) {
  let change = Number.parseFloat(cash-price);
  let totalCash=0;
  let cashOnHand = [];
  let cashInBox = [
    {denom:'PENNY', amount: 0.01 },
    {denom:'NICKEL', amount: 0.05 },
    {denom:'DIME', amount: 0.1 },
    {denom:'QUARTER', amount: 0.25 },
    {denom:'ONE', amount: 1 },
    {denom:'FIVE', amount: 5 },
    {denom:'TEN', amount: 10 },
    {denom:'TWENTY', amount: 20 },
    {denom:'HUNDRED', amount: 100 },
  ]
  
  // get the number of each denomination in the cash drawer
  for(let i=0;i<cid.length;i++){
   cashOnHand.push(Math.round(cid[i][1]/cashInBox[i].amount));
   totalCash = totalCash + cid[i][1];
  }
  

  //initialize the returned object
  let obj={
    status:'',
    change:[]
  }

  // console.log(totalCash,change)
if(change==totalCash){
    obj.status ='CLOSED';
    obj.change=cid;
  }

  else if (change > Number.parseInt(totalCash)){
    obj.status = 'INSUFFICIENT_FUNDS';
  }
  
  else{
    obj.status ='OPEN';
    let i=cashInBox.length-1;
    let changeRecive=[0,0,0,0,0,0,0,0,0];
     while(i>=0){
      
       while(change >= cashInBox[i].amount && cashOnHand[i] > 0){
      
        cashOnHand[i]--;
        change = change - cashInBox[i].amount;
        changeRecive[i]++;
        change =Math.round(change*100)/100;
         //console.log(cashInBox[i],cashOnHand[i],changeRecive[i],change)
       }
      
       if(changeRecive[i]>0){
        obj.change.push([cashInBox[i].denom,changeRecive[i]*cashInBox[i].amount]);
       }
      //  console.log(cashInBox[i].denom,cashOnHand[i])

       i--;
     }
     if(change!=0){
      obj.status = 'INSUFFICIENT_FUNDS';
      obj.change=[];
     }
  }
 
 
  console.log(obj);
  return obj;
}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])