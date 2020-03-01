

//we createa an element input

const el = document.createElement('input');//we amake an input element
el.setAttribute('type', 'text');
el.setAttribute('value', '10');//we set a default value
document.body.appendChild(el);//we add it to the page
const btn = document.querySelector('button');
btn.addEventListener('click', cal);
//btn.addEventListener('click', tester);


//we multiply the innput firld value *10 on button press
//Provide error messages to teh user if the input is not correct format and clearing the input 
//value each time
function cal() {
    let num = el.value;
    try {
        if (num === "") throw "No Value";
        if (isNaN(num)) throw "not a number";
        document.querySelector('div').textContent = num * 10;
    }
    catch (error) {
        document.querySelector('div').textContent = error;
    }
    finally {
        el.value = "";//we clear the input value each time
    }
}

/*
//we are checking if it is nothing, not a number >5<5
function tester() {
    let num = el.value;
    try {
        if (num === "") throw "No Value";
        if (isNaN(num)) throw "not a number";
        num = Number(num);
        if (num > 5) throw "over 5";
        if (num < 5) throw "under 5";
    }
    catch (error) {//this is how we output the errors defined above
        console.log(error);
    }
    finally {
        console.log("this will always run");
    }
}
*/