window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
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
  // const UIamount = document.getElementById("loan-amount").value;
  // const UIyears = document.getElementById("loan-years").value;
  // const UIrate = document.getElementById("loan-rate").value;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 200000,
    years: 15,
    rate: 3.5
  }

  const initialAmount = getCurrentUIValues().amount;
  initialAmount.value = values.amount;

  const initialYears = getCurrentUIValues().years;
  initialYears.value = values.years;

  const initialRate = getCurrentUIValues().rate;
  initialRate.value = values.rate;

  if (initialAmount > 0 && initialInterest > 0) {
    console.log(initialAmount);
    console.log(initialInterest);
    console.log(initialRate);
    update();
  } else {
    console.log("Some amounts are not greater than zero");
  }

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));

  console.log("updated monthly payment!");
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 100 / 12;
  let n = values.years * 12;

  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}