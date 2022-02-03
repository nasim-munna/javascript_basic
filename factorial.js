function Factorial(n){
    var factorial=1;
    for( i=1; i<=n; i++ ){
        factorial = factorial*i;
    
    }
    return factorial;
}
var result = Factorial(6);
console.log(result);