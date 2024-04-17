
const isAlpha = function(ch){
    return /^[A-Za-z0-9]$/.test(ch);
}

const palindromes = function (str) {
    if (str.length === 1) return true;

    let left = 0;
    let right = str.length - 1;

    while (left <= right){
        while (!isAlpha(str[left])) left++;
        while (!isAlpha(str[right])) right--;
        let leftChar = str[left].toLowerCase()
        let rightChar = str[right].toLowerCase()
        if (leftChar !== rightChar) return false;
        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
