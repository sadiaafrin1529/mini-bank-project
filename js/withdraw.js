// step-1

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawFieldString=withdrawField.value ;
    const newWithdrawField=parseFloat(newWithdrawFieldString);
    //   step-7
    withdrawField.value='';


    if(isNaN(newWithdrawField)){
        alert('please provide a valid number')
        return;
    }
    // step-3
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
//   step-4
    const currentWithdrawTotal=previousWithdrawTotal+newWithdrawField;
    withdrawTotalElement.innerText=currentWithdrawTotal;
//   step-5
    const withdrawBalanceTotal=document.getElementById('balance-total');
    const previousWithdrawBalanceTotalString=withdrawBalanceTotal.innerText;
    const previousWithdrawBalanceTotal=parseFloat(previousWithdrawBalanceTotalString);
    if(newWithdrawField>previousWithdrawBalanceTotal){
        alert("you don't have that much money")
        return;
    }
   //   step-6
    const 
    currentWithdrawBalanceTotal=previousWithdrawBalanceTotal-newWithdrawField;
    withdrawBalanceTotal.innerText=currentWithdrawBalanceTotal;
})