const reverseString = function(string) {
    let reversed = [];
    for (let i = 0; i < string.length; i++) {
        reversed[i] = string[string.length-(i+1)];
    }
    return reversed.join('');
}
// Do not edit below this line
module.exports = reverseString;
