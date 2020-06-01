// Window is a global obj in client side js
// Window method / Objects / Properties

//alert
// window.alert(5);
// alert(5);

// Prompt -> takes input
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//     console.log('Yes') // if we click OK then inside thing happens
// }else{ //if user clicks cancel
//     console.log('No');
// }

let val;

//Outer height and width (outer counts very top to very bottom)
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width (inner counts inside , it does not count inspect too)
val = window.innerHeight;
val = window.innerWidth;

//Scroll points(figure out where you are at in terms of scrolling)
val = window.scrollY; // 0 when no scrollbar
val = window.scrollX;

//Localtion Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //?id=1 -> like this query string

//Redirect
// window.location.href = 'http://google.com';

//Reload
// window.location.reload(); //keeps reloading

//History object
// window.history.go(-1); //visit previous sites again acc to parameter -1 for previous,,, -2 before previous

val = window.history.length;//gives count of sites visited

//Navigator Object (browser)
//named navigator because of netscape navigator
val = window.navigator;
val = window.navigator.appName;//gives netscape on windows
val = window.navigator.geolocation;
val = window.navigator.userAgent;
val = window.navigator.platform;//win32 on windows
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);

