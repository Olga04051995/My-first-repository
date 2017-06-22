'use strict'; 
function task1 (length, height, char) {
    let result = 0;

    try{
        preValidateTask1(length, height, char);
        result = createChessboard(length, height, char);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
}

function preValidateTask1 (length, height, char) {
    if (isNaN(length) || isNaN(height) ||  typeof char !== 'string') {
        throw new Error ('Entered params length and height should be number types and char should be string ')
    }
}

function createChessboard (length, height, char) {
    let result = '';

    length = length * 2 - 1;

    for (let i = 0; i < height; i++) {  
        for (let j = 0; j < length; j++){
            if (i % 2 === j % 2) {
                result += char;
            } else {
                result += ' ';
            }               
        }
        result +='\n';
    }

    return result;
}

