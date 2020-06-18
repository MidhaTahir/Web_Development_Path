// one obj type inherit from other

//Person Constructor
function Person(fname,lname){
    this.fname = fname;
    this.lname = lname;
}
Person.prototype.greeting = function(){
    return `Hello there ${this.fname} ${this.lname}`;
}
const person1 = new Person('John','Doe');
console.log(person1.greeting());

//Customer Constructor
function Customer(fname,lname,phone,membership) {
    Person.call(this,fname,lname); //call-> that allows to call other function from somewhere else
    this.phone = phone;
    this.membership = membership;
}

//inherit person prototype method
Customer.prototype = Object.create(Person.prototype);
//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create Customer
const customer1 = new Customer('Tom','Smith','0923132331','Premium');
console.log(customer1);

//Customer greeting (we can override it)
Customer.prototype.greeting = function(){
    return `Hello there ${this.fname} ${this.lname} Welcome`;
}
console.log(customer1.greeting());