const myArray = ["a", "hello", 4, 8, 2, "world", "javascript", "course", 99, 1];
const myArray2 = [5, 341, 6324, 7, 432, 12, 8, 130, 44];
let result = myArray2.filter(function (num) {//we are using the "filter" method to return the elements that meet the critiria
    console.log(num);//it displays all the numeric value that go through the condition "num" in the function
    return num > 75;
})
console.log(result);
//The filter method constracts a new array with the results