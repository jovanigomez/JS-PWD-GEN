// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";

var numericalChar = "01234567890";

var specialChar = "!@#$%^&*()_+";

function generatePassword() {

  var password = "";
  var passwordCharacters = "";
  
  var passwordLength = prompt("8 characters")
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    return "";
  }

  if (passwordLength > 128) {
    return "";
  }
  
  

  

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = document.querySelector("#password"); 
  
  }

}

// Add event listener to generate button

 generateBtn.addEventListener("click", generatePassword);

 