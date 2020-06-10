//Replace Elements

// Create Element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('New Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent 
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading,oldHeading);

console.log(oldHeading);
console.log(newHeading);
console.log(cardAction);


//Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]); //remove 4th one

//Classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;
val = link.className;
val = link.classList; //returns DOM token list
val = link.classList[0];
link.classList.add('test');//add test class
link.classList.remove('test');//remove test class
val = link;
console.log(val);

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com'); //when we press cross it will go to google
val = link.setAttribute('target','_blank');
val = link.hasAttribute('href'); //true if href exists in link
val = link.setAttribute('title','Google');//adding title and setting 
link.removeAttribute('title'); //remove title
console.log(val);
