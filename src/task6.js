var task6 = numericSequence; 
function numericSequence(length, minSquare) {
    var array = [];

    for (var i = 0; i < length; i++) {
        if (Math.pow(i, 2) >= minSquare) {
            array.push(i);
        }
    }

    return array.join(",");
}
