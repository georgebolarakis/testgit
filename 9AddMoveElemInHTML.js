
//we create an player object that will contain all the player information where we define the
//starting value of speed,x and y.


let player = {
    speed: 100
    , x: 100
    , y: 100
}



window.addEventListener('DOMContentLoaded', build);//we invoke a function called build when DOM is loaded

//we add an event listener for when we press keyDown we invoke an anonymus function passing in
//the event object

document.addEventListener('keydown', function (e) {
    let key = e.keyCode;//we get the keycode value
    console.log(key);//console log the value of key
    if (key === 37) {
        player.x -= player.speed//we detract the speed value from player.x value(axis)
    }
    if (key === 38) {
        player.y -= player.speed//we detract the speed value from player.y value(axis)
    }
    if (key === 39) {
        player.x += player.speed//we substract 
    }
    if (key === 40) {
        player.y += player.speed//we substract 
    }
    player.el.style.left = player.x + "px";//we are reseting the values in the player element
    player.el.style.top = player.y + "px";
})


//
function build() {
    player.el = document.createElement('div');//we create an element by using a new part of the player object 
    player.x = 100;
    player.y = 100;
    player.el.style.position = "absolute";//we add a style
    player.el.style.width = "100px";
    player.el.style.height = "100px";
    player.el.style.backgroundColor=ranColor();//we use the ranColor function 
    
    //player.el.style.backgroundColor = "red";
    player.el.style.top = player.x + "px";//we add the player.x value with the px string
    player.el.style.left = player.y + "px";
    document.body.appendChild(player.el);//we aadd it to the page
}




function ranColor() {
    
    return "#" + Math.random().toString(16).substr(-6);
}
console.log(ranColor());