/*we are selecting all the unordered lists and  we add it to the ul object
we add an event listener
so when keydown is pressed we invoke a function with an e parameter
we create a list item , a temp element which takes the value of the event key that we pressed
and adds the keyCode next to it.lastly the text element textC contains the content of the temp item
.Lastly we append the list with the textC and we also append the ul with the new list item
*/




const ul = document.querySelector("ul");
document.addEventListener("keydown",function(e){
    let li = document.createElement("li");
    let temp = e.key + "(" + e.keyCode + ")";
    let textC = document.createTextNode(temp);
    li.appendChild(textC);
    ul.appendChild(li);
})