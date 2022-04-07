const caesar = function(str, shift) {

    let resultArray = [];

    for (i in str) {
        let upperCase = str[i] == str[i].toLowerCase() ? false : true;
        let new_uni_code = str[i].charCodeAt(0) + shift;

        switch (upperCase){
            case true:
                //Unicode for upper case Z: 90
                if (!(new_uni_code <= 90 && new_uni_code >=65)){
                    new_uni_code = new_uni_code - 26;
                }
                resultArray.push(String.fromCharCode(new_uni_code))
                break;
            case false:
                //Unicode for upper case Z: 90
                // if (new_uni_code >= 97 && new_uni_code <= 122){
                //     continue;
                // } else {
                //     new_uni_code = new_uni_code - 26;
                // }
                resultArray.push(String.fromCharCode(new_uni_code))
                break;
        } 
    }
    return resultArray.join("");
};

// Do not edit below this line
module.exports = caesar;
