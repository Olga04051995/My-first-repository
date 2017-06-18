'use strict'; 
let task7 = fibonacci; 
function fibonacci(context) {
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
