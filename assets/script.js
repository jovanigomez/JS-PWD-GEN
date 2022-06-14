// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+"];
  var uppercaseChar = lowercaseChar.map(element => {
return element.toUpperCase();
});

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

 