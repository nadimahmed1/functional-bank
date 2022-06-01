// function dubleIt(num) {
//     const result = num * 2
//     return result;
// }
// const first = dubleIt(5);
// const second = dubleIt(7);

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const previousInputText = parseFloat(depositInputText);
    // clear  deposit input field
    depositInput.value = '';
    return previousInputText;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const previousInputText = parseFloat(depositInputText);
    const previousInputText = getInputValue();
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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const PreviousWithdrawAmount = parseFloat(withdrawInputText);
    // 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const PreviousWithdrawTotal = parseFloat(withdrawTotalText);
    const newWithdrawAmount = PreviousWithdrawTotal + PreviousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;
    // clear withdraw input field
    withdrawInput.value = '';
    // update balance before withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceAmount - PreviousWithdrawAmount;

})