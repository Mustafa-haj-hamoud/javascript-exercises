const reverseString = function(string) {
    let output = "";
    for (let i = 1; i <= string.length; i++){
        let lastCharacter = string.length - i;
        output += string[lastCharacter];
    }
    return output;
}; 

// Do not edit below this line
module.exports = reverseString;
