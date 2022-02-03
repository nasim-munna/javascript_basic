function isLeapYear(year){
    let remainder = year % 4;
    if (remainder == 0 ){
        return true;
    }else{
        return false;
    }

}
const leap2000=isLeapYear(1999);
console.log(leap2000);
