//under the hood es6 classes works same way as es5 that is why they are called syntethic sugar

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    //static method -> that you can use without instantiating your object(a standalone method)
    static addNumber(x,y){
        return x + y;
    }
}




const mary = new Person('Mary','Williams');
console.log(mary);
console.log(mary.greeting());
// console.log(mary.addNumber(1,2)); //we get an error as we cant call static methods with objects
console.log(Person.addNumber(1,2));