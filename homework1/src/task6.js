'use strict'; 
function task6 (length, minSquare) {
    let result = 0;

    try{
        preValidateTask6(length, minSquare);
        result = numericSequence(length, minSquare);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
} 

function preValidateTask6 (length, minSquare) {
	if (isNaN(length) || isNaN(minSquare)) {
        throw new Error ('Entered argument should be number type')
    } 
}

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
