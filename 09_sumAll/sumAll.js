const sumAll = function() {

    if (arguments[0] < 0 || arguments[1] < 0 ||
        typeof arguments[0] != 'number' || typeof arguments[1] != 'number' ||
        arguments[0] % 1 != 0 || arguments[1] % 1 != 0
    ) {
        return "ERROR";
    }

    let sum = 0;
    if (arguments[0] < arguments[1]) {
        const first = arguments[0];
        const second = arguments[1];
        for (let i = first; i <= second; i++) {
            sum += i;
        }
    } else {
        const first = arguments[1];
        const second = arguments[0];
        for (let i = first; i <= second; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
