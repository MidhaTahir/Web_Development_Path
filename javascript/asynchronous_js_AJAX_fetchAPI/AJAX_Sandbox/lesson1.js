//AJAX -> Async Javascript and XML
//set of web technologies to send and receive data async
//XML is not much used in AJAX, JSON is used for the most
// XMLHttpRequest (XHR) , AJAX are older
// FETCH is new technique

document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest(); //initiate an object

    //Open - > specify type of request and filename
    xhr.open('GET','data.txt',true); //true for asynchronous

    console.log('READYSTATE',xhr.readyState);// 1 -> server connection established

    //Optional - USED for spinners/loaders
    // to show smth while its loading,fetching
    xhr.onprogress = function(){
        console.log('READYSTATE',xhr.onreadystatechange); //3 -> thinking or fetching
    }

    xhr.onload = function(){
        //check status is 200 OK 
        console.log('READYSTATE',xhr.readyState); //it will be 4 at onload function
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //old method below (in that method we have to check onreadystatechange)
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE',xhr.readyState);// must check readyState

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    //when something goes wrong, when there is error it will be loaded
    xhr.onerror = function(){
        console.log('Request error..');
    }


    xhr.send(); //at final must call send to see data
}

// readyState Values
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready


// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"