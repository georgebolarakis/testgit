//var array1=[1,4,9,16];
//const map1=array1.map(x=>x*2);
//console.log(array1);



const obj = {a:1,b:2,c:3};//we make an object
console.log(obj);

for(let prop in obj){//loop through the content of the object,get proprty in object(a,b,c) into prop
   // console.log(prop);//we are just getting the object sections 
   //  console.log(obj[prop]);//we get the values of the property 
    //   console.log(prop,obj[prop])//we get the values of the property & the object sections
    
}

const arr = ['a','b','c'];//we make an array
for(let w =0; w < arr.length; w++){
   // console.log(w,arr[w]);//we log out the index and value of w
}

for(el in arr){//another way to log out the value
    //console.log(el,arr[el]);
}

arr.forEach(function(el,index,array){//We are using the "forEach" inbuild method, the function will run through each one of the element
   // console.log(array);//in the array and give back the index value,,
    console.log(index,el);//we display the index and the element value that corresponds to that index value
})
