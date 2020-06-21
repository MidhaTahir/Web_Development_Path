const http = new easyHTTP;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

//Post Request
//Create Data
const data = {
    title : "Custom Post",
    body : "This is a custom post"
    //id is added by them in answer
}
//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//Update Post (PUT)
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){ //update id 1 data
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    //Post will be Deleted
});