const getTheTitles = function(books) {
    let titles = []
    for (i in books) {
        titles.push(books[i].title)
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
