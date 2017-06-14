/*function drawChessboard(length, width, char) {
    var result = "";

    for (var i = 0; i < length; i++) {
        
        for (var j = 0; j < width; j++) {
            if (i === 0 || i % 2 == 0) {
                result += char + " ";
            } else {
                result += " " + char;
            }
        }

        result += "\n";
    }

    return result;
}
*/

/*function drawChessboard(length, width, char){
    var result = "";
    var currentResult = "";    
    for (var i = 0; i < length * width; i++) {
        currentResult += char + " ";
        if(currentResult.length >= length){
            result +=  currentResult + "\n" ; 
        currentResult = "";
        }
        
    }
    return result;
}
*/
function drawChessboard(length, heidth, char){
    var result = "";
    var speciaLength = length - 1;
    for (var i = 0; i < heidth; i++) {
        if(i === 0 || i % 2 == 0) {
            for (var j = 0; j < length; j++) {
                result += char + " "
            }
        } else {
        for(var x = 0; x < speciaLength;  x++) {
                result += " " + char
        }
        }
    result += "\n"   
    }
    return result;
}
