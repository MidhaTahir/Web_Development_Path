let val;

let today = new Date(); //if nothing is passed in argument then by default it will be today date
today = new Date('1-2-2017 11:25:00'); //gives 0 as january month
let bday = new Date('04-29-1999 11:25:00');
bday = new Date('April 04 1999');
bday = new Date('4/29/1999');

val = today.getMonth(); // January -> 0 , feb -> 1
val = today.getDate();
val = today.getDay(); //sunday -> 0 , monday -> 1
val = today.getFullYear(); //get year
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.setMilliseconds();
val = today.getTime();//give timestamp

bday.setMonth(0); // 0 for January
bday.setDate(12);
bday.setFullYear(1998);
bday.setHours(3); // 3 o clock
bday.setMinutes(30);
bday.setSeconds(25);

console.log(bday);

console.log(val);

