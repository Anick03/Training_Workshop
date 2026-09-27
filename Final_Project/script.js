// Grab the form and message elements
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from refreshing

  // Get values from the form
  const owner = document.getElementById("petOwner").value;
  const pet = document.getElementById("petName").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("appointmentDate").value;

  // Show a confirmation message
  message.textContent = `Thank you, ${owner}! Your appointment for ${pet} (${service}) is booked on ${date}.`;
  message.style.color = "green";

  // Clear the form fields
  form.reset();
});