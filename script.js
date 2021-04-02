 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
  
   passwordText.value = password;
   document.getElementById('password').textContent = passwordText;

 }

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 // begin my code

// lists of characters
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '"', '$', '%', '&', "'", "(", ")", "/"]
var totalChars = [];

// generate random character functions
function randomLower() {
  return lowerChars[Math.floor(Math.random() * lowerChars.length)].valueOf();
}

function randomUpper() {
  return upperChars[Math.floor(Math.random() * upperChars.length)].valueOf();
}

function randomNumber() {
  return numericChars[Math.floor(Math.random() * numericChars.length)].valueOf();
}

function randomSpecial() {
  return specialChars[Math.floor(Math.random() * specialChars.length)].valueOf();
}

 // generate password function defined
function generatePassword() {
  // get password length 
  var lengthPrompt = prompt('How many characters would you like your password to be?  You may choose any length between 8 and 128');
  // turn the string into a number
   var passLength = parseInt(lengthPrompt);
  //  check for inputs outside of range/scope
   if (passLength < 8 || passLength > 128 || isNaN(passLength)) { 
      alert('Please select a valid option');
      generatePassword();
      return;
  }
  console.log(passLength);
  
  // password criteria
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
  debugger;
  // decide which characters are selected and put them into function array
  if (lower === true) {
    totalChars.push(randomLower, );
  }

  if (upper === true) {
    totalChars.push(randomUpper, );
  }

  if (numeric === true) {
    totalChars.push(randomNumber, );
  }

  if (special === true) {
    totalChars.push(randomSpecial);
  }

//  begin generating password from selected criteria
  var i, text;
  for (i = 0, text = ''; i < passLength; i++) {
    var charRandom = Math.floor(Math.random() * totalChars.length);
    text += totalChars[charRandom]();
  }
  // reset the function array to nothing to accept new criteria on consecutive runs
  totalChars = [];

  // return the password 
  return text;
  
}


