
//The encodeURI() function encodes a URI by replacing each instance of certain characters by one,
// two, three, or four escape sequences representing the UTF-8 encoding of the character 
//(will only be four escape sequences for characters composed of two "surrogate" characters).


//The encodeURIComponent() function encodes a Uniform Resource Identifier (URI) component 
//by replacing each instance of certain characters, it escapes all charachters except a-z
//A-Z 0-9-_.!#*'()

//The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component 
//previously created by encodeURIComponent or by a similar routine

//It is clear in the console log
let url = window.location.href;
console.log(url);



let encodeurl =  encodeURIComponent(url);
let decodeurl = decodeURIComponent(encodeurl);
console.log(encodeurl);
console.log(decodeurl);



let url2 = 'http://www.discoveryvip.com/?id=500&more=hello world';
console.log(encodeURI(url2));
console.log(decodeURI(encodeURI(url2)));
console.log(encodeURIComponent(url2));