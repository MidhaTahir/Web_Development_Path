// // primitive datatype as objects
// // should not be used very often

// const name1 = 'Mids';
// const name2 = new String('Mids');
// console.log(name1);
// name2.foo = 'bar'; //added property to string obj
// console.log(name2); //string as an object

// //Trouble
// console.log(typeof name2);//object datatype
// if(name2 === 'Mids'){
// console.log('Type is diff === will be false');
// }else if(name2 == 'Mids'){ //true
//     console.log('yes it will be console log');
// }else{
//     console.log('No');
// }

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num2); //number obj
console.log(typeof num2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);
console.log(typeof bool2);

//Function
const getSum1 = function(x,y){
    return x + y;
}
console.log(getSum1(2,1));

const getSum2 = new Function('x','y','return 1+1');
console.log(getSum2(1,1));

//Object
const person = {name:"John"};
console.log(person);
const person2 = new Object({name:"John"});
console.log(person2);

//Arrays
const arr1 = [1,2,3,4];
console.log(arr1);
const arr2 = new Array(1,2,3,4);
console.log(arr2);

//Regex (Regular expressions)
const re1 = /\w+/; // \w -> word character , \w+ -> word character that occurs more than one time, 
console.log(re1);

const re2 = new RegExp('\\w+'); //escape character \\w will give backslash
console.log(re2);