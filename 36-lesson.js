
const myArray = ["a", "hello", 4, 8, 2, "world", "javascript", "course", 99, 1];
const myArray2 = [5, 1, 6, 7, 4, 12, 8, 130, 44];
//console.log(myArray);
myArray.sort();//it sorts the Array with numbers first(lowest to highest) and strings afterwords(alphabetically)
//console.log(myArray);
myArray.reverse();//reverse the presentation of items in the Array
//console.log(myArray);
if (myArray.indexOf("world2") !== -1) {//we are checking to see if it contains a value
  console.log("item found");
}
else {
  console.log("not found");
}
let newArray = myArray.concat(myArray2);//creating a new Array and joining it together
console.log(newArray);
let found = myArray.find(function (el) {//we are using myArray2(it's numeric) then the method "find" and then a function and an element as the value that we are passing in
  console.log(el);
    return el > 100;
})
console.log(found);
//the "find" method returns one value, the first one that meets the condition in the function.