// Get DOM elements
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy");

// Character sets
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|<>?/";

// Generate password
function generatePassword() {
  const length = +lengthInput.value;
  let characters = "";

  if (uppercaseCheckbox.checked) characters += upper;
  if (lowercaseCheckbox.checked) characters += lower;
  if (numbersCheckbox.checked) characters += numbers;
  if (symbolsCheckbox.checked) characters += symbols;

  if (characters === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordField.value = password;
}

// Copy to clipboard
function copyPassword() {
  if (!passwordField.value) return;
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
