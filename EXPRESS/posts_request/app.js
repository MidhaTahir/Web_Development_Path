var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs")

let friends = ['hash','mariam','maazaay']

app.get("/",(req,res)=>{
    res.render("home")
})

app.post("/addfriend",(req,res)=>{
    let newFriend = req.body.newfriend
    friends.push(newFriend)
    res.redirect("/friends")
})

app.get("/friends",(req,res)=>{
    res.render("friends",{friends: friends})
})

app.listen(5000,()=>{
    console.log("Sever started...")
})