//create generatePassword function
function generatePassword() {
  let upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let specialChars = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  let numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  //Prompt the user for the password criteria
  let criteriaLength = confirm("Would you like to specify your own password length?");

  if (criteriaLength) {
    //  Password length 8 < 128
    passwordLength = prompt("How many characters would you like in your password? Input will be rounded up to the nearest whole number.", "Number between 8 and 128");
    if (passwordLength > 7 && passwordLength < 129) {
      console.log(passwordLength, "--Thank you, that input is indeed within those parameters");
    } else {
      alert("Error: That value is not a # between 8 and 128");
      return;
    }
  }
  if (!criteriaLength) {
    passwordLength = Math.floor(Math.random() * (128 - 8) + 8);
    console.log("User has not specified their own passwordLength, and so it will be ", passwordLength);
  }
  //  Lowercase, uppercase, numeric, and/or special characters?
  let criteriaUpper = confirm("Would you like to use Uppercase letters in your password?");
  let criteriaLower = confirm("Would you like to use lowercase letters in your password?");
  let criteriaSpecial = confirm("Would you like to use special characters (!@# etc) in your password?");
  let criteriaNumbers = confirm("Would you like to use numbers in your password?");
  let passwordRange = [];
  let passwordResult = [];
  // Building range of characters to use into an array
  if (criteriaUpper) {
    passwordResult = passwordResult.concat(upperChars);
    console.log("Your randomized password may contain uppercase characters");
  }
  if (criteriaLower) {
    passwordResult = passwordResult.concat(lowerChars);
    console.log("Your randomized password may contain lowercase characters");
  }
  if (criteriaSpecial) {
    passwordResult = passwordResult.concat(specialChars);
    console.log("Your randomized password may contain special characters");
  }
  if (criteriaNumbers) {
    passwordResult = passwordResult.concat(numChars);
    console.log("Your randomized password may contain numbers");
  }
  // Confirmation of which criteria NOT chosen
  if (!criteriaUpper) {
    console.log("Your randomized password will not contain uppercase characters");
  }
  if (!criteriaLower) {
    console.log("Your randomized password will not contain lowercase characters");
  }
  if (!criteriaSpecial) {
    console.log("Your randomized password will not contain special characters");
  }
  if (!criteriaNumbers) {
    console.log("Your randomized password will not contain numbers");
  }
  //Validate the input and make sure at least one character type has been selected
  if (!criteriaLength && !criteriaLower && !criteriaNumbers && !criteriaSpecial) {
    alert("No options selected to generate you a password, please try again and 'ok' at least one criteria.")
    return
  }

  for (let i = 0; i < passwordLength; i++) {
    passwordRange.push(passwordResult[Math.floor(Math.random() * passwordResult.length)]);
  }

  return passwordRange.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/ 