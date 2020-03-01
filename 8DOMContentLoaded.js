window.addEventListener('DOMContentLoaded',function(e){//we have the window object
    console.log('ready');
})

window.addEventListener("DOMContentLoaded", (event)=>{
    //when that event occurs console log it
    console.log("DOM fully loaded and parsed");
});

//DOMContentLoaded event fires when the initial HTML document has been completely
//loaded and parsed without waiting for stylesheets, images, 
//and subframes to finish loading that is a method that is getting invoked 
//when the content is loaded
