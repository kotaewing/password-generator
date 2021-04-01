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

// password criteria
function characterType() {
  var lower = confirm('Would you like lowercase characters? Choose OK for yes, or Cancel for no.')
  // validate user selection
  if (lower === true) {
    alert('Awesome! Your password will contain lowercase characters.')
  } else {
    alert('You got it! Your password will not contain lowercase characters.')
  }
  console.log('lower is ' + lower);
  var upper = confirm('Would you like uppercase characters? Choose OK for yes, or Cancel for no.')
   // validate user selection
  if (upper === true) {
    alert('Awesome! Your password will contain uppercase characters.')
  } else {
    alert('You got it! Your password will not contain upppercase characters.')
  }
  console.log('upper is ' + upper);
  var numeric = confirm('Would you like numeric characters? Choose OK for yes, or Cancel for no.')
   // validate user selection
  if (numeric === true) {
    alert('Awesome! Your password will contain numeric characters.')
  } else {
    alert('You got it! Your password will not contain numeric characters.')
  }
  console.log('numeric is ' + numeric);
  var special = confirm('Would you like special characters? Choose OK for yes, or Cancel for no.')
   // validate user selection
  if (special === true) {
    alert('Awesome! Your password will contain special characters.')
  } else {
    alert('You got it! Your password will not contain special characters.')
  }
  console.log('special is ' + special);
  console.log("End of selections");
}


// generate password function defined
function generatePassword() {
  var passLength = prompt('How many characters would you like your password to be?  You may choose any length between 8 and 128');
  var charType = characterType();
  var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ['!', '"', '$', '%', '&', "'", "(", ")", "/"]
  
}
