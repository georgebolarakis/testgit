//local storage

const myObj = {
    first: "Laurence"
    , last: "Svekis"
}
let temp = JSON.stringify(myObj);//we turn into a string


localStorage.setItem('obj', temp);//we set the object into local storage
let nObj = JSON.parse(localStorage.getItem('obj'));//we parse the strng into a usable object format
console.log(nObj);

if (localStorage.getItem('num')) {
    let cnt = localStorage.getItem('num');
    cnt = Number(cnt);//we turn cnt into a number
    cnt++;
    localStorage.setItem('num', cnt);//we set num to be equal to cnt
}
else {
    localStorage.setItem('num', 1);//num doesn't exist so we set it to 1
}
console.log(localStorage.getItem('num'));

//when we write localStorage.clear() in the console we clear everything
//we can access local storage in the developers tools/Application/Storage