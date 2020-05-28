// Brad Traversy crash js course

// alert("Hello World"); //modal alert
// mdn console documentation
console.log('Hello World');
// console.warn('Error here');
//console.warn('Warning here');


//variable var,let,const
//var is global scope , while let and const have block level scope
let age = 15; // use let where you want to reassign variable
age = 12;
console.log(age);
// const age = 15; // use const almost everywhere if you know we won't reinitialize 
// age = 12; // I will get error because const can't be reinitialized
// console.log(age); 


// Datatypes (String,Numbers,Boolean,null,undefined,Symbols)
const name = 'John';
const agee = 30;
const rating = 4.5; //there is no float and int type in js
const isCool = true;
const x = null; //it is not an object--- in first implementation, type tag of object is 0 and null represented as null pointer (null has 0 as a type tag so its returning object type of null)
const y = undefined;
let z; //undefined as well
console.log(typeof null);

//Concatenation
// console.log('My name is ' + name + ' and I am ' + age); //old method
// With es6 its template string
console.log(`My name is ${name} and I am ${age}`);

// string func
const s = 'Hello Mids';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,3).toUpperCase());
const m = 'tech,It,code,ds,ML,AI'
console.log(m.split(','));


// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3); //after new is constructor
console.log(numbers);
const fruits = ['apples','oranges','pears',10,true,23.3];
fruits[4] = 'grapes';
console.log(fruits);
console.log(fruits[0]);
fruits.push('mangoes'); //at last just like append in Python
fruits.unshift('strawberries'); //append at first
fruits.pop(); //pop last one
console.log(Array.isArray(fruits)) // if .. array exists
console.log(fruits.indexOf('oranges'));
console.log(fruits);



// object literals (dictionaries like in python)
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music','movies','sports'],
    address : {
        street : '50djdh',
        city : 'Khi',
        state : 'PAK',
    }
}
console.log(person)
console.log(person.firstName,person.lastName)
console.log(person.hobbies[0])
console.log(person.address.city)

// destructing
const {firstName,lastName , address: {city}, hobbies} = person; //pulling firstName, lastName from person
console.log(firstName,lastName,city, hobbies[1])

// add property
person.email = 'doe@gmail.com'
console.log(person);

//arrays of obj
const todos = [
    {
        id: 1,
        text : 'Play',
        isCompleted : true
    },
    {
        id: 2,
        text : 'Have fun',
        isCompleted : true
    },
    {
        id: 3,
        text : 'Do homework',
        isCompleted : false
    },
];

console.log(todos[1].text);
//converting into json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//for loop
for (let i=0; i < 2 ; i++){
    console.log(i);
}

//while
let i = 0;
while(i<2){
    console.log(i);
    i++;
}

// loop through an array
for (let i=0; i < todos.length ; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.id);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text)
});
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todofilterText = todos.filter(function(todo){
    return todo.isCompleted == true;
});
console.log(todofilterText);

const todofiltermap = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})
console.log(todofiltermap);


// Conditionals
const o = '10';
// == not matches data type it looks only value
if (o == 10){
    console.log('==  is not matching data type');
}

const k = 10;
// === matches data type and value both 
if (k === 10){
    console.log('=== matches datatype and value both');
}

// if elseif else
const g = 20;
if (g===10) {
    console.log('g is 10');
} else if (g > 10) {
    console.log('g is greater than 10');
} else{
    console.log('g is NOT 10');
}

// or is || and is &&

//ternary operator
const q = 11;
const color = q > 10 ? 'red' : 'green';
console.log(color);

//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red and blue');
        break
}

//function 
function addNum(num1=1,num2=1){
    console.log(num1+num2);
}
addNum(3,4);
addNum(); // will use keyword values 1+1 = 2


//arrow function in es6
const subNum = (num1 = 1, num2 = 1) => {
    console.log(num2 - num1);
}
subNum(3,4);

const mulNum = (num1 = 1, num2 = 1) => console.log(num2 * num1); // dont need to include braces
mulNum(3,4);

const divNum = (num1 = 1, num2 = 1) => num2 / num1; //no need to use return keyword also 
console.log(divNum(4,4));

todos.forEach((todo) => console.log(todo));

