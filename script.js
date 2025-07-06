function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.textContent = "Please fill all fields!";
    return false;
  }

  // Basic email validation
  if (!email.includes("@") || !email.includes(".")) {
    status.style.color = "red";
    status.textContent = "Please enter a valid email!";
    return false;
  }

  status.style.color = "green";
  status.textContent = "Message sent successfully!";
  
  // Simulate data send (In real case, use backend or form services)
  setTimeout(() => {
    document.getElementById("contactForm").reset();
    status.textContent = "";
  }, 3000);

  return false; // Prevent actual form submission
}