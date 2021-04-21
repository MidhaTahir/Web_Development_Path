//Tuple -> An array with fixed number of elements whose types are known

type stringAndNumber = [string, number]; //defining our own type

// let y : stringAndNumber = ["Hello",'9']; //error
let xy: stringAndNumber = ["Hello", 9];

//if you compile this using npx tsc index.ts,
// var xy = ["Hello", 9] till will appear

// Enums
// set of named constants

enum Gender {
  Male, //0
  Female, //1
  "Prefer not to say",
}

var region = Gender.Male; // this way our code is more descriptive instead of doing Gender[0] if we have used array datatype

// In redux actions we have alot like for this action do this do that with enums we can specify names like above and then we can easily use instead of missing any character in string :( "ADD_ITEM"
// const Action {
//     ADD_ITEM
// }

// ACTIONS.ADD_ITEM

//Interface -> most useful things
// To create an object to include properties of different types we can use interface

//usually the convention is to use a capital letter like U in User
interface User {
  name: string; //we use semi colon instead of comma in interface object
  id: number;
}

const newUser: User = {
  name: "John",
  id: 0,
};

const anotherUser: User = {
  name: "John",
  id: 0,
  //   age: 23 -> error
  /*Type '{ name: string; id: number; age: number; }' is not assignable to type 'User'.
    Object literal may only specify known properties, and 'age' does not exist in type 'User'.*/
};

// Composing Types -> known as Union
type WindowStates = "open" | "closed" | "minimized";
// these are all window states window can't be anything other than that

// const windowStates : WindowStates = "This is not a window";
// Type '"This is not a window"' is not assignable to type 'WindowStates'.

const windowStates : WindowStates = "open"; // correct

// Union provides a way to handle diff types too
// number[] --> array of number type
// any[] --> array of any datatype
// string[] --> an array of string
// getLength only accepts something which is string or an array of string
const getLength = (param: string | string[]) => {
    return param.length
}

// getLength(5); //it will never cause error in js but calling a length of a number will break your code so ts immediately warns us about that by saying Argument of type 'number' is not assignable to parameter of type 'string | string[]'
getLength('test') //4
getLength(['test','test1']) //2


//in react first uninstall global create-react-app and install npx create-react-app <folder> --template typescript

