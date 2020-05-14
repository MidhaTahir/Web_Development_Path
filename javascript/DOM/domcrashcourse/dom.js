// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'new title';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]); // gives index 10 of all document
// document.all[10].textContent = 'NEW LISTING'; //changing 10th index text to new listing 
// console.log(document.forms);
// console.log(document.links);//empty as we dont have links
// console.log(document.forms[0]); //actual form
// console.log(document.images);


// SELECTORS
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Listing'; //textContent disregard CSS
// headerTitle.innerText  = 'Good'; //allows CSS also
// headerTitle.innerHTML = '<h3>H3 it is</h3>'//put h3 inside h1 in this case , in inner 
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'; //use camel case in property of css

// Get Element by classname //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Banana';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'crimson';

// for (let item of items){
//     item.style.backgroundColor = 'grey';
// }

//GET element by tagname //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Banana';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'crimson';

// for (let item of li){
//     item.style.backgroundColor = 'grey';
// }

// Query Selector // any CSS selector
// var header = document.querySelector('#main-header'); //$() in jquery
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Value added';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; //grab first one

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue'; //grab last one

// var secitem = document.querySelector('.list-group-item:nth-child(2)');
// secitem.style.color = 'purple'; //second item

// QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title'); // select all titles tag
// console.log(titles);
// console.log(titles[1]);

// var odd = document.querySelectorAll('li:nth-child(odd)'); //selects all odd ones
// for (var i=0; i < odd.length ; i++){
//     odd[i].style.color = 'crimson';
// }

