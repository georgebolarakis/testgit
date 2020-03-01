
/*
let xhr = new XMLHttpRequest();//we define out xhr object that is an XMLHttpRequest 
//request object

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector('button');
btn.addEventListener('click',pushData);



function getJoke(){
    fetch(url)
    .then(function(rep){//once the url is retrived we use a function to get the responce 
        //content back
        return rep.json()//it's in a json format we return it as a json objevt format
    })


    .then(function(data){
        console.log(data);
        document.querySelector('div').textContent = data.value;//add the data value to the html
    })

}

*/

var PeopleObj=[
    {
        username :"George",
        password :"Bolarakis"
},{
        username:"El",
        password:"Som"
}

]



var PeopleObj=["","","",""]

function pushData(){
    var inputUsername= document.getElementById("username").value;
   
    PeopleObj.push(inputUsername);
    
    var pvalue="";
    for (i=0; i<PeopleObj.length; i++){
        pvalue = pvalue + PeopleObj[i];
    }
    document.getElementById("Text").innerHTML=pvalue;
}



function pushData2(){
var inputPassword= document.getElementById("password").value;
PeopleObj.push(inputPassword);
var pvalue2="";
    for (i=0; i<PeopleObj.length; i++){
        pvalue2 = pvalue2+ PeopleObj[i];
    }
    document.getElementById("Text2").innerHTML=pvalue2;
}


function getInfo(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
   console.log("you're username is "+ username +" and your password is "+ password);
    for (i=0; i<PeopleObj.length; i++){
        if (username==PeopleObj[i].username && password==PeopleObj[i].password){
            console.log(username +  " is logged in")
            return ;
        }
    }console.log("Incorrect password or username")
}

