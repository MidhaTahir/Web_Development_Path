// Console.logs

console.log('Hello World');
console.log(true);
var greetings = 'Hello';
console.log(greetings);
console.log([1,2,3,4]);
console.log({a:1,b:2});//obj literals
console.table({a:1,b:2});

console.error('This is error'); //output as error
console.clear(); //it clears console
console.warn('This is a warning'); //yellow warning

console.time(); //time start
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd(); //time end (gives total time of between executed lines)

/////////////////////////////////////////
console.clear();
// Variables
//var,let,const

// let,const -> block level scope

var name = 'Midha Tahir';
console.log(name);
name = 'Steve Smith';
console.log(name); //re assign variables when var,let is used

//Init var
var greeting;
console.log(greeting); //udefined

// variable naming convention
//lettes,numbers, _ ,$ ---> inside a variable
// can't start with number
var $fname = 'John'; //dollar sign will be used when we are using jquery

var firstName = 'Midha';//Camel case
// FirstName --> Pascal Case

// CONST (can't be reassigned)
const tname = 'Mids';
console.log(tname);
// name = 'Tah'; //error
// const greets; // error-> Missing initializer in const declaration

/*
Primitive data types in JavaScript includes:

Numbers - Integers, floats
Strings - Any data under single or double quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value

Non-primitive data types in JavaScript includes:

Objects
Functions
Arrays

just like mutable and immutable in python,
immutable are float int ... , mutable are lists,dict,..
Primitive data types are immutable(non-modifiable) data types. 
*/

// exceptional --> non-primitive datatypes(things can be changed )
const person = {
    name:'Mids',
}

person.name = 'Midha'; //we can't reassign, but we can change stuff in object but can't reassign person
console.log(person);

//array
const numbers = [1,2,3,4,5];
numbers.push(6) // like append in python
console.log(numbers);

//recommended -> use const in unchangable things, use them but except in iterator and loop


 
