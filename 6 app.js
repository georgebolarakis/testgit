const arr = ["hello", "welcome", "bye bye"];
let temp = randomItem(arr);
let mes = document.createTextNode(temp);
document.body.appendChild(mes);

function randomItem(arr) {
    let temp = Math.floor(Math.random() * arr.length);
    return arr[temp];//we return the index value of temp by using the array object
}

/*we nake an array with three options and a temp variable that holds one of the values
another variable that creates a textNode with the value of temp and then we
append it to the body of our HTML .The function selects an item randomly from
the arr array and returns the index value of temp which uses the compination of
Math.floor (we always start with this because it starts at 0)method and then the 
Math.random method multiplied by the array length which is 3. 
