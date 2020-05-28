// Type Conversion
let val;

// Number to string
val = 5;

// conversion
val = String(val);
val = String(4+4); //4+4 -> 8 and length is 1

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,2,3,4]);

//toString()
val = (5).toString(); //either use upper one or this one
val = (true).toString();

// String to number
val = '5';
val = Number(val);
val = Number(true); // gives 1
val = Number(false); //gives 0
val = Number(null); // gives 0
val = Number('hello');// gives NaN (not a number)
val = Number([1,2,3]); // gives NaN

//Another method to convert into number integer
val = parseInt('100');// gives 100
val = parseInt(100);// gives 100
val = parseInt('100.3'); // gives 100
val = parseFloat('100.34'); //parse in float


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // works on string dt
// console.log(val.toFixed(2)); // works on number in braces put digits you want to console after decimal
console.log(val.toFixed());

// Type Cohersion
const val1 = 5;
const val2 = '4';

const sum = val1 + val2; // gives 54 string type
console.log(sum); 
console.log(typeof sum);

const mul = val1*val2;
console.log(mul); //gives 20 
console.log(typeof mul);

const sub = val1-val2;
console.log(sub); //gives 1
console.log(typeof sub); //number

const div = val1/val2;
console.log(div); //gives 1.25
console.log(typeof div); //number
