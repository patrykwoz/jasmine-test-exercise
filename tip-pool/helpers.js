
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}
  
// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects a table row elements and an object storing elements to be removed, appends a newly created button element
function appendDeleteBtn(tr, objRem){
  let newBtn =document.createElement('td');
  newBtn.innerText = 'X';
  newBtn.classList.add('deleteBtn');

  newBtn.addEventListener('click', function(evt){
    let delId = evt.target.parentElement.id;
    evt.target.parentElement.remove();
    delete objRem[delId];



  });

  tr.append(newBtn);




}