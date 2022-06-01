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

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const previousInputText = parseFloat(depositInputText);
    const previousInputText = getInputValue('deposit-input');
    // get current deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;


    // 
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + previousInputText;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceAmount + previousInputText;
})
// get the withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const PreviousWithdrawAmount = parseFloat(withdrawInputText);
    const PreviousWithdrawAmount = getInputValue('withdraw-input');
    // // 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const PreviousWithdrawTotal = parseFloat(withdrawTotalText);
    const newWithdrawAmount = PreviousWithdrawTotal + PreviousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;

    // update balance before withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceAmount - PreviousWithdrawAmount;

})