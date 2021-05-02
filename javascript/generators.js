// function *gen(){
//     yield 1
//     yield 2

// }

// const g = gen()

// console.log(g)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// /////////////////

// function *gen(){
//     yield 1;
//     yield 2;
//     return 'hey'
// }

// const g = gen();

// console.log(g)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

//////////////////

function *gen(){
    yield 1;
    yield 2;
    return 'hey'
}

const g = gen();

console.log(g)
console.log(g.next())
console.log(g.next())
console.log(g.next())