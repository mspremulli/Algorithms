function checkCashRegister(price, cash, cid) {
    let change = cash-price.toFixed(2);
    let cashOnHand=0;
    for(let i=0;i<cid.length;i++){
     cashOnHand = cashOnHand+cid[i][1];
    }
    cashOnHand=cashOnHand.toFixed(2);
   
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
   