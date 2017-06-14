var task1 = drawChessboard;
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
