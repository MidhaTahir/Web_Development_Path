let re;
// literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;         //Must start with
re = /rld$/i;       //Must end with
re = /^hello$/i;    //Must begin and end with
re = /h.llo/i;      //Matches any ONE character // just like single wildcard
re = /h*llo/i;      //Matches any character 0 or more times //multiple wildcard
re = /gre?a?y/i;    // Optional character gray or grey or gry will work but griy or any other will not work
re = /gre?a?y\?/;     //escape character

//String to match
// const str = 'Hello World';

const str = 'Gray?'; //? is here is like we want to have it in our string but if we specify /gre?a?y?/ it will assume y as an optional character but we dont want this... we will \? do like this

const result = re.exec(str);
console.log(result);

//Log Results
function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re,str);