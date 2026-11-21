// Bootstrap validation is added to every form with the needs-validation class
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".needs-validation");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      // Stop submission if a field or pattern is not correct
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      // Displaying validation messages after this class is added
      form.classList.add("was-validated");
    });
  });
});