const form = document.querySelector('form');
const taskInput = document.getElementById('task');
taskInput .value = ''; //clearing form input


// form.addEventListener('submit',runEvent);
// function runEvent(e){
//     console.log(`EVENT TYPE : ${e.type}`);
//     //get input value
//     console.log(taskInput.value);
//     e.preventDefault();
// }

//Keydown
const heading = document.querySelector('h5');
// taskInput.addEventListener('keydown',runEvent);//key goes down when typing
// taskInput.addEventListener('keyup',runEvent);//fires when you lift the key up
// taskInput.addEventListener('keypress',runEvent);//generalize key event, when we press any key
// taskInput.addEventListener('focus',runEvent);//when you click inside form input and click
// taskInput.addEventListener('blur',runEvent); //when you click outside of the form input
// taskInput.addEventListener('cut',runEvent);//cut ctrl x
// taskInput.addEventListener('paste',runEvent);//paste ctrl v
// taskInput.addEventListener('input',runEvent);//fires on any time of input (all thing , cut,paste,...)


//selector
const select = document.querySelector('select');
//change event
select.addEventListener('change',runEvent);

function runEvent(e){
    console.log(`EVENT TYPE : ${e.type}`);
    console.log(e.target.value);//log everything that we write
    heading.innerText = e.target.value
}