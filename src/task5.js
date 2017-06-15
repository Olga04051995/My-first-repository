var task5 = luckyTickets; 
function luckyTickets(context) {
    var result = { easyMethod: 0, complexMethod: 0, winner: "" };
    if(context.min.length != 6 || context.max.length != 6){
        throw new Error("min and max value length have to be equal to six symbols");
    }
    context.min = Number(context.min);
    context.max = Number(context.max);
    if(context.min > context.max){
        throw new Error("min value has to be less then max value");
    }; 
    var easyMethod = function (value) {
        var first3Numbers = value.slice(0, 3);
        var last3Numbers = value.slice(-3);

        if (sumOfStringNumbers(first3Numbers) === sumOfStringNumbers(last3Numbers)) {
            return true;
        }

        return false;
    }

    var complexMethod = function (value) {
        var evenSum = 0,
            oddSum = 0;

        for (var i = 0; i < value.length; i++) {
            var number = Number(value[i]);
            if (isEven(number)) {
                evenSum += number;
            } else {
                oddSum += number;
            }
        }

        return evenSum === oddSum;
    }

    for (var i = context.min; i < context.max; i++) {
        var value = i.toString();

        if (easyMethod(value)) {

            result["easyMethod"]++;
        }

        if (complexMethod(value)) {
            result["complexMethod"]++;
        }
    }

    if (result["complexMethod"] > result["easyMethod"]) {
        result.winner = "complexMethod";
    } else {
        result.winner = "easyMethod";
    }

    return result;
}

function sumOfStringNumbers(str) {
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}

function isEven(n) {
    return n % 2 == 0;
}
