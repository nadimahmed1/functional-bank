// function dubleIt(num) {
//     const result = num * 2
//     return result;
// }
// const first = dubleIt(5);
// const second = dubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear  deposit input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const previousInputText = parseFloat(depositInputText);

    // get current deposit

    /*   const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotal = parseFloat(depositTotalText);
      depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceAmount + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


})
// get the withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const PreviousWithdrawAmount = parseFloat(withdrawInputText);

    // // 
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     const PreviousWithdrawTotal = parseFloat(withdrawTotalText);
     const newWithdrawAmount = PreviousWithdrawTotal + WithdrawAmount;
      */


    // update balance before withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceAmount - WithdrawAmount; */
    const WithdrawAmount = getInputValue('withdraw-input');
    if (WithdrawAmount > 0) {
        updateTotalField('withdraw-total', WithdrawAmount);
        updateBalance(WithdrawAmount, false);
    }

})