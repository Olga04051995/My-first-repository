'use strict';
let task4 = isNumberPalindromic;

function isNumberPalindromic (number) {
    if (number < 10) return 0;

    let result = 0,
        curentResult = 0,
        startIndex = 0,
        str = number.toString();

    while (startIndex < str.length) {

        let substr = str.slice(startIndex, str.length);

        for (let i = substr.length; i > 0; i--) {
            let slicedString = substr.slice(0, i);

            if (isPalindrome(slicedString)) {
                curentResult = parseInt(slicedString)
            }
            
            if (curentResult > result) {
                result = curentResult;
            }
        }

        startIndex++;
    }

    return result;
}


function isPalindrome(str) {
    if (str.length <= 1) {
        return false;
    }

    return str == str.split('').reverse().join('');
}
