function numbers(marks){
    var sum = 0;
    for(i=0;i<marks.length;i++){
        element= marks[i]
        sum= sum+element;
    
    }
    return sum;
}
var total =[42,64,88,63,99,23,56,22];
var result= numbers(total);
console.log(result);

