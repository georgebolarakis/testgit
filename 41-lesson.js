const numArray = [4, 543, 12, 34, 234, 54, 2, 3, 443, 434334, 3255];
let mapArray = numArray.map(function (x) {//we are using the map method to make a new "mapArray" and display the values  
   console.log(x);//of x which are the values of the elements in numArray
    return x * 50;//and we multiply these numArray values by 50 
})
console.log(mapArray);
