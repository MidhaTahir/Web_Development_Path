// Maps - Key-value pairs - can use anytinem as a key or a value.

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function () {};

// Set values
map1.set(key1 , 'New value of key1');
map1.set(key2 , 'New value of key2');
map1.set(key3 , 'New value of key3');

// Get values
console.log(map1.get(key1));

//Count 
console.log(map1.size); //3 (key-value pairs)

//////////

//Iterating through maps
//Loop using for of
for(let [key,value] of map1 ) {
    console.log(`${key} = ${value}`);
}

//loop over keys only
for(let key of map1.keys()) {
    console.log(`${key}`);
}

// loop over values only
for(let value of map1.values()) {
    console.log(`${value}`);
}

//for each
map1.forEach((key,value) => {
    console.log(`${key} = ${value}`);

})


///////////

//Convert to arrays
//create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//create array of keys only
const keyArr = Array.from(map1.values());
console.log(keyArr);

//create array of values only
const ValArr = Array.from(map1.values());
console.log(ValArr);
