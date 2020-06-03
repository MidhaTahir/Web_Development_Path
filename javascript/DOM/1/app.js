// now dom replaced jquery as jquery is slow
let val;
val = document //all html
val = document.all; //gives all html tags as array
val = document.all[2];//access items/tags in array
val = document.all.length; //elements in a dom
val = document.head;//gives head of html
val = document.body; //gives body of html
val = document.doctype;
val = document.domain; //gives domain address
val = document.URL; //whole URL including protocol
val = document.characterSet; //UTF-8
val = document.contentType; //text/html
val = document.forms; //form collection (array)
val = document.forms[0]; //form no 0
val = document.forms[0].id;
val =  document.forms[0].method;//get/post
val = document.forms[0].action; //form action like php
val = document.links; //collection of links
val = document.links[0]; // gives 0th link
val = document.links[0].id; //links id
val = document.links[0].className;//gives all classes
val = document.links[0].classList; //Collection of classes
val = document.links[0].classList[2];
val = document.images; //collection of images
val = document.scripts; //scripts present in html file rn there are 3 scripts links
val = document.scripts[2].getAttribute('src')//app.js

let scripts = document.scripts; //html collection now if we put it inside forEach it wil show error coz forEach runs on array
let scriptsArr = Array.from(scripts); //converting collection to array
scriptsArr.forEach(function(scr){
    console.log(scr);
})




console.log(val);