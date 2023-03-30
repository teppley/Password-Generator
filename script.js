//Variables for password
var characterLength = 8;
var choiceArr = [];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Console will return true or false, hopefully..
function writePassword() {
  var correctPrompts = getPrompts();
  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }
}

//Generate password
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

//Prompts for the user
function getPrompts() {
  function criteria() {
    var zeroCheck = false

    if (confirm("Would you like lowercase letters in your password?!")) {
      choiceArr = choiceArr.concat(lowercase);
      zeroCheck = true
    }

    if (confirm("Would you like uppercase letters in your password?!")) {
      choiceArr = choiceArr.concat(uppercase);
      zeroCheck = true
    }

    if (confirm("Would you like numbers in your password?!")) {
      choiceArr = choiceArr.concat(number);
      zeroCheck = true
    }
    if (confirm("Would you like special characters in your password?!")) {
      choiceArr = choiceArr.concat(specialChar);
      zeroCheck = true
    }
    if (zeroCheck == false) {
      alert("That's too easy, try again.. (:")
      return criteria();
    }
  }
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password?(8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again");
    return false;
  }
  criteria();
  return true;
}

generateBtn.addEventListener("click", writePassword);


//Pseudo-Code:

// You will need a password length from prompt at least 8, and not more than 128 characters - how to turn a string type number into a number type?
      // Variable to store password length
      // Validation that correct number is chosen - user should not be allowed to choose 7 characters
    // You will need user to choose character types - what type of built in prompt returns a boolean value?
      // Variable to store all character types chosen
      // logic to verify at least one character type is chosen
      // Use logic to assign character types based on boolean value returned
  // Math.random will need to be used -- research Math object and how to have random return an integer (hint: needed for index). (hint: .length method to be used to determine number of random choices)

//Prompt the user for the password criteria
    //  -Password length 8 < 128
    //   -lowercase, uppercase, numbers, special characters?!
// Validate the input
// Generate password based on criteria 
// Display password on the page