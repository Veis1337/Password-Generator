// Assignment code here

//create generatePassword function
function generatePassword() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}`~`"
  //Prompt the user upon button click for the password criteria
  let criteriaLength = confirm("Would you like to specify your own password length?");
  let criteriaUpper = confirm("Would you like to use Uppercase letters in your password?");   //  Lowercase, uppercase, numeric, and/or special characters?
  let criteriaLower = confirm("Would you like to use lowercase letters in your password?");
  let criteriaSpecial = confirm("Would you like to use special characters (!@# etc) in your password?");
    if (criteriaLength) {
    //  Password length 8 < 128
  let passwordLength = prompt("How many characters would you like in your password?", "Number between 8 and 128");
    if (passwordLength  > 7 && passwordLength < 129) {
      console.log(passwordLength, "--Thank you, that input is indeed within those parameters");
    } else {
      alert("Error: That value is not a # between 8 and 128");
    }
  } else {
    passwordLength = Math.floor(Math.random() * (128 - 8) + 8);
    console.log("User has not specified their own passwordLength, and so it will be ", passwordLength);
  }

  for (let i = 0; i <= password.Length; i++) {
    let passWord = Math.floor(Math.random() * chars.length);
    
  }
    //Validate the input and make sure at least one character type has been selected




  // let lowerCaseBoo = prompt("Would you like to use lowercase characters?")
  // let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  // let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // let specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}`~`"




  //Generate password
  //  Return outputed password to user


  return "Generated password will output here";
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