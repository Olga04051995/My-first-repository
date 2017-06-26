'use strict'; 

function task7 (context) {
    let result = 0;

    try {
        preValidateTask7(context);
        result = getFibonacciSequences(context);
    } catch (ex) {
        console.log({status: "failed", reason: ex.message});
    }  

    return result;
} 

function preValidateTask7 (context) {
    if (context.min > context.max) {
        throw new Error('Min value has to be less then max value');
    }
}

function getFibonacciSequences (context) {
    let a = 1,
        b = 0,
        temp, 
        result = [];

    while (b <= context.max) {
        temp = a;
        a = a + b;
        b = temp;

        if (b >= context.min && b <= context.max) {
            result.push(b);
        }
    }

    return result;
}
