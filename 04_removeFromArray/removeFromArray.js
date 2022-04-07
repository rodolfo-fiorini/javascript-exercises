const removeFromArray = function(arr, ...elements) {
    // let response = arr;
    // elements.forEach((element) => {
    //     let index = response.findIndex((x) => x == element);
    //     while (index != -1) {
    //         arr = response.splice(index, 1)
    //         index = response.findIndex((x) => x == element)
    //     }
    // });
    for (i in elements) {
        let element = elements[i];
        let element_index = arr.findIndex((value) => 
            value === element)
        while(element_index != -1){
            arr.splice(element_index, 1)
            element_index = arr.findIndex((value) =>
                value === element)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
