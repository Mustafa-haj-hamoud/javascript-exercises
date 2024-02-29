const sumAll = function(num1,num2) {
    // do some error handling first
    if (typeof num1 !== 'number') return "ERROR";
    if (typeof num2 !== 'number') return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    //find the smaller number and the greater number
    let greaterNum;
    let smallerNum;
    if (num1 > num2) {
        greaterNum = num1;
        smallerNum = num2;
    } else {
        greaterNum = num2;
        smallerNum = num1;
    }

    //add all the numbers between
    let sum = 0;
    for (let currentNum = smallerNum; currentNum <= greaterNum; currentNum++) {
        sum += currentNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
