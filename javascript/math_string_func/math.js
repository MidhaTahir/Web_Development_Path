const PI = Math.PI;
console.log(PI);


// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

console.log(Math.min(-4,5,2,1));
console.log(Math.max(-4,5,2,1));

const randNum = Math.random();
console.log(randNum);


const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num);

let randomNum = Math.random()// generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11 //from 0 to 10 if we write 10 it will be from 0 to 9


console.log(numBtnZeroAndTen)// this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)// this gives between 0 and 10

//Absolute value
console.log(Math.abs(-10));

//Square root
console.log(Math.sqrt(100));

//Power
console.log(Math.pow(3,2));

console.log(Math.E);

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2));
console.log(Math.log(10));

//Trigno
console.log(Math.sin(90));
