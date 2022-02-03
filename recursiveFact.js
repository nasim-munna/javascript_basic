// 5!= 1*2*3*4*5
// n = n*(n-1)
function factorial(num){
    if(num==0){
        return 1;

    }else{
        return num*factorial(num-1);
    }
}
var result = factorial(10);
console.log(result);
