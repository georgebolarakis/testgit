//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP 
//pipeline, such as requests and responses. 
//It also provides a global fetch() method that provides an easy, logical way to fetch 
//resources asynchronously across the network.

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector('button');
btn.addEventListener('click',getJoke);

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
