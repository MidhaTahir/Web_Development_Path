// every single one is completely unique this makes it very valuable in object property identifier
// They can never be the same, they are always unique
//Primitve datatype
// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");
console.log(sym2);
console.log(Symbol() === Symbol()); //false
console.log(sym1 === sym1); //true
// console.log(`We can't have symbol here inside : ${sym1}`); //error
console.log(`It is possible : ${String(sym1)}`); //or sym1.toString()

// Unique Object Key
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");
const myObj = {};
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
console.log(myObj.KEY1); //undefined (it wont work use bracket notation)
console.log(myObj[KEY1]);

myObj.key3 = "Prop3"; //it is not symbol
myObj.key4 = "Prop4";

//Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i} : ${myObj[i]}`); //symbols are not displaying
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify(myObj));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));