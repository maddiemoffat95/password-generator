var charOptions = [
    {
        name: "0",
        characters: "abcdefghijklmnopqrstuvwxyz"
    },
    {
        name: "1",
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
        name: "2",
        characters: "0123456789"
    },
    {
        name: "3",
        characters: "!#$%&()[]{}.;:*-+/="
    }
]

var length = parseInt(
    prompt('How many characters would you like your password to contain?')
)
    if (length >= 8, length <= 128) {
        var confirmLength = window.confirm("Are you sure you want " + length + " characters in your password?");
    };
    
var indexInput = (
    prompt('Please indicate what you would like to be included in your password. Enter 1 for lower case letters. Enter 2 for upper case letters. Enter 3 for numbers. Enter 4 for special symbols. You can enter up to 4 numbers. Example : 124 Will include upper case letters, lower case letters, and symbols. ')
)

function generatePassword(lengthOfPassword, listIndices) {

    var password = [];
    var bigList = [];

    for (let listPos = 0; listPos < listIndices.length; listPos++) {

        var curList = charOptions[listIndices[listPos]].characters

        if (listPos == 0) { biglist = curList }

        else {
            bigList.push(curList)
        }
    }

    for (let index = 0; index < lengthOfPassword; index++) {
        password.push(
            bigList[
            Math.floor(Math.random() * bigList.length)]
        )
    }
}


var listIndices = indexParser(indexInput);

function indexParser(indexInput) {
    indexInput.length

    var listIndices = []


    for (let stringPos = 0; stringPos < indexInput.length; stringPos++) {

        var curInt = indexInput.charAt(stringPos) // returns string position

        curInt = parseInt(curInt)

        listIndices.push(curInt)
    }

    return (listIndices);
}


var newPassword = generatePassword(length);

console.log(newPassword);

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