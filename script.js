// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@$%^&*()abcdefjhijklmnopqrstuvwxyz";
  var password = "";
  var password = 8;
 return 'password';
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = document.querySelector("#password");



  
  
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

