//getBoundingClientRect() method returns the size of an element and it's position relative
//to the viewport


const el = document.querySelector('div');//we select the div element
el.style.width = "100px";
el.style.height = "123px";
el.style.position = "absolute";//in order for us to be able to move the element otherwise is 0
el.style.top = "55px";
el.style.left = "33px";
el.style.backgroundColor = "red";
console.log(el.getBoundingClientRect());//we get the value of el element