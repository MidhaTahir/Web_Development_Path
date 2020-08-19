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

//Brackets[] -character sets
re = /gr[ae]y/i; //whatever is in [] one must be there in str // Must be a,A or e,E
re = /[GF]ray/; // Must be G or F
re = /[^GF]ray/i; // Must anything except G or F //if ^ is inside means negate(NOT)
re = /^[GF]ray/i; //if ^ is outside means must start with

re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any letter of any case

re = /[0-9]ray/; //Match any digit
re = /[0-3]ray/; //Match any digit 0 to 3
re = /ray[0-9][0-9]/; //Match ray10 also - 2 digits after ray
//String to match
// const str = 'Gray'; 
let str = 'ray10'; 
// const str = '10ray'; // looking this 0ray and it matched [0-9]


//Braces{} - Quantifiers
re = /Hel{2}o/i; //l{2} -> l will be 2 times then it is matched //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // 2 to 4 l's
re = /Hel{2,}o/i; // must occur at least {m} times -> 2 se ziada b hoskty hn


//Parenthesis () - Grouping
re = /([0-9]x){3}/; // number x -> 3 times //it can be more than 3 times
re = /^([0-9]x){3}$/;  //exactly 3 times


//String to match
// str = 'Helllo'; 
str = '4x4x4x4x';
str = '4x4x4x';
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