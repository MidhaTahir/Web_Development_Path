const http = new EasyHTTP;

//Get users and data 
// http.get('https://api.github.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

///////////////////////////////

//USER DATA
const data = {
    name : 'John Doe',
    username : 'johndoe',
    email : 'jdoe@gmail.com'
}

// Post Req
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

////////////////////////////////

// Put Req (update post)
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

////////////////////////////////

// Delete Req
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));