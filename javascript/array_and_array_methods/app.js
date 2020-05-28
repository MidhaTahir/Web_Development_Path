// Create some arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(43,56,33);//calling constructor
const fruits = ['Apple','Banana','Orange','Grapes']
const mixed = ['12',12,23.4,undefined,null,true,{a:1,b:2},new Date()]
console.log(mixed);


let val;

//get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers); //true as numbers is array
val = Array.isArray('hello'); //false as it is string

//get single value
val = numbers[1];

//Insert into array
numbers[2] = 100;

//Find Index of value 
val = numbers.indexOf(33); // -1 if not exists

//Mutating Arrays
//Push -> add onto end
// unshift -> add to front
// pop -> popping last thing
// shift -> pop from front
numbers.push(2000); //just like append in python
numbers.unshift(1);
let num = numbers.pop(); //stores last element in num
console.log(num);

numbers.shift();

//Splice values
console.log(numbers);
numbers.splice(1,1); //remove number at position 1
// numbers.splice(-1,-3); //negative is not possible

//reverse
numbers.reverse(); //reverse array

//Concat array
val = numbers.concat(numbers2);

//Sort array
val = numbers.sort();//sorting by only first number which is not what we want
val  = fruits.sort();// in alphabets its working correctly

// Use compare function
val = numbers.sort(function(x,y){
    return x - y;
});

//Reverse sort
val = numbers.sort(function(x,y){
    return y - x;
});
/*
When compare function is specified, array elements are sorted according to the return value of the compare function. For example, when comparing a and b:

If the compare function returns a value less than 0, then a comes first.
If the compare function returns a value greater than 0, then b comes first.
If the compare function returns 0, a and b remain unchanged with respect to each other, but sorted with respect to all other elements.
Hence, since 5 - 20 = -15 which is less than 0, therefore 5 comes first, similarly 20 - 10 = 10 which is greater than 0, therefore 10 comes before 20, likewise 20 - 75 = -55 which is less than 0, so 20 comes before 75, similarly 50 comes before 75, and so on.*/

//Find
function under50(num){
    return num < 50;//returns first number under 50 in numbers array
}
val = numbers.find(under50); 



console.log(numbers);
console.log(val);

