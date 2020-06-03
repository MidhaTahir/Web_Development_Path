//single element selector (one element if container class is to be found it will select first one)
//multiple element selector (get all elements like sleect all classes with name container)
let val;
val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;//gives class of id task-title

// Change styling 
document.getElementById('task-title').style.background = 'black';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none'; //hide something
document.getElementById('task-title').textContent = 'Task List';//textContent disregard CSS
document.getElementById('task-title').innerText = 'My Task List';//allows CSS also
document.getElementById('task-title').innerHTML = '<span style="color:crimson">Task List</span>';


//document.querSelector()
val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5');//if more than one h5 on page it will give first one
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'My task';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';//first odd
document.querySelector('li:nth-child(even)').style.background = 'red';//first even
console.log(val);
