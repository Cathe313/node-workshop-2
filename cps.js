

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



function getFirstChar(str, cb) {
    return str[0];
}
function getLastChar(str, cb) {
    return str[str.length - 1];
}
function getFirstAndLast(str) {
    var first = getFirstChar(str);
    var last = getLastChar(str);
    
    return first + last;
}
var result = getFirstAndLast("hello");
console.log(result);



request('google', function(err, resp) {
    prompt(['city'], function(err2, res2) {
        console.log();
    })
})


var resp = request('google');
var res2 = prompt(['city']);
console.log();