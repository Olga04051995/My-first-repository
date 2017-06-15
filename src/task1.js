var task1 = drawChessboard;
function drawChessboard(length, heidth, char){
    var result = "";

    for (var i = 0; i < heidth; i++) {  
        for (var j = 0; j < length*2-1; j++){
            if(i % 2 === j % 2){
                result += char;
            } else {
                result += " ";
            }               
        }
        result +="\n";
    }
    return result;
}

