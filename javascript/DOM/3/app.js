// //document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items); //list collection
// console.log(items[0]); //first list item
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //collection items class inside ul 
// console.log(listItems);

// //document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis); //list collection
// // lis.reverse(); // gives error as it is array method
// // Convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li,index){
//     console.log(li);
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })

//Query Selector --> Node list
//document.querySelectorAll
const items = document.querySelectorAll('li.collection-item');
console.log(items);

items.forEach(function(item,index){
    item.textContent = `${index}:hello`;
})//its a node list so we dont have to convert to array as many things in array and nodelist works in a similiar way
const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(odd,index){
    odd.style.background = '#ccc';
});

const liEven = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < liEven.length ; i++){
    liEven[i].style.background = '#f4f4f4';
}//for loop works even with HTML collection also we dont need to convert it into array because we can use length and indexing[] on html collection

