//making a random pssword generator

//must make variables for each thing in the password. ie a, A, 1, !

//must use window.alert window.prompt window.?

//in html,,,,, id("password") will hold the generated password
//,,,, buutton with id="generate" will run the function writePassword()
// variable that connects the html button


//What do i need a slot of info for.:
// -a space for the password to be written on the webpage
//  -a space for the button in cardfooter in .password to connect to the functions
//      -addEventListener("");
//      -variable.textContent = "";
// -a space for the window to ask questions...ex: window.prompt()... such as:
//      -password length
//      -characters to choose from: such as a , A , 1 , !
//      -connecting 

//variables for each possible thing to include in the password
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

let possibleChar = []

//let genPassword = document.getElementById("password")


function pickLowercase(arg) {
    if (arg == true) {
        for (let i = 0; i < lowerCase.length; i++) {
            possibleChar.push(lowerCase[i])
        }
    }
}

function pickUppercase(arg) {
    if (arg == true) {
        for (let i = 0; i < upperCase.length; i++) {
            possibleChar.push(upperCase[i])
        }
    }
}

function pickNumber(arg) {
    if (arg == true) {
        for (let i = 0; i < numbers.length; i++) {
            possibleChar.push(numbers[i])
        }   
    }
}

function pickSpecial(arg) {
    if (arg == true) {
        for (let i = 0; i < specialChar.length; i++) {
            possibleChar.push(specialChar[i])
        }   
    }
}
//+= possibleChar[Math.floor(Math.random() * possibleChar.length)]
function generatePassword(arg) {
    
    let finalPassword = [];
    
    for (let i = 0; i < arg; i++) {
        let randomIndex = Math.floor(Math.random() * possibleChar.length)
       let randomChar = possibleChar[randomIndex]
       finalPassword.push(randomChar)
       console.log(finalPassword)
    } console.log(finalPassword)
    return finalPassword.join("")
};

//var passwordText = document.querySelector("#password");
//passwordText.value = password;

function writePassword() {
    let passwordText = document.querySelector("#password");
    let askLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));
    if (askLength <= 8 || askLength >= 128) { // its accepting any number
            window.alert("your password must be between 8 and 128 characters."); //not coming up at all
            writePassword()
    } if (askLength == null) {
        window.prompt("please enter a password length.");
        writePassword()
    }
        //go to the next function to begin choosing characters 
        let pickLower = confirm("Will your password contain a lowercase letter?");
        let pickUpper = confirm("Will your password contain an uppercase letter?");
        let pickNum = confirm("Will your password contain a number?");
        let pickSpec = confirm("Will your password contain a special character?");
    
        pickLowercase(pickLower)
        pickUppercase(pickUpper)
        pickNumber(pickNum)
        pickSpecial(pickSpec)


    
    let finalResults = generatePassword(askLength)
    passwordText.textContent = finalResults
}
//////
// addEventListener()('s) here 
