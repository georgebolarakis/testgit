//XMLHttpRequest()
//Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL
// without having to do a full page refresh.
//The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. 







let xhr = new XMLHttpRequest();//we define out xhr object that is an XMLHttpRequest 
//request object

const url = "https://api.chucknorris.io/jokes/random";

//we use the onreadystatechange method the function is been used to check the ready state chenges
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);//the radyState value
    if (xhr.readyState == 4 && xhr.status == 200) {//state 4 means that the operation is complete
        //and the status 200 means that the connection was succesful
        console.log(xhr.response);
        let joke = JSON.parse(xhr.response);//we create an object where we parse the response string
        console.log(joke.value);//we just see that joke value
        document.querySelector('div').innerHTML = joke.value + '<br><img src="' + joke.icon_url + '">';
    }
}
xhr.open("GET", url);//we use the get method and posting to the url that we have specified
//we open the request
xhr.send();//we send the request
console.log(xhr);//we are outputting the conternt of the xhr