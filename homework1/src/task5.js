'use strict';
let task5 = luckyTickets;

function luckyTickets(context) {
    if (context.min.length != 6 || context.max.length != 6) {
        throw new Error('Min and max value length have to be equal to six symbols');
    }

    let result = {};
    result[easyMethod.name] = 0;
    result[complexMethod.name] = 0;

    context.min = Number(context.min);
    context.max = Number(context.max);

    if (context.min > context.max) {
        throw new Error('min value has to be less then max value');
    }

    for (let i = context.min; i < context.max; i++) {
        let value = i.toString();

        if (easyMethod(value)) {
            result[easyMethod.name]++;
        }

        if (complexMethod(value)) {
            result[complexMethod.name]++;
        }
    }

    result['winner'] = result[complexMethod.name] > result[easyMethod.name] ? complexMethod.name : easyMethod.name;

    return result;

    function easyMethod(value) {
        let first3Numbers = value.slice(0, 3),
            last3Numbers = value.slice(-3);

        return sumOfStringNumbers(first3Numbers) === sumOfStringNumbers(last3Numbers);
    }

    function complexMethod(value) {
        let evenSum = 0,
            oddSum = 0;

        for (let i = 0; i < value.length; i++) {
            let number = Number(value[i]);

            if (isEven(number)) {
                evenSum += number;
            } else {
                oddSum += number;
            }
        }

        return evenSum === oddSum;
    }
}

function sumOfStringNumbers(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}

function isEven(n) {
    return n % 2 == 0;
}
