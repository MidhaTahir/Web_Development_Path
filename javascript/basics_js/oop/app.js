// Brad Traversy crash js course

// object oriented programming
//Constructor function
//in es5
function Person(firstName,lastName,dob){ //like class
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //date constructor
    // this.getBirthYear = function(){ //method
    //     return this.dob.getFullYear();
    // }
    this.getFullName = function(){ //method
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate an object
const person1 = new Person('John','Doe','4-3-1980');
const person2 = new Person('Midha','Tahir','4-29-1999')

console.log(person1);
console.log(person2.firstName);

console.log(person2.dob); // date object
console.log(person2.dob.getFullYear()); //can do diff things with date

person2.firstName = 'Hashy';//changing name
console.log(person2.firstName);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1)




