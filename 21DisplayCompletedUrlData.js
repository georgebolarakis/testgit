//we get data from a json placeholder and create elements that are green for completed 
//and red for not completed items in the  list & lastly populate a page div


const url = 'https://jsonplaceholder.typicode.com/todos';
const output = document.querySelector('div');
loadJSON();

function loadJSON() {
    fetch(url).then(function (res) {//we get the res=response data
        return res.json()
    }).then(function (data) {//we use the data value of the console
        console.log(data);
        for (let x = 0; x < data.length; x++) {
            let div = document.createElement('div');
            div.style.color = data[x].completed ? "green" : "red";
            div.textContent = data[x].id + ". " + data[x].title;
            output.appendChild(div);
        }
    })
}