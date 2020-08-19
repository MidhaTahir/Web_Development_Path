try {
  myFunction(); //fail bcz there is no declaration of myFunction => Produce a ReferenceError
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
  console.log(e instanceof ReferenceError); //returns true as error is ReferenceError
} finally {
  console.log("Finally runs everytime");
}

console.log("Program continues...");

////////////
try {
  //Produce a TypeError
  null.myFunction();
} catch (e) {
  console.log(`${e.name}: Its null`);
}
////////////

try {
  //SyntaxError
  //   console.log(eval("2+2")); //not an error
  //   eval('"Hello"'); //not an error
  eval("Hello World");
} catch (e) {
  console.log(e);
}

////////////
try {
  //URI ERROR
  decodeURIComponent("%");
} catch (e) {
  console.log(e);
}

///////////
const user = { email: "jdoe@gmail.com" };
try {
  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError('User has no name')
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);
}
