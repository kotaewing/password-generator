// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function defined
function generatePassword() {
  var length = prompt('How many characters would you like your password to be?  You may choose any length between 8 and 128');
  var charType = characterType();
}


function characterType() {
  var lower = confirm('Would you like lowercase characters? Choose OK for yes, or Cancel for no.')
  var upper = confirm('Would you like uppercase characters? Choose OK for yes, or Cancel for no.')
  var numeric = confirm('Would you like numeric characters? Choose OK for yes, or Cancel for no.')
  var special = confirm('Would you like special characters? Choose OK for yes, or Cancel for no.')
}