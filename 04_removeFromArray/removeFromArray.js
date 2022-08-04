const removeFromArray = function(arr, ...targets) {
    const newArr = [];
    let match = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < targets.length; j++) {
            if (arr[i] === targets[j]) {
                match = true;
            }
        }
        if (!match) {
            newArr.push(arr[i]);
        }
        match = false;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
