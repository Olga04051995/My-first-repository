'use strict'; 

function task2 (envelope1, envelope2) {
    let result = 0;

    try {
        preValidateTask2(envelope1, envelope2);
        result = analyzeEnvelopes(envelope1, envelope2);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }

    return result;
}


function preValidateTask2 (envelope1, envelope2) {
    if (typeof envelope1 !== 'object' ||  typeof envelope1 !== 'object') {
        throw new Error('Entered params should be object type')
    }

    if (envelope1.a <= 0 || envelope1.b <= 0 || envelope2.a <= 0 || envelope2.b <= 0) {
        throw new Error('Propertes of objects should be more then zero')
    }
}


function analyzeEnvelopes (envelope1, envelope2) {
    let firstSmaller = isFirstSmaller(envelope1, envelope2),
        secondSmaller = isFirstSmaller(envelope2, envelope1),
        result = 0; 

    if (firstSmaller) {
        result = 1;
    } else if (secondSmaller) {
        result = 2;
    }

    function isFirstSmaller (envelope1, envelope2) {
        return (envelope1.a < envelope2.a && envelope1.b < envelope2.b) ||
            (envelope1.a < envelope2.b && envelope1.b < envelope2.a);
}

    return result;
}

