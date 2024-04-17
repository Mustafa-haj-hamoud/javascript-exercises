const fibonacci = function(thElement) {
    thElement = Number(thElement);
    if (thElement < 0) return "OOPS";
    if (thElement === 0) return 0;
    if (thElement === 1) return 1;
    
    let num1 = 1;  // 1 number before the current step
    let num2 = 0;  // 2 numbers before the current step
    let currentNum = num1 + num2;
    for (let currentStep = 2; currentStep<=thElement; currentStep++){
        currentNum = num1 + num2; // sum the 2 previous numbers and keep a record
        num2 = num1;    //discard the last number because we dont need it anymore
        num1 = currentNum;  //update the previous number, the next loop iteration will increase the current step
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
