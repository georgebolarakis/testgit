let myStr = " Hello World JavaScript 123 this works, I love JavaScript  ";
console.log(myStr);


let output;
output = myStr.replace('love','enjoy');//replace love for enjoy
output = myStr.indexOf('JavaScript');//it gives us the starting position of the word
output = myStr.lastIndexOf('JavaScript');//it shows the last occurance of the word
output = myStr.search('JavaScript');//we search for a particular word
console.log(output);


/*
console.log(myStr[9]);//we treat a string as an array, we get the 9th charachter
console.log(myStr[7]);
console.log(myStr.slice(7));//it returns everything after the 7th possition
console.log(myStr.slice(7,12));//it returns the 5th to the 12th charachter
console.log(myStr.substring(7,12));//it returns the 5th to the 12th charachter
console.log(myStr.substr(7,5));//It starts at the 7th char and returns 5 charachters
console.log(myStr.split(' '));//we split it into an array by using the spacing
console.log(myStr.split('a'));//we split it into an array by using the letter a
console.log(myStr.charAt(9));//we chack the 9th charachter 


console.log(myStr.length);
console.log(myStr);
console.log(myStr.trim());//removes the white spaces
console.log(myStr.toLowerCase().trim());//it turns upper to lower & trims them
console.log(myStr.toUpperCase());//Turns lower to upper*/