const findTheOldest = function(arr) {
    return arr.sort( (person1,person2) => {
        if (!person1.yearOfDeath) person1.yearOfDeath = getCurrentYear();
        if (!person2.yearOfDeath) person2.yearOfDeath = getCurrentYear();
        let person1age = person1.yearOfDeath - person1.yearOfBirth;
        let person2age = person2.yearOfDeath - person2.yearOfBirth;
        return (person2age - person1age);
    })[0];
};

function getCurrentYear(){
    let d = new Date().getFullYear();
    return d;
}

// Do not edit below this line
module.exports = findTheOldest;
