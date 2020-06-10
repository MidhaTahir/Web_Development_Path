// Mouse Event
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click',runEvent);
//Double click
// clearBtn.addEventListener('dblclick',runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown',runEvent); //click and hold mouse

//Mouseup
// clearBtn.addEventListener('mouseup',runEvent); //click and let go hold

//Mouse enter
// card.addEventListener('mouseenter',runEvent);

//Mouse leave
// card.addEventListener('mouseleave',runEvent);

//Mouseover
// card.addEventListener('mouseover',runEvent); //inside card element

//Mouseout
// card.addEventListener('mouseout',runEvent); //inside card element
//mouseout and mouseover will fire out when you go itno another element that is inside of that element

//Mouse move
card.addEventListener('mousemove',runEvent);//any movement inside card div

//Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX : ${e.offsetX} MouseY: ${e.offsetY}`;//mostly used for games
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}