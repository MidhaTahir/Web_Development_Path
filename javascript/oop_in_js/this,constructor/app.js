// Person constructor (constructor name should start with capital letter)
function Person(name,dob){
    this.name = name; //name is the property of Person
    // console.log(this);//two times as we instantiate two obj
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);//universal time
    } 
}
// console.log(this); //window object in global scope 
// this.alert(1); /window.alert

const me = new Person('Mids','4-29-1999'); //creating object to instantiate constructor
// const friend = new Person('Hashy',18);
 
console.log(me.calculateAge());

