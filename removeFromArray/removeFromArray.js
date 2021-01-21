const removeFromArray = function() {
let arr = arguments[0];
for (let i = 1; i < arguments.length; i++){
    let position = arr.indexOf(arguments[i]);
    if (position >= 0) {
        arr.splice(position, 1);
    }
}
return arr;
}

module.exports = removeFromArray
