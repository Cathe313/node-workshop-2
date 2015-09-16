
var fortune = require("./library/fortune");

var userRq = process.argv[2];

function fortuneOutput(nb, callback) {
    if (nb > 0) {
        fortune.getFortune();
        callback(nb - 1, callback);
    }
};

fortuneOutput(userRq, fortuneOutput);
