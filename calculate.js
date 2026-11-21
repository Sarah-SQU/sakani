// A calculator that estimates the cost of available laundry services at the dorm
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("calculatorForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Read the service price and number of loads from the form
    var price = Number(document.getElementById("service").value);
    var loads = Number(document.getElementById("loads").value);
    var result = document.getElementById("calcResult");

    // Checking user's input before calculating
    if (price <= 0 || loads < 1 || loads > 20 || !Number.isInteger(loads)) {
      result.classList.remove("d-none", "alert-success");
      result.classList.add("alert-danger");
      result.textContent = "Choose a service and enter a whole number from 1 to 20.";
    } else {
      // Multiplication calculates the cost before discount.
      var total = price * loads;
      var discount = 0;

      // A 10% discount is given for student if he books 5 loads or more
      if (loads >= 5) {
        discount = total * 0.10;
      }

      // Calculate the final cost after discount
      var finalCost = total - discount;
      result.classList.remove("d-none", "alert-danger");
      result.classList.add("alert-success");
      result.innerHTML = "Cost before discount: " + total.toFixed(3) +
        " OMR<br>Discount: " + discount.toFixed(3) +
        " OMR<br><strong>Final cost: " + finalCost.toFixed(3) + " OMR</strong>";
    }
  });

  // hide the result if the form is cleared
  form.addEventListener("reset", function () {
    var result = document.getElementById("calcResult");
    result.classList.add("d-none");
    result.classList.remove("alert-danger");
    result.classList.add("alert-success");
    result.textContent = "";
  });
});