console.clear()

let fname = 'Mids';
let lname = 'Tah';
let val;

val = fname + lname ;

//Concat
val = fname + ' ' + lname;

//Append
val = 'Mids';
val += ' Tah';

//Escaping
val = "That's awful"; // single quote is in sentence
val = 'That\'s awesome';

//Length
val = fname.length;

//concat()
val = fname.concat(' ',lname);

//Change case
val = fname.toUpperCase();
val = fname.toLowerCase();

//slicing strings
val = fname[0];

//indexof
fname = 'Miids'
val = fname.indexOf('i'); //starts from 0
val = fname.lastIndexOf('i'); //now in my name two i occurs it will give index of next i
val = fname.indexOf('N'); //gives -1 if the character is not found

// charAt()
val = fname.charAt('3');

// Get last char
val = fname.charAt(fname.length - 1); //for last character

// Substring()
val = fname.substring(0,4);// 0 to 3

//slice
val = fname.slice(0,4);
val = fname.slice(-3);//slice and substring are same except slice can take negative argument also
val = fname[-2]; //this is not possible returns undefined

//split
fruits = 'Apple,Mango,Banana'
val = fruits.split(','); //splits string to array

//replace
val = fname.replace('ii','i'); //replace two i's with one i

//includes()
val = fname.includes('M'); //if smth is inside a sting it returns true otherwise false

console.log(val);


