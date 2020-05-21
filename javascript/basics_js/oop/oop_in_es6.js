// app.js and another.js gives an idea of oop in es5 but now in es6 we use below methods for oop under the hood the things are still same


//Class
class Student{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){ //instead of doing prototyping we simply use method here 
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const st1 = new Student('Marry','Naryy','3-6-1947');
console.log(st1);
