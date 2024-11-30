document.getElementById('btn-withdrow').addEventListener('click', function() {
  let newWithdrowAmount = getInputValueById('withdrow-field');
  let previousWithdrowTotal = getTextElementValueById('withdrow-total');
  let newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
  setTextElementValueById('withdrow-total', newWithdrowTotal);

  let previousBalanceTotal = getTextElementValueById('balance-total');
  let newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
  setTextElementValueById('balance-total', newBalanceTotal);

})