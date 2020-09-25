var charOptions = [
    {
        name: "0",
        characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    },
    {
        name: "1",
        characters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    },
    {
        name: "2",
        characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    {
        name: "3",
        characters: ['!', '#', '$', '%', '&', '(', ')', '[', ']', '{', '}', '.', ';', ':', '*', '-', '+', '/', '=']
    }
];


function generatePassword () {
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    )
    if (length >= 8, length <= 128) {
        var confirmLength = window.confirm("Are you sure you want " + length + " characters in your password?");
    };

    var indexInput = (
        prompt('Please indicate what you would like to be included in your password . \n Enter 1 for lower case letters. \n Enter 2 for upper case letters. \n Enter 3 for numbers. \n Enter 4 for special symbols. \n You can enter up to 4 numbers. \n Example : 124 Will include upper case letters, lower case letters, and symbols. ')
    );

    var listIndices = indexParser(indexInput);
    var password = [];
    var bigList = [];

    for (let listPos = 0; listPos < listIndices.length; listPos++) {

        console.log(listPos);
        console.log(listIndices.length);


        var curList = charOptions[listIndices[listPos]].characters

        console.log(curList);

        if (listPos == 0) { bigList = curList }

        else {
            Array.prototype.push.apply(bigList, curList);
        }
        console.log(bigList);
    };

    for (let index = 0; index < length; index++) {
        password.push(
            bigList[
            Math.floor(Math.random() * bigList.length)]
        )
    };
    return (password);
};

function indexParser(indexInput) {

    var listIndices = []

    for (let stringPos = 0; stringPos < indexInput.length; stringPos++) {

        var curInt = indexInput.charAt(stringPos) // returns string position

        curInt = parseInt(curInt) - 1

        listIndices.push(curInt)
    };
    console.log(listIndices);

    return (listIndices);
};

// Get references to the #generate element 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password);

    var passwordText = document.querySelector("#password");

    password = password.join('');
    passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);