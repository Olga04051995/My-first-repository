var task4 = isNumberPalindromic; 
function isNumberPalindromic(number) {
    if (number < 10) return 0;
        var result = 0;
        var curentResult = 0;
        var startIndex = 0,
        str = number.toString();

    while (startIndex < str.length){

        var substr = str.slice(startIndex, str.length);

        for (var i = substr.length; i > 0; i--) {
            var slicedString = substr.slice(0,i);
            if (isPalindrome(slicedString)) { curentResult = parseInt(slicedString)};
            if(curentResult > result) {
                result = curentResult;
            }
        }

        startIndex++;
    }

    return result;
}


function isPalindrome(str) {
    if (str.length <= 1) {
        return false; }
    return str == str.split('').reverse().join('');
}
