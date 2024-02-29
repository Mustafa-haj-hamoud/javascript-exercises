const removeFromArray = function(inputArray) {
    if (!Array.isArray(arguments[0])) return undefined;
    let outputArray = inputArray;
    //skip the first element from the loop because it is the array
    for (let i = 1; i < arguments.length; i++){
        let elemToRemoveIndex;
        do {
            elemToRemoveIndex = linearSearch(inputArray,arguments[i]);
            if (elemToRemoveIndex === -1) continue;
            outputArray.splice(elemToRemoveIndex,1);
        }
        while (elemToRemoveIndex != -1)
    }
    return outputArray;
};

function linearSearch(arr,elemToFind){
    for (let index = 0; index < arr.length ; index++){
        if (arr[index] === elemToFind) return index;
    }
    return -1;
}

// Do not edit below this line
module.exports = removeFromArray;
