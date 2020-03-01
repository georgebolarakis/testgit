

const exNumbers = [10, 15, 7, 1, 4, 2, 5];//we exclude this numbers

function genRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
   // return num;//returns all random generated numbers from 1-20

    return exNumbers.includes(num) ? genRandom(min, max) : num;
    //we check if the number is in the exNumber array and if yes we generate a new number
    //that isn't in the array
    // Syntax:   if variable name (condition(is num)) then you generate a 
    //new number otherwise you display the num
}
for (let x = 0; x < 20; x++) {
    let min = 1;
    let max = 20;
    let num = genRandom(min, max);
    console.log(num);
}



/*
const arr = [1,5,3,6,23,453543];
console.log(arr.includes(644));//the includes method checks if the value is included in the array
//it returns a boolean value (true or false)


function member(val){
    return (arr.includes(val)? "yes" : "no");
}//if the value val exists in array returns yes otherwise no ,by using the member(adding a value)
//in the console
*/
/*
//we make a value with boolean values since we have just one parameter
function getFee(isMember){
    return (isMember ? "$2.00" : "$10.00");
}
console.log(getFee(true));//outcome is $2.oo
console.log(getFee(1));//outcome is $2.oo
console.log(getFee(false));//outcome is $10.oo
console.log(getFee(0));//outcome is $10.oo
console.log(getFee(9));//outcome is $2.00 since a number other than 0 is true
*/
