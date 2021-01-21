const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let returnVal = "";
    for (let i=0; i < num; i++) {
        returnVal += str;
    }
    return returnVal;
}

module.exports = repeatString
