function analyzeEnvelopes(envelope1, envelope2) {
    var result = 0;

    if ((envelope1.a < envelope2.c && envelope1.b < envelope2.d) 
    	|| (envelope1.a < envelope2.d && envelope1.b < envelope2.c)) {
        result = 1;
    } else if ((envelope1.a > envelope2.c && envelope1.b > envelope2.d) 
    	|| (envelope1.a > envelope2.d && envelope1.b > envelope2.c)) {
        result = 2;
    } else {
        result = 0;
    }

    return result;
}

