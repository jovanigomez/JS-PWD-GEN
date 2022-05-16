// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";


function generatePassword() {
  
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = document.querySelector("#password");



  
  
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

