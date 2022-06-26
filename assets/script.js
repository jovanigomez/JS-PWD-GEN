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

  var passwordlength = prompt("how long would you like your password to be 8 or 128?", "yes") == "yes";
  var includelowercasecharacter = prompt("would you like lowercase?", "yes") == "yes"; 
  console.log(includelowercasecharacter);
  var includeuppercasecharacters = prompt("want some uppercase?", "yes") == "yes";
  var includespeacialcharacters = prompt("wanna sprinkle some speacial characters?", "yes") == "yes";
  var includenumericalcharacters = prompt("would you like some numbers too?","yes") == "yes";

  let password = "";
  
 console.log(uppercaseCharacters);
  
  while (password.length <= passwordlength) {
    if (includelowercasecharacter) {
    if (password,length == passwordlength) break;
   password += lowercaseCharacters[Math.floor(Math.random() * lowercaseChar.length)];
    }
    if (includespeacialcharacters) {
      if (password.length == passwordlength) break;
      password += specialCharacters[Math.floor(Math.random() * specialChar.length)];
    }
    if (includenumericalcharacters) {
      if (password.length == passwordlength) break;
      password += numericalCharacters[Math.floor(Math.random() * numericalChar.length)];
    }
    if (includeuppercasecharacters) {
      if (password.length == passwordlength) break;
      password += uppercaseCharacters[Math.floor(Math.random() * uppercaseChar.length)];
    }
  }
  
  const shuffled = password.split('').sort(function() {return 0.5-Math.random()}).join('');
  return shuffled;
  
}
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  //var password = document.querySelector("#password");
  passwordText.value = password;
  
}


  


// Add event listener to generate button

 generateBtn.addEventListener("click", generatePassword);

 