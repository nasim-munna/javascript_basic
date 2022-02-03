function isPrime(num){
    for(i=2;i<num;i++){
        if(num%i==0){
            return 'is not a prime number';
        }
    }
    return 'is a prime number';
}
var result = isPrime(13);
console.log(result);