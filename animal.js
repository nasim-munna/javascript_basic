function animalCount(depth){
var animal= 0;
if (depth<=10){
    animal = depth*50;
}
else if(depth<=20){
    var firstpart= 10*50;
    var remaining = depth-10;
    var animal= remaining*100;
}
else{
    var firstpart=10*50;
    var secondpart= 10*100;
    var remaining = depth-20;
    var animal= remaining*300;

}
return animal;
}
var count = animalCount(7);
console.log(count);

