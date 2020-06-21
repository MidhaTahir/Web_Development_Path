function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    let self = this;
    this.http.onload = () => {
        if(self.http.status=== 200){
            callback(null,self.http.responseText)
        }else{
            callback('Error:' + self.http.status);
        }
    }
    this.http.send();
}

//Make an HTTP POST request
easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json'); //to set content type
    this.http.onload = () => {
        callback(null,this.http.responseText);
    }
    //as data is js object we have to make it JSON to send so JSON.stringify is used below
    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT request
easyHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = () => {
        callback(null,this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    let self = this;
    this.http.onload = () => {
        if(self.http.status === 200){
            callback(null,'Post Deleted')
        }else{
            callback('Error:' + self.http.status);
        }
    }
    this.http.send();
}