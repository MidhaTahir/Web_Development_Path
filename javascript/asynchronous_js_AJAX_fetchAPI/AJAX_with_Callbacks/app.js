const http = new easyHTTP;

//Get Posts 
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');

// console.log(posts); //returned undefined because the data was returned first before it was added

http.get('https://jsolaceholder.typicode.com/posts',function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    
});
