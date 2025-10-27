const repeatString = function(string, number) {
    answer = "";
    if (number === 0) {
        return answer;
    } else if (number < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < number; i++) {
            answer += string;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
