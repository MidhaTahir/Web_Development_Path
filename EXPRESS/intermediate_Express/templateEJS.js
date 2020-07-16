var express = require("express");
var ejs = require("ejs")

var app = express()
app.use(express.static("public")); // serve public folder as static

app.set("view engine","ejs") //after writing this line we dont have to specify ejs extension in res.render() like we can write home.ejs to home.

const port = 5000

//ejs -> embedded in js
app.get("/",function(req,res){
    res.render('home') //put in views folder(express will look that)
});

app.get("/fall/:thing",function(req,res){
    var thing = req.params.thing
    res.render('thing',{thingVar : thing})//thingVar is our ejs variable and thing is defined here
});

app.get("/posts",function(req,res){
    var posts = [
        {title : "Posts 1",author:"Hash"},
        {title : "Posts 2",author:"Mariam"},
        {title : "Posts 3",author:"Mazaay"}
    ];
    res.render("loops",{posts:posts})
})

app.listen(port,function(){
    console.log("Server has started")
}); 