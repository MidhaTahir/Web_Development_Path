let re;

//! Starts from here
re = /\w/; //word character - alphanumeric (any letter any number or _)
re = /\w+/; //word characters - (one or more alphanumeric or _ underscore )
re = /\W/; //Non word characters (space,! , (), something character other than _ )
re = /\d/; //Any digit
re = /\d+/; //digits
re = /\D/; //non-digits
re = /\s/; //whitespace character
re = /\S/; //Non whitespace character
re = /Hell\b/i; //Word boundary //like Hello, welcome to Hell ab idhar wo index 0 match krdega Hello ka Hell but hmein as it is Hell chye jisky agay peche or kch na ho to use boundary

//Assertion 
re = /x(?=y)/; //Match x only if it followed by y
re = /x(?!y)/; //Match x only if not followed by y

str = 'xyyhf';
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