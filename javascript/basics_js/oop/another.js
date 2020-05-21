// in es5 
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

//Prototypes (it will appear in __proto__)
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

const person3 = new Person('Hashy','Khalid','08-06-2001');
console.log(person3);