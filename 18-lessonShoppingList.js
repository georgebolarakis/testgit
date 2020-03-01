


//Shopping list, where we can add items through an input and when we click on them we strike through
//and adding the class red plus when we click them again they return to the previous status
// there will also be an option of an x to remove them completelly from the list




const inputSelect = document.querySelector("input[name='newItem']");
//we select the input and it has a name of newItem(the way that is called in HTML code)
const mainList = document.querySelector("ul");
//we select the unorderd list element
const allListItems = document.querySelectorAll("li");
//we select all the list elements
for (let x = 0; x < allListItems.length; x++) {
    allListItems[x].addEventListener("click", myList);
//we add an event listener where for x smaller than the items of the list,when clicked we
//invoke a function called myList
}


//we are using the input element and we add an event listener for when we press a key
//we invoke an anonimus function that contains the event object
//where when the keyCode is enter (13) we invoke a function
//called makeNew

//there is a problem with this peace of code

inputSelect.addEventListener("keypress", function (event) {
    if (event.key === Enter) {
        makeNew();
    }
})




//we create a function called makeNew that contains a new variable item called li that creates a 
//a new list element, we add an event listener wher uppon clicking it will invoke a function called
//myList.
function makeNew() {
    let li = document.createElement("li");
    li.addEventListener("click", myList);
    let textValue = inputSelect.value;
    //we add a text node to get a text value that is comming from the input element
    inputSelect.value = "";//we set the value to be blank
    let tempNode = document.createTextNode(textValue);
    //we create a tempNode in order to create a text node that will have the value that was
    //input to the textValue item
    li.appendChild(tempNode);
    //we append the tempNode that we created adding the text into the list item
    console.log(li);
    //we take the ul and we append the new list item at the end of the list
    mainList.appendChild(li);
}


//this function toggles to the red class of the element
function myList() {
    let temp = this.classList.toggle("red");//we set up a variable where when clicked on the element
    //that we are hovering
    if (temp) {//if it is toggled to red
        let span = document.createElement("span");//we create a span(inLine elements)
        span.textContent = " X ";//where text content is X
        span.addEventListener("click", function () {//we add another event listener to the span
            //where  when we click this X
            this.parentElement.remove();//we remove the element completely from the parent list
        })
        this.appendChild(span);//we append the span child
    }
    else {//otherwise if it does exist within the element and remove it
        this.getElementsByTagName("span")[0].remove();
    }
}