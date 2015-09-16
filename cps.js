//This function takes a string and returns its first character.

function firstChar(word) {
    return(word[0]);
}

function funWithWords(str, callback){
    callback(str);
}

//Testing:

funWithWords("Hello", firstChar);


//This function takes a string and returns its last character. 

function lastChar(word) {
    return(word [ word.length - 1 ]);
}

//Testing:

funWithWords("Montreal", lastChar);

//This function returns the first and last characters of a string:

function getFirstAndLast(str, callback) {
    var str1 = firstChar(str);
    var str2 = lastChar(str);
    var firstAndLast = str1.concat(str2);
    callback(firstAndLast);
}

//Testing:

getFirstAndLast("hello", function(newStr) { console.log(newStr); }); 
