// For Loop

for(let i = 0; i < 10 ; i++){//cant use const inside for loop brackets as it keeps changing)
    if(i===2){
        console.log('2 is my fav num');
        // continue;
        break;
    }
    console.log(i);
}

//While loop
let j = 0;
while(j < 10){
    console.log(`Num ${j}`);
    j++;
}

//Do while
let k = 11;
do{
    console.log('Number ' + k);
    k++; //it will run one time no matter what
}
while(k < 10)

//looping through array
const cars = ['Ford','Honda','Alto'];
for(let u = 0;u < cars.length ; u++){
    console.log(cars[u]);
}

//for each loop (looping through array)
cars.forEach(function(car,index,array){
    console.log(`${index} :My car ${car}`);
    console.log(array);
});

//MAP
const users = [ //array of obj lit
    {id:1,name:'Mids'},
    {id:2,name:'Hashy'},
    {id:3,name:'Rahim'},
]

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);


//For in loop (often used for objects)
const user = {
    firstName : 'John',
    lastName : 'Doe',
    age : 20
}
for(let x in user){
    console.log(x) //key 
    console.log(user[x]);//value
}