// Function Declaration

function greet(firstName='Johnyy',lastName='Papa'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());//passed nothing so it takes default keywords defined in fucntion 
console.log(greet('John','Doe'));


//Func Expressions (basically putting a function as a variable assignement)
const square = function(x=3){ //anonymous fn
    return x*x;
};
console.log(square());
console.log(square(4));
//expression is good when it comes to hoisting,exposure and advance stuff


//Immidiately Invokable function expressions - IIFEs (function that you declare and run at the sametime)
(function(){
    console.log('IIFE RAN..');
})();
/////
(function(name){
    console.log('Hello '+name);
})('Mids');
//useful for module pattern

//Property Methods (when fn is put inside object it is called a method)
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
//we can also define function outside of it
todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(21);
todo.delete();