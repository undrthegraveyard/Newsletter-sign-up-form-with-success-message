document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-state p");
  const mainContainer = document.querySelector(".main-container");
  const successMessage = document.getElementById("success-message");
  const closeButton = document.getElementById("close-button");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("error");
      errorMessage.style.display = "block";
    } else {
      emailInput.classList.remove("error");
      errorMessage.style.display = "none";
      mainContainer.style.display = "none";
      successMessage.style.display = "block";
    }
  });

  closeButton.addEventListener("click", () =>{
    successMessage.style.display = "none";
    mainContainer.style.display = "block";
  })

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});