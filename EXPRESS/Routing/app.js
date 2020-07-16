var express = require("express");
var app = express()
const port = 5000

// "/" => "Hi there!"
// "bye" => "Goodbye!"

//! Order of routes matter (if we put * star in top it will not display other below routes)
//! for one request first route will run
// what happens is it check first route , then second and so on
// its impossible to define all routes in big app like reddit, fb , so what we do is write path
// put : before anything we want user to change and write anything in there (just like a variable)

app.get("/",function(req,res){
    res.send("Hi there!");
    //req is an obj that contains all info about request
});

app.get("/bye",function(req,res){
    res.send("Goodbye!");
});


//path thing
app.get("/r/:subName",function(req,res){
    res.send("Welcome to subName Path")
})

app.get("/r/:subName/comment/:id/:title",function(req,res){
    var subName = req.params.subName
    res.send("Hey its comment page of " + subName)
})

// * --> all routings except defined one (404 page)
app.get("*",function(req,res){
    res.send("404 Page not found")
})




//listen requests on particular port and IP
// process.env.PORT,process.env.IP //environment variable


app.listen(port,function(){
    console.log("Server has started")
}); 