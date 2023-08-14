document.addEventListener("DOMContentLoaded", function () {
  // State variable to track if the form is shown or hidden
  let showForm = false;

  // Get the elements
  const subscribeBtn = document.getElementById("subscribeBtn");
  const formContainer = document.getElementById("formContainer");
  const subscriptionForm = document.getElementById("subscriptionForm");
  const successAlert = document.getElementById("successAlert");
  // const okBtn = document.getElementById("okBtn");

  // Function to toggle the visibility of the form and the subscribe button
  function toggleForm() {
    showForm = !showForm;
    formContainer.style.display = showForm ? "block" : "none";
    subscribeBtn.style.display = showForm ? "none" : "block";
    successAlert.style.display = "none";
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Hide the form and show the success message
    formContainer.style.display = "none";
    successAlert.style.display = "block";
  }

  // Function to handle the "OK" button click in the success message
  function handleOkBtnClick() {
    // Show the subscribe button again and hide the success message
    subscribeBtn.style.display = "block";
    successAlert.style.display = "none";
  }

  // Event listener for the "Subscribe" button
  subscribeBtn.addEventListener("click", toggleForm);

  // Event listener for form submission
  subscriptionForm.addEventListener("submit", handleSubmit);

  // Event listener for the "OK" button in the success message
  okBtn.addEventListener("click", handleOkBtnClick);
});
