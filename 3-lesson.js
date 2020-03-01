let eleList = document.getElementsByClassName('first');//we are creating a list of elements
eleList = document.getElementsByTagName('span');
//eleList = document.querySelectorAll('.first');//this returns a NODE list so we can loop through them
for (let i = 0; i < eleList.length; i++) {
    let el = eleList[i];//we are using the index value i
    console.log(el);
    eleList[i].textContent = (i + 1) + ' updated';//we are updating the elements text
}


eleList.forEach(function (el, index) {//we are using the forEach method to loop through
        console.log(index);
        el.textContent = `${index} : updated`;
        el.style.backgroundColor = 'red';
   }) /// only for nodelist
console.log(eleList);