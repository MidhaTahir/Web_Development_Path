var express = require("express");
var app = express()

app.get("/",function(req,res){
    res.send("Hi there")
})

app.get('/speak/:animal',function(req,res){
    var animal = req.params.animal
    var sound = ""
    if(animal === "cat"){
        sound = "meaw"
    }else if(animal === "cow"){
        sound = "OOww"
    }else{
        sound = "random"
    }
    res.send("The " + animal + " said " + sound)
})

app.get("/repeat/:greet/:no",function(req,res){
    var greet = req.params.greet
    var no = req.params.no
    var print = ""
    if(greet==="hello" && no === "1"){
        print = greet + " from 1"
    }else if(greet === "hello" && no=== "2"){
        print = greet + " from 2"
    }else print = "noo hello"
    res.send(print)
})

app.get('*',function(req,res){
    res.send("404 page not found")
})

app.listen(5000,function(){
    console.log("Server has started")
})