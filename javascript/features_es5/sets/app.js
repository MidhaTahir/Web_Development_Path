// SETS - set of unique values (of any type)

//we can also add like below - passing parameters in Set()
// const set2 = new Set(['a',1,2,3]);
// console.log(set2);


const set1 = new Set();
const [arr ,...m] = [123,124,125,126]
//Add values to set
set1.add(100);
set1.add('A string');
set1.add(m);
set1.add({name : 'Mids'});
set1.add(true);
set1.add(100); // it doesn't add this 100 again

console.log(set1);


console.log(set1.size);

//Check value
console.log(set1.has(100));
console.log(set1.has(50+50)); //50+50 = 100 and 100 is there 

console.log(set1.has({name : 'Mids'})); //a reference value --> false (it saves it in heap)
console.log({name: "john"} === {name: "john"}); //false (as object is not a primitive datatype it is referenced)

//Delete from set
set1.delete(100);
console.log(set1);

//iterating through sets
for(let item of set1) {
    console.log(item);
}

console.log("//\///\\//\\//");

// keys values are same in sets 
for(let item of set1.keys()) {
    console.log(item);
}

console.log("//\///\\//\\//");


for(let item of set1.values()) {
    console.log(item);
}

console.log("//\///\\//\\//");

for(let item of set1.entries()) {
    console.log(item);
}

console.log("//\///\\//\\//");

set1.forEach(value => {
    console.log(value);
})

//Convert set to array
const setArr = Array.from(set1);
console.log(setArr);