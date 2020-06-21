function easyHTTP(){
    this.http = new XMLHttpRequest();
}
//Make an HTTP GET request
easyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    let self = this;
     //here use self instead of this as this is within its scope and its empty it will throw undefined error so early initialize self or anyother variable = this and then call self.http.status
     //if we use arrow function it will be defined so either use arrow function or do self = this
    this.http.onload = () => {
        if(self.http.status=== 200){
            // console.log(self.http.responseText);
            callback(null,self.http.responseText); //null is assigned for the error if error arises
        }else{
            callback('Error:' + self.http.status);
        }
    }
    this.http.send();
}
//Make an HTTP POST request

//Make an HTTP PUT request

//Make an HTTP DELETE request