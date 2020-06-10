// //Event listeners
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){ //e -> event object
//     console.log('Hello World');
//     e.preventDefault();//preventing default function of btn click
// });

// document.querySelector('.clear-tasks').addEventListener('click',onClick);
// function onClick(e){ //e -> event object
//     console.log('Hello World');
// };

document.querySelector('.clear-tasks').addEventListener('click',onClick);
function onClick(e){ //e -> event object
   //console.log('Hello World');
   let val;
    val = e;
    //Event target element
    val = e.target;//actual element
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; //Dom token list
    e.target.innerText = 'Hello';
    
    //EventType
    val = e.type; //type of event (here click if we write above mouseover it will show that type)
    
    //timestamp
    val = e.timeStamp;

    //Get cordinates of the event relative to the window
    val = e.clientY; //from top gives clicking button position .. list we clicked on the top upper corner it will be different if we click on right corner of the button it will be diff
    val = e.clientX; 

    //Coords relative to element itself
    val = e.offsetY;
    val = e.offsetX;
    

    console.log(val);
};

