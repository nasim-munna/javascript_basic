var roll = [1,4,3,6,7,2,3,7,2,9,78];
var uniqueName=[];
for (i=0;i<roll.length;i++){
    var element = roll[i];
    var index =uniqueName.indexOf(element);
    if(index== -1){
        uniqueName.push(element);
    } 

}
console.log(uniqueName);