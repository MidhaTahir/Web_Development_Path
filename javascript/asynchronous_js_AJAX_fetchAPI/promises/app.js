// promises -> alternative to callbacks
// while they are handling async operation they promise to do when the operation is finished
// we handle response with .then(inside do when promise is complete)

const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post two',body:'This is post two'},
    {title:'Post three',body:'This is post three'},
    {title:'Post four',body:'This is post four'},
];

// function createPost(post){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             posts.push(post);
//             resolve(); //where we call callback , write resolve there
//         },2000);
//     });
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title:'Post five',body:'This is post five'}).then(getPosts);

function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            let error = true; //mimic an error to check reject
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

createPost({title:'Post five',body:'This is post five'}).then(getPosts).catch(function(err){
    //whatever we passed in reject will be catched and shown in catch()
    //if we not write catch() it will still show error on console
        console.log(err)
    });