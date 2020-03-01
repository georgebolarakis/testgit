const numArray = [4, 543, 12, 34, 234, 54, 2, 3, 443, 434334, 3255];
let mapArray = numArray.map(function (x) {//we are using the map method to make a new "mapArray" and display the values  
   console.log(x);//of x which are the values of the elements in numArray
    return x * 50;//and we multiply these numArray values by 50 
})
console.log(mapArray);







/*
var array1=[1,4,9,16];
let map1=array1.map(function (x){//we are using the map method and x gets the values in array1
    return x*50;//we multiply the values wiith 50 and adding them in the new array calles map1
});
console.log(array1);
console.log (map1);
*/





/*var array1=[1,4,9,16];
const map1=array1.map(x=>x*2);
console.log(array1);
console.log (map1);







/*let string1="";
const obj={
    a:1
    ,b:2
    ,c:3
};
for(let property in obj){
    console.log(property);
    string1+=obj[property];
}

console.log(obj);
console.log(string1);




/*
const myWork=[];
for (let x=1;x<10;x++){
    let stat=x%2?true:false;
    let temp={
        name:`Lesson ${x}`,
        status:stat};
    myWork.push(temp);
}
console.log(myWork);
const getTrue=myWork.filter(function(el){
    return el.status;
})
console.log(getTrue);








/*for (let counter=0;counter<5;counter++){
    console.log("for loop "+counter);
}

let x=0;
while(x<5){
    
    console.log("while loop "+x);
    x++;
}

let y=0; 
do{y++;
   console.log("do loop "+y);
  }while (y<5);









/*
const myArray = ["a", "hello", 4, 8, 2, "world", "javascript", "course", 99, 1];
const myArray2 = [5, 341, 6324, 7, 432, 12, 8, 130, 44];
let result = myArray2.filter(function (num) {
    console.log(num);
    return num > 75;
})
console.log(result);









/*const myArray = ["a", "hello", 4, 8, 2, "world", "javascript", "course", 99, 1];
const myArray2 = [5, 1, 6, 7, 4, 12, 8, 130, 44];
console.log(myArray);
myArray.sort();
console.log(myArray);
myArray.reverse(myArray);
console.log(myArray);

if (myArray.indexOf("world2")!==-1){
    console.log("item found");
}else{
    console.log("not found");
}

let newArray=myArray.concat(myArray2);
console.log(newArray);
let found=myArray2.find(function(el){
    console.log(el);
    return el>10;
})

/*
const theList = ['Laurence', 'one', 'Svekis', true, 35, null, undefined, {
    test: 'one'
    , score: 55
        }, ['one', 'two']];
        let temp= Array.isArray(theList);//we are checking if thelist is an Array
        theList[1]="Hello World";//we update the first entry to hello world
        temp =theList.indexOf("one");//we are checking if the first entry in the arrray is still one and we are checking for a string
//var first=theList.shift();
//var first=theList.shift();
//var first=theList.shift();
//var newIttem=theList.unshift("make me first");
//var pos=1,n=1;
//var removeItems=theList.splice(pos,n);
//console.log(theList.length);
console.log(theList);
console.log(temp);
/*
const theList=["george",38,"svek",true,null,undefined,{test:"one",score:55},["one","two"]];

console.log(theList);
console.log(theList[6]['score']);
console.log(theList[6].score);
console.log(theList[7][1]);
console.log(theList[3]);

/*
function resident(age,name,address,road){
    this.age=age;
    this.name=name;
    this.address=address;
    this.road=road;
}
const myself= new resident(38,"George","laburnub","road");

console.log(myself);
myself.name="gb";
const ilectra= new resident(34,"Ilectra","furzdown","street");
ilectra.secondName="Stavroyla";

const Smith= new resident(40,"John","Smith","furzedown","alley","");





/*
const car={
    color:"red",
    year:2010,
    make:"Corvete",
    brand:"chev",
    price:500000,
    turnOn:function(){console.log("started "+" while it was still "+this.color)},

    
    function(){console.log("you are driving"+" "+"a"+" "+this.make)},
    notdriving(){console.log("I am not driving a "+ this.brand+" today "+"I am driving a "+this.make)},
    drive:function(){console.log( "You " + "are driving a " +this.make )},
    works(){console.log("it works")}

};

car.on=function(){
    return this.brand +" I am driving";
}


//console.log(car.on());




/*
const myCar={};
myCar.color="orange";
myCar.make="Lada";
console.log(myCar);
myCar["year"]="1998";

let a =1;
const test={
    a1:"tesst 1",
    a2:"test 2"
}
console.log(test);

//three ways of adding values to an Object
const fridge={
    hight: "1,80m",
    width:"50cm",
    properties:"cold"
}
console.log(fridge);
fridge.color="white";
fridge.make="indesit";
fridge.reliable="sort off";

fridge["since"]="1990";
fridge["something"]="else";


/*
//Typical object
const car={
    color:"red",
    year:2010,
    make:"Corvete",
    brand:"chev",
    price:500000,
};

console.log(car);

/*
let a=1;
const test={
    a1:"test 1",
    a2:"test 2"
}
console.log(test);




//const test=(x)=>x*3;
//console.log(test(1,3));


*//*
var test10=function(x){
    return x*5;
}
console.log(test10(10));

const test11=(x)=>x*5;
console.log(test11(10)); 

 const test=(X,Y)=>X*Y*2;
 console.log(test(2,3));
/*
(function(myName){
    console.log("my name is "+" "+myName);
})("George");
    

(function(){
    console.log("welcome George");
})();

/*(function(){
    console.log("welcome iife");
})();
(function(){
    let firstName="jim";//can't access outside
})();
let result =(function(){
    let firstName="george";
    return firstName;
})();
console.log(result);
(function(firstName){
    console.log("My name is "+firstName);
})("laurence");

/*
(function(firstName){
    console.log("welcome " + firstName);
})("George");

let result=(function(){
    return "hello again";
})();
console.log(result);


/*
let secretNumber=5;
guesser();
let input;

function guesser(){
    input=prompt("guess an one digit number");
    let inputNumber=Number(input);
    if(inputNumber===secretNumber){
        console.log("Perfest guess!!");
        return;
    }else{
        let message=(inputNumber<secretNumber)? "higher" : "lower";
        console.log("wrong try again "+" " + message);
        guesser();
    }
}


/*
let secretNumber = 5;
let guess;
guesser();

function guesser() {
    guess = prompt("Guess the Number");
    let guessNumber = Number(guess);
   if(guessNumber==NaN){
        console.log("This is not a number!");
        guesser();
    } else if (guessNumber === secretNumber) {
        console.log("You got it");
        return;
    }
    else {
        let message = (guessNumber < secretNumber) ? "higher" : "lower";
        console.log("wrong GO " + message);
        guesser();
    }
}

/*
function loop(x){
    if (x>=5) return;
    console.log(x);
    loop(x+1);
}
loop(0);

/*
let a=5;
function test(){
   // let a=10;
    console.log(a);
}
test();


/*
let a= "hello";
function greet(){
    let b="world";
    console.log(a +" "+ b);
}
greet();



let test1 = function (num) {
    return num + 5;
}
console.log(test1(3));
console.log(test2(5));

function test2(num) {
    return num + 5;
}


/*
let test1=function(num){
    return num+5;
}

/*
function test2(num){
    return num+5;
}

console.log(test1(1));
console.log(test2(5));


var1=var2=5;
function test1(){
    var1+var2;
    test();
 
}

/*

function test1(){
    console.log(var1+var2);
}
test1();

/*
let var1,var2,var3;
var1=var2=var3=0;
let btns = document.querySelector("button");
console.log(btns);

btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;


function message1(){
    var1++;
    message();
}
function message2(){
    var2++;
    message();
}
function message3(){
    var3++;
    message();
}

function message(){
   console.log(var1 + ""+var2 + ""+var3);
}


/*
num1=5;
num2=2;

       
function multiply(x,y){
    return x*y;
    
}
console.log(multiply(num1,num2));


let num1 = 10;
let num2 = 5;

function multiplier(a,b){
    return a*b;
    //console.log(multiplier);
}

console.log(multiplier(num1,num2));








/*
adder1();


function adder1(numOne = 10, numTwo = 50) {
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}




adder1(10, 5);
adder1();
adder2(10, 5);
adder2(10);
adder3(10, 5);
adder3(10);

function adder1(numOne = 10, numTwo = 50) {
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}

function adder2(numOne, numTwo) {
    numTwo = numTwo || 50;
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}

function adder3(numOne, numTwo) {
    numTwo = typeof numTwo !== 'undefined' ? numTwo : 50;
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}

/*
val1(100,100);
val1();
val2(80,80);
val2();


function val1(numOne=10,numTwo=5){
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}


function val2(numOne,numTwo){
    numTwo= numTwo||5;
    numOne=numOne ||3;
    console.log("number 1 "+ numOne);
    console.log("number 2 "+ numTwo);          
}


//function name(parameters){ //code executed}

/*
   
let output="hello world";
let counter=0;
welcome(output);
welcome(output);



function welcome(Parameter){
    counter++;
    let temp=counter+" times run";
    console.log(Parameter);
    console.log(temp);
    console.log(counter);
}


let myNum=20;
let counter=0;
addTen(myNum);
addTen(myNum);
addTen(myNum);

function addTen(num){
    counter ++;
    let temp = Number(num);
    console.log(temp + 10);
    console.log(counter);
}


/*
let person="drdor";
switch(person){
    case "dada":
        console.log("dada di rla da da");
        break;
    case "didi":
        console.log("did idi");
    case "dodo":
        console.log("dodo is the teacher here")
        break;
    case "drdor":
        console.log("I like this more than the default")
        break;
    default:
        console.log("sorry there is no dodo here only a "+person);
}



/*
let myTime=prompt("what is the time?");
let output;

if (myTime<=11){
    output="good morning";}
    else if(myTime>=11 && myTime<=17){
        output="Good afternoon";
    
    }else{
        output="Good Night";
}
console.log(output);




let age=prompt("What is your age?");
age=Number(age);
console.log(age);
let ageStatus=(age>=18)?"Allow ":"Deny";
console.log(ageStatus);
alert(ageStatus);


let membership=true;
if (age>=18 && membership){
    console.log("welcome back 1");
}else{
    console.log("sorry");
}
/*
let membeshipStatus=(membership="yes"&& ageStatus>=18)?"you need to register":"welcome back";
console.log(membeshipStatus);
alert(membeshipStatus);


/*
if membershipStatus=(yes && ageStatus>=18){
    console.log("welcome back");
}else{
   console log("you need to become a member to enter");
}








/*

var value=prompt("Give us a numerical value?");
var status=(value%2)?'odd':'even';
console.log(value);
console.log(status);

/*
condition ? val1:val2 //if condition is true then cal1 otherwhise val2

var age=prompt("what is your age?")
var status=(age>=18)?"adult":"minor";
console.log(status);

/*
let checkNum=prompt("Please give me a number");
if (checkNum){
    console.log("numbeer exists and");
}if(checkNum>=141){
    console.log(`numbeer exists but it's larger than or equal to ${checkNum}`);
}else{
    console.log("It's larger than the number that you entered!")
}
alert(`The number that you entered is ${checkNum}`);



/*
let checkNum=11;
if(checkNum>15){
    console.log("the number is greater than or equal 10");
}else if(checkNum==10) {
    console.log("It's equal");
}else{
    console.log("it's not equal");
}





/*
var number=60;
console.log("number exists");
if (number>50) {
    alert("it's larger than "+ 50);
}

console.log(number);

/*
var a=5;
var b=10;
console.log(`fifteen is ${a + b} and not ${2 * a + b}.`);


let userName= prompt("what is your name?");
let message= `welcome 
${userName}`;
console.log(message);


temp = (100).toString();
temp= Number([1,2,3,4]);
console.log(temp);

temp=("5");
console.log(temp - 5);

var text = '42';
var integer = parseInt(text, 10);
console.log(integer);
var string = integer.toString(10);
console.log(typeof string);
*/

/*
let firstNum=5;
let secondNum=10;
firstNum++;
secondNum--;
console.log(firstNum);
console.log(secondNum);
total= firstNum+secondNum;
console.log(total);
total= 500+100/5+total;
console.log(total);
console.log(typeof total);

/*
let miles=prompt("How many miles pls?");
miles=Number(miles);
console.log(miles);
let kilometers= miles*1.60934;
let message=`the miles you entered ${ miles} in kilometers is ${kilometers}`
alert("The miles you entered was "+ miles+"." + "Converted in kilometers is"+ " " +kilometers+".");
console.log(miles+" Miles "+"is "+kilometers+" in kilometers");
console.log(message);

*/








