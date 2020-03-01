
//used to run a block of code when you want to run this block of code

const intervalID = window.setInterval(myCallback, 500, 'interval');//500 ms & we set interval parameter
//into the function
const timeoutID = window.setTimeout(myCallback, 500, 'setTimeout');//it will execut callback in 
//500 ms 

let y = 10;//the countdow starts at y(10)
const inTimer = window.setInterval(counter, 1000);//we create a function called counter that 
//will be running every 1000ms


function counter() {
    el.textContent = y;//we equal el to the textcontent of y(10)
    y--;//we decrease it by one and when it reaches 0 it stops
    if (y < 0) {
        clearInterval(inTimer);
    }
}



function myCallback(mes) {//it takes mes and consoles the content of mes, in this instance is "interval" 
    console.log(mes);
}



function stopInterval() {//we stop the interval when we write stopIntrval() in the console
    clearInterval(intervalID);
}


//we are making an element into the div(a red square)
let x = 0;
const el = document.querySelector('div');
el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'red';
el.style.fontSize = '3em';//it is the size of the countdown for some reason


function step() {//we create an animation frame
    x++;
    el.style.transform = 'translateX(' + x + 'px)';//we apply the transform property to the element
    if (x < 450) {//the box will move until the value of x turns 450
        window.requestAnimationFrame(step);
    }
}
window.requestAnimationFrame(step);
