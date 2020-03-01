
function getRan(min, max) {
    min = Math.ceil(min);//we generate the minimum number
    max = Math.floor(max);//we generate the maximum number
    return Math.floor(Math.random() * (max - min)) + min;
}

/*we go to the console and we pass values to the getRan function
for example : getRan(1,4) the min that will be returned it 1 and max of 3*/