// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var uppercaseCharacters = lowercaseCharacters.map(element => {
return element.toUpperCase();
});

  var passwordlength = prompt("how long would you like your password to be 8 or 128?");
  var includelowercasecharacter = prompt("would you like lowercase?", "yes") == "yes"; 
  console.log(includelowercasecharacter);
  var includeuppercasecharacters = prompt("want some uppercase?", "yes") == "yes";
  //console.log(includeuppercasecharacters);
  var includespeacialcharacters = prompt("wanna sprinkle some speacial characters?", "yes") == "yes";
  //console.log(includespeacialcharacters);
  var includenumericalcharacters = prompt("would you like some numbers too?","yes") == "yes";
  //console.log(includenumericalcharacters);

  let password = "";
  
 
 
 
 

  while (password.length <= passwordlength) {
    if (includelowercasecharacter) {
    if (password.length == passwordlength) break;
   password += lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    if (includespeacialcharacters) {
      if (password.length == passwordlength) break;
      password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    if (includenumericalcharacters) {
      if (password.length == passwordlength) break;
      password += numericalCharacters[Math.floor(Math.random() * numericalCharacters.length)];
    }
    if (includeuppercasecharacters) {
      if (password.length == passwordlength) break;
      password += uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
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

 generateBtn.addEventListener("click", writePassword);

 