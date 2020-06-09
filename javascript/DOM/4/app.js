// Traversing DOM
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); //first one
val = list;
val = listItem;

//get child nodes
val = list.childNodes;//returns node list //node list of all child nodes (it will show child nodes of ul i-e li but text node is there also it is line break line spaces)


val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //returns numbers
// Node types
// 1-Element
// 2-Attribute(deprecated)
// 3-Text node
// 8-Comment
// 9-Document itself
//10-Doctype

///////get children element node (no text nodes)
val = list.children; //returns html collection
val = list.children[0];
list.children[1].textContent = 'Hello';

//Children of children
val = list.children[3].children[0]; //inside childr
val = list.children[3].children[0].id = 'test-link'; //add id
val = list.firstChild; //gives us first node
val = list.firstElementChild; //not giving text element (just like children)

val = list.lastChild;
val = list.lastElementChild.textContent = 'hello';

val = list.childElementCount; //gives count here 5

//Get parent node
val = listItem.parentNode; //ul
val = listItem.parentElement; //same as parent node
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;//gives text node
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;//there is no sibling for first list item //null

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);
