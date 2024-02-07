window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
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
// create default values for calculator
function setupInitialValues() {

  document.getElementById("loan-amount").value = 350000; // $350,000
  document.getElementById("loan-years").value = 12; //  12 years
  document.getElementById("loan-rate").value = 3.89; //  3.89% interest rate

  update();
}

// UI values, calculate the monthly payment, and update the UI
function update() {
  const currentValues = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(currentValues);
  updateMonthly(monthly);
}

// Calculates the monthly payment and return it as a string with 2 decimal places
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const monthlyInterestRate = values.rate / 100 / 12;
  const numberOfPayments = values.years * 12;

  const monthlyPayment = 
    (principal * monthlyInterestRate) / 
    (1 - Math.pow((1 + monthlyInterestRate), -numberOfPayments));
  
  return monthlyPayment.toFixed(2);
}

// Updates the UI with the calculated monthly payment
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
