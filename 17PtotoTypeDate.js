
//The Object.prototype is a property of the Object constructor. 
//And it is also the end of a prototype chain.  All JavaScript objects inherit properties and
// methods from a prototype.  Use existing or create your own.  TIP : declare it before you 
//try to use it.Date objects inherit from Date.prototype

//we use the Date object of javascript and extend on the prototype we create a method
//called addDays with a "days" parameter
Date.prototype.addDays = function (days) {
    return new Date(this.valueOf() + days * 864e5)//it gives us the ammount of ms in days
}
console.log(new Date().addDays(1117));//we add 1116 days into the current days


/*
function Person(first, last) {//it has two parameters
    this.firstName = first;
    this.lastName = last;
}
Person.prototype.fullName = function () {//we take the Person object and using prototype we 
    //extend on that by using the fullname method
    return this.firstName + " " + this.lastName;
}
const me = new Person("Laurence", "svekis");//we add the parameters to the Person function that 
//updates the me object
console.log(me);
console.log(me.fullName());
*/