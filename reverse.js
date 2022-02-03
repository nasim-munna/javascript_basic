
var reverse ="";
function reverseState(str){
    for(i=0;i<str.length;i++){
        var char= str[i];
        reverse = char +reverse;

    }
    return reverse;

}
var statement = "Hello I am from Bangladesh";
var result = reverseState(statement);
console.log(result);
