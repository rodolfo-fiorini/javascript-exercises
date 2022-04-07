const fibonacci = function(number) {
    
    if (number <0) return "OOPS";
    let fibonacci_number_generator = function(length) {
        let fibNum = [1,1]
        for (i = 1; i < length-1; i++){
            fibNum.push(fibNum[i-1] + fibNum[i])
        }
        return fibNum;
    }
    let fibonacci_number = fibonacci_number_generator(number);
    return fibonacci_number[fibonacci_number.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
