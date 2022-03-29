const repeatString = function(string, num) {
    let greeting = "";
    while (num > 0) {
        greeting += string;
        num--;
    }
    return greeting;
};
repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
