//each obj in javascript has a prototype
// prototype is also an object
//all objects inherit their properties and method from prototype
//When u r dealing with obj literals then you are inherting from Object.prototype
// and when you are daling with object created by constructor e.g person constructor it will come from person.prototype
function Person(fname,lname,dob){
    this.fname = fname; 
    this.lname = lname; 
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // } 
}
//fname,lname,dob will be different for all different objects but calculateAge function maths will remain same for all objects so lets put that into a prototype

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
} 

//Get fullname 
Person.prototype.getFullName = function(){
    return `${this.fname} ${this.lname}`;
}

//Made engineer
Person.prototype.getsGrad = function(newName){
    this.fname = newName;
}

const mids = new Person('mids','tah','4-29-1999');
console.log(mids);
console.log(mids.calculateAge());
console.log(mids.getFullName());
mids.getsGrad('Engr.Mids');
console.log(mids.getFullName());
console.log(mids.hasOwnProperty('fname')); // using built in prototype methods 
console.log(mids.hasOwnProperty('getFullName'));//  false - as it is not part of obj own property its part of prototype
