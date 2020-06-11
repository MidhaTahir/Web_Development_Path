//Bubbling of event 
//event bubbling will bubble up parent

//Event bubbling
// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card content');
// });
// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card');
// });
// document.querySelector('.col').addEventListener('click',
// function(){
//     console.log('col')
// });
//now in event bubbling what happens that if we click on task list(child) all parent elements will be also called and bubble up

// disadv of bubbling
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

// function deleteItem(){
//     console.log('delete item');//only first will work why because of bubbling up to solve this use event delegation
// }

//Event Delegation is putting event listener on parent and going down

document.addEventListener('click',deleteItem);

function deleteItem(e){
    console.log(e.target);//gives only that item which is clicked
    //but when cross is clicked it gives inside thing i-e i tag (we now want parent i-e a tag)
    
    // if(e.target.parentElement.className === 'delete-item secondary-content'){//className will look out for entire class atttribute thats y we have to write full classes name delete-item and secondary-content also, but thats not better what if we add more class in html so better way is to use classList
    //     console.log('delete itemmmm');
    // }
    if(e.target.parentElement.classList.contains('delete-item')){//target a
        console.log('delete');
        e.target.parentElement.parentElement.remove(); //parent as we want to delete it 
    }
}