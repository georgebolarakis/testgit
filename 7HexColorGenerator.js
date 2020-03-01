
document.querySelector("button").addEventListener("click", function () {
    document.body.style.backgroundColor = ranColor();
})

function ranColor() {
    //let temp="#" + Math.random().toString(16).substr(-6);//or add it to the variable and return it
    //return temp;
    return "#" + Math.random().toString(16).substr(-6);
}
console.log(ranColor());
//we are choosing the button and we add an event listener for a click that will
//run an anonymus function that will change the background color style of the page
//by invoking a second function called ranColor
//toString(16) converts the number into a HEX color format
//ranColor returns a rundom number that we convert to a string and we just substring -6
//that will produce a random six charachter number and turn it into a string
//when we add a HEX color into the DOM it translates it into rgb