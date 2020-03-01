
//RegExp(Regular Expretion) is a cnstructor that creates a regular expression of an object for 
//matching text with a pattern in strings "regexr.com"


//we are looking for any string that represents an email
let myStr2 = "HelloWorld JavaScript 123 this works sometestemail@gmail.com  I love temail@gmail.com JavaScript 44 sample@email.com";
let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let emailData = myStr2.match(exp2);
console.log(emailData);

//it desplays the email specific data
for (let x = 0; x < emailData.length; x++) {
    console.log(emailData[x]);
}

let myStr = "Hello World 12 JavaScript 44 thjis works i love JavaScript 444";
let reg = /(\w+)\s(\w+)/;//we are looking for a word/space/word
let temp1 = myStr.replace("Hello", "People");//we replace Hello with people
console.log(temp1);

temp1 = myStr.replace(reg, "Bye People");//it updates the first two words
console.log(temp1);
console.log(myStr.match(/J/));//we are looking for any cases that match J
//console.log(myStr.match(/J/gi));//we return all instances of J
console.log(/JavaScript/.test(myStr));//we are testing if "JavaScript" is available
//in the string

console.log(/[0-9]/.test(myStr));//we are testing if there is a number in the string
console.log(/\d+/.exec(myStr));//we are looking for all the digits
let myArr = ["one", "two", "three", "four", "two"];
let temp2 = myArr.toString();
let temp3 = myArr.join('....');//we separate the values with the dots
console.log(temp3.search(/two/));//it returns the value of two in waht index
//console.log(temp3.match(/two/gi));//returns all the instanses of two
