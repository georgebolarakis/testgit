


let myNum1 = 1000.324423342;
let myNum2 = "100";
console.log(myNum1);
console.log(myNum2);
console.log(myNum1.toFixed(2));//it shows two decimal
console.log(Number(myNum2));//turns string to number
console.log(parseInt(myNum2));//turns string to number


function typeOfNan(x){
    if (Number.isNaN(x)){
        return "Number NaN";
    }
    if (isNaN(x)){
        return "NaN"
    }
}

console.log(typeOfNan("100f"));//expected output "NaN"
console.log(typeOfNan(NaN));//expected output "Number NaN"
