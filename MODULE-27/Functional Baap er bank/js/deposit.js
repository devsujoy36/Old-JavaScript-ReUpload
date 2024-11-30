document.getElementById('btn-deposit').addEventListener('click', function() {
  let newDepositAmount = getInputValueById('deposit-field');
  let previousDepositTotal = getTextElementValueById('deposit-total');
  let newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById('deposit-total', newDepositTotal);

  let previousBalanceTotal = getTextElementValueById('balance-total');
  let newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById('balance-total', newBalanceTotal);

})