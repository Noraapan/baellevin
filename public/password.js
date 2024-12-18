// public/js/password.js

const correctPassword = "eksamen";  // The password you want to set

// Prompt user for the password
const userPassword = prompt("Enter the password to access the website:");

// Check if the entered password is correct
if (userPassword !== correctPassword) {
  document.body.innerHTML = "<h1>Incorrect password!</h1>"; // Display error if the password is wrong
} else {
  // Allow access if the password is correct
  document.body.style.display = "block"; // This ensures the content is shown once the password is correct
}
