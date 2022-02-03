function fibonacchi(num){
    var fibo= [0,1]
    for(var i =2;i<=num;i++){
    fibo[i]= fibo[i-1]+fibo[i-2];
    // console.log(fibo[i]);
    }
    return fibo;
}
var result = fibonacchi(12);

console.log(result);