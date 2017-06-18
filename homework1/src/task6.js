'use strict'; 
let task6 = numericSequence; 
function numericSequence(length, minSquare) {
    let array = [],
    	i = 0;

    for ( i ; i < length; i++) {
        if (Math.pow(i, 2) >= minSquare) {
            array.push(i);
        }
    }

    return array.join(',');
}
