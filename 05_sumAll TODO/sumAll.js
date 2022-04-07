const sumAll = function(a, b) {
    let total = 0;
    if (a> b) return
    for (i = a; i <= b; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
