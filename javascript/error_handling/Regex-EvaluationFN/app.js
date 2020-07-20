// RegEx is used for Validation

let re;
re = /hello/; //as it is
// console.log(re);
// console.log(re.source);

//exec() - Return result in an array or null
const result = re.exec("hello world"); //first matched character is at index 0
console.log(result);
console.log(result[0]);//original string which is given
console.log(result[1]);//index
console.log(result[2]);//that is checked

console.log(re.exec("Mids hello")); //hello matched at index 5
console.log(re.exec("hi world")); //return null as not matched
console.log(re.exec("hellooooddddd world")); // it does not match whole length as hello is found it will on index 0

//////////

//test() - Returns true or false
const resulted = re.test('Hello'); //false as H is upper case here
console.log(resulted)

//re uses diff flags
re1 = /hello/i; //i flag is given to make it case insensitive
const result1 = re1.test('Hello'); //returns true (as by writing i flag we ignore case sensitive problem)
console.log(result1)

/////////

// re2 = /hello/g; //global search (search entire thing even it finds hello at first)
// const str = 'hello there hello';
// const result3 = str.match(re2); //hello 2 times
// console.log(result3);

///////////
//match() - return result array or null
const str = 'hello there';
const result3 = str.match(re1);
console.log(result3);

///////////
//search() - return index of the first match if not found returns -1
re = /hello/;
const str1 = 'hel there he';
const result4 = str1.search(re);
console.log(result4);

///////////
//replace() - return a new string with some or all matches of a pattern
const mystr = 'hello There';
const newStr = mystr.replace(re,'Hi');
console.log(newStr)