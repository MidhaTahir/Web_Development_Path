//A callback is a function that passed in as a parameter to another function and then it run inside function body ...
// forEach is an example of callback

//Synchronous Function
// const posts = [
//     {title:'Post One',body:'This is post one'},
//     {title:'Post two',body:'This is post two'},
//     {title:'Post three',body:'This is post three'},
//     {title:'Post four',body:'This is post four'},
// ];//mimic server and db

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },2000); //happens after 2sec
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

// createPost({title:'Post five',body:'This is post five'});
// fifth post is not visible because it calls and get answer of getPosts() first
// getPosts();// now first getPosts gets output

//Conevrting into async function
function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000); //happens after 2sec
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

createPost({title:'Post five',body:'This is post five'},getPosts); //passed getPosts as callback
//now when createPost is called it will call getPosts right here before 2 sec 
//now we can see all 5 posts 