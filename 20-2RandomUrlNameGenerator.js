//it gives us the number of results specified in the input from the random generation of names
//produced from the specified url

const url = "https://randomuser.me/api/";
const btn = document.querySelector('button');
const el = document.createElement('input');
const output = document.querySelector('div');//we add it to the div
el.setAttribute('type', 'number');//we set an attribute value for el
el.setAttribute('value', 5);
document.body.appendChild(el);
btn.addEventListener('click', getUsers);

function getUsers() {
    let temp = url + '?results=' + el.value;//we take the url the results and the value
    fetch(temp).then(function (rep) {
        return rep.json()//the response comes back as json
    }).then(function (data) {
        console.log(data.results);
        let html;
        for (let x = 0; x < data.results.length; x++) {
            console.log(data.results[x]);
            html += data.results[x].name.first + ' ' + data.results[x].name.last + '<br>';
            //add to the output element div and get the data resultsx and we use the name.flex-first
            //object and the last.name object 
        }
        output.innerHTML = html;//we output the value of html