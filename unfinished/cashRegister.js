function checkCashRegister(price, cash, cid) {
    let change = cash-price.toFixed(2);
    let cashOnHand = [];
    let cashInBox = [
      {denom:'PENNY', amount: 0.01 },
      {denom:'NICKEL', amount: 0.05 },
      {denom:'DIME', amount: 0.1 },
      {denom:'QUARTER', amount: 0.25 },
      {denom:'DOLLAR', amount: 1 },
      {denom:'FIVE', amount: 5 },
      {denom:'TEN', amount: 10 },
      {denom:'TWENTY', amount: 20 },
      {denom:'HUNDRED', amount: 100 },
    ]
    
    // get the number of each denomination in the cash drawer
    for(let i=0;i<cid.length;i++){
     cashOnHand.push(Math.round(cid[i][1]/cashInBox[i].amount));
    }
    console.log(cashOnHand);
   
    //initialize the returned object
    let obj={
      status:'',
      change:[]
    }
   
    if (change < cashOnHand){
      obj.status = 'INSUFFICIENT_FUNDS';
    }
    else if(change==cashOnHand){
      obj.status ='CLOSED';
      obj.change=cid;
    }
    else{
      obj.status ='OPEN';
   
   
   
  
      
    }
   
   
    console.log(change,obj);
    return obj;
  }
   
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   