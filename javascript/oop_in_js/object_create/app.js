const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.fname} ${this.lname};`
    },
    getsGrad : function(newName){
        this.fname = newName;
    }
}
//alternative method to create object
const mids = Object.create(personPrototypes);
mids.fname = 'mids';
mids.lname = 'tah';
console.log(mids);
mids.getsGrad('Engr Mids');
console.log(mids.greeting());

const hash = Object.create(personPrototypes,{
    fname : {value:'Hashy'},
    lname : {value:'Khalid'}
});
console.log(hash);
console.log(hash.greeting());