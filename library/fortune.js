//Running this function should output a random quote from a list of 10 different quotes.

module.exports = {

getFortune: function fortune() {
    switch(Math.floor ( Math.random() * 10 )) {
        case 0:
            var quote = "You will visit the Dung Pits of Glive soon.";
            break;
        case 1:
            var quote = "A is for Apple.";
            break;
        case 2:
            var quote = "A classic is something that everyone wants to have read and nobody wants to read.";
            break;
        case 3:
            var quote = "You have literary talent that you should take pains to develop.";
            break;
        case 4:
            var quote = "It was wonderful to find America, but it would have been more wonderful to miss it.";
            break;
        case 5:
            var quote = "Wrinkles should merely indicate where smiles have been.";
            break;
        case 6:
            var quote = "You have a deep interest in all that is artistic.";
            break;
        case 7:
            var quote = "You own a dog, but you can only feed a cat.";
           break;
        case 8:
            var quote = "You will be awarded the Nobel Peace Prize... posthumously!";
           break;
        case 9:
            var quote = "If you tell the truth you don't have to remember anything.";
            break;
    }
    return(quote);
}

}

