// Template literals (ES6)

const name = 'Midha';
const age = 21;
const job = 'Web Developer';
const city = 'Pakistan';

let html;
// Without template strings (es5)
html = '<ul><li> Name: ' + name + ' </li><li> Age: ' + age + ' </li><li> Job: ' + job + ' </li><li> City: ' + city + ' </li></ul>'

document.body.innerHTML = html;
function hello(){
    return 'hello';
}
// With template literals (es6) 
//use backticks and ${variable} 
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age: ${age} </li>
        <li> ${2 + 2} </li>
        <li> ${hello()} </li>
        <li> ${age > 20 ? 'Over 20' : 'Under 30'}</li>
    </ul>
`;
// we can do conditionals , functions inside backticks 
document.body.innerHTML = html;