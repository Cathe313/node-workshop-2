

function firstChar(word, callback) {
    callback(word[0]);
}

//Testing

firstChar("Hello", function(word){console.log(word)});



function lastChar(word, callback) {
    callback(word [ word.length - 1 ]);
}

//Testing

lastChar("Hello", function(word){console.log(word)});

//This function returns the first and last characters of a string:

function getFirstAndLast(word, callback) {
    firstChar(word, function(firstLetter) {
        lastChar(word, function(lastLetter){
            callback(firstLetter + lastLetter);
        });
    } )
}

//Testing:

getFirstAndLast("hello", function(newStr) { console.log(newStr); }); 

