
//elGroup=document.querySelectorAll("span");
//elGroup2=document.querySelectorAll("div");
//console.log(elGroup);
//document.querySelector("span:nth-child(2)").innerHTML = "span 1";
//document.querySelector("div").innerHTML = "It's the second DIV";

console.log(document.querySelector('.first'));//it show the first class
console.log(document.querySelector('#myID'));//will return CSS type selector for specific selector
console.log(document.getElementById('myID'));//will return element with specific ID
console.log(document.querySelector("div "));//when we don't specify it returns the first
//console.log(document.querySelector("span");
//document.querySelector("div").style.backgroundColor="yellow";//select the first div

document.querySelector('span').style.backgroundColor = 'purple';
document.querySelector('span:nth-child(2)').style.backgroundColor = 'blue';//we change the color of the second span element
document.querySelector('span:nth-child(3)').style.backgroundColor = 'yellow';//the third etc
document.querySelector('span:nth-child(4)').style.backgroundColor = 'grey';

//document.querySelector("span").style.backgroundColor="red";
document.querySelector(".first span").style.backgroundColor="red";
//document.querySelector("p").style.backgroundColor="blue";
document.querySelector("li").style.backgroundColor="yellow";//changes the first, we can also do it with ("li:first-child")
document.querySelector("li:last-child").style.backgroundColor="green";//changes the last
document.querySelector("li:nth-child(2)").style.backgroundColor="green";//changes the second

