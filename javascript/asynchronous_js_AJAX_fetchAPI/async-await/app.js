//writing async before function gives us a promise

// async function myFunc(){

//     const promise = new Promise((resolve,response)=>{
//         setTimeout(()=> resolve('Hello World'),1000);
//     });

    
//     const res = await promise; //wait until promise is resolved
//     return res;

// }

// myFunc()
//     .then(res => console.log(res));

//////////////////// 

// async function myFunc(){

//     const promise = new Promise((resolve,response)=>{
//         setTimeout(()=> resolve('Hello World'),1000);
//     });

//     const error = true; //mimic error behaviour
//     if(!error){
//         const res = await promise;
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'))
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

/////////////////////////
//With fetch (best way)
async function getUsers(){

    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved
    const data = await response.json();

    //only proceed once second promise is resolved
    return data
}

getUsers().then(users => console.log(users))