var speach= "I am Nasim. I live in Karimganj.";
var count =0;
for(i=0;i<speach.length;i++){
    var char = speach[i];
    if (char== " "){
        count++;
    }
    
}
count++;
console.log(count);