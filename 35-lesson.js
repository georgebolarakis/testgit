const theList = ['Laurence', 'one', 'Svekis', true, 35, null, undefined, {
    test: 'one'
    , score: 55
        }, ['one', 'two']];
let temp = Array.isArray(theList);//we are checking if theList is an array and we ger true
theList[1] = "Hello World";//we update the first element, into hello world
temp = theList.indexOf(35);//we are getting the possition of 25 element in the Array 
theList.push("pushed"); //add to end
theList.pop();//removes last item
theList.shift();//it removes the first element of the Array
theList.unshift();//adding an element to the beggining
temp = theList.pop(); //to get the value that was poped(deleted the last entrie)
temp = theList.shift();//to get the value that was shifed(deleted the first element)
temp = theList.unshift("unshift"); //it will return the length of the array
theList.splice(1,2)//1.is where we want to start removing and 2 is how many itens we want to remove it changes the content of the array,adding new elements while removing old ones
temp = theList.splice(1, 2);//it returns the values that got removed
console.log(theList);
console.log(temp);