'use strict';
function task4 (number) {
    let result = 0;

    try {
        preValidateTask4(number);
        result = isNumberPalindromic(number);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
}

function preValidateTask4 (number) {
    if (isNaN(number)) {
        throw new Error('Entered argument should be number type')
    } 
}

function isNumberPalindromic (number) {
    if (number < 10) return 0;

    let curentResult = 0,
        startIndex = 0,
        result = 0,
        str;

        str = number.toString();

    while (startIndex < str.length) {
        let substr = str.slice(startIndex, str.length);

        for (let i = substr.length; i > 0; i--) {
            let slicedString = substr.slice(0, i);

            if (isPalindrome(slicedString)) {
                curentResult = parseInt(slicedString);
            }
            
            if (curentResult > result) {
                result = curentResult;
            }
        }

        startIndex++;
    }

    return result;
}

function isPalindrome (str) {
    if (str.length <= 1) {
        return false;
    }

    return str == str.split('').reverse().join('');
}
