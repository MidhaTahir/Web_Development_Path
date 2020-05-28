// Datatypes in javascript

/* Two types:
Primitives Datatypes:
    stored directly in the location the variable
    accesses, stored on stack
Reference Data Types:
    Accessed by reference
    Objects that are stored on the heap
    A pointer to a location in memory
*/

/* 6 primitive datatypes:
    String
    Number
    Boolean
    Null
    Undefined -> variable not assigned a value
    Symbols(ES6)

Reference Datatypes/objects:
    Array
    Object Literals
    Functions
    Dates
    Anything else  
*/


/*
JS is dynamically typed language means 
types are associated with values not variables.
The same variable can hold multiple types.
There are supersets of JS that allow static typing like TypeScript, Flow
*/


//Primitive

//String
const name = 'Midhs';
console.log(typeof name);
//Number
const age = 45;
console.log(typeof age);
//Boolean
const isFemale = true;
console.log(typeof isFemale);
//Null
const car = null;
console.log(typeof car);// object -> kind of bug 
/*
In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object (it isn't, it's a primitive value
in first implementation, type tag of object is 0 and null represented as null pointer (null has 0 as a type tag so its returning object type of null)
You can consider it a bug in JavaScript that typeof null is an object.
*/

//undefined
let test;
console.log(typeof test);
// const test; // error-> if we dont define smth with const keyword its an error


//Symbol
const sym = Symbol();
console.log(typeof sym);


// Reference types -> Objects

//Array
const hobbies = ['movies','music'];
console.log(typeof hobbies);

// //Obj literals
const address = {
    city : 'Khi',
    state : 'Pak',
}
console.log(typeof address);


//Date 
const today = new Date();
console.log(today);
console.log(typeof today);


