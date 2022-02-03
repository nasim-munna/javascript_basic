var marks = [42,78,57,85,96,33,53,24,26];
var max = marks[0];
for (var i=0;i<marks.length;i++){
    var element= marks[i];
    if (element>max){
        max =element
    }

}
console.log(max);