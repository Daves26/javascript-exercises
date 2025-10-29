const removeFromArray = function() {
    if (arguments.length == 1) {
        return arguments[0];
    }

    let args = Array.from(arguments);

    function isNotAnArg(item) {
        if (args.lastIndexOf(item) == -1) {
            return true;
        }
        return false;
    }

    const answer = args[0].filter(isNotAnArg);
    //console.log(answer);
    return answer;
};

//removeFromArray([1, 2, 3, 4], 4, 3);
// Do not edit below this line
module.exports = removeFromArray;
