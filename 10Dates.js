


let d = new Date();
let val;
//d = Date.now();//returns ms
//d = new Date(2020, 11, 15, 5, 10, 30, 40);//we set a date,month starts with 0=January 11=Dec
//d = new Date(10000000000000);
//d = new Date(0);
//d = d.toString();//we are outputhing a string
//d = d.toDateString();
//d = new Date("2020-12-31");
//d = new Date("2020/12/27");
val = d.getDate();//returns the date
val = d.getDay(); //0-6
val = d.getTime();
val = d.getMilliseconds();
//val = d.getUTCMilliseconds();
val = d.getHours(); //local time
//val = d.getUTCHours(); //universal time


//we get the date of tomorrow
let days = 1;
const newDate = new Date(Date.now() + (days * 24 * 60 * 60 * 1000));//1000 ms for every second
console.log(newDate);
console.log(d);
console.log(val);

//var today=new Date();//bring current date
//var birthday=new Date("December 22, 1980 01:24:00");//seting up a specific date
//different ways to do the same date object
//var birthday=new Date("1980-12-22T01:24:00 01:24:00");
//var birthday=new Date(1980,12,22);
//var birthday=new Date(1980,12,22,1,24,0);

//it gives you all the ms sincw 1/1/1980
const birthday= new Date(1980,0,1);
console.log(birthday.getTime());