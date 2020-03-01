/*//this loop initiates the creation of the Array and adds a 9 numeric values
const myWork = [];
for (let x = 1; x < 10; x++){
    let temp=x;
    myWork.push(temp);
}
console.log(myWork);
*/

const myWork = [];//we are making an Array called myWork
for (let x = 1; x < 10; x++) {//we are making a loop that will run 9 times
    let stat = x % 2 ? true : false;//we are adding a variable "stat"that checks if x can be devided be 2 and displays if it does
    let temp = {//we are making an Object called temp
        name: `Lesson ${x}`//The name for this is object is a template litteral,first field is called name with a value of "x"
        , status: stat//second field is called status and gets the value of "stat"
    };
    myWork.push(temp);//we are adding the value of "temp" at the end of the MyWork Array
}
//console.log(myWork);//It displays the objects of this array.

const getTrue = myWork.filter(function (el) {//we are making a new Array using the filter function called "getTrue" that will contain onle the x%true values
   return el.status//because it's a boolean it will return just the true values
})
console.log(getTrue);//this will return the values that are true.