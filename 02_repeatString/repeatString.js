const repeatString = function(string, times) {

    if (times >= 0) {
        let repeat = ""
        while (times > 0) {
            repeat += string;
            times -= 1;
        }
        return repeat;
    } 
    return "ERROR";
    
};

// Do not edit below this line
module.exports = repeatString;
