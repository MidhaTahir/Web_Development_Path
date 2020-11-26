// Closures Journey under the hood

// function createFunc(){
//     function multiplyBy2(num){
//         return num * 2;
//     }
//     return multiplyBy2;
// }

// const generatedFunc = createFunc(); //multiplyBy2 func is returned
// const result = generatedFunc(3); //as same as calling multiplyBy2(3)
// console.log(result)

//---------------------------------------------------
// calling a function in the same function call as it was defined
// in outer execution context incrementCounter execution context will be made
// if counter is not found in incrementCounter execution context then it will search it in outer execution context

// function outer(){
//     let counter = 0;
//     function incrementCounter(){
//         counter++;
//     }
//     incrementCounter();
// }

// outer();

// -------------------------------------------------
// calling a function outside of a function call in which it was defined
// how incrementCounter will access counter? First it will check counter in its own execution context
// incrementCounter takes counter in backpack
// function outer(){
//     let counter = 0;
//     function incrementCounter(){
//         counter++;
//     }
//     return incrementCounter;
// }

// const myNewFunction = outer(); //backpack also comes with counter inside
// myNewFunction()
// myNewFunction()

// if we have another thing like midhaCounter inside outer scope but we dont referenced or used it in incrementCounter then midhaCounter will not go in backpack

// backpack is called : closure or
//                      persistent lexically scope referenced data or
//                      closed over variable environment(localmemory)

// --------------------------------------------------

// now
// const anotherFunction = outer();
// anotherFunction()
// anotherFunction()

// both myNewFunction and anotherFunction have diff backpacks hence both counter if console logged will be 1 2 ....  1 2

//cases
//if we do counter = 0 before counter++ line then our counter printed out will be 1 1 1 1
//if we do counter = 0 in global instead of doing it in outer function then our counter printed out will be 1 2 3 4
