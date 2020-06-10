// Create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title','NewTitle');

//Create text node and append
li.appendChild(document.createTextNode('text in li'));

//Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';

//Add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link into li
li.appendChild(link);


//Append li as child to ul 
document.querySelector('ul.collection').appendChild(li);


console.log(li);

{/* <li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>  */}