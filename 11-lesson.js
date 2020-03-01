const imgList = document.querySelectorAll("img");//we create a variable to contain all the object information 
for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click",function(){
       console.log(this.src); //it will give you the path of where it is located
        window.open(this.src,"myImage","resizable=yes,width=500,height=500");
        //we specify that the source is the one that we click("this")
        //we give it a name("myImage")
        //we add regular parameters for the pop up window
        //we are using the "window.open" method
    


    //Try to avoid the onclick method since it doesn't work on all browsers
    imgList[i].onclick = function () {
       console.log(this.src);
       window.open(this.src, "myImage", "resizable=yes,width=500,height=500");
   }
    })}