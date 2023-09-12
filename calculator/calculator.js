window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update(e);
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  const amount = document.getElementById("loan-amount").value = 100000;
  const years = document.getElementById("loan-years").value = 5;
  const rate = document.getElementById("loan-rate").value = 0.25;

  const monthly = calculateMonthlyPayment({amount, years, rate});

  updateMonthly(`$${monthly}`);

}

// Get the current values from the UI
// Update the monthly payment
function update(e) {
  const form = e.target;
  const amount = form.querySelector('#loan-amount').value;
  const years = form.querySelector('#loan-years').value;
  const rate = form.querySelector('#loan-rate').value;
  const monthly = calculateMonthlyPayment({amount, years, rate});


  updateMonthly(`$${monthly}`);



}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let monthlyPayment = 0;
  monthlyPayment = (values.amount * (values.rate/12))/(1-Math.pow((1+(values.rate/12)),-(values.years*12)));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.querySelector('#monthly-payment');
  monthlyPaymentUI.innerHTML = monthly;
}
