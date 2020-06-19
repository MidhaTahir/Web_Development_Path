class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

//subclass
class Customer extends Person {
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return `500`;
    }
}

const john = new Customer('John','Doe','1223231','Premium');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());