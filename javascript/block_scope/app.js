//Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//     var a = 4;//var is a func scope declaration (this var a will not affect global scope var a)
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ',a,b,c)
// }
// test();

// if(true){
//     //Block Scope
//     var a = 4; // global a will change also
//     let b = 5;
//     const c = 6;
//     console.log('If scope: ',a,b,c)
// }

for(var a=0;a<10;a++){ //if we use var inside in global scope var will be 10
    console.log(`loop ${a}`);
}

for(let a=0;a<10;a++){ //let will not change
    console.log(`loop ${a}`);
}

console.log('Global Scope: ',a,b,c)