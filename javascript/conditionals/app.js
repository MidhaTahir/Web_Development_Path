const id = 100;
//equal to
// double equal to will not check datatype
if(id == '100'){ //Correct
    console.log('Correct');
}else{
    console.log('Wrong');
}
// for datatype+value use === signs
if(id === '100'){ //Wrong
    console.log('Correct');
}else{
    console.log('Wrong');
}
//Not Equal to
if(id != 100){ //Wrong
    console.log('Correct');
}else{
    console.log('Wrong');
}
if(id !== '100'){ //correct
    console.log('Correct');
}else{
    console.log('Wrong');
}


if(typeof id !== 'undefined'){ //if id is not defined it will run else
    console.log(`The ID is: ${id}`);
}else{
    console.log('No ID');
}

//Greater than less than equal to
if(typeof id === 'number' && id <= '100'){ //correct
    console.log('Correct');
}else{
    console.log('Wrong');
}

const color = 'yellow';
if (color === 'red'){
    console.log('Color is Red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else{
    console.log('Color is neither blue nor red');
}

const name = "Midha";
const age = 21;
//AND
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is adult`);
}
//OR ||


//Ternary operator
console.log(id === 101? 'Correct' : 'Wrong');