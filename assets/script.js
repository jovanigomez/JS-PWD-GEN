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

  var passwordlength = prompt("how long would yuo like your pass word to be? 8 or 128");
  var includelowercasecharacter = prompt("would you like lowercase?", "yes") == "yes"; 
  console.log(includelowercasechar);
  var includeuppercasechar = prompt("want some upper case?", "yes") == "yes";
  var includespecialchar = prompt("wanna sprinkle some speacial characters?", "yes") == "yes";
  var numericalChar = prompt("would you like some numbers too?","yes") == "yes";

  let password = "";
  
  
  
  

  

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = document.querySelector("#password");
  passwordText.value = password;
  
  }

}

// Add event listener to generate button

 generateBtn.addEventListener("click", generatePassword);

 